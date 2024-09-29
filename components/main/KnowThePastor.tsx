"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/reusable/AnimatedSection";
import ReusableCTAButton from "@/components/reusable/CTAButton";
import pastorImage from "@/public/pastor.jpg";
import { TypographyH2 } from "../text/h2";
import { TypographyP } from "../text/p";

export function KnowThePastor() {
  return (
    <AnimatedSection className="relative py-16 px-4 md:px-8 lg:px-16 xl:px-32 bg-custom-background-light text-center md:text-left">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-custom-secondary/10 pointer-events-none" />

      <div className="relative container mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Pastor Image with subtle hover scale effect */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-center"
          whileHover={{ scale: 1.25 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={pastorImage}
            alt="Pastor's Image"
            className="rounded-md shadow-xl object-cover ring-4 ring-custom-primary"
            width={400}
            height={400}
            priority={true}
          />
        </motion.div>

        {/* Pastor Information */}
        <div className="w-full md:w-1/2">
          <TypographyH2 className="text-4xl font-bold text-custom-primary mb-4">
            Conoce a nuestra Pastora
          </TypographyH2>
          <TypographyP className="text-custom-text-muted text-lg mb-6 leading-relaxed">
            La Pastora [Nombre de la pastora] es la líder espiritual de Por Su
            Gracia International Church. Comprometida con llevar la palabra de
            Dios a cada rincón del mundo, ha dedicado su vida a guiar a nuestra
            comunidad en la fe y el amor por Cristo.
          </TypographyP>

          <ReusableCTAButton
            href="/knowthepastor"
            text="Conoce Más"
            background="bg-custom-primary hover:bg-custom-accent"
            size="lg"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
