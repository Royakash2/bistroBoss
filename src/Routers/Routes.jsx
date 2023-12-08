import {
    createBrowserRouter,
  } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/signUp/SignUp";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Sheard/Secret";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path:"menu",
          element:<Menu/>
        },
        {
          path:"order/:category",
          element:<Order/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"signUp",
          element:<SignUp/>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
  ]);