"use client";
import styled from "styled-components";
import Image from "next/image";

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;

  @media (min-width: 769px) {
    background: #f5f5f5;
  }

  @media (min-width: 1025px) {
    padding: 80px 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 60px 0;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 1025px) {
    padding: 0 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 30px;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    flex-direction: column;
    align-items: center;
  }
`;

const TextContent = styled.div`
  @media (min-width: 1025px) {
    max-width: 684px;
    margin-right: 40px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 370px;
    margin-bottom: 30px;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #000000;
  margin-bottom: 40px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 28px;
    line-height: 42px;
    margin-bottom: 35px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    margin: 0 auto 30px;
    max-width: 341px;
  }
`;

const PointContainer = styled.div`
  display: flex;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ArrowContainer = styled.div`
  margin-right: 25px;
  margin-top: 12px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-right: 15px;
    margin-top: 8px;

    width: 30px;
    margin-left: -10px;
  }
`;

const ArrowImage = styled(Image)`
  display: block;

  @media (max-width: 768px) {
    width: 45px !important;
    height: 6px !important;
  }
`;

const PointText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #000000;
  flex: 1;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    line-height: 26px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    text-align: left;
  }

  strong {
    font-weight: 600;
  }
`;

const ImagesContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1025px) {
    width: 473px;
    flex-shrink: 0;
    margin-top: 80px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;

    display: flex;
    align-items: center;
    margin: 20px 0 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 370px;
    gap: 15px;
    margin-top: 10px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #1b2632;

  @media (min-width: 1025px) {
    height: 300px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 500px;
    height: 250px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const ResponsiveImage = styled(Image)`
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  opacity: 0.6;
`;

export default function UberQuickFactsSection() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <SectionTitle>Quick Facts About Uber:</SectionTitle>

          <PointContainer>
            <ArrowContainer>
              <ArrowImage
                src="/images/ArrowRight.svg"
                alt="Arrow"
                width={60}
                height={9}
              />
            </ArrowContainer>
            <PointText>
              Uber was founded in 2009 and is headquartered in San Francisco,
              California.
            </PointText>
          </PointContainer>

          <PointContainer>
            <ArrowContainer>
              <ArrowImage
                src="/images/ArrowRight.svg"
                alt="Arrow"
                width={60}
                height={9}
              />
            </ArrowContainer>
            <PointText>
              The company operates in over 10,000 cities worldwide and has more
              than 110 million active users.
            </PointText>
          </PointContainer>

          <PointContainer>
            <ArrowContainer>
              <ArrowImage
                src="/images/ArrowRight.svg"
                alt="Arrow"
                width={60}
                height={9}
              />
            </ArrowContainer>
            <PointText>
              Uber's business model is based on a mobile app that allows users
              to request a ride and pay for it using their smartphone.
            </PointText>
          </PointContainer>

          <PointContainer>
            <ArrowContainer>
              <ArrowImage
                src="/images/ArrowRight.svg"
                alt="Arrow"
                width={60}
                height={9}
              />
            </ArrowContainer>
            <PointText>
              In addition to traditional ride-sharing services, Uber also offers
              food delivery (Uber Eats) and freight transportation (Uber
              Freight) services.
            </PointText>
          </PointContainer>

          <PointContainer>
            <ArrowContainer>
              <ArrowImage
                src="/images/ArrowRight.svg"
                alt="Arrow"
                width={60}
                height={9}
              />
            </ArrowContainer>
            <PointText>
              Uber has faced controversy over issues such as safety, driver pay,
              and regulatory compliance in various markets around the world.
            </PointText>
          </PointContainer>

          <PointContainer>
            <ArrowContainer>
              <ArrowImage
                src="/images/ArrowRight.svg"
                alt="Arrow"
                width={60}
                height={9}
              />
            </ArrowContainer>
            <PointText>
              Despite these challenges, Uber has been one of the fastest-growing
              companies in recent years, with a valuation of over $100 billion
              as of 2021.
            </PointText>
          </PointContainer>

          <PointContainer>
            <ArrowContainer>
              <ArrowImage
                src="/images/ArrowRight.svg"
                alt="Arrow"
                width={60}
                height={9}
              />
            </ArrowContainer>
            <PointText>
              In terms of safety measures, Uber has implemented several features
              such as driver background checks, real-time GPS tracking, and
              in-app emergency assistance to ensure the safety of both
              passengers and drivers.
            </PointText>
          </PointContainer>
        </TextContent>

        <ImagesContainer>
          <ImageContainer>
            <ResponsiveImage
              src="/images/uber-quick-fact001.webp"
              alt="Uber ride-sharing service"
              width={497}
              height={300}
              priority
            />
          </ImageContainer>
          <ImageContainer>
            <ResponsiveImage
              src="/images/uber-quick-fact002.webp"
              alt="Uber mobile app interface"
              width={497}
              height={300}
              priority
            />
          </ImageContainer>
        </ImagesContainer>
      </ContentWrapper>
    </SectionContainer>
  );
}
