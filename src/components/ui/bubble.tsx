import { motion } from "framer-motion";

interface BubbleProps {
  top: string;
  left: string;
  size: string;
  delay: number;
  opacity: number;
}

const Bubble = ({ top, left, size, delay, opacity }: BubbleProps) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        top,
        left,
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, rgba(255, 51, 102, ${opacity * 0.3}), rgba(255, 107, 129, ${opacity * 0.1}))`,
        boxShadow: `0 0 10px rgba(255, 51, 102, ${opacity * 0.3})`,
        backdropFilter: "blur(5px)",
      }}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

const Bubbles = () => {
  return (
    <div className="bubbles fixed w-full h-full top-0 left-0 -z-10 overflow-hidden">
      <Bubble top="10%" left="5%" size="300px" delay={0} opacity={0.3} />
      <Bubble top="60%" left="80%" size="400px" delay={2} opacity={0.2} />
      <Bubble top="30%" left="60%" size="200px" delay={4} opacity={0.2} />
      <Bubble top="80%" left="20%" size="350px" delay={6} opacity={0.1} />
    </div>
  );
};

export default Bubbles;
