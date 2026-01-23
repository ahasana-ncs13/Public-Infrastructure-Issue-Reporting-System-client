import React from "react";
import {
  FaLock,
  FaBell,
  FaUserShield,
  FaBalanceScale,
} from "react-icons/fa";

const principles = [
  {
    icon: <FaLock />,
    title: "Secure Data Handling",
    desc: "All citizen reports and personal data are securely stored and protected.",
  },
  {
    icon: <FaBell />,
    title: "Real-Time Status Updates",
    desc: "Citizens receive timely updates as their reported issues progress.",
  },
  {
    icon: <FaUserShield />,
    title: "Authorized Access Only",
    desc: "Only verified municipal authorities can manage and resolve issues.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Fair & Transparent Workflow",
    desc: "Every issue follows the same standardized process without bias.",
  },
];

const TrustPrinciples = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="w-11/12 mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Trust & Accountability Principles
          </h2>
          <p className="text-base-content/70 leading-relaxed">
            Built to ensure reliability, transparency, and citizen confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item, index) => (
            <div
              key={index}
              className="
                card rounded-2xl
                bg-base-100
                shadow-md
                hover:shadow-xl
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              <div
                className="
                  card-body text-center
                  bg-gradient-to-br
                  from-base-100
                  to-base-200
                  dark:from-base-300
                  dark:to-base-200
                "
              >
                <div className="text-primary text-4xl mx-auto mb-4">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-base-content mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-base-content/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustPrinciples;
