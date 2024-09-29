"use client";

import { TypographyH1 } from "@/components/text/h1";
import { motion } from "framer-motion";

// SubHero Component for each page
interface SubHeroProps {
  title: string;
  description?: string;
  backgroundImage?: string; // Optional: Pass a custom background image for each page
}

export const SubHero = ({ title, description, backgroundImage }: SubHeroProps) => {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center h-72 w-full py-12"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : "url('/defaultSubHeroBg.jpg')", // Default background image
        backgroundColor: "rgba(0,0,0,0.5)", // Optional: dark overlay
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
        className="relative z-10 text-center text-white"
      >
        <TypographyH1>{title}</TypographyH1>
        {description && (
          <p className="text-gray-300 mt-2 text-lg">{description}</p>
        )}
      </motion.div>
    </section>
  );
};