const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
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
          <button className="btn bg-base-300 hover:bg-black border-0 border-b-[3px] border-amber-500 text-[#BB8506] mt-4 text-center font-[inter] font-normal uppercase rounded-none shadow-md">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
