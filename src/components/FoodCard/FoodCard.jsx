import { useContext } from "react";
import { AuthConText } from "../../provider/Authprovider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, name, price, recipe, _id } = item;
  const { user } = useContext(AuthConText);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuitemId: _id,
        name,
        image,
        price,
        email: user.email,
        userName: user?.displayName,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); /* Refetch cart to update the number of ad to cart item */
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your item added to cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "you need to login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-200 rounded-none">
      <figure>
        <img src={image} alt="Shoes" className="w-full" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 bg-slate-900 text-white text-sm px-4 py-2 rounded-lg font-[inter]">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-xs text-slate-400">{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn bg-base-300 hover:bg-black border-0 border-b-[3px] border-amber-500 text-[#BB8506] mt-4 text-center font-[inter] font-normal uppercase rounded-none shadow-md"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
