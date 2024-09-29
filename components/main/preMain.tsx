'use client'

import React, { useEffect, useRef } from "react";
import { TypographyH2 } from "../text/h2";
import { motion, useAnimation, useInView } from "framer-motion";
import { TypographyLead } from "../text/lead";
import { containerVariants, textVariants } from "@/utils/animations";

const PreMain = () => {
  // Animation control
  const controls = useAnimation();
  
  // Use ref and Framer Motion's useInView hook
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger when 50% is visible

  // Trigger animation when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      className="bg-custom-primary text-white flex flex-col gap-4 py-16 text-center px-4 md:px-8 lg:px-16 xl:px-32"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      ref={ref} // Attach the ref for in-view detection
    >
      {/* Lead Text */}
      <motion.div variants={textVariants}>
        <TypographyLead className="mt-4 leading-tight text-white">
          Un lugar donde encontrarás esperanza, amor y una comunidad unida en fe.
        </TypographyLead>
      </motion.div>

      {/* Bible Verse */}
      <motion.div variants={textVariants}>
        <TypographyH2 className="text-custom-highlight">
          <q>
            Vengan a mí todos ustedes que están cansados y agobiados, y yo les
            daré descanso.
          </q>
          <br /> -Mateo 11:28
        </TypographyH2>
      </motion.div>
    </motion.div>
  );
};

export default PreMain;