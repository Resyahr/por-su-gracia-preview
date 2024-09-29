"use client";

import { useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "framer-motion";
import Image from "next/image";
import churchMusic from "@/public/churchMusic.jpg";
import personPraying from "@/public/personPraying.jpg";
import bibleStudy from "@/public/bibleStudy.jpg";
import serviceCommunity from "@/public/serviceCommunity.jpg";

import { TypographyH2 } from "../text/h2";
import { TypographyP } from "../text/p";
import ReusableCTAButton from "../reusable/CTAButton";

// Importing animation variants from animations.js
import { containerVariants, cardLeftVariants, cardRightVariants, textVariants } from "@/utils/animations";

const AboutUs = () => {
  // Controls for the section intro animation
  const controls = useAnimation();

  // General Section in-view trigger
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Individual card refs
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  // Card in-view triggers
  const card1InView = useInView(card1Ref, { once: true, amount: 0.1 });
  const card2InView = useInView(card2Ref, { once: true, amount: 0.1 });
  const card3InView = useInView(card3Ref, { once: true, amount: 0.1 });
  const card4InView = useInView(card4Ref, { once: true, amount: 0.1 });

  // Trigger section intro animation
  useEffect(() => {
    if (sectionInView) {
      controls.start("visible");
    }
  }, [controls, sectionInView]);

  return (
    <section id="aboutUs" className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 bg-custom-dark" ref={sectionRef}>
      {/* Introduction */}
      <motion.div
        className="max-w-4xl mx-auto mb-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div variants={textVariants}>
          <TypographyH2 className="text-center text-white mb-4 leading-tight tracking-wide">
            Bienvenidos a{" "}
            <span className="text-custom-highlight">
              Por su Gracia International Church 👋
            </span>
          </TypographyH2>
        </motion.div>

        <motion.div variants={textVariants}>
          <TypographyP className="text-gray-300 text-lg text-center leading-relaxed">
            Somos una familia de creyentes comprometidos a compartir la palabra de Dios, ofreciendo esperanza, amor, y una comunidad unida en la fe. Juntos, transformamos vidas y fortalecemos nuestra relación con Cristo.
          </TypographyP>
        </motion.div>
      </motion.div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto w-full my-10">
        {/* Redesigned Card 1 (Left) */}
        <motion.div
          variants={cardLeftVariants}
          initial="hidden"
          animate={card1InView ? "visible" : "hidden"}
          ref={card1Ref}
          className="relative w-full rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={churchMusic}
            alt="People playing music"
            className="w-full h-full object-cover"
            layout="responsive"
            width={500}
            height={400}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-center items-center">
            <TypographyH2 className="text-white mb-2">Adoramos</TypographyH2>
            <TypographyP className="text-gray-200 text-center px-4">
              Con canciones y cánticos, elevamos nuestra alabanza al único digno de toda gloria.
            </TypographyP>
          </div>
        </motion.div>

        {/* Redesigned Card 2 (Right) */}
        <motion.div
          variants={cardRightVariants}
          initial="hidden"
          animate={card2InView ? "visible" : "hidden"}
          ref={card2Ref}
          className="relative w-full rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={personPraying}
            alt="Person Praying"
            className="w-full h-full object-cover"
            layout="responsive"
            width={500}
            height={400}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-center items-center">
            <TypographyH2 className="text-white mb-2">Oramos</TypographyH2>
            <TypographyP className="text-gray-200 text-center px-4">
              Hablar con Dios a través de la oración es el poder más grande que nos ha dado.
            </TypographyP>
          </div>
        </motion.div>

        {/* Redesigned Card 3 (Left) */}
        <motion.div
          variants={cardLeftVariants}
          initial="hidden"
          animate={card3InView ? "visible" : "hidden"}
          ref={card3Ref}
          className="relative w-full rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={bibleStudy}
            alt="Bible Study"
            className="w-full h-full object-cover"
            layout="responsive"
            width={500}
            height={400}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-center items-center">
            <TypographyH2 className="text-white mb-2">Estudiamos la Biblia</TypographyH2>
            <TypographyP className="text-gray-200 text-center px-4">
              Estudiamos y aprendemos la palabra de Dios para aplicarla en nuestra vida diaria.
            </TypographyP>
          </div>
        </motion.div>

        {/* Redesigned Card 4 (Right) */}
        <motion.div
          variants={cardRightVariants}
          initial="hidden"
          animate={card4InView ? "visible" : "hidden"}
          ref={card4Ref}
          className="relative w-full rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={serviceCommunity}
            alt="Service and Community"
            className="w-full h-full object-cover"
            layout="responsive"
            width={500}
            height={400}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-center items-center">
            <TypographyH2 className="text-white mb-2">Ayudamos</TypographyH2>
            <TypographyP className="text-gray-200 text-center px-4">
              Extendemos una mano amiga a quienes lo necesitan a través de actividades de servicio y apoyo comunitario.
            </TypographyP>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <ReusableCTAButton
          href="/donations"
          text="Apóyanos"
          background="bg-custom-accent" // Applied custom accent color
          size="lg"
        />
      </div>
    </section>
  );
};

export default AboutUs;