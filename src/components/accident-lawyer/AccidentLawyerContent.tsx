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

export default function AccidentLawyerContent() {
  return (
    <>
      <ContentSection>
        <ContentWrapper>
          <TextContent>
            <SubHeading>Accident Lawyer</SubHeading>

            <Paragraph>
              Accidents can happen at any time, and they can be life-changing.
              They can result in severe injuries, trauma, and financial burdens.
              If you have been injured in an accident, it is essential to seek
              the help of an experienced accident lawyer. They can help you
              navigate the complex legal system and fight for the compensation
              you deserve.
            </Paragraph>

            <Paragraph>
              At our law firm, we understand that accidents can be overwhelming,
              and we are here to help you through this difficult time. Our team
              of skilled accident lawyers is dedicated to representing clients
              who have been injured in all types of accidents, including car
              accidents, slips and falls and workplace accidents.
            </Paragraph>

            <Paragraph>
              We believe that our clients deserve the best possible outcome
              after an accident, which is why we work tirelessly to help them
              get the compensation they need to recover fully. We understand
              that money may not be a guarantee of a full recovery, but it can
              certainly help ease the financial burden and provide a sense of
              security during a challenging time.
            </Paragraph>
          </TextContent>

          <FormContainer>
            <PracticeAreaContactForm />
          </FormContainer>
        </ContentWrapper>
      </ContentSection>

      <BottomContentWrapper>
        <Paragraph>
          Our accident attorneys have extensive experience handling a wide
          variety of personal injury cases and understand the physical,
          emotional, and financial toll that accidents can take on victims and
          their families. We approach each case with compassion and dedication,
          fighting aggressively for our clients' rights while providing
          supportive guidance throughout the legal process. When you choose KR
          Law to represent you in your accident case, you're not just getting
          legal representation – you're gaining a team of advocates who will
          stand by your side every step of the way. We handle all aspects of
          your claim, from gathering evidence and interviewing witnesses to
          negotiating with insurance companies and, if necessary, representing
          you in court.
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
