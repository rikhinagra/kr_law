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

export default function UberAccidentContent() {
  return (
    <>
      <ContentSection>
        <ContentWrapper>
          <TextContent>
            <SubHeading>Uber Accident Lawyers</SubHeading>

            <Paragraph>
              If you've been involved in an Uber accident, you need experienced
              legal representation. The consequences of an accident can be
              severe and may have a significant impact on your life. At KR Law,
              we understand the challenges you face and are here to help you
              every step of the way.
            </Paragraph>

            <Paragraph>
              Our team of dedicated attorneys has extensive experience in
              dealing with Uber accident cases. We understand the complex legal
              and insurance issues that can arise in these cases and will work
              tirelessly to ensure that you receive the compensation you
              deserve.
            </Paragraph>

            <Paragraph>
              When you hire us, we will conduct a thorough investigation of your
              case, including reviewing police reports, witness statements, and
              medical records. We will work with medical professionals to ensure
              that you receive the best possible care for your injuries. We will
              also negotiate with insurance companies to ensure that you receive
              a fair settlement.
            </Paragraph>

            <FullWidthParagraph>
              We know that dealing with the aftermath of an Uber accident can be
              overwhelming, which is why we are committed to providing you with
              the support and guidance you need. Our team will keep you informed
              every step of the way and answer any questions you may have.
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
