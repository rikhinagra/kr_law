"use client";
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

// Define the animation keyframes
const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 0.5rem));
  }
`;

const scrollRight = keyframes`
  0% {
    transform: translateX(calc(-50% - 0.5rem));
  }
  100% {
    transform: translateX(0);
  }
`;

const TestimonialsSection = styled.section`
  position: relative;
  width: 100%;
  background: #fafafa;
  overflow: hidden;

  @media (min-width: 1025px) {
    padding: 80px 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 60px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const ContentContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;
  text-align: center;
  letter-spacing: -0.03em;
  color: #1b2632;
  margin-bottom: 60px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 28px;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
    margin-bottom: 40px;
  }
`;

// Main container with mask gradient
const Container = styled.div<{ $pauseOnHover: boolean }>`
  position: relative;
  width: 100%;
  overflow: hidden;

  /* Apply gradient mask only on larger screens */
  @media (min-width: 768px) {
    mask-image: linear-gradient(
      to right,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
  }

  ${(props) =>
    props.$pauseOnHover &&
    css`
      &:hover .scroll-container {
        animation-play-state: paused;
      }
    `}

  /* Hide on mobile */
  @media (max-width: 767px) {
    display: none;
  }
`;

// Scrolling container
const ScrollContainer = styled.div<{
  $direction: "left" | "right";
  $speed: "fast" | "normal" | "slow";
  $isAnimating: boolean;
}>`
  display: flex;
  gap: 1rem;
  width: max-content;

  ${(props) => {
    const duration =
      props.$speed === "fast"
        ? "20s"
        : props.$speed === "normal"
        ? "40s"
        : "80s";
    const animation = props.$direction === "left" ? scrollLeft : scrollRight;

    return (
      props.$isAnimating &&
      css`
        animation: ${animation} ${duration} linear infinite;
      `
    );
  }}
`;

// Individual testimonial card
const TestimonialCard = styled.div<{
  $backgroundColor: string;
  $textColor: string;
}>`
  flex-shrink: 0;
  padding: 1.5rem;
  background: ${(props) => props.$backgroundColor};
  border: 1px solid #e5e5e5;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* Smaller size for mobile */
  width: 350px;
  height: 320px;

  /* Larger size for desktop */
  @media (min-width: 768px) {
    width: 380px;
    height: 340px;
    padding: 1.8rem;
  }

  /* Add subtle border glow effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1rem;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.02)
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask-composite: xor;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

// Quote text styling
const QuoteText = styled.p<{ $textColor: string }>`
  font-family: "Poppins", sans-serif;
  font-size: 1.05rem;
  line-height: 1.5;
  font-weight: 400;
  color: ${(props) => props.$textColor};
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

// Author name styling
const AuthorName = styled.p<{ $textColor: string }>`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  color: ${(props) => props.$textColor};
  margin: 0;
  text-align: right;
`;

// Star rating component
const StarRating = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

const Star = styled.div<{ $color: string }>`
  width: 18px;
  height: 18px;
  background: ${(props) => props.$color};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;

// Mobile testimonials container with animation
const MobileContainer = styled.div<{ $pauseOnHover: boolean }>`
  display: none;
  
  @media (max-width: 767px) {
    display: block;
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 1rem 0;

    /* Apply gradient mask for mobile */
    mask-image: linear-gradient(
      to right,
      transparent,
      white 10%,
      white 90%,
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      white 10%,
      white 90%,
      transparent
    );
  }

  ${(props) =>
    props.$pauseOnHover &&
    css`
      &:hover .mobile-scroll-container {
        animation-play-state: paused;
      }
    `}
`;

const MobileScrollContainer = styled.div<{
  $direction: "left" | "right";
  $speed: "fast" | "normal" | "slow";
  $isAnimating: boolean;
}>`
  display: flex;
  gap: 1rem;
  width: max-content;

  ${(props) => {
    const duration =
      props.$speed === "fast"
        ? "25s"
        : props.$speed === "normal"
        ? "50s"
        : "80s";
    const animation = props.$direction === "left" ? scrollLeft : scrollRight;

    return (
      props.$isAnimating &&
      css`
        animation: ${animation} ${duration} linear infinite;
      `
    );
  }}
`;

const MobileTestimonialCard = styled.div<{
  $backgroundColor: string;
  $textColor: string;
}>`
  flex-shrink: 0;
  width: 340px;
  height: 320px;
  padding: 1.4rem;
  background: ${(props) => props.$backgroundColor};
  border: 1px solid #e5e5e5;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  /* Add subtle border glow effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1rem;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.02)
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask-composite: xor;
  }
`;

// Interface for testimonial items
interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
}

// Wrapper component for easy integration
const TestimonialsInfiniteCards = () => {
  const testimonials: TestimonialItem[] = [
    {
      title: "EXCEPTIONAL LEGAL REPRESENTATION",
      quote:
        "Exceptional Legal Representation – Highly Recommend! I am incredibly grateful for their outstanding support and expertise in handling my case.",
      name: "Lupita Pacheco",
    },
    {
      title: "AMAZING CARE FOR MY FAMILY",
      quote:
        "They took absolute amazing care of myself and my family. I am so glad I found them. I will absolutely send anyone to them.",
      name: "Keyanna Robinson",
    },
    {
      title: "AMAZING SUPPORT & PROFESSIONALISM",
      quote:
        "KR Law was amazing! They took care of my wife and me right away after our accident. Their support and professionalism made a tough time so much easier.",
      name: "Jordan Cohen",
    },
    {
      title: "WORKING WITH KR LAW IS A BLESSING",
      quote:
        "Working with KR Law, APC has been a blessing. After realizing my previous attorney couldn't help me, he referred me to Kathy Rabii.",
      name: "Justin Anthony",
    },
    {
      title: "SO GREAT THROUGHOUT THE PROCESS",
      quote:
        "The team at KR Law has been so great throughout my accident process. Shout out to Julie and Carlos who have been so helpful.",
      name: "Amy Parada",
    },
    {
      title: "WALKED ME THROUGH THE WHOLE PROCESS",
      quote:
        "I am so happy with this firm, I was really injured and they made sure to walk me through the whole process!",
      name: "Pascual Hernandez",
    },
  ];

  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const getCardStyle = (index: number) => {
    const colors = [
      { bg: "#1B2632", text: "#FFFFFF" },
      { bg: "#FAFAF9", text: "#1B2632" },
      { bg: "#1B2632", text: "#FFFFFF" },
      { bg: "#FAFAF9", text: "#1B2632" },
      { bg: "#1B2632", text: "#FFFFFF" },
      { bg: "#FAFAF9", text: "#1B2632" },
    ];
    return colors[index % colors.length];
  };

  const renderCard = (testimonial: TestimonialItem, index: number, isMobile = false) => {
    const { bg, text } = getCardStyle(index);
    const CardComponent = isMobile ? MobileTestimonialCard : TestimonialCard;
    
    return (
      <CardComponent
        key={`${isMobile ? 'mobile-' : ''}testimonial-${index}`}
        $backgroundColor={bg}
        $textColor={text}
      >
        <div>
          <StarRating>
            {[...Array(5)].map((_, i) => (
              <Star key={i} $color={text} />
            ))}
          </StarRating>
          <QuoteText $textColor={text}>"{testimonial.quote}"</QuoteText>
        </div>
        <AuthorName $textColor={text}>{testimonial.name}</AuthorName>
      </CardComponent>
    );
  };

  return (
    <TestimonialsSection>
      <ContentContainer>
        <SectionTitle>WHAT PREVIOUS CLIENTS ARE SAYING</SectionTitle>
        
        {/* Desktop scrolling testimonials */}
        <Container $pauseOnHover={true}>
          <ScrollContainer
            className="scroll-container"
            $direction="left"
            $speed="normal"
            $isAnimating={isAnimating}
          >
            {/* Render testimonials twice for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) =>
              renderCard(testimonial, index)
            )}
          </ScrollContainer>
        </Container>

        {/* Mobile rotating testimonials */}
        <MobileContainer $pauseOnHover={true}>
          <MobileScrollContainer
            className="mobile-scroll-container"
            $direction="left"
            $speed="normal"
            $isAnimating={isAnimating}
          >
            {/* Render testimonials twice for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) =>
              renderCard(testimonial, index, true)
            )}
          </MobileScrollContainer>
        </MobileContainer>
      </ContentContainer>
    </TestimonialsSection>
  );
};

export default TestimonialsInfiniteCards;