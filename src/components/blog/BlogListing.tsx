"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  imagePath?: string;
}

const ListingContainer = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 20px;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 50px 30px;
  }

  @media (max-width: 768px) {
    padding: 30px 16px;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  gap: 40px;

  @media (min-width: 1025px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const BlogCard = styled.article`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 90%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const CardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 240px;
  }
`;

const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 65%;
`;

const CardTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.3;
  color: #1b2632;
  margin: 0 0 16px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const CardExcerpt = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: #333333;
  margin: 0 0 24px;
  flex-grow: 1;
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #1b2632;
  text-decoration: none;
  padding: 8px 0;
  position: relative;
  transition: color 0.3s ease;
  margin-top: auto;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #1b2632;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #344054;

    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

const ArrowIcon = styled.span`
  margin-left: 8px;
  transition: transform 0.3s ease;

  ${ReadMoreLink}:hover & {
    transform: translateX(5px);
  }
`;

interface BlogListingProps {
  posts: BlogPost[];
}

export default function BlogListing({ posts }: BlogListingProps) {
  const defaultImagePaths = {
    "hiring-lawyer":
      "/images/top-5-mistakes-when-hiring-a-personal-injury-lawyer.webp",
    "medical-bills":
      "/images/who-pays-your-medical-bills-in-a-personal-injury-lawsuit.webp",
    "personal-injury-trial":
      "/images/what-makes-a-good-personal-injury-case.webp",
  };

  return (
    <ListingContainer>
      <BlogGrid>
        {posts.map((post) => (
          <BlogCard key={post.slug}>
            <CardImageContainer>
              <Image
                src={
                  post.imagePath ||
                  defaultImagePaths[
                    post.slug as keyof typeof defaultImagePaths
                  ] ||
                  "/images/top-5-mistakes-when-hiring-a-personal-injury-lawyer.webp"
                }
                alt={post.title}
                fill
                sizes="(min-width: 1025px) 33vw, (min-width: 769px) 50vw, 100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </CardImageContainer>
            <CardContent>
              <CardTitle>{post.title}</CardTitle>
              <CardExcerpt>{post.excerpt}</CardExcerpt>
              <ReadMoreLink href={`/blog/${post.slug}`}>
                Read More<ArrowIcon>→</ArrowIcon>
              </ReadMoreLink>
            </CardContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </ListingContainer>
  );
}
