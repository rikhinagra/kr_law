import AntiSpamContent from "@/components/legal/AntiSpamContent";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title: "Anti-Spam Policy | KR Law, APC",
  description:
    "Anti-Spam Policy for KR Law, APC. Learn about our commitment to responsible communication practices and your opt-out rights.",
  keywords:
    "anti-spam policy, CAN-SPAM Act, TCPA compliance, opt-out rights, email policy, SMS policy, KR Law APC",
};

export default function AntiSpam() {
  return (
    <main>
      <SchemaOrg
        title="Anti-Spam Policy | KR Law, APC"
        description="Anti-Spam Policy for KR Law, APC. Learn about our commitment to responsible communication practices and your opt-out rights."
        url="https://www.krinjurylawfirm.com/anti-spam"
        imageUrl="https://www.krinjurylawfirm.com/images/kr-law-og-image.png"
      />
      <AntiSpamContent />
    </main>
  );
}
