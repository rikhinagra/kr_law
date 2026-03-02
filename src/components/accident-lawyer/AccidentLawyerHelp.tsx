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

const CenteredServiceCard = styled(ServiceCard)`
  @media (min-width: 769px) {
    grid-column: 1 / -1;
    max-width: 540px;
    margin: 0 auto;
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

export default function CarAccidentHelpSection() {
  const services: ServiceProps[] = [
    {
      title: "Experience and Expertise",
      description:
        "Our accident lawyers have extensive experience handling all types of accident cases. We understand the complexities of accident law and know how to build strong cases for our clients.",
    },
    {
      title: "No Fee Unless We Win",
      description:
        "We work on a contingency fee basis, which means you don't pay unless we win your case. This allows you to pursue your claim without worrying about upfront costs.",
    },
    {
      title: "Compassionate Support",
      description:
        "We understand that being involved in an accident can be traumatic. Our team provides compassionate support throughout the legal process, keeping you informed and involved every step of the way.",
    },
    {
      title: "Personalized Attention",
      description:
        "We understand that every accident case is unique, with its own set of circumstances and challenges. That's why we provide personalized attention to each client and tailor our approach to meet your specific needs.",
    },
    {
      title: "Proven Track Record",
      description:
        "Our law firm has a proven track record of success in handling accident cases. We have helped numerous clients secure the compensation they deserve.",
    },
  ];

  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionTitle>
          How can KR Injury Law Firm help you if you've been in an accident?
        </SectionTitle>

        <Introduction>
          We can provide legal assistance if you are involved in a car accident
          in California. Here are some ways that our law firm can help:
        </Introduction>

        <ServicesGrid>
          {services.map((service, index) =>
            index === 4 ? (
              <CenteredServiceCard key={index}>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </CenteredServiceCard>
            ) : (
              <ServiceCard key={index}>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            )
          )}
        </ServicesGrid>

        <Conclusion>
          If you or a loved one has been injured in an accident, don't hesitate
          to contact our law firm. We are here to help you navigate this
          difficult time and fight for the compensation you deserve.
        </Conclusion>
      </ContentWrapper>
    </SectionContainer>
  );
}
