"use client";

import { TypographyH1 } from "../text/h1";
import { motion } from "framer-motion";
import { FlipWords } from "../ui/flip-words";
import CTAButton from "../reusable/CTAButton";

// Importing reusable animations
import {
  containerVariants,
  textVariants,
  buttonVariants,
} from "@/utils/animations";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-start bg-heroBackgroundSm md:bg-heroBackgroundMd lg:bg-heroBackground bg-cover bg-center h-screen w-full p-4 md:p-8 lg:p-16">
      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 h-full w-full bg-black/40 z-0"></div>

      <motion.div
        variants={containerVariants} // Using reusable container animation
        initial="hidden"
        animate="visible"
        className="relative flex flex-col items-start justify-between gap-6 z-10"
      >
        <motion.div
          variants={textVariants} // Using reusable text animation
          className="text-left text-white max-w-md"
        >
          <TypographyH1 className="leading-tight">
            Dios te{" "}
            <FlipWords
              words={["Bendice", "Ama", "Llama", "Busca", "Cambia"]}
              duration={2000}
              className="text-white bg-custom-accent rounded-sm px-2 inline-block"
            />
          </TypographyH1>
          <p className="mt-4 text-lg text-custom-lightGray">
            Descubre una vida llena de propósito y fe. Estamos aquí para ti.
          </p>
        </motion.div>

        <motion.div variants={buttonVariants} // Using reusable button animation
        >
          {/* Reused CTAButton component */}
          <CTAButton
            href="#aboutUs"
            text="Conócenos"
            icon={null}
            background="bg-custom-primary hover:bg-custom-highlight"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;