import AccidentLawyerHero from "@/components/accident-lawyer/AccidentLawyerHero";
import AccidentLawyerContent from "@/components/accident-lawyer/AccidentLawyerContent";
import AccidentReportingSection from "@/components/accident-lawyer/AccidentReportingSection";
import AccidentLawyerHelpSection from "@/components/accident-lawyer/AccidentLawyerHelpSection";
import AccidentLawyerHelp from "@/components/accident-lawyer/AccidentLawyerHelp";
import SettlementsBanner from "@/components/common/SettlementsBanner";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title: "Accident Lawyer | KR Law, APC",
  description:
    "Experienced accident lawyers at KR Law, APC can help you navigate the complex legal process after an accident. Get the compensation you deserve.",
  keywords:
    "accident lawyer, personal injury lawyer, KR Law, APC, injury attorney, accident compensation, free consultation",
};

export default function AccidentLawyerPage() {
  return (
    <main>
      <SchemaOrg
        title="Accident Lawyer | KR Law, APC"
        description="Experienced accident lawyers at KR Law, APC can help you navigate the complex legal process after an accident. Get the compensation you deserve."
        url="https://krlaw.com/accident-lawyer"
        imageUrl="https://krlaw.com/images/accident-lawyer.jpg"
      />
      <AccidentLawyerHero />
      <AccidentLawyerContent />
      <AccidentReportingSection />
      <AccidentLawyerHelpSection />
      <AccidentLawyerHelp />
      <SettlementsBanner />
    </main>
  );
}
