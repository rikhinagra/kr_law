"use client";
import styled from "styled-components";
import { AchievementCardProps } from "@/types";

interface StyledCardProps {
  $isDesktop?: boolean;
  $cardIndex?: number;
}

const CardContainer = styled.div<StyledCardProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  @media (min-width: 1025px) {
    position: ${(props) => (props.$isDesktop ? "absolute" : "relative")};
    padding: ${(props) =>
      props.$cardIndex === 1 ? "9px 7px 6px" : "12px 7px 6px"};
    gap: 14px;

    ${(props) => {
      if (props.$isDesktop && props.$cardIndex !== undefined) {
        switch (props.$cardIndex) {
          case 0:
            return `
              width: 318px;
              height: 134px;
              left: 0;
              top: 255px;
            `;
          case 1:
            return `
              width: 407px;
              height: 134px;
              left: 335px;
              top: 255px;
            `;
          case 2:
            return `
              width: 407px;
              height: 134px;
              left: 0;
              top: 405px;
            `;
          case 3:
            return `
              width: 318px;
              height: 134px;
              left: 424px;
              top: 405px;
            `;
          default:
            return "";
        }
      }
      return "";
    }}
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    position: ${(props) => (props.$isDesktop ? "relative" : "relative")};
    padding: 12px 10px 8px;
    gap: 10px;
    width: ${(props) => (props.$isDesktop ? "45%" : "100%")};
    height: auto;
    min-height: 120px;
    margin: ${(props) => (props.$isDesktop ? "15px auto" : "10px auto 0")};
    display: ${(props) => (props.$isDesktop ? "inline-flex" : "flex")};

    ${(props) => {
      if (props.$isDesktop && props.$cardIndex !== undefined) {
        return `
          float: ${props.$cardIndex % 2 === 0 ? "left" : "right"};
          clear: ${props.$cardIndex % 2 === 0 ? "left" : "right"};
        `;
      }
      return "";
    }}
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.$isDesktop ? "none" : "flex")};
    padding: 10px 7px 5px;
    gap: 10px;
    width: 100%;
    height: auto;
    min-height: 100px;
    margin-top: 10px;
    box-sizing: border-box;

    &:first-of-type {
      margin-top: 12px;
    }
  }
`;

const AwardAmount = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 110%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #1b2632;
  width: 100%;
  height: 44px;

  ${(props) => {
    const cardIndex = props.className?.split("-")[1];
    if (cardIndex === "1" || cardIndex === "2") {
      return `color: #1C1917;`;
    }
    return "";
  }}

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 36px;
    height: 40px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    height: 36px;
  }
`;

const AwardDescription = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #78716c;
  width: 100%;
  height: auto;
  min-height: 56px;
  max-height: 84px;
  overflow: hidden;
  padding: 5px 0;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
    min-height: 50px;
    padding: 3px 0;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 130%;
    min-height: 45px;
    padding: 2px 0;
  }
`;

interface Props extends AchievementCardProps {
  isDesktop?: boolean;
  cardIndex?: number;
}

export default function AchievementCard({
  amount,
  description,
  isDesktop = false,
  cardIndex = 0,
}: Props) {
  return (
    <CardContainer $isDesktop={isDesktop} $cardIndex={cardIndex}>
      <AwardAmount className={`award-${cardIndex}`}>{amount}</AwardAmount>
      <AwardDescription>{description}</AwardDescription>
    </CardContainer>
  );
}
