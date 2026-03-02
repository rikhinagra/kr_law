"use client";
import styled from "styled-components";
import Image from "next/image";

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  background: #fafafa;
  overflow: hidden;

  @media (min-width: 1025px) {
    padding: 50px 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 60px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const AttorneySection = styled.div`
  width: 100%;
  margin-bottom: 80px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;

  @media (min-width: 1025px) {
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: row;
    align-items: center;
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 16px;
  }
`;

const LawyerImageSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1025px) {
    width: 45%;
    max-width: 500px;
    margin-top: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 45%;
    max-width: 450px;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
    margin-top: 10px;
  }
`;

const ImageFrame = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
  overflow: hidden;

  @media (min-width: 1025px) {
    width: 400px;
    height: 400px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 380px;
    height: 380px;
  }

  @media (max-width: 768px) {
    width: 320px;
    height: 320px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 35px;
  overflow: hidden;
`;

const LawyerName = styled.h3`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 140%;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: -0.03em;
  color: #919191;
  margin-top: 24px;
  text-align: center;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
    justify-content: center;
  }
`;

const ContentSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1025px) {
    width: 55%;
    padding-left: 40px;
    padding-top: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 55%;
    padding-left: 30px;
    padding-top: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 0;
    padding-left: 0;
    margin-bottom: 20px;
  }
`;

const Paragraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;

  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 26px;
  @media (min-width: 1025px) {
    font-size: 18px;
    line-height: 27px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 16px;
    text-align: justify;
  }

  &.emphasis {
    font-weight: 500;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center center;

  &.male-attorney {
    object-position: 30% 30%;
  }

  &.male-attorney-eli {
    object-position: 60% 30%;
  }
`;

export default function AboutPartner() {
  return (
    <SectionContainer>
      {/* Kathy Rabii Section */}
      <AttorneySection>
        <ContentWrapper>
          <LawyerImageSection>
            <ImageFrame>
              <ImageWrapper>
                <StyledImage
                  src="/images/Kathy-Rabii.webp"
                  alt="Kathy Rabii - Founder of KR Law, APC"
                  fill
                  priority
                />
              </ImageWrapper>
            </ImageFrame>
            <LawyerName>Kathy Rabii | Founder Partner</LawyerName>
          </LawyerImageSection>

          <ContentSection>
            <Paragraph>
              The Founder of KR Law, APC, a law firm narrowly focused on
              representing plaintiffs in personal injury claims. Ms. Kathy Rabii,
              a renowned legal expert with a proven track record of success that
              helped thousands of people get the justice they deserve, our firm
              specializes in personal injury cases, including auto accidents,
              motorcycle accidents, dog bites, slips and falls, & other forms of
              negligence.
            </Paragraph>

            <Paragraph className="emphasis">
              But our expertise doesn't stop there.
            </Paragraph>

            <Paragraph>
              With a Magna Cum Laude degree from the Thomas Jefferson School of
              Law and numerous awards for her legal writing and research, Kathy
              brings a level of sophistication and expertise to every case she
              handles.
            </Paragraph>

            <Paragraph>
              At KR Law, APC, we are passionate about helping our clients navigate
              the legal system and achieve the best possible outcomes for their
              cases. Don't let an injury or accident hold you back.
            </Paragraph>

            <Paragraph>
              Contact KR Law firm today to schedule your free consultation and
              learn how we can help you get the justice and compensation you
              deserve.
            </Paragraph>
          </ContentSection>
        </ContentWrapper>
      </AttorneySection>

      {/* Karan S. Gill Section */}
      <AttorneySection>
        <ContentWrapper>
          <LawyerImageSection>
            <ImageFrame>
              <ImageWrapper>
                <StyledImage
                  className="male-attorney"
                  src="/images/Attorney-Karan-S.Gill.webp"
                  alt="Attorney Karan S. Gill - Director of Litigation & Managing Attorney"
                  fill
                />
              </ImageWrapper>
            </ImageFrame>
            <LawyerName>
              Attorney Karan S. Gill
              <br />
              Director of Litigation & Managing Attorney
            </LawyerName>
          </LawyerImageSection>

          <ContentSection>
            <Paragraph>
              Attorney Karan S. Gill is a leading California personal injury lawyer and the Director of Litigation and Managing Attorney at KR Law, APC. He represents clients statewide in serious and catastrophic injury cases, including auto, truck, and motorcycle accidents, premises liability, and wrongful death matters. Widely recognized for his strategic litigation skills and powerful courtroom advocacy, Mr. Gill has recovered millions of dollars for victims of negligence across California. Under his leadership, KR Law has earned a reputation as one of the top plaintiff trial firms in the state, known for aggressive representation, meticulous case preparation, and results that make a difference.
            </Paragraph>

            <Paragraph>
              Mr. Gill is a Super Lawyers honoree and active member of the Consumer Attorneys Association of California (CAALA), dedicated to fighting for justice and protecting the rights of injured Californians.
            </Paragraph>
          </ContentSection>
        </ContentWrapper>
      </AttorneySection>

      {/* Eli Cohen Section */}
      <AttorneySection>
        <ContentWrapper>
          <LawyerImageSection>
            <ImageFrame>
              <ImageWrapper>
                <StyledImage
                  className="male-attorney-eli"
                  src="/images/Attorney-Eli-Cohen.webp"
                  alt="Attorney Eli Cohen"
                  fill
                />
              </ImageWrapper>
            </ImageFrame>
            <LawyerName>Attorney Eli Cohen</LawyerName>
          </LawyerImageSection>

          <ContentSection>
            <Paragraph>
              Licensed in California and Arizona, Eli is a highly skilled attorney with a deep understanding of personal injury law. Eli possesses a unique perspective that allows him to effectively navigate complex cases, as he has a diverse legal background that includes defense work for an insurance company. He has an unwavering dedication to his clients and an impressive track record in securing substantial settlements and verdicts.
            </Paragraph>
          </ContentSection>
        </ContentWrapper>
      </AttorneySection>
    </SectionContainer>
  );
}
