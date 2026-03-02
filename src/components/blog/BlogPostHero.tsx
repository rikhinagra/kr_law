"use client";
import styled from "styled-components";
import Image from "next/image";

interface BlogPostHeroProps {
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  @media (min-width: 1025px) {
    height: 622px;
    padding: 100px 20px 60px;
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 500px;
    padding: 80px 20px 50px;
  }
  
  @media (max-width: 768px) {
    height: 400px;
    padding: 80px 20px 40px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(27, 38, 50, 0.3) 0%,
    rgba(27, 38, 50, 0.6) 100%
  );
  z-index: 0;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  text-align: center;
  z-index: 2;
  position: relative;
`;

const Category = styled.span`
  display: inline-block;
  padding: 6px 16px;
  background: rgba(27, 38, 50, 0.8);
  border-radius: 20px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 1.2;
  color: #ffffff;
  margin: 0 0 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default function BlogPostHero({ title, date, author, category, image }: BlogPostHeroProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <HeroContainer>
      <BackgroundImage>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          priority
          quality={90}
          sizes="100vw"
        />
      </BackgroundImage>
      <Overlay />
      <ContentWrapper>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <MetaInfo>
          <MetaItem>By {author}</MetaItem>
          <MetaItem>•</MetaItem>
          <MetaItem>{formattedDate}</MetaItem>
        </MetaInfo>
      </ContentWrapper>
    </HeroContainer>
  );
}