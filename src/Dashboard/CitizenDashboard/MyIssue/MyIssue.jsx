import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyIssue = () => {
  const { user } = useAuth();
  const axiosInstance = useAxios();
  const { register, handleSubmit, reset } = useForm();
  const editModalRef = useRef(null);
  const [selectedIssue, setSelectedIssue] = useState(null);

  const { data: myIssue = [], refetch } = useQuery({
    queryKey: ["my-issue",user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/myissue?email=${user?.email}`);
      return res.data;
    },
  });

  const handleEditModalOpen = (issue) => {
    setSelectedIssue(issue);
    reset(issue);
    editModalRef.current?.showModal();
  };

  const onSubmit = async (data) => {
    // console.log("Updated Issue Data:", data);
    const { _id, ...updateData } = data;

    await axiosInstance.patch(`/myissue/${selectedIssue._id}`, updateData);
    // document.activeElement?.blur();
    editModalRef.current?.close();
    await Swal.fire({
      title: "Successfully!",
      text: "your issue has been updated!",
      icon: "success",
    });

    refetch();
  };

  const handleDelete = async(m) => {
    // console.log(m);

    await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/myissue/${m._id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your Issue has been deleted.",
          icon: "success",
        });
        refetch();
      }
    });
  };

  return (
    <div>
      <h1 className="text-3xl pb-10 font-semibold text-green-700 underline">
        My Reported Issues
      </h1>
      <div className="overflow-x-auto bg-base-100 rounded-xl shadow-md">
        <table className="table table-zebra bg-amber-50">
          {/* Table Head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Issue</th>
              <th>Category</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Upvotes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myIssue.map((m, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                {/* Issue Info */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-14 h-14 rounded-lg">
                        <img src={m.image} alt="issue" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">{m.title}</div>
                      <div className="text-sm opacity-60">{m.location}</div>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td>
                  <span>{m.category}</span>
                </td>

                {/* Status */}
                <td>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      m.status === "In Progress"
                        ? "bg-yellow-300 text-gray-800"
                        : m.status === "Resolved"
                        ? "bg-green-300 text-gray-800"
                        : "bg-gray-300 text-gray-800"
                    }`}
                  >
                    {m.status}
                  </span>
                </td>

                {/* Priority */}
                <td>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      m.priority === "High"
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {m.priority}
                  </span>
                </td>

                {/* Upvotes */}
                <td className="font-semibold">{m.upvotes}</td>

                {/* Action */}
                <td>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 grid-cols-1">
                    {m.status === "Pending" && (
                      <button
                        onClick={() => handleEditModalOpen(m)}
                        className="btn btn-sm btn-primary"
                      >
                        Edit
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(m)}
                      className="btn btn-sm btn-primary"
                    >
                      Delete
                    </button>

                    <Link
                      to={`/issue-details/${m._id}`}
                      className="btn btn-sm btn-primary"
                    >
                      Details
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dialog ref={editModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="">
            {/* eslint-disable-next-line react-hooks/refs */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Title */}
              <div>
                <label className="label">Title</label>
                <input
                  {...register("title")}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Description */}
              <div>
                <label className="label">Description</label>
                <textarea
                  {...register("description")}
                  className="textarea textarea-bordered w-full"
                  rows={4}
                />
              </div>

              {/* Category */}
              <div>
                <label className="label">Category</label>
                <select
                  {...register("category")}
                  className="select select-bordered w-full"
                >
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
                <label className="label">Location</label>
                <input
                  {...register("location")}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="label">Image URL</label>
                <input
                  {...register("image")}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Email (readonly) */}
              <div>
                <label className="label">User Email</label>
                <input
                  {...register("email")}
                  readOnly
                  className="input input-bordered w-full bg-gray-100"
                />
              </div>

              {/* Status */}
              <div>
                <label className="label">Status</label>
                <select
                  {...register("status")}
                  className="select select-bordered w-full"
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                </select>
              </div>

              {/* Priority */}
              <div>
                <label className="label">Priority</label>
                <select
                  {...register("priority")}
                  className="select select-bordered w-full"
                >
                  <option>Normal</option>
                </select>
              </div>

              {/* Submit */}
              <button className="btn btn-primary w-full">Update Issue</button>
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
  );
};

export default MyIssue;
