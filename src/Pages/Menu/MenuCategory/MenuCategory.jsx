import { Link } from "react-router-dom";
import Cover from "../../Sheard/Cover";
import MenuItems from "../../Sheard/MenuItems";



const MenuCategory = ({items,title,img,description}) => {
    return (
        <div className="mt-10">
        {title &&<Cover
        img={img}
        title={title}
        description={description}
      ></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-16 px-16">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 text-black mt-4 text-center">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;