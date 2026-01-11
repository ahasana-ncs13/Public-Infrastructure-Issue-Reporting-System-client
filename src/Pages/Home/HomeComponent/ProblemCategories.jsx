import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import {
  FaRoad,
  FaLightbulb,
  FaWater,
  FaTrashAlt,
  FaBuilding,
  FaBus,
  FaTree,
  FaHospital,
  FaSchool,
  FaBolt,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Roads & Potholes",
    slug: "roads",
    icon: <FaRoad />,
    color: "badge-primary",
  },
  {
    id: 2,
    name: "Street Lights",
    slug: "street-lights",
    icon: <FaLightbulb />,
    color: "badge-warning",
  },
  {
    id: 3,
    name: "Water Supply",
    slug: "water-supply",
    icon: <FaWater />,
    color: "badge-info",
  },
  {
    id: 4,
    name: "Waste Management",
    slug: "waste",
    icon: <FaTrashAlt />,
    color: "badge-success",
  },
  {
    id: 5,
    name: "Public Buildings",
    slug: "buildings",
    icon: <FaBuilding />,
    color: "badge-secondary",
  },
  {
    id: 6,
    name: "Public Transport",
    slug: "transport",
    icon: <FaBus />,
    color: "badge-accent",
  },
  {
    id: 7,
    name: "Parks & Trees",
    slug: "parks",
    icon: <FaTree />,
    color: "badge-success",
  },
  {
    id: 8,
    name: "Hospitals",
    slug: "hospitals",
    icon: <FaHospital />,
    color: "badge-error",
  },
  {
    id: 9,
    name: "Schools",
    slug: "schools",
    icon: <FaSchool />,
    color: "badge-info",
  },
  {
    id: 10,
    name: "Electricity Issues",
    slug: "electricity",
    icon: <FaBolt />,
    color: "badge-warning",
  },
];

const ITEMS_PER_PAGE = 5;

const ProblemCategoriesBadgesAdvanced = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageFromURL = Number(searchParams.get("page")) || 1;
  const categoryFromURL = searchParams.get("category");

  const [currentPage, setCurrentPage] = useState(pageFromURL);
  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);

  const totalPages = Math.ceil(categories.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCategories = categories.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Sync state → URL
  useEffect(() => {
    const params = {};
    params.page = currentPage;
    if (selectedCategory) params.category = selectedCategory;
    setSearchParams(params);
  }, [currentPage, selectedCategory, setSearchParams]);

  const handleSelect = (slug) => {
    setSelectedCategory(slug);
  };

  return (
    <section className="py-12 bg-base-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-3">Issue Categories</h2>
        <p className="text-base-content/70 mb-8">
          Select a category and report infrastructure problems
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {currentCategories.map((category) => {
            const isActive = selectedCategory === category.slug;

            return (
              <button
                key={category.id}
                onClick={() => handleSelect(category.slug)}
                className={`badge badge-lg gap-2 px-6 py-4 transition-all
                  ${
                    isActive
                      ? `${category.color} ring-2 ring-primary scale-110`
                      : "badge-outline hover:scale-105"
                  }
                `}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Numbered Pagination */}
        <div className="flex justify-center items-center gap-2">
          <button
            className="btn btn-sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            «
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`btn btn-sm ${
                  currentPage === page ? "btn-primary" : "btn-outline"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            className="btn btn-sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            »
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemCategoriesBadgesAdvanced;
