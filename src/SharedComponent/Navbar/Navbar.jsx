import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const {signOutUser,user}=useAuth()
  const links = (
    <>
      <li>
        <NavLink to="/"> Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-issue"> All Issues</NavLink>
      </li>
      <li>
        <NavLink to="/"> All Issues</NavLink>
      </li>
    </>
  );

  const handleLogout=()=>{
    signOutUser()
    .then()
    .catch(error=>{
      console.log(error.message())
    })
  }
  return (
    <div>
      <div
        className="navbar bg-amber-50 shadow-sm lg:px-20"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
        {
          user?
          <div className="flex gap-3">
            <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="profile picture" />
          <button onClick={handleLogout} className="btn bg-primary text-white border-none">Logout</button></div>:<Link to='/loginlayout/login' className="btn bg-primary text-white border-none">Login</Link>
        }  
        </div>
      </div>
    </div>
  );
};

export default Navbar;
