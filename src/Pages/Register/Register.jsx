import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import GoogleAuthentication from "../../SharedComponent/Google/GoogleAuthentication";
import axios, { Axios } from "axios";
import Loading from "../../SharedComponent/Loader/Loading";
import useAxios from "../../Hooks/useAxios";

const Register = () => {
  const axioInstance = useAxios();
  const Navigate = useNavigate();
  const { createUser, UpdateUserProfile } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleRegister =async (data) => {
    const profileImg = data.photo[0];
    // console.log(profileImg);
    // console.log(data);
   await createUser(data.email, data.password)
      .then((result) => {
       
        console.log(result.user);

        const formData = new FormData();
        formData.append("image", profileImg);

        const img_api_url = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_Img_HostKey
        }`;

      axios.post(img_api_url, formData).then((res) => {
          const profile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };

           UpdateUserProfile(profile)
            // .then(() => {
            //   console.log("successfully");
              
            // })
            // .catch((error) => {
            //   console.log(error);
            // });

          const userInfo = {
          name: data.name,
          email: data.email,
          photoURL:res.data.data.url,
        };

       axioInstance.post("/users", userInfo);
        // .then((data) => {
        //   console.log(data.data);
        //   return data.data;
        // });
         
        });

         Navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="input"
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-500 font-semibold">Name is required</p>
                )}
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="input"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 font-semibold">
                    Email is required
                  </p>
                )}

                {/* password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
                  })}
                  className="input"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-500 font-semibold">
                    Password must be at least 6 characters and include
                    uppercase, lowercase, number, and special character
                  </p>
                )}

                {/* photo */}
                <label className="label">Photo Upload</label>
                <input
                  type="file"
                  {...register("photo", { required: true })}
                  className="file-input"
                />
                {errors.photo && (
                  <p className="text-red-500 font-semibold">
                    Photo is required
                  </p>
                )}

                <button className="btn bg-primary text-white border-none mt-4">
                  Register
                </button>
              </fieldset>
            </form>
            <GoogleAuthentication></GoogleAuthentication>
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
