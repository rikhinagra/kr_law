"use client";
import styled from "styled-components";

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  background: #ffffff;
  overflow: hidden;

  @media (min-width: 1025px) {
    padding: 80px 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 60px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  @media (min-width: 1025px) {
    padding: 0 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Question = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #000000;
  margin-bottom: 30px;

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

const TextContent = styled.div`
  margin-bottom: 60px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
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

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    line-height: 26px;
    margin-bottom: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 24px 0;

  @media (min-width: 769px) and (max-width: 1024px) {
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    margin: 16px 0;
  }
`;

const ListItem = styled.li`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 16px;
  display: flex;
  align-items: flex-start;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    line-height: 26px;
    margin-bottom: 14px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 12px;
  }
`;

const Dash = styled.span`
  display: inline-block;
  margin-right: 10px;
  flex-shrink: 0;
  color: #1b2632;
  font-weight: 500;
`;

const ItemText = styled.span`
  flex: 1;
`;

export default function FormSR1Section() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <Question>What is Form SR-1?</Question>
          <Paragraph>
            Form SR-1 is an official document provided by the California DMV.
            State law (California Vehicle Code §16000) requires that anyone
            involved in an accident complete and submit the form within 10 days
            of an accident that results in:
          </Paragraph>
          <List>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>Property damage exceeding $1,000</ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>Personal injury, however slight, and/or death</ItemText>
            </ListItem>
          </List>
          <Paragraph>
            You can submit the form on your own, or you can direct your
            insurance company or attorney to submit the form on your behalf.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>General Accident Information</Question>
          <Paragraph>
            When completing Form SR-1 you must provide the following
            information:
          </Paragraph>
          <List>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>The time when the accident took place</ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>Date of the accident</ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                Specific location, including the city and county
              </ItemText>
            </ListItem>
          </List>
        </TextContent>

        <TextContent>
          <Question>Insurance Information</Question>
          <Paragraph>
            All drivers in California are required to carry minimally-acceptable
            insurance coverage on all registered vehicles. Information about
            insurance coverage for all cars involved in the accident must be
            provided on Form SR-1. This includes:
          </Paragraph>
          <List>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>Name of the insurance company</ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>Insurance policy number</ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>Insurance policy period, and</ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>Name of the policyholder</ItemText>
            </ListItem>
          </List>
          <Paragraph>
            You must also indicate whether each policy was in effect at the time
            of the accident.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            List of Property Damages, Injuries, and Fatalities
          </Question>
          <Paragraph>
            Form SR-1 requires drivers to submit details about all property
            damage, personal injuries, and deaths that are related to the
            accident. This includes all drivers, passengers, bicyclists, and
            pedestrians who are affected by the crash. The following information
            must be provided for all injured parties:
          </Paragraph>
          <List>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>Name and address of the victim</ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>Type of harm (injury, death, property damage)</ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>Description and value of property damage</ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                Connection to the accident (driver, passenger, bicyclist,
                pedestrian)
              </ItemText>
            </ListItem>
          </List>
        </TextContent>

        <TextContent>
          <Question>Required Information for Form SR-1</Question>
          <Paragraph>
            Form SR-1 helps to encourage transparency and full disclosure of
            relevant information after a car accident in California. You will be
            required to provide information about the accident as well as
            certain information for everyone involved.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>Consequences of Not Completing Form SR-1</Question>
          <Paragraph>
            What happens if you do not complete and submit Form SR-1 to the DMV
            within 10 days of an accident? California Vehicle Code §16004
            permits the state to suspend your driver's license and take other
            necessary administrative actions concerning your driving privileges.
          </Paragraph>
        </TextContent>
      </ContentWrapper>
    </SectionContainer>
  );
}
