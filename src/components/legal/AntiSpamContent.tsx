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
  min-height: 100vh;
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
  margin-top: 30px;
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

  ul {
    margin: 15px 0;
    padding-left: 30px;
  }

  li {
    margin-bottom: 10px;
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

export default function AntiSpamContent() {
  return (
    <>
      <HeroSection>
        <ContentWrapper>
          <PageTitle>Anti-Spam Policy</PageTitle>
          <LastUpdated>Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</LastUpdated>
        </ContentWrapper>
      </HeroSection>
      <PageContainer>
        <ContentWrapper>

        <ContentSection>
          <strong>KR Law, APC</strong> is committed to responsible communication practices and respects your right to privacy. We comply with all applicable anti-spam laws, including the CAN-SPAM Act and the Telephone Consumer Protection Act (TCPA).
        </ContentSection>

        <Subtitle>Our Commitment</Subtitle>

        <ContentSection>
          We will only send you communications (email, SMS, or phone calls) if:
          <ul>
            <li>You have explicitly opted in to receive communications from us</li>
            <li>You have an existing relationship with our firm (current or prospective client)</li>
            <li>We are responding to your inquiry or providing requested information</li>
            <li>We need to communicate regarding an active legal matter</li>
          </ul>
        </ContentSection>

        <Subtitle>Your Rights</Subtitle>

        <ContentSection>
          <strong>You have the right to opt out at any time:</strong>
          <ul>
            <li><strong>Email:</strong> Click the "unsubscribe" link at the bottom of any email</li>
            <li><strong>SMS/Text:</strong> Reply "STOP" to any text message</li>
            <li><strong>Phone:</strong> Request to be removed from our call list</li>
            <li><strong>Contact us directly:</strong> Call <a href="tel:+12138338361">+1 213-833-8361</a> or email <a href="mailto:kathy@krinjurylawfirm.com">kathy@krinjurylawfirm.com</a></li>
          </ul>
        </ContentSection>

        <ContentSection>
          We will honor your opt-out request within 10 business days, except for communications related to active legal matters.
        </ContentSection>

        <Subtitle>What We Don't Do</Subtitle>

        <ContentSection>
          <ul>
            <li>We do not sell, rent, or share your contact information with third parties for marketing purposes</li>
            <li>We do not send unsolicited bulk emails or text messages</li>
            <li>We do not use deceptive subject lines or misleading sender information</li>
            <li>We do not continue to contact you after you have opted out</li>
          </ul>
        </ContentSection>

        <Subtitle>Third-Party Service Providers</Subtitle>

        <ContentSection>
          We may use trusted third-party service providers (such as RingCentral) to facilitate our communications. These providers are contractually obligated to comply with all applicable anti-spam laws and to use your information only for the purposes of providing services to us.
        </ContentSection>

        <Subtitle>Reporting Spam</Subtitle>

        <ContentSection>
          If you believe you have received spam from someone claiming to represent KR Law, APC, please report it to us immediately at <a href="mailto:kathy@krinjurylawfirm.com">kathy@krinjurylawfirm.com</a> so we can investigate.
        </ContentSection>

        <Subtitle>Questions</Subtitle>

        <ContentSection>
          For questions about this Anti-Spam Policy or to update your communication preferences, please contact us:
        </ContentSection>

        <ContentSection>
          <strong>Phone:</strong> <a href="tel:+12138338361">+1 213-833-8361</a><br />
          <strong>Email:</strong> <a href="mailto:kathy@krinjurylawfirm.com">kathy@krinjurylawfirm.com</a><br />
          <strong>Address:</strong> 3055 Wilshire Blvd #1120, Los Angeles, CA 90010
        </ContentSection>

        <ContentSection>
          For more information about how we handle your data, please review our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
          <Link href="/terms-of-use">Terms of Use</Link>.
        </ContentSection>
        </ContentWrapper>
      </PageContainer>
    </>
  );
}
