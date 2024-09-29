"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { SubHero } from "@/components/reusable/SubHero";

// Main component for the live stream and Bible section
export default function LivePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <SubHero title="Transmisión en vivo" />

      <section
        ref={ref}
        className="py-12 h-full bg-custom-background-light text-center px-4 md:px-8 lg:px-16 xl:px-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
          className="max-w-7xl mx-auto"
        >
          {/* Two column layout for large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left side: YouTube Live Stream (2/3rd of the screen) */}
            <div className="w-full h-auto lg:col-span-2 lg:h-[500px] rounded-lg shadow-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/watch?v=ogqy3Py-18o"
                title="Live Stream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Right side: YouVersion Bible Embed (1/3rd of the screen) */}
            <div className="w-full h-auto lg:col-span-1 lg:h-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.bible.com/bible/111/GEN.1.NIV"
                title="YouVersion Bible"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}