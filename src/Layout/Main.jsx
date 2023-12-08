import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Sheard/Footer";
import NavBar from "../Pages/Sheard/NavBar";


const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signUp')
    return (
        <div>
           { noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
           {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;