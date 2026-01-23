import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaTasks,
  FaUserShield,
  FaBolt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMapMarkedAlt />,
    title: "Instant Issue Reporting",
    desc: "Citizens can report potholes, broken streetlights, garbage overflow, water leakage, and more with photos and live location.",
  },
  {
    icon: <FaTasks />,
    title: "Transparent Issue Tracking",
    desc: "Track issue status in real time from Pending to Closed, ensuring transparency and accountability.",
  },
  {
    icon: <FaUserShield />,
    title: "Admin & Staff Management",
    desc: "Admins review and assign issues while staff verify, update progress, and resolve them efficiently.",
  },
  {
    icon: <FaBolt />,
    title: "Priority Support",
    desc: "Premium citizens receive faster response times and priority handling for reported issues.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Features = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="w-11/12 mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Application Features
          </h2>
          <p className="text-base-content/70 leading-relaxed">
            A digital platform designed to improve transparency, reduce response
            time, and make city service delivery more efficient.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="
                card rounded-2xl
                bg-base-200/80
                backdrop-blur
                shadow-md
                hover:shadow-xl
                transition-all duration-300
              "
            >
              <div
                className="
                  card-body text-center
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
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
