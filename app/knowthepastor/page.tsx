import Image from "next/image";
import { SubHero } from "@/components/reusable/SubHero";
import { TypographyP } from "@/components/text/p";
import { TypographyH2 } from "@/components/text/h2";
import pastorImage from "@/public/pastor.jpg";

const AboutThePastor = () => {
  return (
    <>
      {/* SubHero for this page */}
      <SubHero
        title="Conoce a nuestra Pastora"
        description="Descubre la historia, misión y pasión de nuestra líder espiritual, Pastora Deiby Romero."
        backgroundImage="/pastorBackground.jpg"
      />

      {/* Detailed content about the Pastor */}
      <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center">
          {/* Pastor Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={pastorImage}
              alt="Pastora Deiby Romero"
              className="rounded-md shadow-lg object-cover"
              width={400}
              height={400}
              priority={true}
            />
          </div>

          {/* Pastor Information */}
          <div className="w-full md:w-1/2">
            <TypographyH2 className="text-custom-primary mb-4">
              Pastora Deiby Romero
            </TypographyH2>

            <TypographyP className="text-gray-700 mb-4 leading-relaxed">
              La Pastora Deiby Romero ha dedicado su vida al servicio de Dios y de nuestra comunidad,
              guiando con humildad y profunda fe a todos aquellos que buscan acercarse al Señor.
              Desde su juventud, Deiby sintió el llamado de Dios para predicar el evangelio, y desde
              entonces ha trabajado incansablemente para llevar su mensaje de esperanza y amor a cada rincón posible.
            </TypographyP>

            <TypographyP className="text-gray-700 mb-4 leading-relaxed">
              Con más de 15 años de experiencia en el ministerio, la Pastora Deiby es conocida por su
              amor incondicional hacia los demás, su dedicación a la enseñanza bíblica, y su habilidad
              para crear lazos profundos con todos los miembros de la congregación. A lo largo de su trayectoria,
              ha inspirado a muchos a encontrar su propósito en Cristo y a vivir una vida llena de fe.
            </TypographyP>

            <TypographyP className="text-gray-700 leading-relaxed">
              La misión de la Pastora Deiby Romero sigue siendo clara: compartir el amor de Cristo, equipar
              a los creyentes para la obra del ministerio, y continuar guiando a nuestra iglesia en un camino
              de crecimiento espiritual y transformación personal.
            </TypographyP>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutThePastor;