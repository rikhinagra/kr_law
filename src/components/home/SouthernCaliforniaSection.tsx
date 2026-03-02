"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  @media (min-width: 1025px) {
    height: 602px;
    margin-top: 60px;
    padding: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: auto;

    min-height: 800px;
    margin-top: 60px;
    padding: 0;
    position: relative;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 1120px;
    margin-top: 40px;
    padding: 0 16px;
    position: relative;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #1b2632;

  @media (min-width: 1025px) {
    position: absolute;
    width: 598px;
    height: 230px;
    left: 0px;
    top: 40px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    position: absolute;
    width: 100%;

    max-width: 600px;
    height: auto;

    left: 0px;
    top: 0px;
    font-size: 28px;

    line-height: 44px;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    max-width: 370px;
    height: auto;
    margin: 0 auto 20px;
    font-size: 25px;
    text-align: center;
    justify-content: center;
  }
`;

const FirstParagraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #000000;

  @media (min-width: 1025px) {
    position: absolute;
    width: 638px;
    height: auto;
    left: 0px;
    top: 235px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    position: absolute;
    width: 100%;

    height: auto;

    min-height: 108px;
    left: 0px;
    top: 70px;
    font-size: 17px;
    line-height: 26px;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    max-width: 370px;
    height: auto;
    margin: 0 auto 20px;
    text-align: justify;
  }
`;

const SecondParagraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #000000;

  @media (min-width: 1025px) {
    position: absolute;
    width: 638px;
    height: auto;
    left: 0px;
    top: 375px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    position: absolute;
    width: 100%;

    height: auto;

    left: 0px;
    top: 180px;
    font-size: 17px;
    line-height: 26px;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    max-width: 370px;
    height: auto;
    margin: 0 auto 30px;
    text-align: justify;
  }
`;

const PhotoContainer = styled.div`
  position: relative;

  @media (min-width: 1025px) {
    position: absolute;
    width: 700px;
    height: 650px;
    right: 0;
    top: 0;
    overflow: visible;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    position: absolute;
    width: 550px;
    height: 580px;
    left: 50%;
    transform: translateX(-50%);
    top: 320px;
    overflow: visible;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    max-width: 490px;
    height: auto;
    margin: 0 auto;
    overflow: visible;
  }
`;

const DarkRectangle = styled.div`
  position: absolute;
  background: #1b2632;
  box-shadow: 6px 10px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  @media (min-width: 1025px) {
    width: 430px;
    height: 433px;
    right: 50px;
    top: 50px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 400px;
    height: 400px;
    left: 50%;
    transform: translateX(-50%);
    top: 50px;
  }

  @media (max-width: 768px) {
    width: 350px;

    height: 350px;
    left: 50%;
    transform: translateX(-50%);
    top: 50px;
  }
`;

const LightRectangle = styled.div`
  position: absolute;
  background: linear-gradient(0deg, #ffffff, #ffffff), #d9d9d9;
  box-shadow: 6px 10px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  @media (min-width: 1025px) {
    width: 430px;
    height: 433px;
    right: 80px;
    top: 80px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 400px;
    height: 400px;
    left: 48%;
    transform: translateX(-50%);
    top: 70px;
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
    left: 48%;
    transform: translateX(-50%);
    top: 70px;
  }
`;

const LawyerImage = styled(Image)`
  position: absolute;
  object-fit: contain;
  z-index: 3;

  @media (min-width: 1025px) {
    width: 580px;
    height: 650px;
    right: 20px;
    top: -38px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 550px;
    height: 620px;
    left: 50%;
    transform: translateX(-50%);
    top: -54px;
  }

  @media (max-width: 768px) {
    width: 480px;
    height: 580px;
    left: 50%;
    transform: translateX(-50%);
    top: -57px;
  }
`;

const CTAButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
  background: #1b2632;
  box-shadow: 7px 9px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: #2a3c4d;
    transform: translateY(-2px);
  }

  @media (min-width: 1025px) {
    position: absolute;
    width: 390px;
    height: 58px;
    left: 0px;
    top: 530px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    position: absolute;
    width: 390px;
    height: 58px;
    left: 50%;
    transform: translateX(-50%);
    top: 860px;
    margin: 0;

    &:hover {
      transform: translateX(-50%) translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    width: 100%;
    max-width: 350px;
    height: 56px;
    left: 50%;
    transform: translateX(-50%);
    top: 1050px;
    margin: 0;
    z-index: 20;

    &:hover {
      transform: translateX(-50%) translateY(-2px);
    }
  }
`;

const ButtonText = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #fafaf9;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  white-space: nowrap;

  ${CTAButton}:hover & {
    opacity: 1;
  }

  @media (min-width: 1025px) {
    width: 329px;
    height: 30px;
    font-size: 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 290px;
    height: 27px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    width: 296px;
    height: 27px;
    font-size: 18px;
    line-height: 27px;
  }
`;

const ArrowImage = styled(Image)`
  transition: transform 0.3s ease;
  height: auto;

  ${CTAButton}:hover & {
    transform: translateX(3px);
  }
`;

export default function SouthernCaliforniaSection() {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById("hero-contact-form");

    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        const formRect = contactForm.getBoundingClientRect();
        const absoluteTop = window.pageYOffset + formRect.top;

        window.scrollTo({
          top: absoluteTop,
          behavior: "smooth",
        });
      }, 100);
    } else {
      window.scrollTo({
        top: 0,

        behavior: "smooth",
      });

      console.log("Contact form element not found");
    }
  };

  return (
    <SectionContainer>
      <SectionTitle>
        SOUTHERN CALIFORNIA PERSONAL INJURY AND CAR ACCIDENT ATTORNEYS
      </SectionTitle>

      <FirstParagraph>
        At KR Law, APC, we will fight to make sure you get the money that you
        deserve. Many law firms will simply hand your case off to a paralegal or
        a case manager, at KR Law you will work one-on-one with an attorney the
        entire time.
      </FirstParagraph>

      <SecondParagraph>
        Not every law firm is right for everyone. When hiring a law firm, it is
        important to know how many cases they have won, if they tend to "settle
        out of court every time" or go to trial if needed. At KR Law, APC, we
        pride ourselves in doing what is best for our clients. And our numbers
        simply speak for themselves, so we though we would share them.
      </SecondParagraph>

      <PhotoContainer>
        <DarkRectangle />
        <LightRectangle />
        <LawyerImage
          src="/images/lawyer-image-3.webp"
          alt="Kathy Rabii - Southern California Personal Injury Attorney"
          width={550}
          height={600}
          priority
        />
      </PhotoContainer>

      <CTAButton
        onClick={scrollToContactForm}
        aria-label="Schedule a free consultation"
      >
        <ButtonText>Schedule A Free Consultation Now</ButtonText>
        <ArrowImage
          src="/images/Arrow_white.svg"
          alt="Arrow"
          width={27}
          height={20}
        />
      </CTAButton>
    </SectionContainer>
  );
}
