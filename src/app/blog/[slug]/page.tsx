import { getPostData, getAllPostSlugs } from "@/lib/markdown";
import BlogPostHero from "@/components/blog/BlogPostHero";
import BlogPostContent from "@/components/blog/BlogPostContent";
import SchemaOrg from "@/components/common/SchemaOrg";

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const postData = await getPostData(resolvedParams.slug);

  return {
    title: `${postData.title} | KR Law, APC`,
    description: postData.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const postData = await getPostData(resolvedParams.slug);

  return (
    <main>
      <SchemaOrg
        title={`${postData.title} | KR Law, APC`}
        description={postData.excerpt}
        url={`https://krinjurylawfirm.com/blog/${resolvedParams.slug}`}
        imageUrl={`https://krinjurylawfirm.com${postData.image}`}
      />
      <BlogPostHero
        title={postData.title}
        date={postData.date}
        author={postData.author}
        category={postData.category}
        image={postData.image}
      />
      <BlogPostContent
        content={postData.content || ''}
        tags={postData.tags}
      />
    </main>
  );
}
