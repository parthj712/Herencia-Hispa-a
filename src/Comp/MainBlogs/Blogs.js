"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import { blogData } from "../BlogCard/Contant";

const Blogs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

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

          <div className="px-8 lg:px-4 md:px-0 w-full max-w-4xl lg:max-w-7xl md:max-w-2xl flex flex-col items-center">
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={2}
              py={isMobile ? 4 : isTablet ? 6 : 8}
            >
              <p className="text-[17px] lg:text-[22px] md:text-[18px] text-center">
                Welcome to The Instructor's Guide by Herencia Hispaña. This is
                your essential hub for mastering Spanish and conquering the
                official DELE certification. Dive into expert strategies,
                exclusive grammar deep dives, and cultural insights straight
                from our certified CEO and Master Instructor, Mr. Amey
                Prabhudesai.
              </p>
            </Box>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogData.map((blog, index) => (
                <BlogCard
                  key={blog.slugs || index}
                  slugs={blog.slugs}
                  image={blog.image}
                  readTime={blog.readTime}
                  title={blog.title}
                  author={blog.author}
                  date={blog.date}
                />
              ))}
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Blogs;
