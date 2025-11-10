"use client";
import React from "react";
import { Card, CardContent, CardMedia, Button } from "@mui/material";
import Link from "next/link";

const BlogCard = ({
    slugs,
    image,
    readTime,
    title,
    author,
    date,
    onClick = () => { },
}) => {
    return (
        <Link href={`/blogs/${slugs}`} className="no-underline">
            <Card
                className="w-full shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl"
                sx={{ borderRadius: "18px", overflow: "hidden" }}
            >
                {/* Image Section */}
                <div className="relative">
                    <CardMedia
                        component="img"
                        image={image}
                        alt={title}
                        className="object-cover rounded-3xl p-3.5 "
                        sx={{
                            width: "100%",
                            height: "220px",
                        }}
                    />

                    <div className="absolute top-7 left-7 bg-black/70 text-white text-[14px] px-3 py-1 rounded-lg">
                        {readTime}
                    </div>
                </div>


                {/* Text Section */}
                <CardContent className="flex flex-col gap-2">
                    <h2 className="text-lg sm:text-xl font-semibold leading-snug">
                        {title}
                    </h2>

                    <p className="text-gray-600 text-sm">
                        By <span className="font-medium">{author}</span>
                    </p>

                    <p className="text-gray-500 text-sm">Published: {date}</p>


                    <Button
                        variant="contained"
                        onClick={onClick}
                        sx={{
                            mt: 1,
                            borderRadius: "10px",
                            background: "linear-gradient(to right, #fbd44d, #f7a90d)",
                            color: "black",
                            textTransform: "none",
                            fontWeight: 600,
                            fontFamily: "Poppins, sans-serif",
                        }}
                    >
                        Read More
                    </Button>

                </CardContent>
            </Card>
        </Link>
    );
};

export default BlogCard;
