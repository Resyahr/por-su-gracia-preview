import { motion } from "framer-motion";

const AnimatedSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.section
    className={className}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
  >
    {children}
  </motion.section>
);

export default AnimatedSection;
