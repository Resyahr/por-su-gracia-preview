import { SubHero } from "@/components/reusable/SubHero";
import { ContactForm } from "@/components/main/Contact";

const Contact = () => {
  return (
    <>
      {/* SubHero */}
      <SubHero
        title="Contáctanos"
        description="Estamos aquí para ti. Escríbenos o visítanos."
        backgroundImage="/contactBackground.jpg"
      />

      {/* Contact Form */}
      <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
        <div className="container mx-auto">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;