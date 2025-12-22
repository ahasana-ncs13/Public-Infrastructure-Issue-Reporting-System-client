import React from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../SharedComponent/Loader/Loading';
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const AdminDashboard = () => {
         const axiosInstance = useAxios();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["dashboardStats"],
    queryFn: async () => {
      const res = await axiosInstance.get("/admin/dashboard-stats");
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
    return <Loading></Loading>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="stat bg-base-100 shadow rounded-xl">
          <div className="stat-title">Total Issues</div>
          <div className="stat-value">{stats.totalIssues}</div>
        </div>

        <div className="stat bg-yellow-100 shadow rounded-xl">
          <div className="stat-title">Pending</div>
          <div className="stat-value">{stats.pendingIssues}</div>
        </div>

        <div className="stat bg-blue-100 shadow rounded-xl">
          <div className="stat-title">In Progress</div>
          <div className="stat-value">{stats.inProgressIssues}</div>
        </div>

        <div className="stat bg-green-100 shadow rounded-xl">
          <div className="stat-title">Resolved</div>
          <div className="stat-value">{stats.resolvedIssues}</div>
        </div>

        <div className="stat bg-purple-100 shadow rounded-xl">
          <div className="stat-title">Total Payments</div>
          <div className="stat-value">৳ {stats.totalPayments}</div>
        </div>
      </div>
      <div className="max-w-100 mt-5 mx-auto bg-base-100 shadow rounded-xl p-4">
        <PieChart width={400} height={300}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={100}
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
      </div>
    </>
    );
};

export default AdminDashboard;