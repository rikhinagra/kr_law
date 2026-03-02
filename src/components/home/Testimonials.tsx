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
  padding: 1.2rem;
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
  width: 300px;
  height: 280px;

  /* Larger size for desktop */
  @media (min-width: 768px) {
    width: 350px;
    height: 300px;
    padding: 1.5rem;
  }

  /* Add subtle border glow effect */
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(27, 38, 50, 0.1),
      transparent
    );
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

// Quote text
const QuoteText = styled.blockquote<{ $textColor: string }>`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  color: ${(props) => props.$textColor};
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.02em;

  flex-grow: 1;
  /* Removed the overflow, text-overflow and webkit-line-clamp properties */

  @media (min-width: 768px) {
    font-size: 0.95rem; /* Increased from 0.85rem to 0.95rem as requested */
  }
`;

// Client info container
const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

// Client name
const ClientName = styled.span<{ $textColor: string }>`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  color: ${(props) => props.$textColor};
  letter-spacing: -0.03em;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

// Star container
const StarContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;

// Star icon
const Star = styled.div<{ $color: string }>`
  width: 20px;
  height: 20px;
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

// Section container for the entire testimonials section
const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 4rem 1rem;
  background: #fafafa;

  @media (min-width: 1025px) {
    padding: 6rem 2rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    /* padding: 5rem 1.5rem; */
    margin-top: 150px;
  }
`;

// Section title
const SectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 110%;
  text-align: center;
  letter-spacing: -0.03em;
  color: #1b2632;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

// Wrapper for the scrolling content
const ScrollWrapper = styled.div`
  padding: 1rem 0;
`;

// Mobile auto-scrolling testimonials container
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
}

// Props interface for the component
interface InfiniteMovingCardsProps {
  items: TestimonialItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

// Main component
const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const addAnimation = () => {
      if (containerRef.current && scrollerRef.current) {
        // Clone all items to create infinite scroll effect
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current?.appendChild(duplicatedItem);
        });

        setIsAnimating(true);
      }
    };

    addAnimation();
  }, []);


  return (
    <>
      {/* Desktop and Tablet version - Infinite scrolling cards */}
      <Container
        ref={containerRef}
        $pauseOnHover={pauseOnHover}
        className={className}
      >
        <ScrollWrapper>
          <ScrollContainer
            ref={scrollerRef}
            className="scroll-container"
            $direction={direction}
            $speed={speed}
            $isAnimating={isAnimating}
          >
            {items.map((item, index) => {
              // Determine card colors based on index
              const isEven = index % 2 === 0;
              const backgroundColor = isEven ? "#D9D9D9" : "#1B2632";
              const textColor = isEven ? "#57534E" : "#FFFFFF";
              const starColor = isEven ? "#000000" : "#FFFFFF";

              return (
                <TestimonialCard
                  key={`${item.name}-${index}`}
                  $backgroundColor={backgroundColor}
                  $textColor={textColor}
                >
                  <QuoteText $textColor={textColor}>"{item.quote}"</QuoteText>
                  <ClientInfo>
                    <ClientName $textColor={textColor}>{item.name}</ClientName>
                    <StarContainer>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} $color={starColor} />
                      ))}
                    </StarContainer>
                  </ClientInfo>
                </TestimonialCard>
              );
            })}
          </ScrollContainer>
        </ScrollWrapper>
      </Container>

      {/* Mobile version - Auto-scrolling testimonials */}
      <MobileContainer $pauseOnHover={pauseOnHover}>
        <MobileScrollContainer
          className="mobile-scroll-container"
          $direction="left"
          $speed={speed}
          $isAnimating={isAnimating}
        >
          {/* Render testimonials twice for seamless loop */}
          {[...items, ...items].map((item, index) => {
            // Determine card colors based on original index
            const originalIndex = index % items.length;
            const isEven = originalIndex % 2 === 0;
            const backgroundColor = isEven ? "#D9D9D9" : "#1B2632";
            const textColor = isEven ? "#57534E" : "#FFFFFF";
            const starColor = isEven ? "#000000" : "#FFFFFF";

            return (
              <MobileTestimonialCard
                key={`mobile-${item.name}-${index}`}
                $backgroundColor={backgroundColor}
                $textColor={textColor}
              >
                <QuoteText $textColor={textColor}>"{item.quote}"</QuoteText>
                <ClientInfo>
                  <ClientName $textColor={textColor}>{item.name}</ClientName>
                  <StarContainer>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} $color={starColor} />
                    ))}
                  </StarContainer>
                </ClientInfo>
              </MobileTestimonialCard>
            );
          })}
        </MobileScrollContainer>
      </MobileContainer>
    </>
  );
};

// Wrapper component for easy integration into your site
export default function TestimonialsInfiniteCards() {
  const testimonials: TestimonialItem[] = [
    {
      quote:
        "Exceptional Legal Representation – Highly Recommend! I am incredibly grateful for their outstanding support and expertise in handling my case.",
      name: "Lupita Pacheco",
    },
    {
      quote:
        "They took absolute amazing care of myself and my family. I am so glad I found them. I will absolutely send anyone to them.",
      name: "Keyanna Robinson",
    },
    {
      quote:
        "KR Law was amazing! They took care of my wife and me right away after our accident. Their support and professionalism made a tough time so much easier.",
      name: "Jordan Cohen",
    },
    {
      quote:
        "Working with KR Law, APC has been a blessing. After realizing my previous attorney couldn't help me, he referred me to Kathy Rabii.",
      name: "Justin Anthony",
    },
    {
      quote:
        "The team at KR Law has been so great throughout my accident process. Shout out to Julie and Carlos who have been so helpful.",
      name: "Amy Parada",
    },
    {
      quote:
        "I am so happy with this firm, I was really injured and they made sure to walk me through the whole process!",
      name: "Pascual Hernandez",
    },
    {
      quote:
        "Kathy exceeded all my expectations! Her professionalism and expertise were remarkable. She took time to explain everything clearly.",
      name: "Azita Hickey",
    },
    {
      quote:
        "Kathy was a delight from the moment I contacted her. Very knowledgeable and transparent throughout the process while showing empathy.",
      name: "Lauren Talbott",
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>What They Say About Us</SectionTitle>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        pauseOnHover={true}
      />
    </SectionContainer>
  );
}
