import React from "react";
import { FaClock, FaComments, FaCity, FaUsers } from "react-icons/fa";

const impacts = [
  {
    id: 1,
    title: "Faster Problem Resolution",
    description:
      "Report issues instantly and track progress in real time, reducing delays in fixing public problems.",
    icon: <FaClock />,
    color: "bg-primary/20 text-primary",
  },
  {
    id: 2,
    title: "Better Communication",
    description:
      "Create a direct communication channel between citizens and authorities for transparent updates.",
    icon: <FaComments />,
    color: "bg-info/20 text-info",
  },
  {
    id: 3,
    title: "Improved City Infrastructure",
    description:
      "Data-driven insights help governments prioritize resources and improve urban services.",
    icon: <FaCity />,
    color: "bg-success/20 text-success",
  },
  {
    id: 4,
    title: "Citizen Participation",
    description:
      "Empower citizens to actively participate in shaping safer, cleaner, and smarter cities.",
    icon: <FaUsers />,
    color: "bg-warning/20 text-warning",
  },
];

const WhyThisPlatformMattersModern = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why This Platform Matters
          </h2>
          <p className="text-base-content/70">
            Building stronger communities through transparency, technology, and civic engagement.
          </p>
        </div>

        {/* Two-Column Bullet List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impacts.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-base-100 transition"
            >
              {/* Icon Circle */}
              <div
                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full ${item.color}`}
              >
                <span className="text-xl">{item.icon}</span>
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-base-content/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisPlatformMattersModern;
