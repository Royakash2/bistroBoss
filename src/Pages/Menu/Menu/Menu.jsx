import { Helmet } from "react-helmet-async";
import Cover from "../../Sheard/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import drinkImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");
    const offered = menu.filter((item) => item.category === "offered");
    const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover
        img={coverImg}
        title={"Our Menu"}
        description={"Would you Like to try a Dish"}
      ></Cover>
      <SectionTitle
      heading={"Today's Offer"}
      subHeading={"Don't Miss"}
      >

      </SectionTitle>
      {/* offered items */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert items */}
      <MenuCategory items={dessert} title={"desserts"} img={dessertImg}></MenuCategory>

      {/* pizza items */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>

      {/* salad items */}
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>

      {/* soup items */}
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>

      {/* drinks items */}
      <MenuCategory items={drinks} title={"drinks"} img={drinkImg}></MenuCategory>
    </div>
  );
};

export default Menu;
