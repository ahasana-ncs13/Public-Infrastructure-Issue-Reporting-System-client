import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import RootLayout from "../Layout/RootLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LoginLayout from "../Layout/LoginLayout";
import ErrorPage from "../SharedComponent/ErrorPage/ErrorPage";
import All_Issue from "../Pages/All_Issue/All_Issue";
import IssueDetails from "../Pages/IssueDetails/IssueDetails";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import CitizenDashboard from "../Dashboard/CitizenDashboard/Dashboard/CitizenDashboard";
import ReportIssue from "../Dashboard/CitizenDashboard/ReportIssue/ReportIssue";
import MyIssue from "../Dashboard/CitizenDashboard/MyIssue/MyIssue";
import UserProfile from "../Dashboard/CitizenDashboard/UserProfile/UserProfile";

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
        path: "/all-issue",
        Component: All_Issue,
      },
      {
        path: "/issue-details/:id",
        element: (
          <PrivateRoutes>
            <IssueDetails></IssueDetails>
          </PrivateRoutes>
        ),
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
  {
    path: "/dashboardLayout",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        path: "/dashboardLayout/citizenDashboard",
        Component: CitizenDashboard,
      },
      {
        path:"/dashboardLayout/reportIssue",
        Component:ReportIssue
      },
      {
        path:"/dashboardLayout/myIssue",
        Component:MyIssue
      },
      {
        path:"/dashboardLayout/userProfile",
        Component:UserProfile
      }
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
