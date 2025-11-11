import { blogData } from "@/Comp/BlogCard/Contant";

export const dynamic = "force-static";

export default function sitemap() {
    const baseUrl = "https://www.xn--herenciahispaa-2nb.com";

    // ✅ Static Routes
    const staticRoutes = [
        { url: `${baseUrl}/`, changeFrequency: "daily", priority: 1.0 },
        { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/blogs`, changeFrequency: "weekly", priority: 0.8 },
        { url: `${baseUrl}/offer`, changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/why-spanish`, changeFrequency: "monthly", priority: 0.7 },
    ].map((route) => ({
        ...route,
        lastModified: new Date(),
    }));

    // ✅ Blog Routes (dynamic)
    const blogRoutes = blogData.map((b) => ({
        url: `${baseUrl}/blogs/${b.slugs}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticRoutes, ...blogRoutes];
}
