"use client";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

// Types
interface FAQItem {
  question: string;
  answer: string;
}

// Styled Components
const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 16px;

  @media (min-width: 1025px) {
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 40px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TitleContainer = styled.div`
  @media (min-width: 1025px) {
    width: 562px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    max-width: 600px;
    margin-bottom: 30px;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 370px;
    margin-bottom: 30px;
    text-align: center;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 131%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #1c1917;

  @media (min-width: 1025px) {
    width: 562px;
    height: 84px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 28px;
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 768px) {
    font-size: 25px;
    width: 100%;
    text-align: center;
    justify-content: center;
    height: auto;
    display: block; /* Change to block to allow line breaks to work */
  }
`;

const MobileTitle = styled.span`
  display: none;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const DesktopTitle = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1025px) {
    width: 572px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 370px;
  }
`;

interface AccordionItemProps {
  $isOpen: boolean;
}

const AccordionItem = styled.div<AccordionItemProps>`
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1.5px solid #333333;
  height: auto;
  transition: all 0.3s ease;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 0;
  cursor: pointer;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const Question = styled.h3`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #333333;
  margin: 0;
  flex: 1;
  padding-right: 10px;

  @media (min-width: 1025px) {
    font-size: 20px;
    line-height: 30px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
    line-height: 27px;
  }

  @media (max-width: 768px) {
    font-size: 12px; /* Further reduced from 14px to 12px */
    line-height: 18px; /* Adjusted line height */
    white-space: nowrap; /* Prevent text from wrapping */
    overflow: hidden; /* Hide any overflow */
    text-overflow: ellipsis; /* Add ellipsis for any cut-off text */
    padding-right: 5px; /* Reduce right padding to give more space */
  }
`;

interface ChevronProps {
  $isOpen: boolean;
}

const ChevronContainer = styled.div<ChevronProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 3px; /* Slightly reduced from 5px to 3px */

  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
    margin-top: 2px;
  }
`;

interface AnswerContainerProps {
  $isOpen: boolean;
}

const AnswerContainer = styled.div<AnswerContainerProps>`
  overflow: hidden;
  max-height: ${(props) => (props.$isOpen ? "1000px" : "0")};
  transition: max-height 0.3s ease-in-out;
  padding: ${(props) => (props.$isOpen ? "0 0 16px 0" : "0")};
`;

const Answer = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  color: #333333;

  @media (min-width: 1025px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 15px;
    line-height: 22px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 20px;
  }
`;

const FAQ: React.FC = () => {
  // Sample FAQ data
  const faqItems: FAQItem[] = [
    {
      question: "What can a personal injury lawyer do for me?",
      answer:
        "A personal injury lawyer can help you navigate the legal process after an injury, ensuring you receive fair compensation. They will investigate your case, gather evidence, negotiate with insurance companies, handle all paperwork, represent you in court if necessary, and fight to maximize your settlement. They can also help with medical bills, lost wages, and documenting long-term effects of your injury.",
    },
    {
      question: "How do I know if I have a personal injury claim?",
      answer:
        "You may have a personal injury claim if you were injured due to someone else's negligence or intentional actions. Key factors include: 1) The other party owed you a duty of care, 2) They breached that duty, 3) Their breach directly caused your injury, and 4) You suffered damages as a result. Common cases include car accidents, slip and falls, medical malpractice, workplace injuries, and defective products. A consultation with a personal injury attorney can help determine if you have a valid claim.",
    },
    {
      question: "How long do I have to make a claim?",
      answer:
        "In California, the statute of limitations for most personal injury claims is two years from the date of the injury. However, this timeline can vary based on the type of case. For medical malpractice, you have one year from discovery of the injury. Claims against government entities require filing within six months. If the injured person is a minor, the deadline may be extended until they turn 18. Missing these deadlines typically means losing your right to seek compensation, so consulting with an attorney promptly is crucial.",
    },
    {
      question: "Why hire a personal injury attorney?",
      answer:
        "Hiring a personal injury attorney significantly increases your chances of receiving fair compensation. Insurance companies have teams of lawyers working to minimize payouts, and an experienced attorney can level the playing field. They understand complex legal procedures, can accurately value your claim (including future damages), gather compelling evidence, negotiate effectively, and represent you in court if necessary. Studies show that represented clients typically receive much larger settlements than those without attorneys, even after legal fees are deducted.",
    },
    {
      question: "What to do if you are in a car accident?",
      answer:
        "After a car accident: 1) Ensure safety by moving to a safe location if possible and checking for injuries, 2) Call 911 to report the accident and request medical assistance if needed, 3) Exchange information with all parties involved including names, contact information, insurance details, and vehicle information, 4) Document the scene by taking photos of vehicles, damage, the accident site, and any visible injuries, 5) Obtain witness information, 6) Seek medical attention even if injuries seem minor, 7) Report the accident to your insurance company, 8) Keep records of all accident-related expenses and medical treatment, and 9) Contact a personal injury attorney before accepting any settlement offers.",
    },
  ];

  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle open/close state
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionContainer>
      <TitleContainer>
        <SectionTitle>
          <DesktopTitle>
            The Most frequently Asked Questions We Answer Most Often
          </DesktopTitle>
          <MobileTitle>
            The Most frequently Asked
            <br />
            Questions
            <br />
            We Answer Most Often
          </MobileTitle>
        </SectionTitle>
      </TitleContainer>

      <FaqContainer>
        {faqItems.map((item, index) => (
          <AccordionItem key={index} $isOpen={openIndex === index}>
            <QuestionContainer onClick={() => toggleItem(index)}>
              <Question>{item.question}</Question>
              <ChevronContainer $isOpen={openIndex === index}>
                {openIndex === index ? (
                  <Image
                    src="/images/close-arrow.svg"
                    alt="Close"
                    width={14}
                    height={14}
                  />
                ) : (
                  <Image
                    src="/images/open-arrow.svg"
                    alt="Open"
                    width={14}
                    height={14}
                  />
                )}
              </ChevronContainer>
            </QuestionContainer>
            <AnswerContainer $isOpen={openIndex === index}>
              <Answer>{item.answer}</Answer>
            </AnswerContainer>
          </AccordionItem>
        ))}
      </FaqContainer>
    </SectionContainer>
  );
};

export default FAQ;
