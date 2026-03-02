"use client";
import styled from "styled-components";
import PracticeAreaContactForm from "../common/PracticeAreaContactForm";

const ContentSection = styled.section`
  position: relative;
  width: 100%;
  margin-top: -100px;
  /* padding-bottom: 80px; */

  @media (min-width: 1025px) {
    margin-top: -120px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: -80px;
  }

  @media (max-width: 768px) {
    margin-top: -60px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  position: relative;

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
  width: 100%;
  max-width: 600px;
  margin-top: 220px;

  @media (min-width: 1025px) {
    margin-right: 70px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 100%;
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 530px;
    margin-top: 80px;
  }
`;

const Paragraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 25px;

  strong {
    font-weight: 600;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    line-height: 26px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
    text-align: left;
  }
`;

const SubHeading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #000000;
  margin: 40px 0 25px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 28px;
    line-height: 42px;
    margin: 35px 0 20px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    margin: 30px 0 20px;
    text-align: left;
  }
`;

const FormContainer = styled.div`
  position: absolute;
  right: 0;
  top: 80px;
  z-index: 10;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MobileFormContainer = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    width: 100%;

    margin: 40px auto;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 600px;
  }

  @media (max-width: 768px) {
    max-width: 500px;
  }
`;

const FullWidthParagraph = styled(Paragraph)`
  @media (min-width: 1025px) {
    max-width: 100%;
    width: 100%;
  }
`;

const BottomContentWrapper = styled.div`
  max-width: 1280px;
  margin: 10px auto 0;
  padding: 0 20px;
  width: 100%;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 30px;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    margin-top: 5px;
  }
`;

export default function CaliforniaContent() {
  return (
    <>
      <ContentSection>
        <ContentWrapper>
          <TextContent>
            <Paragraph>
              No one wants to be in a car accident, but unfortunately, they
              happen all the time. In fact, there are about 6 million car
              accidents in the US every year – that's <strong>16,438</strong>{" "}
              per day!
            </Paragraph>

            <Paragraph>
              So even if you're a safe driver, it's likely that you'll be
              involved in an accident at some point.
            </Paragraph>

            <Paragraph>
              If you do find yourself in an accident, it's important to know
              what to do next. The following information will help you stay safe
              and protect your interests.
            </Paragraph>

            <SubHeading>What are "CALIFORNIA "AT FAULT" ACCIDENTS"?</SubHeading>

            <Paragraph>
              In California, an "at-fault" accident refers to a situation where
              one driver is deemed responsible for causing the accident. This
              determination is usually made by the insurance companies involved
              in the accident, and it is based on their investigation and
              analysis of the facts surrounding the accident.
            </Paragraph>

            <FullWidthParagraph>
              Under California's at-fault insurance system, the driver who is
              found to be at fault for the accident is responsible for paying
              for damages to the other driver's vehicle, as well as for any
              injuries sustained by the other driver and their passengers.
            </FullWidthParagraph>
          </TextContent>

          <FormContainer>
            <PracticeAreaContactForm />
          </FormContainer>
        </ContentWrapper>
      </ContentSection>

      <BottomContentWrapper>
        <Paragraph>
          It's worth noting that California is a "comparative fault" state,
          which means that even if you are found to be partially at fault for an
          accident, you may still be able to recover damages from the other
          driver or their insurance company. However, the number of damages you
          can recover will be reduced in proportion to your level of fault in
          the accident.
        </Paragraph>
      </BottomContentWrapper>

      <MobileFormContainer>
        <div
          id="mobile-form-marker"
          style={{
            height: "1px",
            visibility: "hidden",
          }}
        ></div>
        <PracticeAreaContactForm />
      </MobileFormContainer>
    </>
  );
}
