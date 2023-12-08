import Category from "../category/Category";
import Banner from "../Banner/Banner";
import About from "../About/About";
import PopularMenu from "../popularMenu/PopularMenu";
import CallUs from "../callUs/CallUs";
import ChefRecommendItems from "../chefRecommend/ChefRecommendItems";
import Featured from "../featured/featured";
import Testimonials from "../testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>
                    Bistro Boss || Home
                </title>
            </Helmet>
            <Banner/>
            <Category/>
            <About/>
            <PopularMenu></PopularMenu>
            <CallUs/>
            <ChefRecommendItems></ChefRecommendItems>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;