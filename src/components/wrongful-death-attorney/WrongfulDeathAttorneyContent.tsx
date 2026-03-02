"use client";
import styled from "styled-components";
import Image from "next/image";
import PracticeAreaContactForm from "../common/PracticeAreaContactForm";
import WrongfulDeathInfoSection from "./WrongfulDeathInfoSection";

const ContentSection = styled.section`
  position: relative;
  width: 100%;
  margin-top: -100px;
  z-index: 2;

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
  z-index: 2;

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
  position: relative;
  z-index: 3;

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
  position: relative;
  z-index: 3;

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
  position: relative;
  z-index: 3;

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
  position: relative;
  z-index: 3;

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
  position: relative;
  z-index: 5;

  @media (min-width: 1025px) {
    max-width: 100%;
    width: 100%;
  }
`;

const BackgroundImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 969px;
  left: 0;
  margin-top: -100px;
  background-image: url("/images/case-of-wrongful-death.webp");
  background-size: cover;
  background-position: center;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.85);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 800px;
    margin-top: -80px;
  }

  @media (max-width: 768px) {
    height: 700px;
    margin-top: -70px;
  }
`;

const CausesContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 3;
  margin-top: -800px;
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: -725px;
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    margin-top: -650px;
    padding: 0 16px;
  }
`;

const CausesContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CausesTextContent = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 370px;
  }
`;

const CausesSectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #000000;
  margin-bottom: 40px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 28px;
    line-height: 42px;
    margin-bottom: 35px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    margin: 0 auto 30px;
    max-width: 341px;
  }
`;

const PointContainer = styled.div`
  display: flex;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ArrowContainer = styled.div`
  margin-right: 25px;
  margin-top: 12px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-right: 15px;
    margin-top: 8px;
    width: 30px;
    margin-left: -10px;
  }
`;

const ArrowImage = styled(Image)`
  display: block;

  @media (max-width: 768px) {
    width: 45px !important;
    height: 6px !important;
  }
`;

const PointText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #000000;
  flex: 1;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    line-height: 26px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    text-align: left;
  }

  strong {
    font-weight: 600;
  }
`;

const InfoSectionContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 3;
  margin-top: 40px;

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: 50px;
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 0 16px;
  }
`;

export default function WrongfulDeathAttorneyContent() {
  return (
    <>
      <ContentSection>
        <ContentWrapper>
          <TextContent>
            <SubHeading>Wrongful Death Attorney</SubHeading>

            <Paragraph>
              Losing a loved one is never easy, but it is even more difficult
              when their death was caused by the negligence or wrongful act of
              someone else. If you find yourself in this situation, you may be
              entitled to compensation under California law through a wrongful
              death claim.
            </Paragraph>

            <Paragraph>
              A wrongful death claim is a civil lawsuit that can be filed by the
              survivors of the deceased or by a personal representative of the
              decedent's estate. The purpose of this claim is to seek monetary
              damages from the party responsible for the wrongful death. If
              successful, the court will order the defendant to pay damages to
              the family of the deceased.
            </Paragraph>

            <Paragraph>
              However, it is important to note that filing a wrongful death
              claim is not a straightforward process. In California, there are
              specific procedures and requirements that must be followed in
              order to prove that someone is legally responsible for the
              wrongful death and financially liable for its consequences.
            </Paragraph>

            <FullWidthParagraph>
              Wrongful death can occur in a variety of situations, including
              driving-related fatalities, medical errors, workplace accidents,
              and other instances of negligence, gross negligence, recklessness,
              or intentional acts.
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

      <BackgroundImageSection />

      <CausesContainer>
        <CausesContentWrapper>
          <CausesTextContent>
            <CausesSectionTitle>
              How To Proceed In Case of Wrongful Death
            </CausesSectionTitle>

            <PointText style={{ marginBottom: "30px" }}>
              If you have lost a loved one due to wrongful death, there are
              several steps you can take to protect your rights and seek
              compensation for your associated financial losses. Here are some
              key steps to follow:
            </PointText>

            <PointContainer>
              <ArrowContainer>
                <ArrowImage
                  src="/images/ArrowRight.svg"
                  alt="Arrow"
                  width={60}
                  height={9}
                />
              </ArrowContainer>
              <PointText>
                <strong>
                  Consult with an experienced wrongful death attorney:
                </strong>{" "}
                The first step in pursuing a wrongful death claim is to seek the
                advice of an experienced attorney who specializes in this area
                of law. They can help you understand your legal rights, navigate
                the complex legal process, and advocate for your interests in
                court.
              </PointText>
            </PointContainer>

            <PointContainer>
              <ArrowContainer>
                <ArrowImage
                  src="/images/ArrowRight.svg"
                  alt="Arrow"
                  width={60}
                  height={9}
                />
              </ArrowContainer>
              <PointText>
                <strong>Gather evidence:</strong> Your attorney will work with
                you to gather evidence that supports your claim, including
                police reports, witness statements, medical records, and other
                relevant documentation. This evidence can help establish the
                cause of your loved one's death and prove that someone else was
                responsible.
              </PointText>
            </PointContainer>

            <PointContainer>
              <ArrowContainer>
                <ArrowImage
                  src="/images/ArrowRight.svg"
                  alt="Arrow"
                  width={60}
                  height={9}
                />
              </ArrowContainer>
              <PointText>
                <strong>Identify the liable party:</strong> Your attorney will
                work with you to identify the party or parties who are legally
                responsible for your loved one's death. This may include
                individuals, companies, or government entities.
              </PointText>
            </PointContainer>

            <PointContainer>
              <ArrowContainer>
                <ArrowImage
                  src="/images/ArrowRight.svg"
                  alt="Arrow"
                  width={60}
                  height={9}
                />
              </ArrowContainer>
              <PointText>
                <strong>File a claim:</strong> Once you have identified the
                liable party, your attorney will file a claim on your behalf.
                This will initiate the legal process and allow you to seek
                compensation for your financial losses.
              </PointText>
            </PointContainer>
          </CausesTextContent>
        </CausesContentWrapper>
      </CausesContainer>

      <InfoSectionContainer>
        <WrongfulDeathInfoSection />
      </InfoSectionContainer>
    </>
  );
}
