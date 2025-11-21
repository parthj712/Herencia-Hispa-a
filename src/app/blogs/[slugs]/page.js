"use client";
import API from "@/server/api";
import { Box } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogDetails() {
  const { slugs } = useParams();

  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogData = async () => {
    try {
      const res = await API.get("/blogs/active-blogs");
      setBlogData(res.data);
      setLoading(false);
    } catch (error) {
      console.log("Failed to fetch data:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  const blog = blogData.find((b) => b.slug === slugs);

  if (loading) return <p className="text-center py-20 text-xl">Loading...</p>;
  if (!blog)
    return <p className="text-center py-20 text-xl">Blog not found!</p>;

  const formattedDate = new Date(
    blog.updatedAt || blog.createdAt
  ).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div>
      <Box className="w-full flex flex-col">
        <div className="flex flex-col items-center justify-center py-12">
          <Box
            className="w-full px-10 lg:px-36 md:px-14 py-4 text-white font-semibold text-lg mb-10"
            sx={{
              background: "linear-gradient(90deg, #3b0ca3 0%, #7026e2 100%)",
            }}
          >
            <p className="text-white">
              THE BLOG: Herencia Hispaña | The Instructor's Guide
            </p>
          </Box>
        </div>
      </Box>

      <div className="max-w-7xl mx-auto px-6 py-2">
        <img
          src={blog.imgUrl}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-2xl mb-6"
        />

        <h1 className="text-3xl font-bold mb-3">{blog.title}</h1>
        <p className="text-gray-600 mb-1">By {blog.creator}</p>
        <p className="text-gray-500 mb-6">Published: {formattedDate}</p>

        <div className="text-lg leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>
      </div>
    </div>
  );
}
