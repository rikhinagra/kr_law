import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurAchievements from "@/components/home/OurAchievements";
import PracticeAreas from "@/components/home/PracticeAreas";
import OurServices from "@/components/home/OurServices";
import SouthernCaliforniaSection from "@/components/home/SouthernCaliforniaSection";
import Testimonials from "@/components/home/Testimonials";
import BlogNewsSection from "@/components/home/BlogNewsSection";
import FAQ from "@/components/home/FAQ";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title: "KR Law, APC | Kathy Rabii Law Firm | Los Angeles Legal Services",
  description:
    "KR Law, APC led by Kathy Rabii provides expert legal representation. Behind every case is a person who deserves care. Pay nothing until you win!",
  keywords:
    "KR Law, APC, Kathy Rabii, law firm, legal services, Los Angeles attorney, accident lawyer, arrest attorney, free consultation",
};

export default function Home() {
  return (
    <main>
      <SchemaOrg
        title="KR Law, APC | Kathy Rabii Law Firm | Los Angeles Legal Services"
        description="KR Law, APC led by Kathy Rabii provides expert legal representation. Behind every case is a person who deserves care. Pay nothing until you win!"
        url="https://www.krinjurylawfirm.com/"
        imageUrl="https://www.krinjurylawfirm.com/images/lawyer-image-4.webp"
      />
      <HeroSection />
      <WhyChooseUs />
      <OurAchievements />
      <PracticeAreas />
      <OurServices />
      <SouthernCaliforniaSection />
      <Testimonials />
      <BlogNewsSection />
      <FAQ />
    </main>
  );
}
