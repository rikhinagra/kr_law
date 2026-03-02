"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  background: #ffffff;
  padding: 40px 0;
  margin: 50px 0;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 30px 0;
    margin: 40px 0;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    margin: 30px 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1025px) {
    padding: 0 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 16px;
  }
`;

const SettlementItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 1px;
  width: 295px;
  height: 103px;
  border-right: 2px solid #1b2632;

  &:last-of-type {
    border-right: none;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 240px;
    height: 100px;
    margin-bottom: 20px;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
    height: auto;
    padding: 20px 0;
    border-right: none;
    border-bottom: 1px solid #1b2632;

    &:last-of-type {
      border-bottom: none;
    }
  }
`;

const CaseType = styled.h3`
  width: auto;
  height: 30px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #919191;
  margin: 0;
  text-align: center;
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
    line-height: 27px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }
`;

const SettlementAmount = styled.div`
  width: auto;
  height: 41px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 40px;
  letter-spacing: -0.02em;
  color: #000000;
  margin: 0;
  text-align: center;
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 24px;
    line-height: 36px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    margin: 5px 0;
  }
`;

const TotalText = styled.div`
  width: auto;
  height: 30px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #919191;
  margin: 0;
  text-align: center;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const ConsultationButton = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
  width: 231px;
  height: 58px;
  background: #1b2632;
  box-shadow: 7px 9px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #2a3c4d;
    transform: translateY(-2px);
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 220px;
    height: 50px;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
    height: 50px;
    margin-top: 20px;
  }
`;

const ButtonText = styled.span`
  width: auto;
  height: 30px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #fafaf9;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  ${ConsultationButton}:hover & {
    opacity: 1;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    line-height: 27px;
  }

  @media (max-width: 768px) {
    font-size: 17px;
    line-height: 27px;
    justify-content: center;
  }
`;

const ArrowIcon = styled(Image)`
  transition: transform 0.3s ease;

  ${ConsultationButton}:hover & {
    transform: translateX(3px);
  }
`;

export default function SettlementsBanner() {
  const settlements = [
    {
      type: "Government Claim",
      amount: "$6,250,000",
      text: "Total amount awarded",
    },
    {
      type: "Premises Liability",
      amount: "$1,175,000",
      text: "Total amount awarded",
    },
    {
      type: "Truck Accident",
      amount: "$6,000,000",
      text: "Total amount awarded",
    },
  ];

  const handleConsultationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const windowWidth = window.innerWidth;

    let targetId = windowWidth <= 768 ? "contact-form-mobile" : "contact-form";

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "#contact-form";
    }
  };

  return (
    <BannerContainer>
      <ContentWrapper>
        {settlements.map((settlement, index) => (
          <SettlementItem key={index}>
            <CaseType>{settlement.type}</CaseType>
            <SettlementAmount>{settlement.amount}</SettlementAmount>
            <TotalText>{settlement.text}</TotalText>
          </SettlementItem>
        ))}
        <ConsultationButton
          href="#contact-form"
          onClick={handleConsultationClick}
        >
          <ButtonText>Free Consultation</ButtonText>
          <ArrowIcon
            src="/images/Arrow_white.svg"
            alt="Arrow"
            width={27}
            height={20}
          />
        </ConsultationButton>
      </ContentWrapper>
    </BannerContainer>
  );
}
