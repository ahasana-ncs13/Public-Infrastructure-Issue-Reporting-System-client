import React, { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const IssueCard = ({ issue }) => {
  const axioInstance = useAxios();
  const { user } = useAuth();
  const Navigate = useNavigate();
  const [upvotes, setUpvotes] = useState(issue.upvotes);
  const [hasUpvoted, setHasUpvoted] = useState(
    issue.upvotedBy?.includes(user?.email)
  );

  const handleUpvote = async () => {
    if (!user) {
      Navigate("/loginlayout/login");
      return;
    }
    if (user?.email === issue.email) {
      Swal.fire("Oops!", "You cannot upvote your own issue", "warning");
      return
    }
    if (hasUpvoted) {
      Swal.fire("Oops!", "You already upvoted", "warning");
      return
    }

    const res = await axioInstance.patch(`/all-issue/${issue._id}`, {
      email: user.email,
    });

    if (res.data?.message === "Upvoted successfully") {
      setUpvotes((vote) => vote + 1);
      setHasUpvoted(true);
      Swal.fire("Success!", "You upvoted this issue", "success");
    }
  };

  return (
    <div className="max-w-md bg-teal-50 shadow-lg rounded-lg">
      <img
        src={issue.image}
        alt={issue.title}
        className="w-full h-50 object-cover p-2 rounded-xl"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-lg text-primary">{issue.title}</span>
          <button
            onClick={handleUpvote}
            className="flex items-center space-x-1 text-primary hover:text-secondary "
          >
            <FaRegThumbsUp />
            <span>{upvotes}</span>
          </button>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500 text-sm">{issue.category}</span>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              issue.status === "In Progress"
                ? "bg-yellow-300 text-gray-800"
                : issue.status === "Resolved"
                ? "bg-green-300 text-gray-800"
                : "bg-gray-300 text-gray-800"
            }`}
          >
            {issue.status}
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-500 text-sm mb-2">{issue.location}</p>

          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              issue.priority === "High"
                ? "bg-red-500 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {issue.priority}
          </span>
        </div>
        <div className="my-4">
          <Link
            to={`/issue-details/${issue._id}`}
            className="bg-primary w-35 text-white px-3 rounded hover:bg-teal-900 py-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
