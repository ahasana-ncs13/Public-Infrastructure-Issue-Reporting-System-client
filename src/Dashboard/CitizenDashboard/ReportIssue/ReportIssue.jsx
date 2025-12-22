import React from "react";

import { useForm } from "react-hook-form";
import useAxios from "../../../Hooks/useAxios";
import { useNavigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../SharedComponent/Loader/Loading";

const ReportIssue = () => {
  const { user } = useAuth();
  const { handleSubmit, register } = useForm();
  const axiosInstance = useAxios();
  const navigate = useNavigate();

  const { data: currentUser = [] } = useQuery({
    queryKey: ["userprofile", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/currentuser/${user?.email}`);
      return res.data;
    },
  });

  const handleIssueForm = async (data) => {
    // console.log(data);
    const profileImg = data.image[0];
    // console.log(profileImg);
    const formData = new FormData();
    formData.append("image", profileImg);

    const img_api_url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_Img_HostKey
    }`;
    const res = await axiosInstance.post(img_api_url, formData);

    const issuePayload = {
      title: data.title,
      description: data.description,
      category: data.category,
      location: data.location,
      image: res.data.data.url,
      email: user?.email, // send image URL
    };

    axiosInstance.post("/reportissue", issuePayload);
    navigate("/dashboardLayout/myIssue");
  };

  const { data: issueData = {}, isLoading } = useQuery({
    queryKey: ["report-issue", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/myissue-count/${user.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  // console.log(issueData);

  return (
    <div className="max-w-3xl mx-auto bg-base-200 rounded-xl shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-2 text-green-600">
        Report a New Issue
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Provide accurate details to help authorities resolve the issue faster.
      </p>

      <form onSubmit={handleSubmit(handleIssueForm)} className="space-y-5">
        {/* Title */}
        <div>
          <label className="label font-medium">Issue Title</label>
          <input
            type="text"
            placeholder="e.g. Broken Street Light"
            className="input input-bordered w-full"
            {...register("title", { required: true })}
          />
        </div>

        {/* Description */}
        <div>
          <label className="label font-medium">Description</label>
          <textarea
            rows="4"
            placeholder="Describe the issue in detail..."
            className="textarea textarea-bordered w-full"
            {...register("description", { required: true })}
          />
        </div>

        {/* Category */}
        <div>
          <label className="label font-medium">Category</label>
          <select
            defaultValue=""
            className="select select-bordered w-full"
            {...register("category", { required: true })}
          >
            <option disabled value="">
              Select category
            </option>
            <option>Road & Traffic</option>
            <option>Water Supply</option>
            <option>Sanitation</option>
            <option>Electricity</option>
            <option>Public Safety</option>
            <option>Other</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="label font-medium">Location</label>
          <input
            type="text"
            placeholder="e.g. Sector 7, Road 12, Dhaka"
            className="input input-bordered w-full"
            {...register("location", { required: true })}
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="label font-medium">Upload Image(required)</label>
          <input
            type="file"
            accept="image/*"
            className="file-input file-input-bordered w-full"
            {...register("image")}
          />
        </div>

        <div className="mb-4">
          {isLoading ? (
            <p>Loading issue count...</p>
          ) : (
            <>
              {!currentUser?.isPremium ? (
                <p className="text-warning font-medium">
                  You have reported {issueData.count} / 3 issues (Free user)
                </p>
              ) : (
                <p className="text-success font-medium">
                  You have reported {issueData.count} issues (Premium -
                  Unlimited)
                </p>
              )}
            </>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={!currentUser?.isPremium && issueData.count >= 3}
            className="btn btn-primary w-full"
          >
            Submit Issue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportIssue;
