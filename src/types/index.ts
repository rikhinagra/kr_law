export type FormInput = {
  name: string;
  value: string;
  type: "text" | "email" | "tel" | "textarea";
  required: boolean;
  label: string;
};

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

export interface LawCaseAward {
  amount: string;
  description: string;
}

export interface AchievementCardProps {
  amount: string;
  description: string;
}
