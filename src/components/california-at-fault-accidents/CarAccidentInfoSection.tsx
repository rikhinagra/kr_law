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

export default function CarAccidentInfoSection() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <Question>
            What information do I need to gather after a car accident?
          </Question>
          <Paragraph>
            If you are involved in an accident, there are several pieces of
            information that you should gather to help with the claims process
            and to protect yourself legally. Some important information to
            collect includes:
          </Paragraph>
          <List>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>A police report</ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                The other driver's name, contact information, and insurance
                information
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                The make, model, and license plate number of the other vehicle
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                The names and contact information of any witnesses to the
                accident
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                Photographs and videos of the damage to both vehicles, as well
                as any other property damage or injuries
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>The location and time of the accident</ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                In which direction the vehicles were traveling
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>The speed of each vehicle, if known</ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>Weather and traffic conditions</ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                What the driver was doing at the time of the accident (e.g.,
                moving or stopping, on the phone, listening to the radio, etc.)
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                Anything else that might help an adjuster understand what
                happened
              </ItemText>
            </ListItem>
          </List>
          <Paragraph>
            It's also important to exchange insurance information with the other
            driver and to report the accident to your insurance company as soon
            as possible. If you are injured in an accident, seek medical
            attention right away and keep a record of all medical treatment and
            expenses. By gathering this information, you can help ensure that
            your insurance claim is processed smoothly and that you are
            protected legally.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>How does an insurer determine who was at fault?</Question>
          <Paragraph>
            In California, the insurance company will determine who is at fault
            for an accident by conducting an investigation into the
            circumstances surrounding the accident.
          </Paragraph>
          <Paragraph>
            The investigation may include reviewing police reports, interviewing
            witnesses, examining physical evidence, and analyzing any available
            photographs or videos of the accident. The insurance company will
            also consider the relevant California traffic laws and regulations
            to determine who had the right-of-way at the time of the accident.
          </Paragraph>
          <Paragraph>
            Once the investigation is complete, the insurance company will make
            a determination of fault. California uses a "pure comparative
            negligence" system, which means that even if a driver is partially
            at fault for an accident, they may still be able to recover
            compensation for their damages. The amount of compensation will be
            reduced proportionally to the driver's degree of fault.
          </Paragraph>
          <Paragraph>
            It's important to note that fault determinations can be disputed,
            and drivers have the right to challenge an insurance company's
            determination of fault. If you disagree with your insurance
            company's decision or feel that you were not at fault for the
            accident, it's best to consult with an attorney who can help you
            navigate the claims process and protect your legal rights.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>What happens if my car is ruled a "total loss?"</Question>
          <Paragraph>
            If your car is ruled a "total loss", it means that the cost of
            repairing your car exceeds its actual cash value. In this case, your
            insurance company will pay you the actual cash value of your car,
            minus any deductible that applies. Actual cash value is the amount
            your car was worth immediately prior to the accident, based on
            factors such as its age, condition, and mileage.
          </Paragraph>
          <Paragraph>
            If you still owe money on a car loan or lease, the insurance payout
            may not be enough to cover the remaining balance. In this situation,
            you may be responsible for paying the difference between the
            insurance payout and the amount you owe. To avoid this situation,
            you can purchase gap insurance, which can cover the difference
            between the actual cash value of your car and the amount you owe on
            your loan or lease.
          </Paragraph>
          <Paragraph>
            If you choose to keep your totaled car, your insurance company will
            deduct the salvage value of the vehicle from the payout. The salvage
            value is the amount that the insurance company can recover by
            selling the damaged vehicle to a salvage yard.
          </Paragraph>
          <Paragraph>
            It's important to note that you can dispute the insurance company's
            valuation of your car if you believe that it is inaccurate. You can
            provide evidence such as receipts for recent repairs or maintenance,
            or listings for similar cars in your area to support your claim for
            a higher payout.
          </Paragraph>
        </TextContent>
      </ContentWrapper>
    </SectionContainer>
  );
}
