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

export default function RentalCarLiabilitySection() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <SectionTitle>Who Is Liable in a Rental Car Accident?</SectionTitle>

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
              No two rental car accidents are the same. If you are determined to
              be at fault in a rental car accident, the outcome will depend upon
              what type of insurance you have.
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
              If the accident was caused by speeding, DUI, or any other activity
              that broke the law or otherwise violated the rental agreement,
              your claim might not qualify for coverage. You may also be liable
              for costs to the rental company, such as loss of use fees,
              diminution of value of the car, and administrative expenses.
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
              Depending on the rental company's agreement, you may be
              responsible for these additional funds. Even if you are not at
              fault, the rental car company may not want to wait for the claims
              process to finish to repair its vehicle and may charge you for
              repairs.
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
              In this case, you may have to file a claim against the other
              driver's insurance for reimbursement. Understanding the complex
              liability issues in rental car accidents requires expert legal
              guidance. Our attorneys can help determine who is liable and how
              to proceed with your claim to ensure you don't pay unnecessary
              costs.
            </PointText>
          </PointContainer>
        </TextContent>

        <ImageContainer>
          <ResponsiveImage
            src="/images/rental-car-accident-liable.webp"
            alt="Rental car accident liability concept showing damaged car and insurance documents"
            fill
            sizes="(min-width: 1025px) 473px, (min-width: 769px) 600px, 370px"
            priority
          />
        </ImageContainer>
      </ContentWrapper>
    </SectionContainer>
  );
}
