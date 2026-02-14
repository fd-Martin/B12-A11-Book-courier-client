import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import App from "../App";
import Home from "../Page/Home/Home/Home";
import DashBoardLayout from "../Layout/DashBoardLayout";
import AllBooks from "../Page/AllBooks/AllBooks";

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
        path:'/allbooks',
        element: <AllBooks></AllBooks>
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [{}],
  },
]);
