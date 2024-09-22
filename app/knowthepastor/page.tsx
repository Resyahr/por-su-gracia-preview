import { SubHero } from "@/components/reusable/SubHero";

const AboutThePastor = () => {
  return (
    <>
      {/* SubHero for this page */}
      <SubHero
        title="Conoce a los Pastores"
        description="Aprende más sobre nuestros líderes espirituales, su misión y su pasión por el ministerio."
        backgroundImage="/pastorBackground.jpg"
      />

      {/* Detailed content about the Pastor */}
      <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
        <div className="container mx-auto">
          <h2 className="text-custom-primary font-bold text-3xl mb-6">Pastores Richard y Jessica García</h2>
          <p className="text-gray-700 leading-relaxed">
            Los pastores de nuestra iglesia han dedicado sus vidas al servicio de Dios y de nuestra comunidad.
            Su pasión por llevar el evangelio a las naciones ha transformado muchas vidas y fortalecido nuestra fe.
            Con más de 20 años de experiencia en el ministerio, Richard y Jessica continúan guiando nuestra congregación
            con amor, sabiduría y devoción.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Ambos son reconocidos por su profundo conocimiento bíblico, su entrega a la oración y su capacidad
            para conectar con personas de diferentes orígenes. Acompáñanos para conocer más sobre ellos y su visión para el futuro.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutThePastor;