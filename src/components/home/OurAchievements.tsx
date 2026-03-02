"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { LawCaseAward } from "@/types";
import AchievementCard from "@/components/common/AchievementCard";

const SectionContainer = styled.section`
  position: relative;
  width: 100%;

  @media (min-width: 1025px) {
    display: none; /* This component is only for mobile/tablet view */
  }

  /* Tablet specific styling */
  @media (min-width: 769px) and (max-width: 1024px) {
    position: relative;
    width: 100%;
    max-width: 700px;
    margin: 40px auto 0;
    padding: 0 20px 30px;
    display: block; /* Make it visible on tablet */
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    max-width: 340px;
    height: auto;
    margin: 20px auto 0;
    padding: 0 15px 10px;
  }
`;

const SectionTitle = styled.h2`
  position: relative;
  width: 289px;
  height: 38px;
  margin: 0 auto 10px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #1b2632;

  /* Tablet specific styling */
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    max-width: 400px;
    font-size: 28px;
    margin: 0 auto 20px;
  }

  @media (max-width: 768px) {
    font-size: 20px; /* Reduced from 22px */
    height: 34px; /* Slightly reduced height */
  }
`;

const AchievementGrid = styled.div`
  /* Only needed for tablet */
  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;

    & > div {
      width: 48%;
      margin-bottom: 20px;
    }
  }
`;

const KnowMoreButton = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
  width: 220px;
  height: 58px;
  margin: 20px auto 0;
  background: #1b2632;
  box-shadow: 7px 9px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #2a3c4d;
    transform: translateY(-2px);
  }

  /* Tablet specific styling */
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 240px;
    margin: 30px auto 0;
  }

  @media (max-width: 768px) {
    gap: 5px; /* Reduced from 10px to 5px */
    padding: 14px 12px; /* Slightly reduced horizontal padding */
    width: 210px; /* Slightly reduced width */
  }
`;

const ButtonText = styled.span`
  width: 145px;
  height: 30px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #fafaf9;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  ${KnowMoreButton}:hover & {
    opacity: 1;
  }

  /* Tablet specific styling */
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px; /* Reduced from 18px */
    width: 130px; /* Reduced width to fit better with reduced gap */
  }
`;

// Define a styled component for the SVG arrow image
const ArrowImage = styled(Image)`
  transition: transform 0.3s ease;
  ${KnowMoreButton}:hover & {
    transform: translateX(3px);
  }
`;

export default function OurAchievements() {
  // Define awards data using the LawCaseAward type
  const awards: LawCaseAward[] = [
    {
      amount: "$6,000,000",
      description: "Truck Accident Total Amount Awarded",
    },
    {
      amount: "$1,850,000",
      description: "Motorvehicle Accident Total Amount Awarded",
    },
    {
      amount: "$1,000,000",
      description: "Auto Accident Win Total Amount Awarded",
    },
    {
      amount: "$1,200,000",
      description: "Motor vehicle Accident Total Amount Awarded",
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>Our achievements</SectionTitle>

      <AchievementGrid>
        {awards.map((award, index) => (
          <AchievementCard
            key={`mobile-award-${index}`}
            amount={award.amount}
            description={award.description}
            isDesktop={false}
            cardIndex={index}
          />
        ))}
      </AchievementGrid>

      <KnowMoreButton href="/about">
        <ButtonText>Know About US</ButtonText>
        <ArrowImage
          src="/images/Arrow_white.svg"
          alt="Arrow"
          width={27}
          height={20}
        />
      </KnowMoreButton>
    </SectionContainer>
  );
}
