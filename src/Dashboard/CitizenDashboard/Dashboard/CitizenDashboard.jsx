import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../../Hooks/useAxios";
import Loading from "../../../SharedComponent/Loader/Loading";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CitizenDashboard = () => {
  const axiosInstance = useAxios();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["dashboardStats"],
    queryFn: async () => {
      const res = await axiosInstance.get("/citizendashboard-stats");
      return res.data;
    },
  });

  const chartData = [
    { name: "Pending", value: stats.pendingIssues },
    { name: "In Progress", value: stats.inProgressIssues },
    { name: "Resolved", value: stats.resolvedIssues },
  ];

  const COLORS = ["#FACC15", "#3B82F6", "#22C55E"];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        <div className="stat bg-base-100 shadow rounded-xl border border-base-300">
          <div className="stat-title">Total Issues</div>
          <div className="stat-value text-xl sm:text-2xl">
            {stats.totalIssues}
          </div>
        </div>

        <div className="stat bg-base-100 shadow rounded-xl border border-base-300">
          <div className="stat-title">Pending</div>
          <div className="stat-value text-warning text-xl sm:text-2xl">
            {stats.pendingIssues}
          </div>
        </div>

        <div className="stat bg-base-100 shadow rounded-xl border border-base-300">
          <div className="stat-title">In Progress</div>
          <div className="stat-value text-info text-xl sm:text-2xl">
            {stats.inProgressIssues}
          </div>
        </div>

        <div className="stat bg-base-100 shadow rounded-xl border border-base-300">
          <div className="stat-title">Resolved</div>
          <div className="stat-value text-success text-xl sm:text-2xl">
            {stats.resolvedIssues}
          </div>
        </div>

        <div className="stat bg-base-100 shadow rounded-xl border border-base-300">
          <div className="stat-title">Total Payments</div>
          <div className="stat-value text-secondary text-xl sm:text-2xl">
            ৳ {stats.totalPayments}
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6 mx-auto bg-base-100 shadow rounded-xl p-4 w-full max-w-xl">
        <div className="w-full h-[260px] sm:h-[300px] ">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius="70%"
                dataKey="value"
                label
              >
                {chartData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default CitizenDashboard;
