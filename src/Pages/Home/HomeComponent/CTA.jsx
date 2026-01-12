import React from "react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="relative bg-primary py-20 rounded-md">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeIn">
          Take Action Today!
        </h2>

        {/* Description */}
        <p className="text-white/90 text-lg sm:text-xl md:text-2xl mb-10 animate-fadeIn delay-150">
          Report city issues instantly, track progress, and help improve your community.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fadeIn delay-300">
          <Link
           to="/dashboardLayout/reportIssue"
            className="bg-white text-primary font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            Report an Issue
          </Link>
          <Link
            to={"/legalpage"}
            className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
          >
            Legal & Policy
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
