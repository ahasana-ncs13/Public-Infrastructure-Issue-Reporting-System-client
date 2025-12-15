import React from "react";
import Navbar from "../../SharedComponent/Navbar/Navbar";
import { Link } from "react-router";
import { useForm } from "react-hook-form";

const Login = () => {
    const {register,handleSubmit}=useForm()
    const handleLogin=(data)=>{
        console.log(data)
    }
  return (
    <div className="">
      <div className="min-h-screen bg-yellow-50 pt-20">
        <h1 className="text-center text-4xl mb-10 font-black text-primary">Login Now !</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">

              <label className="label">Email</label>
              <input type="email" {...register("email")} className="input" placeholder="Email" />

              <label className="label">Password</label>
              <input type="password"  {...register("password")}  className="input" placeholder="Password" />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn bg-primary text-white border-none mt-4">Login</button>
            </fieldset>
            </form>
            <p>Don't Have An Account ? <Link className="text-primary font-semibold hover:underline hover:text-secondary" to='/loginlayout/register'>Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
