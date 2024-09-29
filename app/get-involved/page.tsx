"use client";

import { TypographyH1 } from "@/components/text/h1";
import { TypographyP } from "@/components/text/p";
import ReusableCTAButton from "@/components/reusable/CTAButton";
import { motion } from "framer-motion";
import { containerVariants } from "@/utils/animations";
import { SubHero } from "@/components/reusable/SubHero"; // Import SubHero

const GetInvolvedPage = () => {
  return (
    <>
      {/* SubHero Component */}
      <SubHero
        title="Únete a Nuestra Comunidad"
        description="Descubre cómo puedes ser parte de nuestra iglesia y comunidad."
        backgroundImage="/get-involved-bg.jpg" // Example background, replace with your actual image
      />

      {/* Main Content Section */}
      <motion.section
        className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 bg-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Ways to Get Involved */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Card: Volunteer */}
          <div className="bg-custom-lightGray rounded-lg shadow-lg p-6">
            <TypographyH1 className="text-xl text-custom-primary mb-4">
              Voluntariado
            </TypographyH1>
            <TypographyP className="text-custom-text-muted mb-4">
              Únete a nuestros equipos de voluntarios y marca una diferencia
              participando en nuestras actividades comunitarias y eventos
              especiales.
            </TypographyP>
            <ReusableCTAButton
              href="/contact"
              text="Conviértete en Voluntario"
              background="bg-custom-primary hover:bg-custom-highlight"
            />
          </div>

          {/* Card: Small Groups */}
          <div className="bg-custom-lightGray rounded-lg shadow-lg p-6">
            <TypographyH1 className="text-xl text-custom-primary mb-4">
              Grupos Pequeños
            </TypographyH1>
            <TypographyP className="text-custom-text-muted mb-4">
              Conéctate con otras personas en nuestra iglesia a través de
              pequeños grupos que se reúnen para estudiar la Biblia y compartir
              la fe.
            </TypographyP>
            <ReusableCTAButton
              href="/groups"
              text="Únete a un Grupo"
              background="bg-custom-primary hover:bg-custom-highlight"
            />
          </div>

          {/* Card: Events */}
          <div className="bg-custom-lightGray rounded-lg shadow-lg p-6">
            <TypographyH1 className="text-xl text-custom-primary mb-4">
              Eventos
            </TypographyH1>
            <TypographyP className="text-custom-text-muted mb-4">
              Asiste a nuestros eventos y participa en actividades que te
              permitirán crecer espiritualmente y conectarte con nuestra
              comunidad.
            </TypographyP>
            <ReusableCTAButton
              href="/events"
              text="Ver Próximos Eventos"
              background="bg-custom-primary hover:bg-custom-highlight"
            />
          </div>

          {/* Card: Prayer Team */}
          <div className="bg-custom-lightGray rounded-lg shadow-lg p-6">
            <TypographyH1 className="text-xl text-custom-primary mb-4">
              Equipo de Oración
            </TypographyH1>
            <TypographyP className="text-custom-text-muted mb-4">
              Únete a nuestro equipo de oración y apoya a otros miembros de la
              iglesia y comunidad a través del poder de la oración.
            </TypographyP>
            <ReusableCTAButton
              href="/contact"
              text="Únete al Equipo de Oración"
              background="bg-custom-primary hover:bg-custom-highlight"
            />
          </div>

          {/* Card: Youth Ministry */}
          <div className="bg-custom-lightGray rounded-lg shadow-lg p-6">
            <TypographyH1 className="text-xl text-custom-primary mb-4">
              Ministerio Juvenil
            </TypographyH1>
            <TypographyP className="text-custom-text-muted mb-4">
              Si eres joven y quieres crecer en tu fe junto a otros jóvenes,
              nuestro ministerio juvenil es el lugar perfecto para ti.
            </TypographyP>
            <ReusableCTAButton
              href="/youth"
              text="Saber Más"
              background="bg-custom-primary hover:bg-custom-highlight"
            />
          </div>

          {/* Card: Giving */}
          <div className="bg-custom-lightGray rounded-lg shadow-lg p-6">
            <TypographyH1 className="text-xl text-custom-primary mb-4">
              Apoya Nuestra Iglesia
            </TypographyH1>
            <TypographyP className="text-custom-text-muted mb-4">
              Puedes contribuir a nuestra misión a través de donaciones. Cada
              aporte ayuda a que nuestra iglesia siga creciendo.
            </TypographyP>
            <ReusableCTAButton
              href="/donations"
              text="Haz una Donación"
              background="bg-custom-primary hover:bg-custom-highlight"
            />
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default GetInvolvedPage;