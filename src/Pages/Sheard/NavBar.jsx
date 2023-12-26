import { useContext } from "react";
import { AuthConText } from "../../provider/Authprovider";
import { Link } from "react-router-dom";

import { GiShoppingCart } from "react-icons/gi";
import useCart from "../../hooks/useCart";
import LogOutBtn from "../../components/Button/LogOutBtn";

const NavBar = () => {
  const { user, logOut } = useContext(AuthConText);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/secret">secret</Link>
      </li>
      <li>
        <Link to="/dashboard/myCart">
          <div className="flex justify-center items-center">
            <GiShoppingCart className="w-11 h-6" />
            <span className="badge badge-secondary">+{cart?.length || 0}</span>
          </div>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-30  bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="font-bold text-3xl">
            Bistro<span className="text-amber-300">BoSS</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal justify-center items-center gap-10">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <LogOutBtn onClick={handleLogOut}></LogOutBtn>
            </>
          ) : (
            <>
              <Link to="/login" className="font-bold uppercase">Log In</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
