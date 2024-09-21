import { useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "framer-motion";
import personPraying from "@/public/personPraying.jpg";
import churchMusic from "@/public/churchMusic.jpg";
import bibleStudy from "@/public/bibleStudy.jpg"; // Add another image for the new card

import WobbleCardReusable from "../reusable/WobbleCard";
import { TypographyH2 } from "../text/h2";
import { TypographyP } from "../text/p";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the children animation
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // Smooth easing
    },
  },
};

const AboutUs = () => {
  // Controls for the animation
  const controls = useAnimation();

  // Use ref and Framer Motion's useInView hook
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Animation triggers when 50% of the section is visible

  // Trigger animation when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-32" ref={ref}>
      <div className="max-w-4xl mx-auto mb-8">
        <TypographyH2 className="text-center text-gray-800 mb-4 leading-tight tracking-wide">
          Somos{" "}
          <span className="text-custom-logo">
            Por su Gracia International Church 👋
          </span>
        </TypographyH2>
        <TypographyP className="text-custom-text-muted text-lg text-center leading-relaxed">
          Una familia de creyentes comprometidos con llevar la palabra de Dios a
          todas las naciones y a cada corazón necesitado de esperanza.
        </TypographyP>
      </div>

      {/* 4 Cards in 2 Columns */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto w-full my-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div variants={cardVariants}>
          <WobbleCardReusable
            containerClassNames="bg-custom-primary text-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[400px] h-full"
            cardTitle="Adoramos"
            description="Con canciones y cánticos, elevamos nuestra alabanza al único digno de toda gloria."
            colSpan="col-span-1"
            image
            src={churchMusic}
            alt="People playing music"
          />
        </motion.div>

        <motion.div variants={cardVariants}>
          <WobbleCardReusable
            containerClassNames="bg-custom-red text-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[400px] h-full"
            cardTitle="Oramos"
            colSpan="col-span-1"
            description="Hablar con Dios a través de la oración es el poder más grande que nos ha dado."
            descriptionClassNames="text-white"
            image
            src={personPraying}
            alt="Person Praying"
          />
        </motion.div>

        <motion.div variants={cardVariants}>
          <WobbleCardReusable
            containerClassNames="bg-custom-secondary text-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[400px] h-full"
            cardTitle="Estudiamos la Biblia"
            colSpan="col-span-1"
            description="Estudiamos y aprendemos la palabra de Dios para aplicarla en nuestra vida diaria."
            image
            src={bibleStudy} // You can change the image source to something more relevant
            alt="Bible study"
          />
        </motion.div>

        {/* New Card (Example Content) */}
        <motion.div variants={cardVariants}>
          <WobbleCardReusable
            containerClassNames="bg-custom-logo text-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[400px] h-full"
            cardTitle="Ayudamos"
            colSpan="col-span-1"
            description="Extendemos una mano amiga a quienes lo necesitan a través de actividades de servicio y apoyo comunitario."
            // No image here for simplicity
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;