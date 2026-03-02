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

const ImageContainer = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  align-self: center;
  margin-top: 20px;

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

export default function AirbnbLawsuitSection() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <SectionTitle>
            How Do I File a Lawsuit Against Airbnb in California?
          </SectionTitle>

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
              To file a lawsuit against Airbnb in California, there are a few
              key steps you should take. First and foremost, it's important to
              make sure that you are using the correct legal entity. As per,
              suing the wrong company can result in your case being dismissed.
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
              Next, you should try to resolve the issue through Airbnb's
              customer service or by filing a complaint, as outlined. If a
              resolution cannot be reached, you may want to consider reaching
              out to an attorney who is experienced in handling legal issues
              related to Airbnb, such as the team at.
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
              Ultimately, the process of filing a lawsuit against Airbnb can be
              complex and time-consuming, which is why it's important to have
              expert legal guidance and support every step of the way. By
              working with an experienced attorney, you can ensure that your
              rights are protected and that you have the best possible chance of
              achieving a successful outcome.
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
              Our attorneys have successfully represented clients in cases
              against Airbnb and can help you navigate the complex legal
              landscape, including addressing issues with Airbnb's arbitration
              clause that often presents challenges for potential litigants.
            </PointText>
          </PointContainer>
        </TextContent>

        <ImageContainer>
          <ResponsiveImage
            src="/images/airbnb-lawsuit.webp"
            alt="Airbnb lawsuit legal concept"
            fill
            sizes="(min-width: 1025px) 473px, (min-width: 769px) 600px, 370px"
            priority
          />
        </ImageContainer>
      </ContentWrapper>
    </SectionContainer>
  );
}
