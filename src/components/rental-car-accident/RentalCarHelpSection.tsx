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

export default function RentalCarHelpSection() {
  const services: ServiceProps[] = [
    {
      title: "Case Evaluation",
      description:
        "We will review your case in detail, helping you understand your legal rights and options. We can identify potential sources of liability and insurance coverage to maximize your recovery.",
    },
    {
      title: "Insurance Negotiations",
      description:
        "We can handle all communications and negotiations with insurance companies, ensuring that your rights are protected and that you don't accept a settlement that is less than what you deserve.",
    },
    {
      title: "Liability Determination",
      description:
        "We will conduct a thorough investigation to determine who was at fault for the accident and hold all responsible parties accountable.",
    },
    {
      title: "Evidence Collection",
      description:
        "Our team will gather and preserve all necessary evidence to support your claim, including police reports, witness statements, medical records, and rental agreements.",
    },
    {
      title: "Damage Calculation",
      description:
        "We will accurately calculate all of your damages, including medical expenses, lost wages, pain and suffering, and property damage, to ensure you receive full compensation.",
    },
    {
      title: "Litigation Representation",
      description:
        "If a fair settlement cannot be reached, we are prepared to take your case to court and provide aggressive representation to protect your interests.",
    },
  ];

  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionTitle>
          How can KR Injury Law Firm help you if you've been in an accident?
        </SectionTitle>

        <Introduction>
          At KR Law, our experienced rental car accident attorneys can provide
          valuable assistance in several ways:
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
          If you have been involved in a rental car accident, don't navigate
          this complex situation alone. Contact our experienced rental car
          accident attorneys today for a free consultation and let us help you
          get the compensation you deserve.
        </Conclusion>
      </ContentWrapper>
    </SectionContainer>
  );
}
