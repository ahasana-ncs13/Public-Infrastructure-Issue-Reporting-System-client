import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Register = () => {
    const{handleSubmit,register}=useForm()

    const handleRegister=(data)=>{
        console.log(data)
    }

  return (
    <div className="">
      <div className="min-h-screen bg-yellow-50 pt-20">
        <h1 className="text-center text-4xl mb-10 font-black text-primary">
          Register Now !
        </h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">

              {/* Name */}
              <label className="label">Name</label>
              <input type="text" {...register("name")} className="input" placeholder="Name" />

              {/* email */}
              <label className="label">Email</label>
              <input type="email" {...register("email")} className="input" placeholder="Email" />
        
              {/* password */}
              <label className="label">Password</label>
              <input type="password" {...register("password")} className="input" placeholder="Password" />

              {/* photo */}
              <label className="label">Photo Upload</label>
              <input type="file" {...register("photo")} className="file-input" />

              

              <button className="btn bg-primary text-white border-none mt-4">
                Register
              </button>
            </fieldset>
            </form>
            <p>
              Already Have An Account ?{" "}
              <Link
                className="text-primary font-semibold hover:underline hover:text-secondary"
                to="/loginlayout/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
