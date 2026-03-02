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
    padding: 40px 0;
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

const ImageContainer = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  align-self: center;

  @media (min-width: 1025px) {
    width: 473px;
    height: 428px;
    flex-shrink: 0;
    margin-top: 40px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    height: 0;
    padding-bottom: 70%;
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 0;
    padding-bottom: 82%;
    max-width: 370px;
  }
`;

const ResponsiveImage = styled(Image)`
  object-fit: cover;
  object-position: center center;

  @media (min-width: 769px) and (max-width: 1024px) {
    object-position: center center;
  }
`;

export default function OffHighwayAccidentsSection() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <SectionTitle>Reporting Off-Highway Accidents</SectionTitle>

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
              Drivers are required by law to report car accidents to the
              California Highway Patrol or local police within 24 hours if it
              involves bodily injury or death, regardless of whether the
              accident happened on a street/highway or private property.
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
              If the accident resulted in property damage exceeding $1,000, or
              injury or death, the accident must be reported to the DMV within
              10 days using Form SR-1.
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
              However, it is important to note that reporting requirements may
              differ for off-highway accidents, such as those that occur on
              private land or in parking lots.
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
              While there is no legal requirement to report off-highway
              accidents to the DMV, it is recommended that drivers report any
              accident to their insurance company, as some policies may require
              it.
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
              It is also advisable to seek the services of an attorney after any
              car accident, regardless of whether it occurred on a
              street/highway or off-highway.
            </PointText>
          </PointContainer>
        </TextContent>

        <ImageContainer>
          <ResponsiveImage
            src="/images/car-highway-accident.webp"
            alt="Off-highway accident scene showing a parking lot or private property accident"
            fill
            sizes="(min-width: 1025px) 473px, (min-width: 769px) 600px, 370px"
            priority
          />
        </ImageContainer>
      </ContentWrapper>
    </SectionContainer>
  );
}
