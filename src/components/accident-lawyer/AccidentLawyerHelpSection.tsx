"use client";
import styled from "styled-components";
import Image from "next/image";

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  background: #ffffff;

  padding: 40px 0 40px;

  overflow: hidden;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 40px 0 40px;
  }

  @media (max-width: 768px) {
    padding: 20px 0 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  padding: 0 20px;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Heading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  text-transform: capitalize;
  color: #000000;
  margin-bottom: 30px;
  max-width: 660px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 28px;
    line-height: 42px;
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    margin: 0 auto 25px;
    max-width: 360px;
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
  margin-bottom: 20px;
  max-width: 1240px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    line-height: 26px;
    margin-bottom: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
    text-align: left;
  }
`;

const ListContainer = styled.div`
  margin: 20px 0 40px;
  max-width: 1240px;

  @media (min-width: 769px) and (max-width: 1024px) {
    margin: 18px 0 35px;
  }

  @media (max-width: 768px) {
    margin: 16px 0 30px;
  }
`;

const ListItem = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 50px;
  letter-spacing: -0.02em;
  color: #000000;
  padding-left: 20px;
  position: relative;

  &:before {
    content: "–";
    position: absolute;
    left: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    line-height: 45px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 40px;
    padding-left: 15px;
  }
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin: 30px 0 50px;

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 30px;
    margin: 25px 0 40px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const TextColumn = styled.div`
  @media (max-width: 768px) {
    order: 1;
  }
`;

const ImageColumn = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const TypesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 20px;
  margin-top: 20px;

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 0 15px;
    margin-top: 18px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileList = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const ImageSection = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 100%;

  @media (min-width: 1025px) {
    height: 428px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 0;
    padding-bottom: 60%;
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    height: 0;
    padding-bottom: 82%;
    max-width: 370px;
    margin: 30px auto;
  }
`;

const ResponsiveImage = styled(Image)`
  object-fit: cover;
  object-position: center center;
`;

export default function AccidentLawyerHelpSection() {
  const accidentTypes = [
    "Car accidents",
    "Truck accidents",
    "Motorcycle accidents",
    "Pedestrian accidents",
    "Bicycle accidents",
    "Slip and fall accidents",
    "Workplace accidents",
    "Product liability cases",
    "Medical malpractice",

    "Wrongful death",
  ];

  return (
    <SectionContainer>
      <ContentWrapper>
        <Heading>How an Accident Lawyer Can Help You</Heading>

        <Paragraph>
          Hiring an accident lawyer can make a significant difference in the
          outcome of your case. Here are some ways an accident lawyer can help
          you:
        </Paragraph>

        <ListContainer>
          <ListItem>Investigating the accident and gathering evidence</ListItem>

          <ListItem>
            Determining liability and identifying all responsible parties
          </ListItem>
          <ListItem>
            Calculating the full extent of your damages, including future costs
          </ListItem>
          <ListItem>
            Negotiating with insurance companies on your behalf
          </ListItem>
          <ListItem>
            Representing you in court if a fair settlement cannot be reached
          </ListItem>
          <ListItem>
            Handling all paperwork and legal procedures within required
            deadlines
          </ListItem>
        </ListContainer>

        <Paragraph>
          An experienced accident lawyer understands the tactics that insurance
          companies use to minimize payouts. They can prevent you from accepting
          a settlement that is less than what you deserve. They can also help
          ensure that all aspects of your damages are considered, including
          medical expenses, lost wages, pain and suffering, and future care
          needs.
        </Paragraph>

        <TwoColumnGrid>
          <TextColumn>
            <Heading>Types of Accident Cases We Handle</Heading>

            <Paragraph>
              Our law firm handles a wide range of accident cases, including:
            </Paragraph>

            <TypesGrid>
              {accidentTypes.map((type, index) => (
                <ListItem key={`grid-list-${index}`}>{type}</ListItem>
              ))}
            </TypesGrid>
          </TextColumn>

          <ImageColumn>
            <ImageSection>
              <ResponsiveImage
                src="/images/accident-lawyer-help.webp"
                alt="Accident lawyer helping clients"
                fill
                sizes="(min-width: 1025px) 473px, (min-width: 769px) 600px, 370px"
                style={{
                  filter: "brightness(0.6)",
                }}
                priority
              />
            </ImageSection>
          </ImageColumn>
        </TwoColumnGrid>

        <MobileList>
          <Heading>Types of Accident Cases We Handle</Heading>

          <Paragraph>
            Our law firm handles a wide range of accident cases, including:
          </Paragraph>

          {accidentTypes.map((type, index) => (
            <ListItem key={`mobile-list-${index}`}>{type}</ListItem>
          ))}

          <ImageSection>
            <ResponsiveImage
              src="/images/accident-lawyer-help.webp"
              alt="Accident lawyer helping clients"
              fill
              sizes="370px"
              style={{
                filter: "brightness(0.6)",
              }}
              priority
            />
          </ImageSection>
        </MobileList>

        <Paragraph>
          Each type of accident case requires specific knowledge and expertise.
          Our team of accident lawyers has the experience and skills necessary
          to handle any type of accident case effectively.
        </Paragraph>
      </ContentWrapper>
    </SectionContainer>
  );
}
