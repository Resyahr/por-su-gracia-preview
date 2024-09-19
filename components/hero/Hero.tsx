"use client";

import { TypographyH1 } from "../text/h1";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { FlipWords } from "../ui/flip-words";

const Hero = () => {
  return (
    <>
      <section className="relative flex items-center justify-start bg-heroBackground bg-cover bg-center h-screen w-full p-4 md:p-8 lg:p-16">
        <div className="absolute inset-0 h-full w-full bg-black/20 z-0"></div>

        <div className="relative flex flex-col items-start justify-between gap-6">
          <div className="text-left text-white max-w-md">
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <TypographyH1 className="tracking-wide">
                Unidos por la fe para cambiar al mundo una vida a la vez
              </TypographyH1>

              <TypographyLead className="text-gray-300 tracking-wide">
                Bienvenido a nuestra iglesia
              </TypographyLead>
            </motion.div> */}
            <TypographyH1 className="">
              
              Dios te
              <FlipWords
                words={["Bendice", "Ama", "Llama", "Busca", "Cambia"]}
                duration={2000}
                className="text-white z-0 bg-custom-red rounded-sm"
              />
            </TypographyH1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, translateY: -100 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button className="w-fit bg-custom-red mt-4" size={"lg"}>Conócenos</Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
