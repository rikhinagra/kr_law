"use client";
import styled from "styled-components";

const HeroContainer = styled.section`
  position: relative;
  width: 100%;

  background-image: url("/images/airbnb-attorney-banner.webp");
  background-size: cover;
  background-position: center;
  background-color: rgba(27, 38, 50, 0.7);
  background-blend-mode: overlay;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (min-width: 1025px) {
    height: 622px;
    padding: 0 100px;
    background-position: center 25%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 500px;
    padding: 0 50px;
  }

  @media (max-width: 768px) {
    height: 400px;
    padding: 0 20px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(27, 38, 50, 0.2) 0%,
    rgba(27, 38, 50, 0.6) 100%
  );
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const HeroContent = styled.div`
  text-align: center;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.03em;
  color: #ffffff;
  text-align: center;
  margin: 0;
  padding: 0;
  max-width: 900px;
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

  @media (min-width: 1025px) {
    font-size: 60px;
    line-height: 110%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 48px;
    line-height: 115%;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 120%;
  }
`;

const TitleFirstPart = styled.span`
  @media (max-width: 768px) {
    display: block;
    margin-bottom: 5px;
  }
`;

export default function AirbnbAttorneyHero() {
  return (
    <HeroContainer>
      <Overlay />
      <ContentWrapper>
        <HeroContent>
          <HeroTitle>
            <TitleFirstPart>Airbnb Attorney</TitleFirstPart>{" "}
          </HeroTitle>
        </HeroContent>
      </ContentWrapper>
    </HeroContainer>
  );
}
