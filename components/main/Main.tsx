"use client";

import React from "react";
import AboutUs from "./AboutUs";
import PreMain from "./preMain"
import { motion } from "framer-motion";

const Main = () => {
  return (
    <motion.div /* style={{ scaleX: scrollYProgress }} */>
      <PreMain />
      <main className="py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <AboutUs />
      </main>
    </motion.div>
  );
};

export default Main;
