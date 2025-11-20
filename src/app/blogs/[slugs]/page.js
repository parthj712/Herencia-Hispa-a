import { blogData } from "@/Comp/BlogCard/Contant";
import { Box } from "@mui/material";


export default async function BlogDetails(props) {
    const { slugs } = await props.params; // ✅ UNWRAP THE PROMISE HERE

    const blog = blogData.find((b) => b.slugs === slugs);

    if (!blog) {
        return <p className="text-center py-20 text-xl">Blog not found!</p>;
    }

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
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-80 object-cover rounded-2xl mb-6"
                />

                <h1 className="text-3xl font-bold mb-3">{blog.title}</h1>
                <p className="text-gray-600 mb-1">By {blog.author}</p>
                <p className="text-gray-500 mb-6">Published: {blog.date}</p>

                <div className="text-lg leading-relaxed whitespace-pre-line">
                    {blog.content}
                </div>
            </div>
        </div>
    );
}
