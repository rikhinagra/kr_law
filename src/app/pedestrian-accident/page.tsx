import PedestrianAccidentHero from "@/components/pedestrian-accident/PedestrianAccidentHero";
import PedestrianAccidentContent from "@/components/pedestrian-accident/PedestrianAccidentContent";
import PedestrianAccidentInfoSection from "@/components/pedestrian-accident/PedestrianAccidentInfoSection";
import PedestrianAccidentHelpSection from "@/components/pedestrian-accident/PedestrianAccidentHelpSection";
import SettlementsBanner from "@/components/common/SettlementsBanner";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title: "Pedestrian Accident Attorney | KR Law, APC",
  description:
    "Expert pedestrian accident attorneys at KR Law, APC help victims get maximum compensation for injuries. Free consultation available.",
  keywords:
    "pedestrian accident attorney, pedestrian injury lawyer, hit and run accident, crosswalk accident, California pedestrian laws, KR Law, APC",
};

export default function PedestrianAccidentPage() {
  return (
    <main>
      <SchemaOrg
        title="Pedestrian Accident Attorney | KR Law, APC"
        description="Expert pedestrian accident attorneys at KR Law, APC help victims get maximum compensation for injuries. Free consultation available."
        url="https://krlaw.com/pedestrian-accident"
        imageUrl="https://krlaw.com/images/pedestrian-accident-attorney-banner.jpg"
      />
      <PedestrianAccidentHero />
      <PedestrianAccidentContent />
      <PedestrianAccidentInfoSection />
      <PedestrianAccidentHelpSection />
      <SettlementsBanner />
    </main>
  );
}
