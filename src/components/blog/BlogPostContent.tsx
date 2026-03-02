"use client";
import styled from "styled-components";
import Link from "next/link";

interface BlogPostContentProps {
  content: string;
  tags?: string[];
}

const ContentContainer = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Content = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  line-height: 1.8;
  color: #333333;
  
  h1 {
    font-size: 36px;
    font-weight: 600;
    margin: 40px 0 20px;
    color: #1b2632;
    
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
  
  h2 {
    font-size: 28px;
    font-weight: 500;
    margin: 32px 0 16px;
    color: #1b2632;
    
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  
  h3 {
    font-size: 24px;
    font-weight: 500;
    margin: 24px 0 12px;
    color: #1b2632;
    
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  
  p {
    margin: 0 0 20px;
  }
  
  ul, ol {
    margin: 0 0 20px;
    padding-left: 30px;
  }
  
  li {
    margin: 0 0 10px;
  }
  
  blockquote {
    border-left: 4px solid #1b2632;
    padding-left: 20px;
    margin: 20px 0;
    font-style: italic;
    color: #666666;
  }
  
  a {
    color: #1b2632;
    text-decoration: underline;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 0.7;
    }
  }
  
  strong {
    font-weight: 600;
    color: #1b2632;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e5e5e5;
`;

const Tag = styled.span`
  display: inline-block;
  padding: 6px 14px;
  background: #f0f0f0;
  border-radius: 20px;
  font-size: 14px;
  color: #666666;
  text-transform: capitalize;
`;

const BackToBlogs = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: 40px;
  padding: 12px 24px;
  background: #1b2632;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(27, 38, 50, 0.3);
  }
`;

export default function BlogPostContent({ content, tags }: BlogPostContentProps) {
  return (
    <ContentContainer>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
      
      {tags && tags.length > 0 && (
        <TagsContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
      )}
      
      <BackToBlogs href="/blog">← Back to All Blogs</BackToBlogs>
    </ContentContainer>
  );
}