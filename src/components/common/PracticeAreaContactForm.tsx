"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const FormContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 600px;
  background: #1b2632;
  backdrop-filter: blur(8.89px);
  border-radius: 28px;
  padding: 30px 25px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
  z-index: 10;

  @media (min-width: 1025px) {
    height: auto;
    min-height: 450px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    max-width: 600px;
    padding: 25px 22px;
    height: auto;
    min-height: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    padding: 22px 18px;
    height: auto;
    min-height: 350px;
    border-radius: 0;
  }
`;

const FormTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 115%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 0 0 12px;
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 34px;
    line-height: 110%;
  }

  @media (max-width: 768px) {
    font-size: 26px;
    text-align: center;
    justify-content: center;
    line-height: 110%;
  }
`;

const FormDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 145%;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 20px;
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 15px;
    line-height: 140%;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    justify-content: center;
    line-height: 140%;
    margin-bottom: 15px;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const FieldsRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 15px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    gap: 20px;
    margin-bottom: 0;
  }
`;

const FormGroup = styled.div`
  position: relative;
  flex: 1;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    margin-bottom: 15px;
  }
`;

const FullWidthFormGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const HalfWidthFormGroup = styled.div`
  position: relative;
  width: 48%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.7);
  pointer-events: none;
  transition: 0.2s ease all;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0 0 5px 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #ffffff;
  margin-top: 20px;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-bottom: 1px solid #ffffff;
  }

  &::placeholder {
    color: transparent;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #ffffff !important;
    -webkit-box-shadow: 0 0 0 30px #1b2632 inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    margin-top: 18px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0 0 5px 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #ffffff;
  margin-top: 20px;
  outline: none;
  resize: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-bottom: 1px solid #ffffff;
  }

  &::placeholder {
    color: transparent;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #ffffff !important;
    -webkit-box-shadow: 0 0 0 30px #1b2632 inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    margin-top: 18px;
  }
`;

const SelectContainer = styled.div`
  position: relative;
  width: 48%;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: #ffffff;
  }
`;

const SelectLabel = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;

const SelectArrow = styled.span`
  width: 8px;
  height: 8px;
  border-left: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  transform: rotate(-45deg);
  margin-top: -4px;
`;

const Select = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const SubmitButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
  width: 325px;
  height: 58px;
  background: ${(props) => (props.disabled ? "#666" : "#ffffff")};
  box-shadow: 5px 8px 15px rgba(0, 0, 0, 0.2),
    inset 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: none;
  margin: 30px auto 0;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    transform: ${(props) => (props.disabled ? "none" : "translateY(-2px)")};
    box-shadow: ${(props) =>
      props.disabled
        ? "5px 8px 15px rgba(0, 0, 0, 0.2), inset 0px 4px 4px rgba(0, 0, 0, 0.1)"
        : "7px 10px 20px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.1)"};
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 290px;
    height: 50px;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;

    max-width: 260px;
    height: 48px;
    margin-top: 20px;
    padding: 10px 12px;
  }
`;

const ButtonText = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;

  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #1b2632;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  ${SubmitButton}:hover & {
    opacity: 1;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
    line-height: 25px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
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
  city: string;
  state: string;
  address: string;
  postalCode: string;
  caseType: string;
  message: string;
}

export default function PracticeAreaContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    address: "",
    postalCode: "",
    caseType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
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
          type: "practice-area",
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
          city: "",
          state: "",
          address: "",
          postalCode: "",
          caseType: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          city: "",
          state: "",
          address: "",
          postalCode: "",
          caseType: "",
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
        city: "",
        state: "",
        address: "",
        postalCode: "",
        caseType: "",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const caseTypes = [
    "Car Accident",
    "Uber/Lyft Accident",
    "Pedestrian Accident",
    "Electric Scooter Accident",
    "Rental Car Accident",
    "Wrongful Death",
    "Airbnb Accident",
    "Other",
  ];

  return (
    <FormContainer id="consultation-form">
      <FormTitle>Contact Us Today!</FormTitle>
      <FormDescription>
        If you've been injured, contact the personal injury lawyers at KR Law
        Group today for a FREE no obligation consultation. Remember, we don't
        get paid until you do.
      </FormDescription>

      {submitStatus === "success" && (
        <SuccessMessage>
          Thank you! Your consultation request has been sent successfully. We'll
          contact you soon.
        </SuccessMessage>
      )}

      {submitStatus === "error" && (
        <ErrorMessage>
          Sorry, there was an error sending your request. Please try again or
          call us directly.
        </ErrorMessage>
      )}

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FieldsRow>
          <FormGroup>
            <Label htmlFor="phone">Phone number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </FieldsRow>

        <FieldsRow>
          <FormGroup>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              name="state"
              type="text"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </FieldsRow>

        <FormGroup>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FieldsRow>
          <HalfWidthFormGroup>
            <Label htmlFor="postalCode">Postal code</Label>
            <Input
              id="postalCode"
              name="postalCode"
              type="text"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </HalfWidthFormGroup>

          <SelectContainer>
            <SelectWrapper>
              <SelectLabel>
                {formData.caseType || "Select Case Type"}
              </SelectLabel>
              <SelectArrow />
            </SelectWrapper>
            <Select
              name="caseType"
              value={formData.caseType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Case Type
              </option>
              {caseTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </SelectContainer>
        </FieldsRow>

        <FormGroup>
          <Label htmlFor="message">Tell us what happened</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={1}
            required
          />
        </FormGroup>

        <PrivacyDisclaimer>
          By submitting this form, you agree to our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
          <Link href="/terms-of-use">Terms of Use</Link>.
        </PrivacyDisclaimer>

        <SubmitButton type="submit" disabled={isSubmitting}>
          <ButtonText>
            {isSubmitting ? "Sending..." : "Claim My Free Case Review"}
          </ButtonText>
          <Image
            src="/images/Arrow.svg"
            alt="Arrow"
            width={27}
            height={20}
            style={{ transform: "rotate(0deg)" }}
          />
        </SubmitButton>
      </Form>
    </FormContainer>
  );
}
