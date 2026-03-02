"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const FormSection = styled.section`
  position: relative;
  width: 100%;
  background: #1b2632;
  padding: 60px 0;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 50px 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const FormContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const FormTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 115%;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 16px;
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`;

const FormSubtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 10px;
  }
`;

const PayNothingText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 115%;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 40px;
  text-align: center;
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 35px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;
    padding: 0 10px;
  }
`;

const SuccessMessage = styled.div`
  background: #4caf50;
  color: white;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  margin: 0 auto 30px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  width: 60%;
`;

const ErrorMessage = styled.div`
  background: #f44336;
  color: white;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  margin: 0 auto 30px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  width: 60%;
`;

const PrivacyDisclaimer = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin: 0 0 20px 0;

  a {
    color: #ffffff;
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 35px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

const FormGroup = styled.div`
  position: relative;
  width: 48%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 25px;
  }
`;

const FullWidthFormGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 40px;

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 35px;
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #ffffff;
  padding: 10px 0;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: #ffffff;
  outline: none;

  &::placeholder {
    color: transparent;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-20px);
    font-size: 14px;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #ffffff !important;
    -webkit-box-shadow: 0 0 0 30px #1b2632 inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    padding: 8px 0;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 0;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #ffffff;
  padding: 10px 0;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: #ffffff;
  outline: none;
  resize: none;

  &::placeholder {
    color: transparent;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-20px);
    font-size: 14px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    padding: 8px 0;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 0;
  }
`;

const Label = styled.label<{ $hasValue: boolean }>`
  position: absolute;
  left: 0;
  top: 10px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 74%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  pointer-events: none;
  transition: 0.3s ease all;

  ${(props) =>
    props.$hasValue &&
    `
    transform: translateY(-20px);
    font-size: 14px;
  `}

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    top: 8px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    top: 6px;
  }
`;

const SubmitButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
  width: 263px;
  height: 58px;
  background: ${(props) => (props.disabled ? "#666" : "#ffffff")};
  box-shadow: 7px 9px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 0 auto;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    transform: ${(props) => (props.disabled ? "none" : "translateY(-2px)")};
    box-shadow: ${(props) =>
      props.disabled
        ? "7px 9px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)"
        : "7px 12px 8px rgba(0, 0, 0, 0.3), inset 0px 4px 4px rgba(0, 0, 0, 0.25)"};
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 240px;
    height: 54px;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 50px;
    padding: 12px 14px;
  }
`;

const ButtonText = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 30px;
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
    font-size: 18px;
    line-height: 27px;
  }

  @media (max-width: 768px) {
    font-size: 17px;
    line-height: 25px;
  }
`;

const ArrowIcon = styled(Image)`
  transition: transform 0.3s ease;

  ${SubmitButton}:hover & {
    transform: translateX(3px);
  }

  @media (max-width: 768px) {
    width: 24px !important;
    height: 18px !important;
  }
`;

const MobileFormContainer = styled.div`
  display: none;
  position: relative;
  background: #1b2632;
  backdrop-filter: blur(8.89px);
  border-radius: 28.46px;
  padding: 24px;
  max-width: 374px;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 20px;
  }
`;

const MobileFormTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 10px;
`;

const MobileFormSubtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 115%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 20px;
  justify-content: center;
`;

const MobileFormGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

const MobileInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  padding: 8px 0;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #ffffff;
  outline: none;

  &::placeholder {
    color: transparent;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-16px);
    font-size: 12px;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #ffffff !important;
    -webkit-box-shadow: 0 0 0 30px #1b2632 inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const MobileTextarea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  padding: 8px 0;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #ffffff;
  outline: none;
  resize: none;

  &::placeholder {
    color: transparent;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-16px);
    font-size: 12px;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #ffffff !important;
    -webkit-box-shadow: 0 0 0 30px #1b2632 inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
const MobileLabel = styled.label<{ $hasValue: boolean }>`
  position: absolute;
  left: 0;
  top: 8px;
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
  transition: 0.3s ease all;
`;

const MobileSubmitButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 14px;
  gap: 8px;
  width: 208px;
  height: 49px;
  background: ${(props) => (props.disabled ? "#666" : "#ffffff")};
  box-shadow: 7px 9px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 20px auto 0;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    transform: ${(props) => (props.disabled ? "none" : "translateY(-2px)")};
    box-shadow: ${(props) =>
      props.disabled
        ? "7px 9px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)"
        : "7px 12px 8px rgba(0, 0, 0, 0.3), inset 0px 4px 4px rgba(0, 0, 0, 0.25)"};
  }
`;

const MobileButtonText = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #1b2632;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  ${MobileSubmitButton}:hover & {
    opacity: 1;
  }
`;

const MobileArrowIcon = styled(Image)`
  transition: transform 0.3s ease;

  ${MobileSubmitButton}:hover & {
    transform: translateX(3px);
  }
`;

interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [mobileFormValues, setMobileFormValues] = useState<
    Omit<FormValues, "firstName" | "lastName"> & { fullName: string }
  >({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [mobileSubmitStatus, setMobileSubmitStatus] = useState<
    "success" | "error" | null
  >(null);
  const [isMobileSubmitting, setIsMobileSubmitting] = useState(false);

  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  useEffect(() => {
    if (mobileSubmitStatus === "success" || mobileSubmitStatus === "error") {
      const timer = setTimeout(() => {
        setMobileSubmitStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [mobileSubmitStatus]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMobileChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMobileFormValues((prev) => ({
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
          type: "contact",
          fullName: `${formValues.firstName} ${formValues.lastName}`,
          email: formValues.email,
          phone: formValues.phone,
          message: formValues.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormValues({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setFormValues({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setFormValues({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMobileSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsMobileSubmitting(true);
    setMobileSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          fullName: mobileFormValues.fullName,
          email: mobileFormValues.email,
          phone: mobileFormValues.phone,
          message: mobileFormValues.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMobileSubmitStatus("success");
        setMobileFormValues({
          fullName: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setMobileSubmitStatus("error");
        setMobileFormValues({
          fullName: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting mobile form:", error);
      setMobileSubmitStatus("error");
      setMobileFormValues({
        fullName: "",

        phone: "",
        email: "",
        message: "",
      });
    } finally {
      setIsMobileSubmitting(false);
    }
  };

  return (
    <>
      <FormSection id="contact-form">
        <FormContainer>
          <FormHeader>
            <FormTitle>Book Your Free Consultation Today</FormTitle>
            <FormSubtitle>
              We are not your average law firm – call us now to get the
              compensation that you deserve.
            </FormSubtitle>
          </FormHeader>

          <PayNothingText>Pay Nothing Until YOU Win !</PayNothingText>

          {submitStatus === "success" && (
            <SuccessMessage>
              Thank you! Your message has been sent successfully. We'll get back
              to you soon.
            </SuccessMessage>
          )}

          {submitStatus === "error" && (
            <ErrorMessage>
              Sorry, there was an error sending your message. Please try again
              or call us directly.
            </ErrorMessage>
          )}

          <Form onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formValues.firstName}
                  onChange={handleChange}
                  required
                />

                <Label
                  htmlFor="firstName"
                  $hasValue={formValues.firstName !== ""}
                >
                  First Name
                </Label>
              </FormGroup>

              <FormGroup>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  value={formValues.lastName}
                  onChange={handleChange}
                  required
                />

                <Label
                  htmlFor="lastName"
                  $hasValue={formValues.lastName !== ""}
                >
                  Last name
                </Label>
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  value={formValues.phone}
                  onChange={handleChange}
                  required
                />

                <Label htmlFor="phone" $hasValue={formValues.phone !== ""}>
                  Phone Number
                </Label>
              </FormGroup>

              <FormGroup>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />

                <Label htmlFor="email" $hasValue={formValues.email !== ""}>
                  Email address
                </Label>
              </FormGroup>
            </FormRow>

            <FullWidthFormGroup>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us what happened..."
                value={formValues.message}
                onChange={handleChange}
                rows={1}
                required
              ></Textarea>
              <Label htmlFor="message" $hasValue={formValues.message !== ""}>
                Tell us what happened...
              </Label>
            </FullWidthFormGroup>

            <PrivacyDisclaimer>
              By submitting this form, you agree to our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
              <Link href="/terms-of-use">Terms of Use</Link>.
            </PrivacyDisclaimer>

            <SubmitButton type="submit" disabled={isSubmitting}>
              <ButtonText>
                {isSubmitting ? "Sending..." : "Free Case Evaluation"}
              </ButtonText>
              <ArrowIcon
                src="/images/Arrow.svg"
                alt="Arrow"
                width={27}
                height={20}
              />
            </SubmitButton>
          </Form>
        </FormContainer>
      </FormSection>

      <MobileFormContainer id="contact-form-mobile">
        <MobileFormTitle>Book Your Free Consultation Today</MobileFormTitle>
        <MobileFormSubtitle>
          We are not your average law firm call us now to get the compensation
          that you deserve.
        </MobileFormSubtitle>

        {mobileSubmitStatus === "success" && (
          <SuccessMessage>
            Thank you! Your message has been sent successfully. We'll get back
            to you soon.
          </SuccessMessage>
        )}

        {mobileSubmitStatus === "error" && (
          <ErrorMessage>
            Sorry, there was an error sending your message. Please try again or
            call us directly.
          </ErrorMessage>
        )}

        <form onSubmit={handleMobileSubmit}>
          <MobileFormGroup>
            <MobileInput
              type="text"
              id="mobile-fullName"
              name="fullName"
              placeholder="Full Name"
              value={mobileFormValues.fullName}
              onChange={handleMobileChange}
              required
            />

            <MobileLabel
              htmlFor="mobile-fullName"
              $hasValue={mobileFormValues.fullName !== ""}
            >
              Full Name
            </MobileLabel>
          </MobileFormGroup>

          <MobileFormGroup>
            <MobileInput
              type="tel"
              id="mobile-phone"
              name="phone"
              placeholder="Phone number"
              value={mobileFormValues.phone}
              onChange={handleMobileChange}
              required
            />

            <MobileLabel
              htmlFor="mobile-phone"
              $hasValue={mobileFormValues.phone !== ""}
            >
              Phone number
            </MobileLabel>
          </MobileFormGroup>

          <MobileFormGroup>
            <MobileInput
              type="email"
              id="mobile-email"
              name="email"
              placeholder="Email Address"
              value={mobileFormValues.email}
              onChange={handleMobileChange}
              required
            />

            <MobileLabel
              htmlFor="mobile-email"
              $hasValue={mobileFormValues.email !== ""}
            >
              Email Address
            </MobileLabel>
          </MobileFormGroup>

          <MobileFormGroup>
            <MobileTextarea
              id="mobile-message"
              name="message"
              placeholder="Tell us what happened..."
              value={mobileFormValues.message}
              onChange={handleMobileChange}
              rows={1}
              required
            ></MobileTextarea>

            <MobileLabel
              htmlFor="mobile-message"
              $hasValue={mobileFormValues.message !== ""}
            >
              Tell us what happened...
            </MobileLabel>
          </MobileFormGroup>

          <PrivacyDisclaimer>
            By submitting this form, you agree to our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
            <Link href="/terms-of-use">Terms of Use</Link>.
          </PrivacyDisclaimer>

          <MobileSubmitButton type="submit" disabled={isMobileSubmitting}>
            <MobileButtonText>
              {isMobileSubmitting ? "SENDING..." : "FREE CASE EVALUATION"}
            </MobileButtonText>
            <MobileArrowIcon
              src="/images/Arrow.svg"
              alt="Arrow"
              width={21}
              height={16}
            />
          </MobileSubmitButton>
        </form>
      </MobileFormContainer>
    </>
  );
}
