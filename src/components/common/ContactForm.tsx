"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const FormWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(27, 38, 50, 0.5);
  backdrop-filter: blur(8.89323px);
  border-radius: 28.4583px;
  padding: 20px 32px;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
  }
`;

const FormTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 115%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  text-align: center;
  margin: 0 0 10px 0;
  justify-content: center;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const FormSubtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 115%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 0 0 40px 0;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 20px 0;
  }
`;

const PayNothingText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 115%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 40px 0;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 33px;
`;

interface LabelProps {
  $hasValue: boolean;
}

const Label = styled.label<LabelProps>`
  position: absolute;
  top: 0;
  left: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 74%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.7);
  pointer-events: none;
  transition: 0.3s;

  ${(props) =>
    props.$hasValue &&
    `
    top: -20px;
    font-size: 12px;
  `}
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  padding: 0 0 10px 0;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  outline: none;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #ffffff !important;
    -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
    box-shadow: 0 0 0 1000px transparent inset !important;
    transition: background-color 5000s ease-in-out 0s;
    background-color: transparent !important;
  }

  &:focus + ${Label} {
    top: -20px;
    font-size: 12px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  padding: 0 0 10px 0;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  outline: none;
  resize: none;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #ffffff !important;
    -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
    box-shadow: 0 0 0 1000px transparent inset !important;
    transition: background-color 5000s ease-in-out 0s;
    background-color: transparent !important;
  }

  &:focus + ${Label} {
    top: -20px;
    font-size: 12px;
  }
`;

const SubmitButton = styled.button<{ disabled: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
  background: ${(props) => (props.disabled ? "#666" : "#ffffff")};
  box-shadow: 7px 9px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #1b2632;

  opacity: ${(props) => (props.disabled ? 0.6 : 0.8)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 40px auto;
  transition: opacity 0.3s;

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  }

  @media (max-width: 768px) {
    margin: 20px auto;
    padding: 10px 14px;
  }
`;

const ButtonText = styled.span`
  margin-right: 0px;
`;

const SuccessMessage = styled.div`
  background: #4caf50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
`;

const ErrorMessage = styled.div`
  background: #f44336;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
`;

const PrivacyDisclaimer = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 11px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin: 0 0 15px 0;

  a {
    color: #ffffff;
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
    }
  }
`;

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (submitStatus === "success" || submitStatus === "error") {
      timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [submitStatus]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          ...formData,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormWrapper>
      <FormTitle>Book Your Free Consultation Today</FormTitle>
      <FormSubtitle>
        We are not your average law firm call us now to get the compensation
        that you deserve.
      </FormSubtitle>
      <PayNothingText>Pay Nothing Until YOU Win !</PayNothingText>

      {submitStatus === "success" && (
        <SuccessMessage>
          Thank you! Your message has been sent successfully. We'll get back to
          you soon.
        </SuccessMessage>
      )}

      {submitStatus === "error" && (
        <ErrorMessage>
          Sorry, there was an error sending your message. Please try again or
          call us directly.
        </ErrorMessage>
      )}

      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <Label htmlFor="fullName" $hasValue={formData.fullName !== ""}>
            Full Name
          </Label>
        </InputGroup>

        <InputGroup>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <Label htmlFor="phone" $hasValue={formData.phone !== ""}>
            Phone number
          </Label>
        </InputGroup>

        <InputGroup>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Label htmlFor="email" $hasValue={formData.email !== ""}>
            Email Address
          </Label>
        </InputGroup>

        <InputGroup>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={1}
            required
          />
          <Label htmlFor="message" $hasValue={formData.message !== ""}>
            Tell us what happened...
          </Label>
        </InputGroup>

        <PrivacyDisclaimer>
          By submitting this form, you agree to our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
          <Link href="/terms-of-use">Terms of Use</Link>.
        </PrivacyDisclaimer>

        <SubmitButton type="submit" disabled={isSubmitting}>
          <ButtonText>
            {isSubmitting ? "Sending..." : "Contact Us Today"}
          </ButtonText>
          <Image src="/images/Arrow.svg" alt="Arrow" width={40} height={19} />
        </SubmitButton>
      </form>
    </FormWrapper>
  );
}
