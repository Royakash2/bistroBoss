import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";
import { RiDeleteBinFill } from "react-icons/ri";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const formattedTotal = total.toFixed(2);

  // handle delete function
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
      }
    });
  };
  return (
    <div className="w-full p-10">
      <Helmet>
        <title>Bistro Boss || My Cart</title>
      </Helmet>
      <div className="bg-[#fff] shadow p-10 w-full">
        <div className="uppercase flex justify-between items-center gap-3 h-14 ">
          <h3 className="text-lg font-bold">Total items: {cart.length}</h3>
          <h3 className="text-lg font-bold">Total price: ${formattedTotal}</h3>
          <button className="btn btn-warning btn-sm">pay</button>
        </div>
        <div className="overflow-x-auto font-[Cinzel]">
          <table className="table">
            {/* head */}
            <thead className="bg-warning text-black">
              <tr>
                <th>#</th>
                <th>item image</th>
                <th>Item name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div>{item.name}</div>
                    </div>
                  </td>
                  <td>${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost btn-xs text-slate-50"
                    >
                      <RiDeleteBinFill className="w-10 h-5 bg-red-600 rounded-2xl" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
