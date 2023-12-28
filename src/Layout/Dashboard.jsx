import { NavLink, Outlet } from "react-router-dom";
import { GiShoppingCart, GiWallet } from "react-icons/gi";
import { FcCalendar, FcContacts, FcMenu, FcShop } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center bg-[#F6F6F6]">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#674c3e] text-[white] font-bold">
      <div className="mb-8 ml-4">
      <h1 className="text-2xl text-amber-400">BistroBoss</h1>
        <p>R e s t a u r a n t</p>
      </div>
      <div className="divider"></div>
          <li>
            <NavLink to="userHome">
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="reservation">
              <FcCalendar />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="wallet">
              <GiWallet />
              Payment history
            </NavLink>
          </li>
          <li>
            <NavLink to="myCart">
              <GiShoppingCart />
              <span >My Cart<span className="badge badge-secondary mx-3">+{cart?.length || 0}</span></span>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu"><FcMenu/>Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad"> <FcShop></FcShop>Shop</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad"> <FcContacts/>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
