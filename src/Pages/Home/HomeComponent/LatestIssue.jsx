import React from "react";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import IssueCard from "../../All_Issue/IssueCard";

const LatestIssue = () => {
  const axioInstance = useAxios();
  const { data: LatestIssue = [] } = useQuery({
    queryKey: ["latest-Issue"],
    queryFn: async () => {
      const res = await axioInstance.get("/latest-issue");
      return res.data;
    },
  });
  return (
    <div className="">
        <div className="max-w-150 mx-auto text-center py-10">
        <h1 className="text-4xl font-bold text-lime-600">
         Urgent Community Reports
        </h1>
        <p className="text-gray-400 mt-2">
          High-priority and recent issues reported by citizens.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {LatestIssue.map((issue) => (
          <IssueCard key={issue.id} issue={issue}></IssueCard>
        ))}
      </div>
    </div>
  );
};

export default LatestIssue;
