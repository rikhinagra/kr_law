"use client";
import styled from "styled-components";

const HeroSection = styled.div`
  background: #1b2632;
  padding-top: 180px;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    padding-top: 150px;
    padding-bottom: 40px;
  }
`;

const PageContainer = styled.div`
  background: #ffffff;
  padding-top: 60px;
  padding-bottom: 80px;

  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 60px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 100px;

  @media (max-width: 1024px) {
    padding: 0 50px;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

const PageTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 1.2;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 15px;
  }
`;

const ContentSection = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #333333;
  margin-bottom: 30px;

  strong {
    font-weight: 600;
    color: #1b2632;
  }

  a {
    color: #1b2632;
    text-decoration: underline;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.7;
  }
`;

const LastUpdated = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #cccccc;
  text-align: center;
  margin-bottom: 0;
  font-style: italic;
`;

export default function PrivacyPolicyContent() {
  return (
    <>
      <HeroSection>
        <ContentWrapper>
          <PageTitle>Privacy Policy</PageTitle>
          <LastUpdated>Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</LastUpdated>
        </ContentWrapper>
      </HeroSection>
      <PageContainer>
        <ContentWrapper>

        <ContentSection>
          <strong>KR Law, APC</strong> ("we" or "our Firm") is committed to protecting your privacy. We collect personal information that you voluntarily provide, including your name, phone number, email address, and any details related to your legal matter. We may also collect limited technical information when you use our website, such as IP address and browser data.
        </ContentSection>

        <ContentSection>
          We use this information to respond to inquiries, evaluate cases, provide legal services, communicate with you (including by phone, email, and SMS with your consent), and operate or improve our website and client services.
        </ContentSection>

        <ContentSection>
          <strong>We do not sell your personal information.</strong> We share information only with trusted service providers who assist our operations—such as RingCentral for phone and text messaging—and only as needed to provide services or comply with law.
        </ContentSection>

        <ContentSection>
          <strong>SMS consent is not shared with third parties or affiliates.</strong> You may opt out of SMS messages at any time by replying "STOP." California residents may request to access, correct, or delete their personal information, subject to legal limitations.
        </ContentSection>

        <ContentSection>
          By using our website or submitting information to us, you consent to this Privacy Policy. We may update this policy periodically, and any changes will be posted on this page.
        </ContentSection>

        <ContentSection>
          For questions, please contact us at{" "}
          <a href="tel:+12138338361">+1 213-833-8361</a> or{" "}
          <a href="mailto:kathy@krinjurylawfirm.com">kathy@krinjurylawfirm.com</a>.
        </ContentSection>
        </ContentWrapper>
      </PageContainer>
    </>
  );
}
