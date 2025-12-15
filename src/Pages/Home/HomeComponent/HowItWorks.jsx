import React from "react";
import { motion } from "framer-motion";
import {
  FaCamera,
  FaUserCog,
  FaTools,
  FaSyncAlt,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaCamera />,
    title: "Submit Issue",
    desc: "Citizens submit a report with issue details, photos, and live location.",
  },
  {
    icon: <FaUserCog />,
    title: "Admin Review",
    desc: "Admin reviews the report and assigns it to the appropriate staff.",
  },
  {
    icon: <FaTools />,
    title: "Staff Action",
    desc: "Staff verifies the issue on-site and starts resolving it.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Track Progress",
    desc: "System updates status from Pending → In-Progress → Resolved → Closed.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Issue Resolved",
    desc: "Citizens receive updates and can track their issue anytime.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HowItWorks = () => {
  return (
    <section className="py-20 bg-teal-700 rounded-2xl">
      <div className="w-11/12 mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">
            How the System Works
          </h2>
          <p className="text-gray-300">
            A simple, transparent workflow connecting citizens, administrators,
            and field staff for faster issue resolution.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="card bg-base-100 shadow-lg text-center"
            >
              <div className="card-body">
                <div className="text-secondary text-4xl mx-auto mb-4">
                  {step.icon}
                </div>

                <div className="badge badge-secondary mb-3">
                  Step {index + 1}
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-base-content/70">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
