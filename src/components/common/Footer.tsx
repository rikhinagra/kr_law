"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useState, useEffect } from "react";

const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background: linear-gradient(
      0deg,
      rgba(27, 38, 50, 0.9),
      rgba(27, 38, 50, 0.9)
    ),
    url("/images/ourServices.webp");
  background-size: cover;
  background-position: center;
  color: #ffffff;

  @media (min-width: 1025px) {
    height: auto;
    min-height: 550px;
    padding: 60px 0 40px;
  }

  @media (max-width: 1024px) {
    height: auto;
    padding: 50px 16px 30px;
  }
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    height: 100%;
    padding: 0 20px;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const AddressSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    width: 50%;
    max-width: 560px;
    margin-bottom: 40px;
    margin-top: 20px;
    order: 1;
  }

  @media (max-width: 1024px) {
    margin: 40px 0 30px;
    align-items: center;
    order: 3;
  }
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }
`;

const LocationIcon = styled.div`
  margin-right: 16px;

  @media (max-width: 1024px) {
    margin-right: 16px;
    margin-bottom: 0;
    margin-top: 3px;
  }

  @media (max-width: 768px) {
    margin-right: 12px;
  }
`;

const LocationIconImage = styled(Image)`
  @media (max-width: 1024px) {
    width: 30px !important;
    height: 30px !important;
  }

  @media (max-width: 768px) {
    width: 24px !important;
    height: 24px !important;
  }
`;

const AddressContent = styled.div`
  @media (max-width: 1024px) {
    text-align: left;
  }
`;

const MainAddress = styled.h3`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 110%;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 22px;
    line-height: 110%;
  }
`;

const FullAddress = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 110%;
  letter-spacing: -0.03em;
  color: #919191;
  margin: 10px 0 20px;

  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 140%;
    margin: 8px 0 16px;
  }
`;

const ViewOnMaps = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.03em;
  text-decoration-line: underline;
  color: #ffffff;
  display: inline-block;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const ContactCard = styled.div`
  background: #d9d9d9;
  border-radius: 25px;
  color: #000000;
  /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); */

  @media (min-width: 1025px) {
    width: 45%;
    max-width: 600px;
    padding: 40px;
    margin-left: auto;
    order: 2;
  }

  @media (max-width: 1024px) {
    background: transparent;
    padding: 0;
    text-align: center;
    margin-bottom: 20px;
    color: #ffffff;
    order: 1;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1025px) {
    margin: 0;
    order: 2;
  }

  @media (max-width: 1024px) {
    margin-bottom: 20px;
    order: 1;
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: row;
`;

const LogoName = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  margin: 0;

  @media (min-width: 1025px) {
    color: #000000;
    font-size: 22px;
  }

  @media (max-width: 1024px) {
    color: #ffffff;
  }
`;

const LogoSubtitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.26em;
  margin: 0;

  @media (min-width: 1025px) {
    color: #000000;
    font-size: 12px;
    margin-top: 2px;
  }

  @media (max-width: 1024px) {
    color: #ffffff;
  }
`;

const ContactTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 110%;
  letter-spacing: -0.03em;
  margin: 0 0 15px;
  max-width: 460px;

  @media (max-width: 1024px) {
    font-size: 20px;
    margin: 20px auto 15px;
    text-align: center;
    line-height: 130%;
  }
`;

const ConsultText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: -0.03em;
  margin: 0 0 30px;
  max-width: 460px;

  @media (max-width: 1024px) {
    margin: 0 auto 20px;
    text-align: center;
  }
`;

const CallAndLogoContainer = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const CallButton = styled(Link)`
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
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 7px 12px 6px rgba(0, 0, 0, 0.3),
      inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 1025px) {
    width: auto;
    margin-bottom: 0;
    padding: 14px 12px;
    min-width: 210px;
    order: 1;
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 302px;
    background: #ffffff;
    margin: 0 auto 30px;
    order: 3;
  }
`;

const ButtonText = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #fafaf9;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  white-space: nowrap;

  ${CallButton}:hover & {
    opacity: 1;
  }

  @media (min-width: 1025px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 1024px) {
    color: #1b2632;
    font-size: 18px;
  }
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 1025px) {
    margin-top: 20px;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    margin-top: 0;
    margin-bottom: 30px;
    order: 4;
  }
`;

const EmailIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmailAddress = styled.a`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 1025px) {
    color: #000000;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 25px;

  @media (min-width: 1025px) {
    justify-content: flex-start;
    margin-top: 25px;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    margin-top: 20px;
    order: 5;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #ffffff;
  border-radius: 50%;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 1025px) {
    background: #1b2632;
  }

  @media (max-width: 1024px) {
    background: #ffffff;
    width: 36px;
    height: 36px;
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;

  @media (min-width: 1025px) {
    padding-top: 50px;
    width: 100%;
    margin-top: 60px;
    flex-direction: row;
    justify-content: space-between;
    order: 3;
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    order: 4;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;

  @media (min-width: 1025px) {
    margin-bottom: 0;
    justify-content: flex-end;
    order: 2;
    flex-wrap: wrap;
  }
  @media (max-width: 1024px) {
    margin-bottom: 20px;
    order: 1;
    flex-wrap: nowrap;
    width: 100%;
    justify-content: center;
  }
`;

const LegalLink = styled(Link)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.17em;
  color: #ffffff;
  margin: 0 20px;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  @media (min-width: 1025px) {
    margin: 0 0 0 40px;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 18px;

    margin: 0 10px;
    letter-spacing: 0.1em;
    white-space: nowrap;
  }
`;

const Copyright = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;
  color: #ffffff;
  margin: 0;
  opacity: 0.8;

  @media (min-width: 1025px) {
    text-align: left;
    order: 1;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    flex-direction: column;
    order: 2;
  }
`;

const AllRightsReserved = styled.span`
  @media (max-width: 1024px) {
    margin-top: 5px;
  }
`;

const ResponsiveLocationIcon = () => {
  const [iconSize, setIconSize] = useState(38);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1025) {
        setIconSize(38);
      } else if (window.innerWidth <= 768) {
        setIconSize(24);
      } else {
        setIconSize(30);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Image
      src="/images/location.svg"
      alt="Location"
      width={iconSize}
      height={iconSize}
    />
  );
};

export default function Footer() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1025);

      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <FooterContainer>
      <FooterContent>
        {isDesktop && (
          <>
            <AddressSection>
              <LocationWrapper>
                <LocationIcon>
                  <img
                    src="/images/location.svg"
                    alt="Location"
                    width="34"
                    height="34"
                  />
                </LocationIcon>
                <AddressContent>
                  <MainAddress>3055 Wilshire Blvd #1120</MainAddress>
                  <FullAddress>
                    3055 Wilshire Blvd, Los Angeles, CA 90010
                  </FullAddress>
                  <ViewOnMaps
                    href="https://maps.google.com/?q=3055+Wilshire+Blvd+%231120,+Los+Angeles,+CA+90010"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Maps
                  </ViewOnMaps>
                </AddressContent>
              </LocationWrapper>
            </AddressSection>

            <ContactCard>
              <ContactTitle>
                HAVE YOUR PERSONAL INJURY QUESTIONS ANSWERED
              </ContactTitle>
              <ConsultText>Consult With An Attorney For Free!</ConsultText>

              <CallAndLogoContainer>
                <CallButton href="tel:+12138338361">
                  <ButtonText>Call Now +1 213-833-8361</ButtonText>
                  <Image
                    src="/images/Arrow_white.svg"
                    alt="Arrow"
                    width={20}
                    height={15}
                    style={{ height: "auto" }}
                  />
                </CallButton>

                <LogoContainer>
                  <LogoName>KR LAW, APC</LogoName>
                </LogoContainer>
              </CallAndLogoContainer>

              <EmailContainer>
                <EmailIcon>
                  <Image
                    src="/images/dark-email.svg"
                    alt="Email"
                    width={24}
                    height={24}
                  />
                </EmailIcon>
                <EmailAddress href="mailto:kathy@krinjurylawfirm.com">
                  kathy@krinjurylawfirm.com
                </EmailAddress>
              </EmailContainer>

              <SocialMediaContainer>
                <SocialIcon
                  href="https://www.instagram.com/socalcrashgal?igsh=MXJ0ZnIwaXg2dHJ1dA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon
                  href="https://www.linkedin.com/in/kathy-rabii-13826256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with us on LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </SocialIcon>
              </SocialMediaContainer>
            </ContactCard>

            <FooterBottom>
              <Copyright>
                Copyright © {new Date().getFullYear()} KR LAW, APC - All rights
                reserved.
              </Copyright>
              <LegalLinks>
                <LegalLink href="/terms-of-use">Terms of Use</LegalLink>
                <LegalLink href="/privacy-policy">Privacy Policy</LegalLink>
                <LegalLink href="/anti-spam">Anti-Spam</LegalLink>
              </LegalLinks>
            </FooterBottom>
          </>
        )}

        {isMobile && (
          <>
            <LogoContainer>
              <LogoName>KR LAW, APC</LogoName>
            </LogoContainer>

            <ContactCard>
              <ContactTitle>
                HAVE YOUR PERSONAL INJURY QUESTIONS ANSWERED
              </ContactTitle>
              <ConsultText>Consult With An Attorney For Free!</ConsultText>
            </ContactCard>

            <CallButton href="tel:+12138338361">
              <ButtonText>Call Now +1 213-833-8361</ButtonText>
              <Image
                src="/images/Arrow_white.svg"
                alt="Arrow"
                width={20}
                height={15}
                style={{ height: "auto" }}
              />
            </CallButton>

            <EmailContainer>
              <EmailIcon>
                <Image
                  src="/images/light-email.svg"
                  alt="Email"
                  width={24}
                  height={24}
                />
              </EmailIcon>
              <EmailAddress href="mailto:kathy@krinjurylawfirm.com">
                kathy@krinjurylawfirm.com
              </EmailAddress>
            </EmailContainer>

            <SocialMediaContainer>
              <SocialIcon
                href="https://www.instagram.com/socalcrashgal?igsh=MXJ0ZnIwaXg2dHJ1dA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1b2632">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/in/kathy-rabii-13826256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with us on LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1b2632">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialIcon>
            </SocialMediaContainer>

            <AddressSection>
              <LocationWrapper>
                <LocationIcon>
                  {isDesktop ? (
                    <img
                      src="/images/location.svg"
                      alt="Location"
                      width="34"
                      height="34"
                    />
                  ) : (
                    <img
                      src="/images/location.svg"
                      alt="Location"
                      width={isMobile && window.innerWidth <= 768 ? "24" : "30"}
                      height={
                        isMobile && window.innerWidth <= 768 ? "24" : "30"
                      }
                    />
                  )}
                </LocationIcon>
                <AddressContent>
                  <MainAddress>3055 Wilshire Blvd #1120</MainAddress>
                  <FullAddress>
                    3055 Wilshire Blvd, Los Angeles, CA 90010
                  </FullAddress>
                  <ViewOnMaps
                    href="https://maps.google.com/?q=3055+Wilshire+Blvd+%231120,+Los+Angeles,+CA+90010"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Maps
                  </ViewOnMaps>
                </AddressContent>
              </LocationWrapper>
            </AddressSection>

            <FooterBottom>
              <LegalLinks>
                <LegalLink href="/terms-of-use">Terms of Use</LegalLink>
                <LegalLink href="/privacy-policy">Privacy Policy</LegalLink>
                <LegalLink href="/anti-spam">Anti-Spam</LegalLink>
              </LegalLinks>
              <Copyright>
                Copyright © {new Date().getFullYear()} KR LAW, APC
                <AllRightsReserved>All rights reserved.</AllRightsReserved>
              </Copyright>
            </FooterBottom>
          </>
        )}
      </FooterContent>
    </FooterContainer>
  );
}
