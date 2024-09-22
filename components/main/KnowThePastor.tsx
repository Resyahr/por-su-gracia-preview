"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import pastorImage from "@/public/pastor.jpg"; // Replace with the actual image of the pastor
import { TypographyH2 } from "../text/h2";
import { TypographyP } from "../text/p";
import Link from "next/link";

export function KnowThePastor() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 bg-custom-background-light">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Pastor Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src={pastorImage}
            alt="Pastor's Image"
            className="rounded-full w-64 h-64 shadow-lg object-cover"
            width={400}
            height={400}
            priority={true}
          />
        </div>

        {/* Pastor Information */}
        <div className="w-full md:w-1/2">
          <TypographyH2 className="text-custom-primary mb-4">
            Conoce a nuestra Pastora
          </TypographyH2>
          <TypographyP className="text-custom-text-muted mb-6">
            La Pastora [Nombre de la pastora] es la líder espiritual de Por Su
            Gracia International Church. Comprometida con llevar la palabra de
            Dios a cada rincón del mundo, ha dedicado su vida a guiar a
            nuestra comunidad en la fe y el amor por Cristo.
          </TypographyP>

          <Button asChild className="bg-custom-primary hover:bg-custom-accent text-white mt-4">
            <Link href={"/KnowThePastor"}> Conoce Más </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
