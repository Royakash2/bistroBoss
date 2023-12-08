const RecommendItems = ({ chefItem }) => {
  const { image, name, recipe } = chefItem;
  return (
    <div>
      <div className="card w-96 h-full bg-base-200 rounded-none">
        <img src={image} alt="Shoes"/>

        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn bg-base-300 hover:bg-black border-0 border-b-[3px] border-amber-500 text-[#BB8506] mt-4 text-center font-[inter] uppercase rounded-none shadow-md">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendItems;
