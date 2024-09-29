"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { containerVariants, textVariants, buttonVariants } from "@/utils/animations"; // Reuse animations
import CTAButton from "../reusable/CTAButton"; // Import the reusable CTAButton

export function DonationsSection() {
  // Framer Motion controls and scroll-trigger
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="py-12 bg-custom-background-light text-center px-4 md:px-8 lg:px-16 xl:px-32"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          variants={textVariants}
          className="text-3xl text-custom-primary font-semibold mb-8"
        >
          Apoya Nuestra Misión
        </motion.h2>

        <motion.p
          variants={textVariants}
          className="text-custom-text-muted text-lg mb-8"
        >
          Gracias a tu generosidad, nuestra iglesia sigue creciendo y llevando el
          mensaje de Dios a más personas. Descubre cómo puedes ser parte de este
          impacto positivo.
        </motion.p>

        <motion.div variants={buttonVariants}>
          {/* Reuse CTAButton for consistency */}
          <CTAButton
            href="/donations"
            text="Conoce Cómo Apoyarnos"
            background="bg-custom-primary hover:bg-custom-primary-dark"
            size="lg"
          />
        </motion.div>

        <motion.p
          variants={textVariants}
          className="text-custom-text-muted mt-6"
        >
          Explora cómo tus donaciones impactan nuestra iglesia y la comunidad.
        </motion.p>
      </motion.div>
    </section>
  );
}