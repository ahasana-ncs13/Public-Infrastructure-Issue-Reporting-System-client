import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import RootLayout from "../Layout/RootLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LoginLayout from "../Layout/LoginLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
  {
    path: "/loginlayout",
    Component: LoginLayout,
    children: [
      {
        index: true,
        path: "/loginlayout/login",
        Component: Login,
      },
      {
        path: "/loginlayout/register",
        Component: Register,
      },
    ],
  },
]);
