"use client";
import styled from "styled-components";
import Link from "next/link";

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

const Subtitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  color: #1b2632;
  margin-top: 0px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ContentSection = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #333333;
  margin-bottom: 20px;

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

export default function TermsOfUseContent() {
  return (
    <>
      <HeroSection>
        <ContentWrapper>
          <PageTitle>Terms and Conditions</PageTitle>
          <LastUpdated>Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</LastUpdated>
        </ContentWrapper>
      </HeroSection>
      <PageContainer>
        <ContentWrapper>

        <Subtitle>SMS/Text Messaging Terms</Subtitle>

        <ContentSection>
          By opting in to receive SMS/text messages from <strong>KR Law, APC</strong> ("the Firm"), you agree to receive messages related to your legal matter, including appointment reminders, case updates, intake communications, account or document notifications, and other messages necessary to provide legal services or respond to inquiries.
        </ContentSection>

        <ContentSection>
          Message frequency may vary based on your interaction with the Firm. Message and data rates may apply.
        </ContentSection>

        <ContentSection>
          <strong>You may opt out of SMS messages at any time by replying STOP</strong>, and you may request assistance at any time by replying HELP.
        </ContentSection>

        <ContentSection>
          SMS messages may be sent by our staff or through third-party service providers such as RingCentral. <strong>SMS consent is not shared with third parties or affiliates.</strong>
        </ContentSection>

        <ContentSection>
          By submitting your phone number, you confirm you are the account holder or have permission to provide this number for communications.
        </ContentSection>

        <ContentSection>
          For more information on how we collect, use, and protect your information, please visit our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </ContentSection>

        <Subtitle>General Terms of Service</Subtitle>

        <ContentSection>
          By using our website or services, you agree to comply with all applicable laws and regulations. The content on this website is for informational purposes only and does not constitute legal advice. Communication through this website does not establish an attorney-client relationship.
        </ContentSection>

        <ContentSection>
          All information provided through our website or forms is subject to our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </ContentSection>

        <ContentSection>
          We reserve the right to modify these Terms of Use at any time. Changes will be posted on this page with an updated effective date.
        </ContentSection>

        <ContentSection>
          For questions or concerns about these Terms of Use, please contact us at{" "}
          <a href="tel:+12138338361">+1 213-833-8361</a> or{" "}
          <a href="mailto:kathy@krinjurylawfirm.com">kathy@krinjurylawfirm.com</a>.
        </ContentSection>
        </ContentWrapper>
      </PageContainer>
    </>
  );
}
