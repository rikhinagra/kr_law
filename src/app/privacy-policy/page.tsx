import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title: "Privacy Policy | KR Law, APC",
  description:
    "Privacy Policy for KR Law, APC. Learn how we collect, use, and protect your personal information.",
  keywords:
    "privacy policy, data protection, personal information, KR Law APC, SMS consent, privacy rights",
};

export default function PrivacyPolicy() {
  return (
    <main>
      <SchemaOrg
        title="Privacy Policy | KR Law, APC"
        description="Privacy Policy for KR Law, APC. Learn how we collect, use, and protect your personal information."
        url="https://www.krinjurylawfirm.com/privacy-policy"
        imageUrl="https://www.krinjurylawfirm.com/images/kr-law-og-image.png"
      />
      <PrivacyPolicyContent />
    </main>
  );
}
