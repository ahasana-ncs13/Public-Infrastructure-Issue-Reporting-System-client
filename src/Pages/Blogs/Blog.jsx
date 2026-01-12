import { useState } from "react";
import { FaArrowRight, FaCalendarAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import useAxios from "../../Hooks/useAxios";


const Blog = () => {
     const axiosInstance=useAxios()
  const [showAll, setShowAll] = useState(false);

  const {
    data: blogs = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosInstance.get("/blogs");
      return  res.data.filter((blog) => blog.status === "published");
    },
  });

  if (isLoading) return <p className="text-center py-10">Loading blogs...</p>;
  if (isError)
    return (
      <p className="text-center py-10 text-red-500">Error fetching blogs.</p>
    );

  const blogsToDisplay = showAll ? blogs : blogs.slice(0, 4);

  return (
    <section className="mt-36 bg-blue-50 w-11/12 mx-auto">
      <div className="w-11/12 mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Latest Blogs & Trade Insights
          </h2>
          <p className="mt-4 text-base-content/70 max-w-3xl mx-auto">
            Stay updated with global trade trends, import-export guides, and
            expert insights to grow your business confidently.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {blogsToDisplay.map((blog, idx) => (
            <div key={idx} className="card bg-base-200 shadow-md">
              <figure>
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="h-48 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h3 className="card-title text-lg leading-snug">
                  {blog.title}
                </h3>

                <p className="text-sm text-base-content/70">{blog.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-base-content/60 mt-3">
                  <span className="flex items-center gap-1">
                    <FaUser /> {blog.author?.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt />{" "}
                    {new Date(blog.publishedAt).toLocaleDateString()}
                  </span>
                </div>

                {/* CTA */}
                <div className="card-actions mt-4">
                  <Link
                    to={`/blogdetails/${blog._id}`}
                    className="btn btn-link text-primary px-0"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Show Less */}
        {blogs.length > 3 && (
          <div className="text-center">
            <button
              className="btn btn-primary"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View All Blogs"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
