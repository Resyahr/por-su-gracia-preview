"use client";

import { TypographyH1 } from "./text/h1";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";

// Animation Variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.42, 0, 0.58, 1], // easeInOutCubic
      staggerChildren: 0.3, // Stagger animations for children
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // Smooth cubic bezier
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // Smooth animation
    },
  },
};

const Hero = () => {
  return (
    <>
      <section className="relative flex items-center justify-start bg-heroBackgroundSm md:bg-heroBackgroundMd lg:bg-heroBackground bg-cover bg-center h-screen w-full p-4 md:p-8 lg:p-16">
        {/* Darker overlay for better text contrast */}
        <div className="absolute inset-0 h-full w-full bg-black/40 z-0"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col items-start justify-between gap-6 z-10" // Added z-index to ensure text is above the overlay
        >
          <motion.div
            variants={textVariants}
            className="text-left text-white max-w-md"
          >
            <TypographyH1 className="leading-tight">
              Dios te{" "}
              <FlipWords
                words={["Bendice", "Ama", "Llama", "Busca", "Cambia"]}
                duration={2000}
                className="text-white bg-custom-red rounded-sm px-2 inline-block"
              />
            </TypographyH1>
            <p className="mt-4 text-lg text-gray-200">
              Descubre una vida llena de propósito y fe. Estamos aquí para ti.
            </p>
          </motion.div>

          <motion.div variants={buttonVariants}>
            <Button className="w-fit bg-custom-primary mt-4 hover:bg-custom-accent text-white" size={"lg"}>
              Conócenos
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;