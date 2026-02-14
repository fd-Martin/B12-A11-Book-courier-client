import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import App from "../App";
import Home from "../Page/Home/Home/Home";
import DashBoardLayout from "../Layout/DashBoardLayout";
import AllBooks from "../Page/AllBooks/AllBooks";
import AuthenticationLayout from "../Layout/AuthenticationLayout";
import Register from "../Page/Authentication/Register";
import Login from "../Page/Authentication/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allbooks",
        element: <AllBooks></AllBooks>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [{}],
  },
  {
    path: "/authentication",
    element: <AuthenticationLayout></AuthenticationLayout>,
    children: [
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);
