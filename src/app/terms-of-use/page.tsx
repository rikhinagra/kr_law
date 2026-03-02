import TermsOfUseContent from "@/components/legal/TermsOfUseContent";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title: "Terms of Use | KR Law, APC",
  description:
    "Terms and Conditions for SMS/text messaging services and website use provided by KR Law, APC.",
  keywords:
    "terms of use, terms and conditions, SMS terms, text messaging, legal terms, KR Law APC",
};

export default function TermsOfUse() {
  return (
    <main>
      <SchemaOrg
        title="Terms of Use | KR Law, APC"
        description="Terms and Conditions for SMS/text messaging services and website use provided by KR Law, APC."
        url="https://www.krinjurylawfirm.com/terms-of-use"
        imageUrl="https://www.krinjurylawfirm.com/images/kr-law-og-image.png"
      />
      <TermsOfUseContent />
    </main>
  );
}
