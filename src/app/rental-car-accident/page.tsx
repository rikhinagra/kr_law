import RentalCarAccidentHero from "@/components/rental-car-accident/RentalCarAccidentHero";
import RentalCarAccidentContent from "@/components/rental-car-accident/RentalCarAccidentContent";
import RentalCarLiabilitySection from "@/components/rental-car-accident/RentalCarLiabilitySection";
import RentalCarInfoSection from "@/components/rental-car-accident/RentalCarInfoSection";
import RentalCarHelpSection from "@/components/rental-car-accident/RentalCarHelpSection";
import SettlementsBanner from "@/components/common/SettlementsBanner";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title: "Rental Car Accident Lawyers | KR Law, APC",
  description:
    "Experienced rental car accident lawyers at KR Law, APC can help you navigate the complex legal process after an accident. Get the compensation you deserve.",
  keywords:
    "rental car accident lawyer, car rental crash, rental vehicle accident, personal injury lawyer, KR Law, APC, car rental collision",
};

export default function RentalCarAccidentPage() {
  return (
    <main>
      <SchemaOrg
        title="Rental Car Accident Lawyers | KR Law, APC"
        description="Experienced rental car accident lawyers at KR Law, APC can help you navigate the complex legal process after an accident. Get the compensation you deserve."
        url="https://krlaw.com/rental-car-accident"
        imageUrl="https://krlaw.com/images/rental-car-accident-banner.jpg"
      />
      <RentalCarAccidentHero />
      <RentalCarAccidentContent />
      <RentalCarLiabilitySection />
      <RentalCarInfoSection />
      <RentalCarHelpSection />
      <SettlementsBanner />
    </main>
  );
}
