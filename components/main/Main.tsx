"use client";

import React from "react";
import AboutUs from "./AboutUs";
import PreMain from "./preMain"
import { motion } from "framer-motion";

const Main = () => {
  return (
    <motion.div /* style={{ scaleX: scrollYProgress }} */>
      <PreMain />
      <main className="">
        <AboutUs />
      </main>
    </motion.div>
  );
};

export default Main;
