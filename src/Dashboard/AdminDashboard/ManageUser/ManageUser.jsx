import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import Loading from "../../../SharedComponent/Loader/Loading";

const ManageUser = () => {
  const axiosInstance = useAxios();
  const queryClient = useQueryClient();

  // Fetch all users
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["adminUsers"],
    queryFn: async () => {
      const res = await axiosInstance.get("/users");
      return res.data;
    },
  });

  // Block / Unblock mutation
  const mutation = useMutation({
    mutationFn: async ({ id, action }) => {
      return axiosInstance.patch(`/admin/users/${action}/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["adminUsers"]);
    },
  });

  const handleBlockToggle = (user) => {
    Swal.fire({
      title: user.isBlocked ? "Unblock User?" : "Block User?",
      text: user.isBlocked
        ? "This user will regain access."
        : "This user will be blocked from the system.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: user.isBlocked ? "#22c55e" : "#ef4444",
      confirmButtonText: user.isBlocked ? "Yes, Unblock" : "Yes, Block",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate({
          id: user._id,
          action: user.isBlocked ? "unblock" : "block",
        });

        Swal.fire({
          icon: "success",
          title: user.isBlocked ? "User Unblocked" : "User Blocked",
          timer: 1200,
          showConfirmButton: false,
        });
      }
    });
  };

  if (isLoading) return <Loading />;

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">
        Manage Users
      </h2>

      <div className="overflow-x-auto bg-base-100 shadow rounded-xl">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subscription</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td className="font-medium">{user.name}</td>
                <td className="text-sm">{user.email}</td>

                {/* Subscription Info */}
                <td>
                  {user.subscription ? (
                    <span className="badge badge-info badge-outline">
                      {user.subscription.plan} (
                      {user.subscription.status})
                    </span>
                  ) : (
                    <span className="badge badge-ghost">Free</span>
                  )}
                </td>

                {/* Block Status */}
                <td>
                  {user.isBlocked ? (
                    <span className="badge badge-error">Blocked</span>
                  ) : (
                    <span className="badge badge-success">Active</span>
                  )}
                </td>

                {/* Action */}
                <td className="text-center">
                  <button
                    onClick={() => handleBlockToggle(user)}
                    className={`btn btn-sm ${
                      user.isBlocked
                        ? "btn-success"
                        : "btn-error"
                    }`}
                  >
                    {user.isBlocked ? "Unblock" : "Block"}
                  </button>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
