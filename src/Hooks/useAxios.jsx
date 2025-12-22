import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosInstance = axios.create({
  baseURL: "https://public-infrastructure-issue-reporti-kappa.vercel.app",
});

const useAxios = () => {
  const navigate=useNavigate()
  const { user,signOutUser } = useAuth();
  useEffect(() => {
    const reqInterceptor = axiosInstance.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    });

    const resInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        // console.log(error);
        const statusCode=error.status
        if (statusCode===401||statusCode===403 ) {
          signOutUser()
          .then(()=>{
            navigate("/loginlayout/login")
          })
        }

        return Promise.reject(error)
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(reqInterceptor);
      axiosInstance.interceptors.response.eject(resInterceptor);
    };
  }, [user,signOutUser,navigate]);
  return axiosInstance;
};

export default useAxios;
