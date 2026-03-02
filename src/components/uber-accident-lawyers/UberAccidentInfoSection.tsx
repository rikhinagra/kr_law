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

export default function UberAccidentInfoSection() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <Question>Understanding Uber Accident Claims</Question>
          <Paragraph>
            Uber accident claims can be complex due to the unique relationship
            between Uber, its drivers, and passengers. Understanding how
            liability works in these cases is crucial for maximizing your
            compensation.
          </Paragraph>
          <List>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Insurance Coverage:</strong> Uber provides different
                levels of insurance coverage depending on the driver's status at
                the time of the accident. When a driver is offline, their
                personal auto insurance applies. When the app is on but no ride
                is accepted, Uber provides limited liability coverage. Once a
                ride is accepted and during trips, Uber provides $1 million in
                liability coverage.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Determining Liability:</strong> Liability in Uber
                accidents may involve multiple parties, including the Uber
                driver, other drivers, Uber itself, or even vehicle
                manufacturers if a defect contributed to the accident. Our
                attorneys will conduct a thorough investigation to identify all
                potentially liable parties.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Types of Compensation:</strong> Victims of Uber
                accidents may be entitled to various forms of compensation,
                including medical expenses, lost wages, pain and suffering, and
                property damage. In cases involving severe injuries,
                compensation for future medical care and diminished earning
                capacity may also be available.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Statute of Limitations:</strong> In California, there is
                a limited time frame for filing personal injury claims,
                typically two years from the date of the accident. It's crucial
                to consult with an attorney as soon as possible to ensure your
                rights are protected.
              </ItemText>
            </ListItem>
          </List>
          <Paragraph>
            Our experienced Uber accident attorneys understand these
            complexities and can navigate the legal system to ensure you receive
            fair compensation for your injuries and losses.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>Common Causes of Uber Accidents</Question>
          <Paragraph>
            Understanding the common causes of Uber accidents can help establish
            liability in your case. Some of the most frequent causes include:
          </Paragraph>
          <List>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Distracted Driving:</strong> Uber drivers often use
                their smartphones for navigation and accepting new rides, which
                can lead to dangerous distractions. Taking eyes off the road
                even for a few seconds significantly increases accident risk.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Driver Fatigue:</strong> Many Uber drivers work long
                hours or drive for multiple rideshare companies, leading to
                fatigue that impairs reaction time and decision-making
                abilities.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Speeding and Reckless Driving:</strong> The pressure to
                complete more rides and earn more money can lead some Uber
                drivers to speed or drive aggressively, increasing accident
                risk.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Insufficient Training:</strong> Unlike taxi drivers,
                Uber drivers don't receive special training beyond basic
                licensing requirements, which may leave them unprepared for
                certain driving situations.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Unfamiliarity with Routes:</strong> Drivers may be
                navigating unfamiliar areas, leading to sudden stops, lane
                changes, or turns that can cause accidents.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Vehicle Maintenance Issues:</strong> Poorly maintained
                vehicles can lead to mechanical failures that cause accidents.
                Uber requires vehicle inspections, but these may not catch all
                potential issues.
              </ItemText>
            </ListItem>
          </List>
          <Paragraph>
            Our attorneys will thoroughly investigate the circumstances of your
            Uber accident to determine the exact cause and establish liability.
          </Paragraph>
        </TextContent>
      </ContentWrapper>
    </SectionContainer>
  );
}
