"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  imagePath: string;
}

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 16px;

  @media (min-width: 1025px) {
    height: auto;
    padding: 40px 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: auto;
    padding: 30px 40px;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 40px 16px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const SectionSubtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #1b2632;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #1c1917;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
    width: auto;
    max-width: 280px;
    text-align: center;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 24px;

  @media (min-width: 1025px) {
    grid-template-areas:
      "main aside1"
      "main aside2";
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "main main"
      "aside1 aside2";
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "main"
      "aside1"
      "aside2";
    gap: 24px;
  }
`;

const MainBlogPost = styled.article`
  grid-area: main;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 1025px) {
    max-height: 670px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 620px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    height: auto;
    margin: 0;
  }
`;

const MainImageContainer = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 1025px) {
    height: 750px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 480px;
  }

  @media (max-width: 768px) {
    height: 280px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  height: 100%;
  background: #ffffff;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 20px;
    padding-bottom: 0;
    height: auto;
    position: relative;
  }

  @media (max-width: 768px) {
    padding: 20px 16px 20px;
    border-top: none;
    height: auto;
  }
`;

const MainTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 110%;
  display: flex;
  align-items: flex-start;
  letter-spacing: -0.03em;
  color: #1c1917;
  margin-bottom: 16px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: left;
    min-height: unset;
    margin-bottom: 10px;
  }
`;

const MainExcerpt = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: flex-start;
  letter-spacing: -0.03em;
  color: #57534e;
  margin-bottom: 24px;
  flex-grow: 0;

  @media (min-width: 769px) and (max-width: 1024px) {
    line-height: 140%;
    margin-bottom: 10px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    text-align: left;
    line-height: 140%;
    min-height: unset;
    margin-bottom: 15px;
    font-size: 14px;
    flex-grow: 0;
  }
`;

const SideBlogPost = styled.article`
  display: flex;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  &:nth-child(2) {
    grid-area: aside1;
  }

  &:nth-child(3) {
    grid-area: aside2;
  }

  @media (min-width: 1025px) {
    flex-direction: row;
    max-height: 330px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    max-height: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-height: none;
    margin: 0;
    height: auto;
  }
`;

const SideImageContainer = styled.div`
  position: relative;

  @media (min-width: 1025px) {
    width: 50%;
    min-width: 300px;
    height: auto;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 220px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }
`;

const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;
  background: #ffffff;

  @media (min-width: 1025px) {
    width: 50%;
    padding: 24px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 20px 16px 20px;
    border-top: none;
    height: auto;
  }
`;

const SideTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: -0.03em;
  color: #1c1917;
  margin-bottom: 16px;

  @media (min-width: 1025px) {
    min-height: unset;
    display: flex;
    align-items: flex-start;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 20px;
    min-height: unset;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: left;
    min-height: unset;
    margin-bottom: 10px;
  }
`;

const SideExcerpt = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: #57534e;
  margin-bottom: 20px;
  flex-grow: 1;

  @media (min-width: 1025px) {
    min-height: unset;
    display: flex;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: left;
    min-height: unset;
    line-height: 140%;
    margin-bottom: 15px;
    flex-grow: 0;
  }
`;

const ReadMoreButton = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  gap: 10px;
  background: #1b2632;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  text-decoration: none;
  align-self: flex-start;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #2a3c4d;
    transform: translateY(-2px);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 8px 14px;
    margin: 20px;
  }

  @media (max-width: 768px) {
    padding: 8px 14px;
    align-self: flex-start;
    margin-bottom: 0;
  }
`;

const ButtonText = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #fafaf9;
  opacity: 0.9;
  transition: opacity 0.3s ease;

  ${ReadMoreButton}:hover & {
    opacity: 1;
  }
`;

const ArrowImage = styled(Image)`
  transition: transform 0.3s ease;

  ${ReadMoreButton}:hover & {
    transform: translateX(3px);
  }
`;

const StyledSideImage = styled(Image)`
  object-fit: cover;
  margin: 0;
  padding: 0;

  @media (min-width: 1025px) {
    border-radius: 10px 0 0 10px;
  }

  @media (max-width: 1024px) {
    border-radius: 10px 10px 0 0;
  }
`;

export default function BlogNewsSection() {
  const blogPosts: BlogPost[] = [
    {
      id: "post-1",
      title: "TOP 5 MISTAKES WHEN HIRING A PERSONAL INJURY LAWYER",
      excerpt:
        "Finding the right legal help or personal injury lawyer can be a daunting prospect. You often have to find a lawyer for your injuries at a time when...",
      slug: "hiring-lawyer",
      imagePath: "/images/blog_news_top_mistakes.webp",
    },
    {
      id: "post-2",
      title: "WHO PAYS YOUR MEDICAL BILLS IN A PERSONAL INJURY LAWSUIT?",
      excerpt:
        "When you're involved in an accident resulting in personal injury, the confusion of the situation can make it difficult to think through a personal...",
      slug: "medical-bills",
      imagePath: "/images/blog_news_medical_bills.webp",
    },
    {
      id: "post-3",
      title:
        "WHAT MAKES A PERSONAL INJURY CASE (OR PERSONAL INJURY LAWSUIT) GO TO TRIAL?",
      excerpt:
        "Personal injury cases can be complicated, but the law doesn't have to be. A personal injury lawsuit is a civil lawsuit that centers on one person...",
      slug: "personal-injury-trial",
      imagePath: "/images/blog_news_go_to_trail.webp",
    },
  ];

  const mainPost = blogPosts[0];
  const sidePosts = blogPosts.slice(1);

  return (
    <SectionContainer>
      <HeaderContainer>
        <SectionSubtitle>NEWS, NOTABLE & TRENDING</SectionSubtitle>
        <SectionTitle>Our Valuable Insights</SectionTitle>
      </HeaderContainer>

      <BlogGrid>
        <MainBlogPost>
          <MainImageContainer>
            <Image
              src={mainPost.imagePath}
              alt={mainPost.title}
              fill
              sizes="(min-width: 1025px) 50vw, (min-width: 769px) 100vw, 100vw"
              style={{
                objectFit: "cover",
                borderRadius: "10px 10px 0 0",
                margin: 0,
                padding: 0,
              }}
            />
          </MainImageContainer>
          <MainContent>
            <MainTitle>{mainPost.title}</MainTitle>
            <MainExcerpt>{mainPost.excerpt}</MainExcerpt>
            <ReadMoreButton href={`/blog/${mainPost.slug}`}>
              <ButtonText>Read More</ButtonText>
              <ArrowImage
                src="/images/Arrow_white.svg"
                alt="Arrow"
                width={24}
                height={16}
              />
            </ReadMoreButton>
          </MainContent>
        </MainBlogPost>

        {sidePosts.map((post) => (
          <SideBlogPost key={post.id}>
            <SideImageContainer>
              <StyledSideImage
                src={post.imagePath}
                alt={post.title}
                fill
                sizes="(min-width: 1025px) 25vw, (min-width: 769px) 50vw, 100vw"
              />
            </SideImageContainer>
            <SideContent>
              <SideTitle>{post.title}</SideTitle>
              <SideExcerpt>{post.excerpt}</SideExcerpt>
              <ReadMoreButton href={`/blog/${post.slug}`}>
                <ButtonText>Read More</ButtonText>
                <ArrowImage
                  src="/images/Arrow_white.svg"
                  alt="Arrow"
                  width={24}
                  height={16}
                />
              </ReadMoreButton>
            </SideContent>
          </SideBlogPost>
        ))}
      </BlogGrid>
    </SectionContainer>
  );
}
