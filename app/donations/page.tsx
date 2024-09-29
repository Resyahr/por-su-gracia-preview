"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import donationImage1 from "@/public/donationImage1.jpg";
import donationImage2 from "@/public/donationImage2.jpg";
import donationImage3 from "@/public/donationImage3.jpg";
import donationImage4 from "@/public/donationImage4.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { SubHero } from "@/components/reusable/SubHero";

// Story sections data
const stories = [
  {
    text: "Gracias a tu donación, podemos realizar eventos comunitarios donde compartimos la palabra de Dios, apoyamos a los necesitados, y creamos un sentido de comunidad.",
    image: donationImage1,
    alt: "Community Event",
  },
  {
    text: "Tus donaciones también ayudan a mantener y mejorar nuestras instalaciones, asegurando que siempre haya un espacio acogedor para adorar y conectarse con Dios.",
    image: donationImage2,
    alt: "Church Improvement",
  },
  {
    text: "Además, con tu ayuda, llevamos a cabo programas juveniles y educativos que forman la próxima generación de creyentes y líderes.",
    image: donationImage3,
    alt: "Youth Program",
  },
  {
    text: "Cada donación también respalda nuestros esfuerzos misioneros para extender el amor de Cristo más allá de nuestras fronteras.",
    image: donationImage4,
    alt: "Mission Outreach",
  },
];

export default function DonationsPage() {
  return (
    <>
    <SubHero title="Donaciones"/>
      <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-custom-primary mb-6">
            Cómo Usamos tus Donaciones
          </h2>
          <p className="text-lg text-custom-text-muted mb-12">
            Con cada donación, ayudamos a crear un impacto real en nuestra
            comunidad. Aquí te mostramos cómo tu generosidad cambia vidas.
          </p>
        </div>

        <div className="space-y-12">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            >
              {index % 2 === 0 ? (
                <>
                  <div>
                    <Image
                      src={story.image}
                      alt={story.alt}
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-custom-text-muted">
                      {story.text}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-lg text-custom-text-muted">
                      {story.text}
                    </p>
                  </div>
                  <div>
                    <Image
                      src={story.image}
                      alt={story.alt}
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Button to donation form */}
        <div className="max-w-6xl mx-auto text-center mt-12">
          <Button
            asChild
            className="bg-custom-primary text-white py-4 px-8 text-xl font-semibold hover:bg-custom-primary-dark transition-all duration-300"
          >
            <Link href="/donations/form"> Haz tu Donación </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
