import { ContactForm } from "@/components/main/Contact";
import Hero from "@/components/Hero";
import AddressSection from "@/components/main/Address";
import Main from "@/components/main/Main"
import { DonationsSection } from "@/components/main/Donations";
import { KnowThePastor } from "@/components/main/KnowThePastor";

export default function Home() {
  return (
    <>
      {/* Attention-grabbing hero section */}
      <Hero />

      {/* Main content about the church mission or services */}
      <Main />

      {/* Meet the pastor section for personal connection */}
      <KnowThePastor />

      {/* Donations section encouraging support for the church */}
      <DonationsSection />

      {/* Address section to provide directions to the church */}
      <AddressSection />

      {/* Contact form to let users reach out */}
      <ContactForm />
    </>
  );
}