import React from "react";
import { FaUsers, FaCheckCircle, FaTasks, FaClock } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    number: 12000,
    title: "Active Citizens",
    desc: "Number of citizens using the platform to report issues.",
  },
  {
    icon: <FaCheckCircle />,
    number: 8500,
    title: "Issues Resolved",
    desc: "Total number of public issues successfully resolved.",
  },
  {
    icon: <FaTasks />,
    number: 15000,
    title: "Reports Submitted",
    desc: "Total number of reports submitted by citizens.",
  },
  {
    icon: <FaClock />,
    number: 24,
    title: "Average Resolution Time",
    desc: "Average hours taken to resolve an issue.",
    suffix: "h",
  },
];

const Statistics = () => {
  return (
    <section className="py-20 my-10 bg-secondary rounded-2xl">
      <div className="w-11/12 mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Platform Statistics
          </h2>
          <p className="text-gray-200">
            Key metrics showing how the platform benefits citizens and improves city services.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className=" bg-base-200 text-center"
            >
              <div className="card-body">
                <div className="text-primary text-5xl mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">
                  {item.number}{item.suffix ? item.suffix : ""}
                </h3>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-base-content/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Statistics;
