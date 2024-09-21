import React, { useEffect, useRef } from "react";
import { TypographyH2 } from "../text/h2";
import { motion, useAnimation, useInView } from "framer-motion";
import { TypographyLead } from "../text/lead";

// Framer Motion variants for animation
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.42, 0, 0.58, 1], // easeInOutCubic for smooth entrance
      when: "beforeChildren", // Ensure container animates before its children
      staggerChildren: 0.2,   // Stagger the animation of each child
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1], // Smooth cubic easing
    },
  },
};

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
      <motion.div variants={textVariants}>
        <TypographyLead className="mt-4 leading-tight text-lg text-white/65">
          Un lugar donde encontrarás esperanza, amor y una comunidad unida en
          fe.
        </TypographyLead>
      </motion.div>

      <motion.div variants={textVariants}>
        <TypographyH2>
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