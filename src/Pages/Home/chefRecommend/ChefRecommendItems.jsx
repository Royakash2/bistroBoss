import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RecommendItems from "../../Sheard/RecommendItems";

const ChefRecommendItems = () => {
    const [ChefItems,setChefItems] = useState([]);
    useEffect(( )=>{
        fetch('Menu.json')
        .then(res => res.json())
        .then(data=>{
            const recommendItems = data.filter(item => item.category === 'salad')
            setChefItems(recommendItems)
        })
    },[])
  return (
    <section data-aos="zoom-out-left">
      <SectionTitle
        heading="Chef Recommends"
        subHeading="Should Try"
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-4">
        {
            ChefItems.map(chefItem =><RecommendItems
            key={chefItem._id}
            chefItem={chefItem}
            ></RecommendItems>)
        }
      </div>
    </section>
  );
};

export default ChefRecommendItems;
