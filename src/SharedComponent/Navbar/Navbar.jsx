import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import ThemeController from "./ThemeController";

const Navbar = () => {
  const { signOutUser, user } = useAuth();
  const axiosInstance = useAxios();

  const navLinkClass = ({ isActive }) =>
  `
    px-2 py-1 rounded-md text-primary 
    ${isActive
      ? "underline underline-offset-4 font-medium"
      : "hover:underline hover:underline-offset-4"}
  `;


  const links = (
  <>
    <li>
      <NavLink to="/" className={navLinkClass}>
        Home
      </NavLink>
    </li>

    <li>
      <NavLink to="/all-issue" className={navLinkClass}>
        All Issues
      </NavLink>
    </li>

    <li>
      <NavLink to="/helpcenter" className={navLinkClass}>
        Help Center
      </NavLink>
    </li>

    <li>
      <NavLink to="/legalpage" className={navLinkClass}>
        Legal & Policy
      </NavLink>
    </li>

    {user && (
      <>
        <li>
          <NavLink to="/allblogs" className={navLinkClass}>
            Blogs
          </NavLink>
        </li>

        <li>
          <NavLink to="/feedback" className={navLinkClass}>
            Feedback
          </NavLink>
        </li>
      </>
    )}
  </>
);


  // export default Links;

  const handleLogout = () => {
    signOutUser()
      .then()
      .catch((error) => {
        console.log(error.message());
      });
  };

  const { data: currentUser = [] } = useQuery({
    queryKey: ["userprofile", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/currentuser/${user?.email}`);
      return res.data;
    },
  });

  const dropdown = (
    <>
      <div className="dropdown dropdown-end">
        {/* Avatar */}
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={currentUser.photoURL || user?.photoURL} alt="profile" />
          </div>
        </label>

        {/* Dropdown */}
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-100 w-56 rounded-2xl bg-base-100 p-3 shadow-xl"
        >
          {/* User Info */}
          <li className="mb-2 pointer-events-none">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={currentUser.photoURL || user?.photoURL}
                    alt="profile"
                  />
                </div>
              </div>
              <div>
                <p className="font-semibold text-sm">
                  {currentUser.name || user?.displayName}{" "}
                  <span>
                    {currentUser.isPremium && (
                      <span className="badge badge-warning"> Premium</span>
                    )}
                  </span>
                </p>

                <p className="text-xs text-gray-500 truncate">
                  {currentUser.email || user?.email}
                </p>
              </div>
            </div>
          </li>

          <div className="divider my-1"></div>

          {/* Links */}
          <li>
            <Link to="/dashboardLayout/userProfile" className="flex gap-2">
              Profile
            </Link>
          </li>

          <li>
            <Link to="/dashboardLayout" className="flex gap-2">
              Dashboard
            </Link>
          </li>

          <div className="divider my-1"></div>

          {/* Logout */}
          <li>
            <button
              onClick={handleLogout}
              className="btn btn-sm btn-primary text-white w-full"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <div>
      <div className="navbar bg-amber-50 shadow-sm lg:px-20 fixed top-0 left-0 w-full z-50">
        <div className="navbar-start">
          <div className="dropdown dropdown-start lg:hidden">
            {/* Hamburger Button */}
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            {/* Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-100
               w-60 rounded-2xl bg-base-100 p-4 shadow-xl
               gap-1"
            >
              {links}
            </ul>
          </div>

          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>{dropdown}</div>
          ) : (
            <Link
              to="/loginlayout/login"
              className="btn bg-primary text-white border-none"
            >
              Login
            </Link>
          )}
        </div>
        <div className="ml-5">
        <ThemeController></ThemeController>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
