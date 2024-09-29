import { SubHero } from "@/components/reusable/SubHero";
import { TypographyH2 } from "@/components/text/h2";
import { TypographyP } from "@/components/text/p";

const Services = () => {
  return (
    <>
      {/* SubHero */}
      <SubHero
        title="Nuestros Servicios"
        description="Explora los servicios que ofrecemos a nuestra comunidad."
        backgroundImage="/servicesBackground.jpg"
      />

      {/* Services Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
        <div className="container mx-auto">
          <TypographyH2 className="text-custom-primary mb-6">Servicios de Adoración</TypographyH2>
          <TypographyP className="text-gray-700 leading-relaxed">
            Cada semana, ofrecemos varios servicios de adoración para todos los miembros de nuestra congregación.
            Ya sea en persona o en línea, puedes participar y adorar con nosotros. Nuestros servicios incluyen 
            alabanzas, mensajes bíblicos inspiradores y momentos de oración.
          </TypographyP>
          <TypographyP className="mt-4 text-gray-700 leading-relaxed">
            También ofrecemos servicios de oración los lunes, miércoles y viernes, así como eventos especiales
            durante el año.
          </TypographyP>
        </div>
      </section>
    </>
  );
};

export default Services;