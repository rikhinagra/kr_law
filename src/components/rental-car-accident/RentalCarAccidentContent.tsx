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
    /* Removed padding-bottom: 60px; */
  }

  @media (max-width: 768px) {
    margin-top: -60px;
    /* Removed padding-bottom: 50px; */
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

export default function RentalCarAccidentContent() {
  return (
    <>
      <ContentSection>
        <ContentWrapper>
          <TextContent>
            <SubHeading>Rental Car Accident Attorney</SubHeading>

            <Paragraph>
              If you have been involved in a rental car accident, you may be
              wondering what your legal options are. Rental car accidents can be
              particularly complicated, as there may be multiple parties
              involved, including the rental car company, the other driver, and
              your own insurance company. In order to navigate this complex
              situation and ensure that your rights are protected, it is
              important to seek the guidance of an experienced rental car
              accident attorney.
            </Paragraph>

            <Paragraph>
              Our attorneys will handle these types of cases and can help you
              understand your legal rights and options. We will explore the role
              of a rental car accident attorney and how we can assist you in
              your case. With years of experience in handling rental car
              accidents, our team of expert attorneys can guide you through the
              legal process and help you get the compensation you deserve for
              your injuries and damages.
            </Paragraph>

            <FullWidthParagraph>
              We understand how stressful and overwhelming rental car accidents
              can be. That's why we are dedicated to providing compassionate and
              personalized legal representation to each and every one of our
              clients.
            </FullWidthParagraph>
          </TextContent>

          <FormContainer>
            <PracticeAreaContactForm />
          </FormContainer>
        </ContentWrapper>
      </ContentSection>

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
