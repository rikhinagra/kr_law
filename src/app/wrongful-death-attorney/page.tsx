import WrongfulDeathAttorneyHero from "@/components/wrongful-death-attorney/WrongfulDeathAttorneyHero";
import WrongfulDeathAttorneyContent from "@/components/wrongful-death-attorney/WrongfulDeathAttorneyContent";
import WrongfulDeathHelpSection from "@/components/wrongful-death-attorney/WrongfulDeathHelpSection";
import SchemaOrg from "@/components/common/SchemaOrg";
import SettlementsBanner from "@/components/common/SettlementsBanner";

export const metadata = {
  title: "Wrongful Death Attorney | KR Law, APC",
  description:
    "Experienced wrongful death attorneys at KR Law, APC helping families seek justice and compensation after the loss of a loved one.",
  keywords:
    "wrongful death attorney, wrongful death lawyer, fatal accident lawyer, KR Law, APC, compensation for death",
};

export default function WrongfulDeathAttorneyPage() {
  return (
    <main>
      <SchemaOrg
        title="Wrongful Death Attorney | KR Law, APC"
        description="Experienced wrongful death attorneys at KR Law, APC helping families seek justice and compensation after the loss of a loved one."
        url="https://krlaw.com/wrongful-death-attorney"
        imageUrl="https://krlaw.com/images/wrongful-death-attorney-banner.jpg"
      />
      <WrongfulDeathAttorneyHero />
      <WrongfulDeathAttorneyContent />
      <WrongfulDeathHelpSection />
      <SettlementsBanner />
    </main>
  );
}
