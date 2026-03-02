"use client";
import styled from "styled-components";

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  background: #1b2632;
  background-image: url("/images/lawPracticeArea.webp");
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  overflow: hidden;

  @media (min-width: 1025px) {
    height: 342px;
    margin-top: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 300px;
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    height: 250px;
    margin-top: 40px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 1263px;
  margin: 0 auto;

  @media (min-width: 1025px) {
    padding: 0 100px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 50px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  color: #fffefe;
  margin: 0;
  max-width: 800px;

  @media (min-width: 1025px) {
    font-size: 39px;
    line-height: 58px;
    width: 616px;
    margin-top: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 32px;
    line-height: 48px;
    width: 100%;
    max-width: 580px;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 30px;

    width: 100%;
    max-width: 300px;
    margin-top: 0;
  }
`;

const HorizontalLine = styled.div`
  border: 1px solid #ffffff;
  position: absolute;

  &:first-of-type {
    @media (min-width: 1025px) {
      width: 300px;
      left: 75px;
      top: 72px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      width: 22%;

      left: 25px;
      top: 62px;
    }

    @media (max-width: 768px) {
      width: 80%;
      max-width: 366px;
      left: 50%;
      transform: translateX(-50%);
      top: 58px;
    }
  }

  &:last-of-type {
    @media (min-width: 1025px) {
      width: 300px;
      right: 75px;
      top: 72px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      width: 22%;

      right: 25px;
      top: 62px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0;
  max-width: 800px;

  @media (min-width: 1025px) {
    font-size: 18px;
    line-height: 27px;
    width: 616px;
    text-align: center;
    align-items: center;
    display: flex;
    margin-top: 90px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    max-width: 580px;
    text-align: center;
    margin-top: 75px;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 21px;

    width: 100%;
    max-width: 370px;
    text-align: center;
    margin-top: 65px;
    padding: 0 10px;
  }
`;

export default function PracticeAreas() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionTitle>LAW PRACTICE AREAS</SectionTitle>
        <HorizontalLine />
        <HorizontalLine />
        <Description>
          We are a full-fledged Personal Injury & Accident law firm. Our main
          focus is on helping our clients receive the compensation they deserve.
          The attorneys at KR Law, APC specialize in helping clients receive
          compensation for their personal injury claims.
        </Description>
      </ContentWrapper>
    </SectionContainer>
  );
}
