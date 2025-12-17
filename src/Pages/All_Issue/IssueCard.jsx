import React, { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router";

const IssueCard = ({ issue }) => {
  const navigate = useNavigate();
  const [upvotes, setUpvotes] = useState(issue.upvotes);

  const handleUpvote = () => {
    setUpvotes((vote) => vote + 1);
    // Here you can also call an API to update the backend
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
          <span className="font-semibold text-lg">{issue.title}</span>
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
              issue.priority === "High" ? "bg-red-500 text-white" : "bg-green-500 text-white"
            }`}
          >
            {issue.priority}
          </span>
</div>
        <div className="mt-4">
          <button
            onClick={() => navigate(`/issues/${issue.id}`)}
            className="bg-primary w-35 text-white px-3 py-1 rounded hover:bg-linear-to-l from-amber-200 to-teal-500 hover:text-black"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
