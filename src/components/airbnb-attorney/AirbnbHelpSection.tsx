"use client";
import styled from "styled-components";

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  background: #f5f5f5;
  overflow: hidden;

  @media (min-width: 1025px) {
    padding: 40px 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 30px 0;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
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

const SectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #000000;
  max-width: 700px;
  margin: 0 auto 30px;
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 28px;
    line-height: 42px;
    margin-bottom: 25px;
    max-width: 650px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 25px;
    max-width: 340px;
  }
`;

const Introduction = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #000000;
  max-width: 890px;
  margin: 0 auto 40px;
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    line-height: 26px;
    margin-bottom: 35px;
    max-width: 700px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 30px;
    max-width: 370px;
  }
`;

const Conclusion = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #000000;
  text-align: center;
  max-width: 900px;
  margin: 40px auto 0;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    line-height: 26px;
    margin-top: 35px;
    max-width: 700px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-top: 30px;
    max-width: 370px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  gap: 30px;

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  padding: 30px 25px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 1025px) {
    min-height: 250px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 25px 20px;
    min-height: 230px;
  }

  @media (max-width: 768px) {
    padding: 25px 15px;
    min-height: auto;
  }
`;

const ServiceTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-style: normal;

  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #1b2632;
  margin-top: 0;
  margin-bottom: 15px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 10px;
  }
`;

const ServiceDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;

  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #000000;
  margin: 0;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 15px;
    line-height: 23px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

interface ServiceProps {
  title: string;
  description: string;
}

export default function AirbnbHelpSection() {
  const services: ServiceProps[] = [
    {
      title: "Case Evaluation",
      description:
        "We offer thorough evaluations of your Airbnb-related legal issue, helping you understand your rights, options, and the potential outcomes of various legal strategies.",
    },
    {
      title: "Navigating Airbnb's Terms of Service",
      description:
        "Airbnb's terms of service contain important provisions that can affect your legal rights, including arbitration clauses and liability limitations. Our attorneys can help you understand and navigate these complex terms.",
    },
    {
      title: "Insurance Claims Assistance",
      description:
        "We can help you navigate the often-complex process of filing claims with Airbnb's Host Protection Insurance or Host Guarantee programs, or with third-party insurers.",
    },
    {
      title: "Negotiation and Mediation",
      description:
        "Many Airbnb disputes can be resolved through skilled negotiation or mediation. Our attorneys are experienced negotiators who can represent your interests effectively in these processes.",
    },
    {
      title: "Regulatory Compliance Guidance",
      description:
        "For hosts, we offer guidance on complying with local regulations, taxes, and other legal requirements for short-term rentals.",
    },
    {
      title: "Litigation and Arbitration",
      description:
        "When necessary, we provide robust representation in litigation or arbitration proceedings, fighting to protect your rights and secure the compensation or resolution you deserve.",
    },
  ];

  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionTitle>How Our Airbnb Attorneys Can Help You</SectionTitle>

        <Introduction>
          At KR Law, our experienced Airbnb attorneys can provide valuable
          assistance in several ways:
        </Introduction>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <Conclusion>
          If you're facing an Airbnb-related legal issue, don't navigate this
          complex landscape alone. Contact our experienced Airbnb attorneys
          today for a free consultation and let us help you protect your rights
          and interests.
        </Conclusion>
      </ContentWrapper>
    </SectionContainer>
  );
}
