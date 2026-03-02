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

export default function AirbnbInfoSection() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <Question>Common Airbnb Legal Issues</Question>
          <Paragraph>
            Airbnb and similar short-term rental platforms have created a new
            landscape of legal challenges for both hosts and guests. Our
            attorneys have experience handling a wide range of Airbnb-related
            legal issues, including:
          </Paragraph>
          <List>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Personal Injury Claims:</strong> If you're injured
                during an Airbnb stay due to unsafe conditions, faulty
                equipment, or other hazards, you may be entitled to
                compensation. Our attorneys can help you navigate the
                complexities of determining liability between the host, property
                owner, and Airbnb itself.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Property Damage Disputes:</strong> Whether you're a host
                whose property was damaged by guests or a guest being unfairly
                charged for damages, we can help resolve these disputes and
                ensure fair treatment under Airbnb's policies.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Host Liability Issues:</strong> Airbnb hosts face unique
                liability challenges that traditional landlords don't. We can
                advise on appropriate insurance coverage, liability waivers, and
                other protective measures.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Zoning and Regulatory Compliance:</strong> Many cities
                and counties have specific regulations governing short-term
                rentals. We can help hosts ensure they're in compliance with
                local laws to avoid penalties and legal issues.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Discrimination Claims:</strong> Both hosts and guests
                are protected against various forms of discrimination. We can
                represent individuals who have experienced discriminatory
                practices on the platform.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Contract Disputes:</strong> Disputes over reservation
                cancellations, refunds, and other contractual matters require
                knowledgeable legal representation to resolve effectively.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Privacy and Security Breaches:</strong> Cases involving
                unauthorized surveillance, security breaches, or privacy
                violations during Airbnb stays require specialized legal
                expertise.
              </ItemText>
            </ListItem>
          </List>
        </TextContent>

        <TextContent>
          <Question>Understanding Airbnb's Insurance Coverage</Question>
          <Paragraph>
            Airbnb offers several insurance and protection programs that can
            impact legal claims. Understanding these programs is crucial when
            pursuing a claim:
          </Paragraph>
          <List>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Host Protection Insurance:</strong> This program
                provides hosts with liability coverage of up to $1 million for
                bodily injury or property damage claims. However, there are
                significant exclusions and limitations to this coverage that
                many hosts don't fully understand.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Host Guarantee:</strong> This program offers up to $1
                million in property damage protection for hosts. However,
                getting claims approved can be challenging, and many types of
                damage may not be covered.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Limitations and Exclusions:</strong> Both programs have
                numerous exclusions and limitations that can affect claims. For
                example, shared areas of buildings, preexisting property
                conditions, and certain types of personal property may not be
                covered.
              </ItemText>
            </ListItem>
            <ListItem>
              <Dash>–</Dash>
              <ItemText>
                <strong>Third-Party Insurance:</strong> In some cases, a host's
                homeowner's insurance or a guest's renter's or travel insurance
                may provide coverage for incidents that occur during an Airbnb
                stay.
              </ItemText>
            </ListItem>
          </List>
          <Paragraph>
            Our attorneys have experience navigating these complex insurance
            issues and can help determine the best approach for your specific
            situation. We can evaluate available coverage options, identify
            responsible parties, and develop a strategy to maximize your
            potential recovery.
          </Paragraph>
        </TextContent>
      </ContentWrapper>
    </SectionContainer>
  );
}
