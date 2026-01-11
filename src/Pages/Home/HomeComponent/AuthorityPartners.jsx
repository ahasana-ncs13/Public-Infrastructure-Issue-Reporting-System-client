import React from "react";
import { FaCity, FaLandmark, FaHandsHelping } from "react-icons/fa";

const partners = [
  {
    id: 1,
    title: "City Councils",
    description:
      "Working directly with municipalities to resolve public issues efficiently.",
    icon: <FaCity />,
  },
  {
    id: 2,
    title: "Local Government Bodies",
    description:
      "Ensuring transparency and accountability through official collaboration.",
    icon: <FaLandmark />,
  },
  {
    id: 3,
    title: "NGOs & Urban Planners",
    description:
      "Supporting sustainable development and people-focused city planning.",
    icon: <FaHandsHelping />,
  },
];

const AuthorityPartners = () => {
  return (
    <section className="py-16 sm:py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Working With Trusted Authorities
          </h2>
          <p className="text-sm sm:text-base text-base-content/60 max-w-2xl mx-auto">
            We collaborate with government bodies and organizations to turn citizen reports into real improvements.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-start gap-4 sm:gap-5"
            >
              {/* Icon */}
              <div className="text-primary text-2xl sm:text-3xl mt-1 shrink-0">
                {partner.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-medium text-base sm:text-lg mb-1">
                  {partner.title}
                </h3>
                <p className="text-sm sm:text-base text-base-content/60 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Line */}
        <div className="mt-14 sm:mt-16 text-center">
          <span className="text-xs tracking-widest uppercase text-base-content/40">
            Collaboration That Builds Better Cities
          </span>
        </div>
      </div>
    </section>
  );
};

export default AuthorityPartners;
