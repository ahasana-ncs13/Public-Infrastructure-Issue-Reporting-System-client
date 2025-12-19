import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../../Hooks/useAxios";

const EditProfileModal = ({ isOpen, onClose, currentUser, onUpdate }) => {
  const axiosInstance = useAxios();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: currentUser?.name || "",
      photoURL: currentUser?.photoURL || "",
    },
  });

  // Reset form when currentUser changes
  useEffect(() => {
    reset({
      name: currentUser?.name || "",
      photoURL: currentUser?.photoURL || "",
    });
  }, [currentUser, reset]);

  const onSubmit = async (data) => {
    try {
      const res = await axiosInstance.patch(`/currentuser/${currentUser.email}`, data);
      if (res.data.modifiedCount > 0 || res.data.updated) {
        onUpdate(); // refresh profile in parent
        onClose();
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!isOpen) return null;

  return (
    <dialog className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-base-100 rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
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
            <button type="button" onClick={onClose} className="btn btn-outline">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default EditProfileModal;
