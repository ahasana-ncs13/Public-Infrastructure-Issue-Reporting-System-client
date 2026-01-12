import React from "react";
import { useParams, useNavigate, Link } from "react-router";
import {
  FaUser,
  FaCalendarAlt,
  FaTags,
  FaArrowLeft,
  FaFolder,
  FaEnvelope,
} from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosInstance = useAxios();

  const { data: blogs = [], isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosInstance.get("/blogs");
      return res.data.filter((b) => b.status === "published");
    },
  });

  if (isLoading)
    return <p className="text-center py-20 text-lg">Loading blog...</p>;
  if (isError)
    return <p className="text-center py-20 text-red-500">Error loading blog.</p>;

  const blog = blogs.find((b) => b._id === id);

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Blog not found</h2>
        <button
          className="btn btn-primary mt-4"
          onClick={() => navigate("/allblogs")}
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  // Optional: Related blogs (same category, excluding current)
  const relatedBlogs = blogs.filter(
    (b) => b.category === blog.category && b._id !== blog._id
  );

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <button
          className="btn btn-outline btn-primary mb-8 flex items-center gap-2"
          onClick={() => navigate("/allblogs")}
        >
          <FaArrowLeft /> Back to Blogs
        </button>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1">
            {/* Blog Image */}
            {blog.thumbnail && (
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-80 md:h-96 object-cover rounded-lg mb-6"
              />
            )}

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold text-primary mb-4">
              {blog.title}
            </h1>

            {/* Excerpt */}
            <p className="text-base text-base-content/70 mb-6">{blog.excerpt}</p>

            {/* Blog Content */}
            <div className="prose max-w-full text-base-content">
              {blog.content.split("\n").map((line, index) =>
                line.trim() ? <p key={index}>{line}</p> : null
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="sticky top-32 space-y-6">
              {/* Author */}
              <div className="bg-base-200 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">Author</h3>
                <p className="flex items-center gap-2 text-sm">
                  <FaUser /> {blog.author?.name}
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <FaEnvelope /> {blog.author?.email}
                </p>
              </div>

              {/* Blog Info */}
              <div className="bg-base-200 p-4 rounded-lg shadow-md space-y-2">
                <h3 className="font-semibold">Blog Info</h3>
                <p className="flex items-center gap-2 text-sm">
                  <FaFolder /> Category: {blog.category}
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <FaCalendarAlt /> Published:{" "}
                  {new Date(blog.publishedAt).toLocaleDateString()}
                </p>
                <p className="flex items-center gap-2 text-sm">
                  Updated: {new Date(blog.updatedAt).toLocaleDateString()}
                </p>
                <p className="flex items-center gap-2 text-sm capitalize">
                  Status: {blog.status}
                </p>
                {blog.tags && blog.tags.length > 0 && (
                  <p className="flex items-center gap-2 text-sm flex-wrap">
                    <FaTags /> Tags:{" "}
                    {blog.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/20 text-primary px-2 py-1 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </p>
                )}
              </div>

              {/* Related Blogs */}
              {relatedBlogs.length > 0 && (
                <div className="bg-base-200 p-4 rounded-lg shadow-md space-y-2">
                  <h3 className="font-semibold">Related Blogs</h3>
                  <ul className="space-y-1">
                    {relatedBlogs.map((rb) => (
                      <li key={rb._id}>
                        <Link
                          to={`/blogdetails/${rb._id}`}
                          className="text-primary hover:underline text-sm"
                        >
                          {rb.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
