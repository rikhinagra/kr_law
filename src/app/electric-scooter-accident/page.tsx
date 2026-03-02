import ElectricScooterAccidentHero from "@/components/electric-scooter-accident/ElectricScooterAccidentHero";
import ElectricScooterAccidentContent from "@/components/electric-scooter-accident/ElectricScooterAccidentContent";
import ElectricScooterHelpSection from "@/components/electric-scooter-accident/ElectricScooterHelpSection";
import SchemaOrg from "@/components/common/SchemaOrg";
import SettlementsBanner from "@/components/common/SettlementsBanner";
export const metadata = {
  title: "Electric Scooter Accident Attorney | KR Law, APC",
  description:
    "Experienced electric scooter accident attorneys at KR Law, APC helping victims get the compensation they deserve for their injuries.",
  keywords:
    "electric scooter accident, e-scooter accident lawyer, scooter injury lawyer, KR Law, APC, personal injury",
};

export default function ElectricScooterAccidentPage() {
  return (
    <main>
      <SchemaOrg
        title="Electric Scooter Accident Attorney | KR Law, APC"
        description="Experienced electric scooter accident attorneys at KR Law, APC helping victims get the compensation they deserve for their injuries."
        url="https://krlaw.com/electric-scooter-accident"
        imageUrl="https://krlaw.com/images/electric-scooter-accident-attorney-banner.jpg"
      />
      <ElectricScooterAccidentHero />
      <ElectricScooterAccidentContent />
      <ElectricScooterHelpSection />
      <SettlementsBanner />
    </main>
  );
}
