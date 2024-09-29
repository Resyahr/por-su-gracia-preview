import Contact  from "@/components/main/Contact";
import Hero from "@/components/main/Hero";
import AddressSection from "@/components/main/Address";
import { DonationsSection } from "@/components/main/Donations";
import { KnowThePastor } from "@/components/main/KnowThePastor";
import AboutUs from "@/components/main/AboutUs";
import PreMain from "@/components/main/preMain";

export default function Home() {
  return (
    <>
      {/* Attention-grabbing hero section */}
      <Hero />

      {/* Main content about the church mission or services */}
      <main>
        <PreMain />

        <AboutUs />

        {/* Meet the pastor section for personal connection */}
        <KnowThePastor />

        {/* Donations section encouraging support for the church */}
        <DonationsSection />

        {/* Address section to provide directions to the church */}
        <AddressSection />

        {/* Contact form to let users reach out */}
        <Contact />
      </main>
    </>
  );
}
