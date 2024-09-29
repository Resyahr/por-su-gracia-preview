import { SubHero } from "@/components/reusable/SubHero";
import { TypographyH2 } from "@/components/text/h2";
import { TypographyP } from "@/components/text/p";

const AboutUs = () => {
  return (
    <>
      {/* SubHero */}
      <SubHero
        title="Sobre Nosotros"
        description="Conoce nuestra historia, misión y valores."
        backgroundImage="/aboutUsBackground.jpg"
      />

      {/* Detailed content about the church */}
      <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
        <div className="container mx-auto">
          <TypographyH2 className="text-custom-primary mb-6">Nuestra Historia</TypographyH2>
          <TypographyP className="text-gray-700 leading-relaxed">
            Desde nuestros humildes comienzos, Por Su Gracia International Church ha crecido con el propósito de
            compartir el evangelio con cada alma. Fundada por un pequeño grupo de creyentes, nuestra iglesia ha
            expandido su alcance local e internacionalmente. Nuestra misión es hacer discípulos de todas las
            naciones y promover una comunidad de amor y servicio.
          </TypographyP>
        </div>
      </section>
    </>
  );
};

export default AboutUs;