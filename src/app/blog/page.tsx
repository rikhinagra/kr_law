import BlogHero from "@/components/blog/BlogHero";
import BlogListing from "@/components/blog/BlogListing";
import { getSortedPostsData } from "@/lib/markdown";

export const metadata = {
  title: "Blog | KR Law, APC | Personal Injury Law Insights",
  description:
    "Explore expert insights on personal injury law, accident claims, and legal advice from the attorneys at KR Law, APC.",
};

export default function BlogPage() {
  const blogPosts = getSortedPostsData();
  
  // Transform the data to match the expected format
  const formattedPosts = blogPosts.map(post => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    imagePath: post.image,
  }));

  return (
    <main>
      <BlogHero />
      <BlogListing posts={formattedPosts} />
    </main>
  );
}