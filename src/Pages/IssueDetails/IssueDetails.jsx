import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../Hooks/useAxios";
import { Link, useParams } from "react-router";

const IssueDetails = () => {
  const { id } = useParams();
  const axioInstance = useAxios();
  const { data: issueDetails = [] } = useQuery({
    queryKey: ["issue-details", id],
    queryFn: async () => {
      const res = await axioInstance.get(`/issue-details/${id}`);
      return res.data;
    },
  });
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Title & Badges */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mb-4">
        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-md mb-6">
          <img
            src={issueDetails.image}
            alt={issueDetails.title}
            className="w-full h-110 object-cover "
          />
        </div>

        {/* Details */}
        <div className="my-20">
          <div className="flex justify-between items-center flex-wrap">
            <h1 className="text-3xl font-bold">{issueDetails.title}</h1>

            <div>
             <span
              className={` text-amber-50 font-semibold py-3 badge ${
                issueDetails.status === "Resolved"
                  ? "badge-success"
                  : "badge-warning"
              }`}
            >
              {issueDetails.status}
             </span>

             <span
              className={`ml-2 text-amber-50 font-semibold py-3 badge ${
                issueDetails.priority === "High"
                  ? "badge-error"
                  : "badge-neutral"
              }`}
            >
              {issueDetails.priority} Priority
             </span>
            </div>

          </div>

          <div className="space-y-3 text-xl my-5">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {issueDetails.category}
            </p>
            <p>
              <span className="font-semibold">Location:</span>{" "}
              {issueDetails.location}
            </p>
            <p>
              <span className="font-semibold">Upvotes:</span>{" "}
              {issueDetails.upvotes}
            </p>
            <p>
              <span className="font-semibold">Created At:</span>{" "}
              {new Date(issueDetails.createdAt).toLocaleDateString()}
            </p>
            <p>
              <span className="font-semibold">Reporter Name:</span>{" "}
              {issueDetails.reporterName}
            </p>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="bg-base-200 p-5 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p className="text-gray-700 leading-relaxed">
          {issueDetails.description}
        </p>
      </div>
      {/* Back Button */}
      <div className="mt-8">
        <Link to="/all-issue" className="btn btn-outline btn-primary">
          ← Back to Issues
        </Link>
      </div>
    </div>
  );
};

export default IssueDetails;
