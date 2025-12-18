import React from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import GoogleAuthentication from "../../SharedComponent/Google/GoogleAuthentication";
import Loading from "../../SharedComponent/Loader/Loading";

const Login = () => {
  const Navigate=useNavigate()
  const { loginUser} = useAuth();
  const { register, handleSubmit,formState: { errors } } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    loginUser(data.email, data.password)
      .then((result) => {
        Navigate("/")
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message());
      });
  };
  return (
    <div className="">
      <div className="min-h-screen bg-yellow-50 pt-20">
        <h1 className="text-center text-4xl mb-10 font-black text-primary">
          Login Now !
        </h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleLogin)}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  {...register("email",{ required: true})}
                  className="input"
                  placeholder="Email"
                />
                {errors.email && <p className="text-red-500 font-semibold">Email is required</p>}

                <label className="label">Password</label>
                <input
                  type="password"
                  {...register("password",{ required: true})}
                  className="input"
                  placeholder="Password"
                />
                {errors.email && <p className="text-red-500 font-semibold">Password is required</p>}

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn bg-primary text-white border-none mt-4">
                  Login
                </button>
              </fieldset>
            </form>

           <GoogleAuthentication></GoogleAuthentication>
            <p>
              Don't Have An Account ?{" "}
              <Link
                className="text-primary font-semibold hover:underline hover:text-secondary"
                to="/loginlayout/register"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
