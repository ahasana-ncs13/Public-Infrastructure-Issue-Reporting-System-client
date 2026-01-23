import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../SharedComponent/Loader/Loading";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Feedback = () => {
  const { user } = useAuth();

  const axiosInstance = useAxios();
  const {
    data: feedbacks = [],
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["userfeedback", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get("/feedback");
      return res.data;
    },
  });

  //   const [feedbacks, setFeedbacks] = useState(feedbacks);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");

  if (isLoading || isFetching) {
    return <Loading></Loading>;
  }
  //   // Aggregate rating
  const averageRating =
    feedbacks.reduce((acc, f) => acc + f.rating, 0) / feedbacks.length || 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) return alert("Please select a rating!");
    const newFeedback = {
      //   id: feedbacks.length + 1,
      name: user.displayName,
      email: user.email, // Replace with logged-in user name if available
      rating,
      comment,
    };

    await axiosInstance.post("/newfeedback", newFeedback);
    refetch();

    // setFeedbacks([newFeedback, ...feedbacks]);
    setRating(0);
    setHoverRating(0);
    setComment("");
  };

  const handleDelete = async (f) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
     await axiosInstance.delete(`/feedback/${f.email}`);

      Swal.fire({
        title: "Deleted!",
        text: "Your feedback has been deleted.",
        icon: "success",
      });
      refetch();
    }
  };

  return (
    <div className="bg-blue-50 w-11/12 mx-auto">
    <div className="max-w-4xl mx-auto px-4 py-10 mt-36 ">
      <h1 className="text-3xl text-black font-bold text-center mb-8">
        Feedback & Ratings
      </h1>

      {/* Aggregate Rating */}
      <div className="text-center mb-10">
        <p className="text-lg font-medium text-black ">Average Rating:</p>
        <div className="flex justify-center items-center space-x-2 mt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`w-6 h-6 ${
                i < Math.round(averageRating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-gray-700">
            ({averageRating.toFixed(1)})
          </span>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-10 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-black">Submit Your Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Star Rating */}
          <div className="flex items-center space-x-2">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              return (
                <FaStar
                  key={i}
                  className={`w-8 h-8 cursor-pointer transition-colors ${
                    starValue <= (hoverRating || rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHoverRating(starValue)}
                  onMouseLeave={() => setHoverRating(0)}
                />
              );
            })}
          </div>

          {/* Comment Box */}
          <textarea
            placeholder="Leave a comment or suggestion..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none text-black focus:ring-2 focus:ring-blue-600"
            rows={4}
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>

      {/* Feedback List */}
      <div className="space-y-4">
        {feedbacks.length === 0 ? (
          <p className="text-center text-gray-500">No feedback yet.</p>
        ) : (
          feedbacks.map((f) => (
            <div
              key={f._id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex justify-between items-center"
            >
              <div className="">
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < f.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600 text-sm">{f.name}</span>
                </div>

                {f.comment && <p className="text-gray-700">{f.comment}</p>}
              </div>
              <div>
                <button className="text-black" onClick={() => handleDelete(f)}>
                  <MdDelete />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
};

export default Feedback;
