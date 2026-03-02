"use client";
import styled from "styled-components";
import Image from "next/image";
import PracticeAreaContactForm from "../common/PracticeAreaContactForm";

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
  background-image: url("/images/pedestrian-accidents.webp");
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

export default function PedestrianAccidentContent() {
  return (
    <>
      <ContentSection>
        <ContentWrapper>
          <TextContent>
            <SubHeading>Pedestrian Accident Attorney</SubHeading>

            <Paragraph>
              Walking is one of the most basic forms of transportation, but it
              can also be one of the most dangerous. When pedestrians are
              involved in accidents with motor vehicles, the results can be
              catastrophic due to the lack of protection pedestrians have. If
              you or a loved one has been injured in a pedestrian accident, it's
              crucial to understand your legal rights and options. The
              experienced pedestrian accident attorneys at KR Law are here to
              help you navigate the complex legal system and fight for the
              compensation you deserve.
            </Paragraph>

            <Paragraph>
              Pedestrian accidents often result in severe injuries, including
              broken bones, spinal cord injuries, traumatic brain injuries, and
              even death. These injuries can lead to substantial medical bills,
              lost wages, and long-term disability.
            </Paragraph>

            <Paragraph>
              Our dedicated team understands the physical, emotional, and
              financial toll that pedestrian accidents can take on victims and
              their families. We are committed to providing compassionate,
              personalized legal representation to help you recover the maximum
              compensation for your injuries.
            </Paragraph>

            <FullWidthParagraph>
              With years of experience handling pedestrian accident cases in
              California, we have the knowledge and resources to build a strong
              case on your behalf and hold the responsible parties accountable
              for their negligence.
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
              Common Causes of Pedestrian Accidents
            </CausesSectionTitle>

            <PointText style={{ marginBottom: "30px" }}>
              Understanding the common causes of pedestrian accidents can help
              establish liability in your case. Some of the most frequent causes
              include:
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
                <strong>Distracted Driving:</strong> Drivers who are texting,
                talking on the phone, or otherwise distracted may fail to notice
                pedestrians in crosswalks or at intersections.
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
                <strong>Speeding:</strong> Drivers who exceed speed limits have
                less time to react to pedestrians and may be unable to stop in
                time to avoid a collision.
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
                <strong>Failure to Yield:</strong> Drivers who fail to yield the
                right-of-way to pedestrians at crosswalks and intersections can
                cause serious accidents.
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
                <strong>Impaired Driving:</strong> Drivers under the influence
                of alcohol or drugs have impaired judgment and reaction times,
                increasing the risk of pedestrian accidents.
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
                <strong>Poor Visibility:</strong> Accidents are more likely to
                occur at night or in bad weather conditions when visibility is
                reduced.
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
                <strong>Left-Turn Accidents:</strong> Drivers making left turns
                may focus on oncoming traffic and fail to notice pedestrians
                crossing the street.
              </PointText>
            </PointContainer>

            <PointText style={{ marginTop: "30px" }}>
              Our attorneys can help you navigate these complex insurance issues
              and ensure that all applicable policies are utilized to provide
              you with maximum coverage for your damages and injuries.
            </PointText>
          </CausesTextContent>
        </CausesContentWrapper>
      </CausesContainer>
    </>
  );
}
