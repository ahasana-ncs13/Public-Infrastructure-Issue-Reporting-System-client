import React, { useRef } from "react";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const UserProfile = () => {
  const { user } = useAuth();
  // console.log(user);
  const axiosInstance = useAxios();
  const { register, handleSubmit, reset } = useForm();
  const editProfileModalRef = useRef(null);

  const { data: currentUser = [], refetch } = useQuery({
    queryKey: ["userprofile", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/currentuser/${user?.email}`);
      return res.data;
    },
  });

  const handleEditProfileModalOpen = () => {
    // setSelectedIssue(issue);
    reset(currentUser);
    editProfileModalRef.current?.showModal();
  };

  const onSubmit = async (data) => {
    // console.log("Updated Issue Data:", data);
    const { _id, ...updateData } = data;

    await axiosInstance.patch(`/currentuser/${user?.email}`, updateData);
    editProfileModalRef.current?.close();
    await Swal.fire({
      title: "Successfully!",
      text: "Your profile has been updated!",
      icon: "success",
    });

    refetch();
  };
  // console.log(currentUser);

  const handlePayment = async () => {
    const paymentInfo = {
      email: currentUser.email,
      PremiumUser_id: currentUser._id,
    };

    const res = await axiosInstance.post(
      "/create-checkout-session",
      paymentInfo
    );
    // console.log(res.data);
    window.location.assign(res.data.url);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body p-4 sm:p-6 lg:p-8">
          {/* ===== Profile Header ===== */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            {/* Avatar */}
            <div className="avatar">
              <div className="w-24 sm:w-28 md:w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={currentUser?.photoURL || user.photoURL}
                  alt={currentUser?.name || user.displayName}
                />
              </div>
            </div>

            {/* User Info */}
            <div className="text-center sm:text-left w-full">
              <div className="flex justify-between">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2">
                  {currentUser?.name || user.displayName}

                  {currentUser?.isPremium && (
                    <span className="badge badge-warning"> Premium</span>
                  )}
                </h2>
                {!currentUser?.isPremium && (
                  <button
                    onClick={handlePayment}
                    className="btn btn-secondary font-bold"
                  >
                    Subscribe (1000tk)
                  </button>
                )}
              </div>
              <p className="text-sm sm:text-base text-gray-500 break-all">
                {currentUser?.email || user.email}
              </p>

              <div className="mt-2">
                <span className="badge badge-primary badge-sm sm:badge-md capitalize">
                  {currentUser?.role || "user"}
                </span>
              </div>
            </div>
          </div>

          <div className="divider my-4 sm:my-6"></div>

          {/* ===== User Details ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm sm:text-base">
            <div className="bg-base-200 rounded-lg p-3 sm:p-4">
              <p className="text-gray-500">Account Created</p>
              <p className="font-medium">
                {currentUser?.createdAt
                  ? new Date(currentUser.createdAt).toLocaleString()
                  : "N/A"}
              </p>
            </div>

            <div className="bg-base-200 rounded-lg p-3 sm:p-4">
              <p className="text-gray-500">Last Login</p>
              <p className="font-medium">
                {currentUser?.lastLogin
                  ? new Date(currentUser.lastLogin).toLocaleString()
                  : "N/A"}
              </p>
            </div>

            <div className="bg-base-200 rounded-lg p-3 sm:p-4">
              <p className="text-gray-500">premium Since</p>
              <p className="font-medium">
                {currentUser?.premiumSince
                  ? new Date(currentUser.premiumSince).toLocaleString()
                  : "N/A"}
              </p>
            </div>
          </div>

          {/* ===== Actions ===== */}
          <div className="mt-6 flex justify-center sm:justify-end">
            <button
              onClick={() => handleEditProfileModalOpen()}
              className="btn btn-primary btn-sm sm:btn-md w-full sm:w-auto"
            >
              Edit Profile
            </button>

            <dialog
              ref={editProfileModalRef}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <div className="">
                  {/* eslint-disable-next-line react-hooks/refs */}
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="label">Name</label>
                      <input
                        type="text"
                        {...register("name", { required: true })}
                        className="input input-bordered w-full"
                      />
                    </div>

                    <div>
                      <label className="label">Photo URL</label>
                      <input
                        type="text"
                        {...register("photoURL")}
                        className="input input-bordered w-full"
                      />
                    </div>

                    <div className="flex justify-end gap-2 mt-4">
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
