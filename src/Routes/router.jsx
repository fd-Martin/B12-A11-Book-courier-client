import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import App from "../App";
import Home from "../Page/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
