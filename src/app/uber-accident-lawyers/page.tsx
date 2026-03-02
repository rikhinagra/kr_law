import UberAccidentHero from "@/components/uber-accident-lawyers/UberAccidentHero";
import UberAccidentContent from "@/components/uber-accident-lawyers/UberAccidentContent";
import UberAccidentInfoSection from "@/components/uber-accident-lawyers/UberAccidentInfoSection";
import UberHowWeCanHelpSection from "@/components/uber-accident-lawyers/UberHowWeCanHelpSection";
import UberQuickFactsSection from "@/components/uber-accident-lawyers/UberQuickFactsSection";
import SettlementsBanner from "@/components/common/SettlementsBanner";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title: "Uber Accident Lawyers | KR Law, APC",
  description:
    "Experienced Uber accident lawyers at KR Law, APC can help you navigate the complex legal process after a rideshare accident. Get the compensation you deserve.",
  keywords:
    "Uber accident lawyer, rideshare accident attorney, Uber crash lawyer, Uber injury claim, KR Law, APC, California Uber accident",
};

export default function UberAccidentLawyersPage() {
  return (
    <main>
      <SchemaOrg
        title="Uber Accident Lawyers | KR Law, APC"
        description="Experienced Uber accident lawyers at KR Law, APC can help you navigate the complex legal process after a rideshare accident. Get the compensation you deserve."
        url="https://krlaw.com/uber-accident-lawyers"
        imageUrl="https://krlaw.com/images/uber-accident-lawyer-banner.jpg"
      />
      <UberAccidentHero />
      <UberAccidentContent />
      <UberQuickFactsSection />
      <UberAccidentInfoSection />
      <UberHowWeCanHelpSection />
      <SettlementsBanner />
    </main>
  );
}
