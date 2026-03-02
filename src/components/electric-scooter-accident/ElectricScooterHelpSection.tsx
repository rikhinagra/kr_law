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
    grid-template-areas:
      "service1 service2"
      "service3 service4"
      "service5 service6"
      "service7 service7";
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    grid-template-areas:
      "service1 service2"
      "service3 service4"
      "service5 service6"
      "service7 service7";
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

interface ServiceCardProps {
  $isLastItem?: boolean;
}

const ServiceCard = styled.div<ServiceCardProps>`
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
    ${(props) =>
      props.$isLastItem &&
      `
      grid-area: service7;
      max-width: 600px;
      margin: 0 auto;
      justify-self: center;
    `}
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 25px 20px;
    min-height: 230px;
    ${(props) =>
      props.$isLastItem &&
      `
      grid-area: service7;
      max-width: 500px;
      margin: 0 auto;
      justify-self: center;
    `}
  }

  @media (max-width: 768px) {
    padding: 25px 15px;
    min-height: auto;
    ${(props) =>
      props.$isLastItem &&
      `
      max-width: 100%;
    `}
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

export default function ElectricScooterHelpSection() {
  const services: ServiceProps[] = [
    {
      title: "Thorough Investigation",
      description:
        "We will conduct a detailed investigation of your accident, gathering evidence such as witness statements, surveillance footage, accident reports, and scooter maintenance records to establish liability.",
    },
    {
      title: "Identifying All Liable Parties",
      description:
        "Electric scooter accidents may involve multiple responsible parties, including scooter rental companies, vehicle drivers, property owners, or municipalities. We will identify all potentially liable parties to maximize your compensation.",
    },
    {
      title: "Expert Consultation",
      description:
        "We work with accident reconstruction experts, medical professionals, and other specialists to build a strong case that demonstrates the full extent of your injuries and damages.",
    },
    {
      title: "Handling Insurance Negotiations",
      description:
        "Our attorneys will communicate and negotiate with insurance companies on your behalf, protecting you from tactics designed to minimize your claim.",
    },
    {
      title: "Comprehensive Damages Calculation",
      description:
        "We ensure that all your damages are properly calculated, including current and future medical expenses, lost wages, pain and suffering, and diminished quality of life.",
    },
    {
      title: "Litigation Representation",
      description:
        "If a fair settlement cannot be reached, our skilled trial attorneys are prepared to take your case to court and advocate aggressively for your rights.",
    },
    {
      title: "No Upfront Costs",
      description:
        "We handle electric scooter accident cases on a contingency fee basis, which means you pay nothing unless we win your case. This arrangement allows you to focus on your recovery while we handle the legal aspects of your claim.",
    },
  ];

  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionTitle>HOW WE CAN HELP</SectionTitle>

        <Introduction>
          At KR Law, our experienced electric scooter accident attorneys can
          provide invaluable assistance during this difficult time. Here's how
          we can help:
        </Introduction>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              $isLastItem={index === services.length - 1}
            >
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <Conclusion>
          Don't navigate the aftermath of an electric scooter accident alone.
          Contact our experienced electric scooter accident attorneys today for
          a free consultation and let us help you on the path to recovery and
          fair compensation.
        </Conclusion>
      </ContentWrapper>
    </SectionContainer>
  );
}
