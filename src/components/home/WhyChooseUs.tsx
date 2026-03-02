"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { LawCaseAward } from "@/types";
import AchievementCard from "@/components/common/AchievementCard";

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 1263px;
  margin: 0 auto;
  padding: 0 16px 30px;
  overflow: hidden;

  @media (min-width: 1025px) {
    height: 750px;
    margin-top: 0;
    padding: 0 0 50px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: auto;
    margin-top: 0;
    padding: 0 20px 40px;
  }

  @media (max-width: 768px) {
    height: auto;
    margin-top: 20px;
    padding-bottom: 10px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media (min-width: 1025px) {
    left: 0;
    top: 15px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  color: #1b2632;
  display: flex;
  align-items: center;
  letter-spacing: 0.1em;
  @media (min-width: 1025px) {
    position: absolute;
    width: 616px;
    height: 48px;
    left: 0;
    top: 39px;
    font-size: 32px;
    line-height: 48px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    max-width: 600px;
    text-align: center;
    justify-content: center;
    font-size: 28px;
    line-height: 40px;
    margin: 30px 0 20px;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 266px;
    height: 30px;
    margin: 0 auto 0;
    font-size: 22px;
    line-height: 30px;
    justify-content: center;
  }
`;

const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #000000;

  @media (min-width: 1025px) {
    position: absolute;
    width: 616px;
    height: 108px;
    left: 0;
    top: 113px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    max-width: 700px;
    text-align: center;
    margin: 0 auto 30px;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    max-width: 370px;
    height: auto;
    margin: 20px auto 0;
    text-align: justify;
    padding-bottom: 0;
    line-height: 24px;
  }
`;

const KnowMoreButton = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
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
  @media (min-width: 1025px) {
    position: absolute;
    width: 220px;
    height: 58px;
    left: 0;
    top: 578px;
    z-index: 10;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 220px;
    height: 58px;
    margin: 30px auto 0;
    z-index: 10;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ButtonText = styled.span`
  width: 145px;
  height: 30px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
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
`;

const ArrowImage = styled(Image)`
  transition: transform 0.3s ease;

  ${KnowMoreButton}:hover & {
    transform: translateX(3px);
  }
`;

const PhotoContainer = styled.div`
  position: relative;

  @media (min-width: 1025px) {
    position: absolute;
    width: 487px;
    height: 674px;
    left: 776px;
    top: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    max-width: 500px;
    height: 600px;
    margin: 20px auto 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 370px;
    height: 500px;
    margin: -10px auto 10px;
    position: relative;
    overflow: visible;
  }
`;

const DarkRectangle = styled.div`
  position: absolute;
  background: #1b2632;
  box-shadow: 0px 8px 20.4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  @media (min-width: 1025px) {
    width: 459px;
    height: 560px;
    left: 28px;
    top: 77px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 400px;
    height: 500px;
    left: 52%;
    transform: translateX(-50%);
    top: 70px;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 340px;
    height: 410px;
    left: 52%;
    transform: translateX(-50%);
    top: 65px;
    z-index: 1;
  }
`;

const LightRectangle = styled.div`
  position: absolute;
  background: #faf8f8;
  box-shadow: 0px 8px 20.4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  @media (min-width: 1025px) {
    width: 464px;
    height: 515px;
    left: 0;
    top: 101px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 400px;
    height: 470px;
    left: 48%;
    transform: translateX(-50%);
    top: 90px;
    z-index: 2;
  }

  @media (max-width: 768px) {
    width: 340px;
    height: 380px;
    left: 48%;
    transform: translateX(-50%);
    top: 82px;
    z-index: 2;
  }
`;

const LawyerImage = styled(Image)`
  position: absolute;
  object-fit: contain;

  @media (min-width: 1025px) {
    width: 430.52px;
    height: 660px;
    left: 10px;
    top: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 420px;
    height: 585px;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    z-index: 3;
  }

  @media (max-width: 768px) {
    width: 320px;
    height: 490px;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    z-index: 3;
  }
`;

const FounderName = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 110%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #1b2632;
  @media (min-width: 1025px) {
    position: absolute;
    width: 341px;
    height: 23px;
    left: 87px;
    top: 651px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    position: absolute;
    width: 340px;
    height: auto;
    min-height: 22px;
    left: 50%;
    transform: translateX(-50%);
    top: 580px;
    font-size: 20px;
    justify-content: center;
    text-align: center;
    background-color: rgba(250, 248, 248, 0.8);
    padding: 5px 8px;
    border-radius: 4px;
    z-index: 5;
  }

  @media (max-width: 768px) {
    position: absolute;
    width: 340px;
    height: auto;
    min-height: 22px;
    left: 50%;
    transform: translateX(-50%);
    top: 486px;
    font-size: 20px;
    justify-content: center;
    text-align: center;
    /* background-color: rgba(250, 248, 248, 0.8); */
    padding: 5px 8px;
    border-radius: 4px;
    z-index: 5;
  }
`;

const AchievementCardContainer = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const DesktopKnowMoreButton = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
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

  @media (min-width: 1025px) {
    position: absolute;
    width: 220px;
    height: 58px;
    left: 0;
    top: 578px;
    z-index: 10;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export default function WhyChooseUs() {
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
      <ContentWrapper>
        <SectionTitle>Why choose us ?</SectionTitle>
        <Description>
          At KR Law, APC, we will fight to make sure you get the money that you
          deserve. Many law firms will simply hand your case off to a paralegal
          or a case manager, at KR Law you will work one-on-one with an attorney
          the entire time.
        </Description>

        {/* Award cards - only visible on desktop */}

        <AchievementCardContainer>
          {awards.map((award, index) => (
            <AchievementCard
              key={`desktop-award-${index}`}
              amount={award.amount}
              description={award.description}
              isDesktop={true}
              cardIndex={index}
            />
          ))}
        </AchievementCardContainer>

        {/* Know More button - only visible on desktop */}
        <DesktopKnowMoreButton href="/about">
          <ButtonText>Know About US</ButtonText>
          <ArrowImage
            src="/images/Arrow_white.svg"
            alt="Arrow"
            width={27}
            height={20}
          />
        </DesktopKnowMoreButton>

        {/* Photo section */}
        <PhotoContainer>
          <DarkRectangle />
          <LightRectangle />
          <LawyerImage
            src="/images/lawyer-image-4.webp"
            alt="Kathy Rabii - Founder of KR Law, APC"
            width={410}
            height={616}
            priority
          />
          <FounderName>Kathy Rabii | Founder- KR Law, APC</FounderName>
        </PhotoContainer>
      </ContentWrapper>
    </SectionContainer>
  );
}
