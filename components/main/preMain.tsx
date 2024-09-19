import React from "react";
import { TypographyH2 } from "../text/h2";
import { motion } from "framer-motion"
import { TypographyLead } from "../text/lead";

const PreMain = () => {
  return (
    <motion.div animate={{opacity: 1}}  className="bg-custom-primary text-white flex flex-col gap-4 py-16 text-center y-20 px-4 md:px-8 lg:px-16 xl:px-32">
      <TypographyLead className="mt-4 leading-tight text-lg text-white/65">
        Un lugar donde encontrarás esperanza, amor y una comunidad unida en
        fe.
      </TypographyLead>

      <div>
        <TypographyH2>
          <q>
            
            Vengan a mí todos ustedes que están cansados y agobiados, y yo les
            daré descanso.
          </q>
           <br /> -Mateo 11:28
        </TypographyH2>
      </div>
    </motion.div>
  );
};

export default PreMain;
