import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import IssueCard from "./IssueCard";
import Loading from "../../SharedComponent/Loader/Loading";

const All_Issue = () => {
  const axioInstance = useAxios();
  const [search, setSearch] = useState("");
  const [totalIssue, setTotalIssue] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  // console.log(search)
  const limit = 10;
  const {
    data: issues = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-issue", search,currentPage],
    queryFn: async () => {
      const res = await axioInstance.get(`/all-issue?limit=${limit}&skip=${currentPage * limit}`, {
        params: {
          title: search,
          category: search,
          location: search,
        },
      });
      setTotalIssue(res.data.total);
      const page = Math.ceil(totalIssue / limit);
      setTotalPage(page);
      return res.data.allIssue;
    },
  });
  refetch();
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <div className="max-w-150 mx-auto text-center py-10 pt-26">
        <h1 className="text-4xl font-bold text-lime-600">
          All Reported Issues
        </h1>
        <p className="text-gray-400">
          Browse and track all reported public infrastructure issues in one
          place.
        </p>
      </div>
      <div className="flex justify-between py-5 mx-10">
        <label className="input border-primary border-2">
          <svg
            className="h-[1em] opacity-80"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
        </label>

        <select className="border-primary border-2 rounded px-4 py-2 text-sm ">
          <option value="">Filter by</option>
          <option value="traffic">status</option>
          <option value="infrastructure">priority</option>
          <option value="garbage">category</option>
        </select>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 w-11/12 mx-auto gap-10">
        {issues.length > 0 ? (
          issues.map((issue) => (
            <IssueCard key={issue._id} issue={issue}></IssueCard>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No issues found
          </p>
        )}
      </div>
      
      <div className="flex justify-center flex-wrap gap-5 pt-10">
        {
          currentPage>0 && <button onClick={()=>setCurrentPage(currentPage-1)} className="btn btn-primary">Prev</button>
        }
        

        {[...Array(totalPage).keys()].map((i) => (
          <button onClick={()=>setCurrentPage(i)} className={`btn ${i===currentPage && "btn-primary"}`} key={i}>
            {i}
          </button>
        ))}
        {
          currentPage < totalPage-1 &&  <button onClick={()=>setCurrentPage(currentPage+1)} className="btn btn-primary">Next</button>
        }
       
      </div>
    </>
  );
};

export default All_Issue;
