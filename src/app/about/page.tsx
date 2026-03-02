import AboutHero from "@/components/about/AboutHero";
import AboutPartner from "@/components/about/AboutPartner";
import SettlementsBanner from "@/components/about/SettlementsBanner";
import ContactForm from "@/components/about/ContactForm";
import Testimonials from "@/components/about/Testimonials";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title: "About Us | KR Law, APC | Los Angeles Personal Injury Attorneys",
  description:
    "Learn about KR Law, APC, our mission, and our team of experienced personal injury attorneys dedicated to helping clients throughout Los Angeles.",
  keywords:
    "about KR Law, APC, Los Angeles personal injury attorneys, Kathy Rabii, legal team, law firm mission, attorney profiles, personal injury law firm",
};

export default function AboutPage() {
  return (
    <main>
      <SchemaOrg
        title="About Us | KR Law, APC | Los Angeles Personal Injury Attorneys"
        description="Learn about KR Law, APC, our mission, and our team of experienced personal injury attorneys dedicated to helping clients throughout Los Angeles."
        url="https://krlaw.com/about"
        imageUrl="https://krlaw.com/images/about-hero.jpg"
      />
      <AboutHero />
      <AboutPartner />
      <SettlementsBanner />
      <ContactForm />
      <Testimonials />
    </main>
  );
}
