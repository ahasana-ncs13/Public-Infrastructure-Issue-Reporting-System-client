import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Sample help center data with categories
const helpCategories = {
  "Getting Started": [
    {
      id: 1,
      title: "How to Report an Issue",
      type: "video",
      url: "https://www.example.com/tutorial.mp4",
      description: "Step-by-step guide to report a public infrastructure issue.",
    },
    {
      id: 2,
      title: "Creating an Account",
      type: "text",
      content:
        "Sign up with your email or Google account to start reporting issues.",
    },
  ],
  "Account & Profile": [
    {
      id: 3,
      title: "Editing Your Profile",
      type: "image",
      url: "https://i.ibb.co.com/W7z9bZZ/Screenshot-2026-01-11-230514.png",
      description: "Learn how to update your profile information.",
    },
    {
      id: 4,
      title: "Premium Subscription Guide",
      type: "text",
      content:
        "Subscribe to premium to submit unlimited issues and get priority support.",
    },
  ],
  Payments: [
    {
      id: 5,
      title: "How to Boost Issue Priority",
      type: "text",
      content:
        "Pay to boost the priority of your issue so that staff resolves it faster.",
    },
  ],
};

const HelpCenter = () => {
  const [activeCategory, setActiveCategory] = useState("Getting Started");
  const [openArticles, setOpenArticles] = useState({});

  const toggleArticle = (id) => {
    setOpenArticles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 pt-26">
      <h1 className="text-3xl font-bold mb-6 text-center">Help Center</h1>

      {/* Category Tabs */}
      <div className="flex justify-center mb-8 space-x-4 overflow-x-auto">
        {Object.keys(helpCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 font-medium rounded-md transition whitespace-nowrap ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles Accordion */}
      <div className="space-y-4">
        {helpCategories[activeCategory].map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleArticle(article.id)}
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
            >
              <h2 className="text-lg font-semibold">{article.title}</h2>
              {openArticles[article.id] ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-gray-600" />
              )}
            </button>

            {/* Accordion Content */}
            {openArticles[article.id] && (
              <div className="px-6 pb-6 transition-all duration-300">
                {article.type === "video" && (
                  <video
                    src={article.url}
                    controls
                    className="w-full rounded-md mb-4"
                  />
                )}
                {article.type === "image" && (
                  <img
                    src={article.url}
                    alt={article.title}
                    className="w-full rounded-md mb-4"
                  />
                )}
                {article.type === "text" && (
                  <p className="text-gray-700 mb-4">{article.content}</p>
                )}
                {article.description && (
                  <p className="text-gray-600">{article.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;
