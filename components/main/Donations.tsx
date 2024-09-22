"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

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
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl text-custom-primary font-semibold mb-8">
          Apoya Nuestra Misión
        </h2>
        <p className="text-custom-text-muted text-lg mb-8">
          Gracias a tu generosidad, nuestra iglesia sigue creciendo y llevando
          el mensaje de Dios a más personas. Descubre cómo puedes ser parte de
          este impacto positivo.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
        >
          <Button
            asChild
            className="w-full bg-custom-primary  py-4 px-8 text-xl font-semibold hover:bg-custom-primary-dark transition-all duration-300"
          >
            <Link href="/donations" className="text-white"> Conoce Cómo Apoyarnos </Link>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: [0.42, 0, 0.58, 1] }}
          className="text-custom-text-muted mt-6"
        >
          Explora cómo tus donaciones impactan nuestra iglesia y la comunidad.
        </motion.p>
      </motion.div>
    </section>
  );
}
