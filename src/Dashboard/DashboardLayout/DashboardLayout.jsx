import React from "react";
import { Link, Outlet } from "react-router";
import {
  MdAssignmentAdd,
  MdDashboard,
  MdOutlineCelebration,
} from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";

const DashboardLayout = () => {
  const { user } = useAuth();
  const axiosInstance = useAxios();

  const { data: currentUser = [] } = useQuery({
    queryKey: ["userprofile", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/currentuser/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <div className="drawer lg:drawer-open min-h-screen">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        {/* ================= Main Content ================= */}
        <div className="drawer-content flex flex-col">
          {/* ---------- Navbar ---------- */}
          <nav className="navbar w-full bg-amber-50 shadow-sm">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="size-5"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M9 4v16" />
                <path d="M14 10l2 2l-2 2" />
              </svg>
            </label>

            <div className="px-4 font-semibold">Citizen Dashboard</div>
          </nav>

          {/* ---------- Page Content ---------- */}
          <main className="flex-1 p-4 md:p-6 bg-base-100">
            {/* Welcome Section */}
            <div className="mb-6">
              <div className="card bg-linear-to-r from-primary to-secondary text-primary-content shadow-md">
                <div className="card-body items-center text-center">
                  <h1 className="text-2xl md:text-3xl flex gap-2 items-center font-bold">
                    Welcome
                    <MdOutlineCelebration />{" "}
                  </h1>
                  <p className="text-sm md:text-base opacity-90">
                    Manage your activities and track progress from your
                    dashboard
                  </p>
                </div>
              </div>
            </div>

            {/* Page Content */}
            <div className="bg-base-200 rounded-xl p-4 md:p-6 shadow-sm min-h-[60vh]">
              <Outlet />
            </div>
          </main>
        </div>

        {/* ================= Sidebar ================= */}
        <div className="drawer-side is-drawer-close:overflow-visible shadow-lg">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

          <aside
            className="flex min-h-full flex-col bg-amber-50 
      is-drawer-close:w-14 is-drawer-open:w-64 p-2"
          >
            {/* ---------- Menu ---------- */}

            {currentUser?.role === "user" && (
              <ul className="menu w-full grow">
                <li>
                  <Link
                    to="/"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Dashboard"
                  >
                    <IoHome />{" "}
                    <span className="is-drawer-close:hidden">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboardLayout/citizenDashboard"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Dashboard"
                  >
                    <MdDashboard />
                    <span className="is-drawer-close:hidden">Dashboard</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/dashboardLayout/myIssue"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Issues"
                  >
                    <FaClipboardList />
                    <span className="is-drawer-close:hidden">My Issues</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/dashboardLayout/reportIssue"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Report Issue"
                  >
                    <MdAssignmentAdd />
                    <span className="is-drawer-close:hidden">Report Issue</span>
                  </Link>
                </li>
              </ul>
            )}
            {currentUser?.role === "Admin" && (
              <ul className="menu w-full grow">
                <li>
                  <Link
                    to="/"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Dashboard"
                  >
                    <IoHome />{" "}
                    <span className="is-drawer-close:hidden">Home</span>
                  </Link>
                </li>
                <li>
                <Link
                  to="/dashboardLayout/adminDashboard"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Dashboard"
                >
                  <MdDashboard />
                  <span className="is-drawer-close:hidden">Dashboard</span>
                </Link>
              </li>

                {/* <li>
                <Link
                  to="/dashboardLayout/myIssue"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="My Issues"
                >
                  <FaClipboardList />
                  <span className="is-drawer-close:hidden">My Issues</span>
                </Link>
              </li> */}

                {/* <li>
                <Link
                  to="/dashboardLayout/reportIssue"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Report Issue"
                >
                  <MdAssignmentAdd />
                  <span className="is-drawer-close:hidden">Report Issue</span>
                </Link>
              </li> */}
              </ul>
            )}

            {/* ---------- Avatar (Bottom) ---------- */}
            <div className="dropdown dropdown-top w-full">
              <div
                tabIndex={0}
                className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-base-300"
              >
                <div className="avatar">
                  <div className="w-9 rounded-full ring ring-primary ring-offset-2">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <span className="is-drawer-close:hidden font-medium">
                  {user?.displayName}
                </span>
              </div>

              <ul className="menu menu-sm dropdown-content mb-2 shadow bg-base-100 rounded-box w-44">
                <li>
                  <Link to="/dashboardLayout/userProfile">Profile</Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
