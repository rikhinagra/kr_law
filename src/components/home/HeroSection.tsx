"use client";
import Image from "next/image";
import styled from "styled-components";
import ContactForm from "../common/ContactForm";

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 810px;
  background: #1b2632;
  color: #fafaf9;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: auto;
    min-height: 850px;
  }
`;

const BackgroundImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  opacity: 0.5;

  @media (max-width: 768px) {
    width: 100% !important;
    left: 0 !important;
  }

  @media (min-width: 769px) {
    left: -20% !important;
    width: 120% !important;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  left: 100px;
  top: 342px;
  max-width: 545px;
  z-index: 2;

  @media (max-width: 1280px) {
    left: 50px;
    top: 300px;
  }

  @media (max-width: 1024px) {
    position: relative;
    left: 0;
    top: 0;
    max-width: 90%;
    margin: 180px auto 0;
    text-align: center;
  }

  @media (max-width: 480px) {
    margin: 120px auto 0;
  }
`;

const HeroHeading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 110%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #fafaf9;
  margin: 0 0 27px 0;

  @media (max-width: 1024px) {
    font-size: 48px;
    text-align: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 120%;
  }
`;

const PayNothing = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #fafaf9;
  opacity: 0.8;
  margin: 0;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const FormContainer = styled.div`
  position: absolute;
  width: 531px;
  height: 610px;
  right: 100px;
  top: 160px;
  z-index: 2;

  @media (max-width: 1280px) {
    right: 50px;
  }

  @media (max-width: 1024px) {
    position: relative;
    right: 0;
    top: 50px;
    width: 90%;
    max-width: 531px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    top: 30px;
    height: auto;
  }
`;

export default function HeroSection() {
  return (
    <HeroContainer>
      <BackgroundImage
        src="/images/lady-justice.webp"
        alt="Lady Justice statue symbolizing legal representation and justice at KR Law, APC"
        fill
        priority
      />

      <HeroContent>
        <HeroHeading>
          Behind Every Case Is a Person Who Deserves Care.
        </HeroHeading>
        <PayNothing>PAY NOTHING UNTIL YOU WIN !</PayNothing>
      </HeroContent>

      <FormContainer id="hero-contact-form">
        <ContactForm />
      </FormContainer>
    </HeroContainer>
  );
}
