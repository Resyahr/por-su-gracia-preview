import Image from "next/image";
import personWithBible from "@/public/personWithBible.jpg";
import personPraying from "@/public/personPraying.jpg";
import churchMusic from "@/public/churchMusic.jpg";
import { WobbleCard } from "../ui/wobble-card";

const AboutUs = () => {
  return (
    <section id="about" className="bg-white ">
      <h2 className="text-custom-red text-3xl font-semibold text-center">
        Sobre Nosotros
      </h2>
      <p className="text-gray-700 text-lg mt-4 text-center">
        En Por Su Gracia International Church, somos una familia de creyentes
        comprometidos con llevar la palabra de Dios a todas las naciones.
      </p>

      <div className="flex flex-wrap gap-4"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full my-6">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-custom-text-muted/80 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <h2 className="text-left text-balance text-base md:text-xl text-white lg:text-3xl font-semibold tracking-[-0.015em] text-custom-muted">
            Adoración
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Clamamos por las personas y el mundo
          </p>
          <Image
            src={churchMusic}
            alt="Person with bible"
            className="rounded-sm mt-4 object-cover"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-custom-text-muted/80">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Oración
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Ven, únete a las oraciones
          </p>
          <Image
            src={personPraying}
            alt="Person Praying"
            className="rounded-sm mt-4 object-contain"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-custom-text-muted/80 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              La palabra de Dios
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Impartimos conocimiento bíblico y espiritual
            </p>
          </div>
          <Image
            src={personWithBible}
            alt="linear demo image"
            className="object-contain rounded-sm mt-4"
          />
        </WobbleCard>
      </div>
    </section>
  );
};

export default AboutUs;
