import { motion } from "framer-motion";
import { staggerContainer } from "../../lib/animation";

const SectionWrapper = (Component: React.FC, idName: string) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        id={idName}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
