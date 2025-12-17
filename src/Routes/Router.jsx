import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import RootLayout from "../Layout/RootLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LoginLayout from "../Layout/LoginLayout";
import ErrorPage from "../SharedComponent/ErrorPage/ErrorPage";
import All_Issue from "../Pages/All_Issue/All_Issue";
import IssueDetails from "../Pages/IssueDetails/IssueDetails";

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
      {
        path:"/all-issue",
        Component:All_Issue,
      },
      {
        path:"/issue-details/:id",
        element:<IssueDetails></IssueDetails>
      }
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
  {
    path: "*",
    Component:ErrorPage
  },
]);
