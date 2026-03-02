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

export default function RentalCarInfoSection() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <Question>Insurance Coverage in Rental Car Accidents</Question>
          <Paragraph>
            Understanding insurance coverage in rental car accidents can be
            complex. There are several types of insurance that may apply to your
            case:
          </Paragraph>
          <List>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Personal Auto Insurance:</strong> Your personal auto
                insurance policy may provide coverage for rental cars. Many
                policies include collision coverage, which pays for damage to
                the rental car, and liability coverage, which covers damage you
                cause to other vehicles or injuries to other people.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Credit Card Insurance:</strong> Many credit cards offer
                rental car insurance as a benefit if you use the card to pay for
                the rental. This is typically secondary coverage, meaning it
                applies after your personal auto insurance has been exhausted.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Rental Car Insurance:</strong> Rental car companies
                offer various insurance options, such as collision damage waiver
                (CDW), supplemental liability protection, personal accident
                insurance, and personal effects coverage. These can provide
                additional protection beyond what your personal auto insurance
                covers.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Third-Party Insurance:</strong> If you were not at fault
                for the accident, the other driver's insurance should cover your
                damages and injuries. However, if the other driver is uninsured
                or underinsured, you may need to rely on your own coverage.
              </ItemText>
            </ListItem>
          </List>
          <Paragraph>
            Our attorneys can help you navigate these complex insurance issues
            and ensure that all applicable policies are utilized to provide you
            with maximum coverage for your damages and injuries.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>Steps to Take After a Rental Car Accident</Question>
          <Paragraph>
            If you are involved in a rental car accident, there are several
            important steps you should take to protect your rights and
            strengthen your potential claim:
          </Paragraph>
          <List>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Check for Injuries:</strong> First and foremost, check
                yourself and others for injuries. If there are any injuries,
                call 911 immediately to get medical help.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Report the Accident:</strong> Call the police to report
                the accident. A police report can be valuable evidence for your
                insurance claim or lawsuit. Also notify the rental car company
                as soon as possible.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Exchange Information:</strong> Exchange contact and
                insurance information with the other driver(s) involved in the
                accident. Get their name, address, phone number, license plate
                number, and insurance details.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Document the Scene:</strong> Take photos of the accident
                scene, including damage to all vehicles, the surrounding area,
                road conditions, traffic signs, and any visible injuries. This
                evidence can be crucial for your claim.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Gather Witness Information:</strong> If there were
                witnesses to the accident, get their contact information. Their
                statements can support your account of what happened.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Seek Medical Attention:</strong> Even if you feel fine,
                see a doctor as soon as possible. Some injuries may not be
                immediately apparent, and having documentation of your medical
                condition shortly after the accident can be important for your
                claim.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Contact Your Insurance:</strong> Notify your insurance
                company about the accident, even if you believe you weren't at
                fault. Be honest and provide all the facts, but avoid making
                statements that could be interpreted as admitting fault.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Consult an Attorney:</strong> Contact a rental car
                accident attorney to discuss your case. An experienced attorney
                can guide you through the complex legal and insurance issues
                involved in rental car accidents.
              </ItemText>
            </ListItem>
          </List>
        </TextContent>
      </ContentWrapper>
    </SectionContainer>
  );
}
