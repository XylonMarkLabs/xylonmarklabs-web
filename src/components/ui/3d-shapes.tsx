import { motion } from "framer-motion";

export const AnimatedSphere = ({
  size = "200px",
  color = "rgba(255, 51, 102, 0.5)",
  position = {},
  delay = 0,
  opacity = 1
}) => {
  // Convert number to px if needed
  const sizeValue = typeof size === 'number' ? `${size}px` : size;
  
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: sizeValue,
        height: sizeValue,
        ...position,
        background: `radial-gradient(circle at 30% 30%, ${color}, transparent)`,
        boxShadow: `0 0 40px ${color}`,
        opacity: opacity
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: opacity,
        y: [0, -30, 0],
        rotate: [0, 10, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
        times: [0, 0.5, 1],
      }}
    />
  );
};

export const AnimatedCube = ({
  size = "120px",
  color = "rgba(255, 107, 129, 0.7)",
  position = {},
  delay = 0,
  opacity = 1
}) => {
  // Convert number to px if needed
  const sizeValue = typeof size === 'number' ? `${size}px` : size;
  const halfSize = typeof size === 'number' ? size / 2 : parseInt(size) / 2;
  
  return (
    <motion.div
      className="absolute"
      style={{
        width: sizeValue,
        height: sizeValue,
        ...position,
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
        opacity: opacity
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: opacity,
        rotateX: [0, 180, 360],
        rotateY: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
    >
      {/* Front face */}
      <div 
        className="absolute w-full h-full rounded-md" 
        style={{ 
          transform: `translateZ(${halfSize}px)`,
          background: color,
          boxShadow: `0 0 20px ${color}`,
          backfaceVisibility: 'hidden',
        }} 
      />
      
      {/* Back face */}
      <div 
        className="absolute w-full h-full rounded-md" 
        style={{ 
          transform: `rotateY(180deg) translateZ(${halfSize}px)`,
          background: color,
          boxShadow: `0 0 20px ${color}`,
          backfaceVisibility: 'hidden',
        }} 
      />
      
      {/* Left face */}
      <div 
        className="absolute w-full h-full rounded-md" 
        style={{ 
          transform: `rotateY(-90deg) translateZ(${halfSize}px)`,
          background: color,
          boxShadow: `0 0 20px ${color}`,
          backfaceVisibility: 'hidden',
        }} 
      />
      
      {/* Right face */}
      <div 
        className="absolute w-full h-full rounded-md" 
        style={{ 
          transform: `rotateY(90deg) translateZ(${halfSize}px)`,
          background: color,
          boxShadow: `0 0 20px ${color}`,
          backfaceVisibility: 'hidden',
        }} 
      />
      
      {/* Top face */}
      <div 
        className="absolute w-full h-full rounded-md" 
        style={{ 
          transform: `rotateX(90deg) translateZ(${halfSize}px)`,
          background: color,
          boxShadow: `0 0 20px ${color}`,
          backfaceVisibility: 'hidden',
        }} 
      />
      
      {/* Bottom face */}
      <div 
        className="absolute w-full h-full rounded-md" 
        style={{ 
          transform: `rotateX(-90deg) translateZ(${halfSize}px)`,
          background: color,
          boxShadow: `0 0 20px ${color}`,
          backfaceVisibility: 'hidden',
        }} 
      />
    </motion.div>
  );
};

export const AnimatedRing = ({
  size = "300px",
  thickness = "15px",
  color = "rgba(255, 51, 102, 0.4)",
  position = {},
  delay = 0,
  opacity = 1
}) => {
  // Convert number to px if needed
  const sizeValue = typeof size === 'number' ? `${size}px` : size;
  const thicknessValue = typeof thickness === 'number' ? `${thickness}px` : thickness;
  
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: sizeValue,
        height: sizeValue,
        ...position,
        border: `${thicknessValue} solid ${color}`,
        boxShadow: `0 0 30px ${color}`,
        opacity: opacity
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: opacity,
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
        times: [0, 0.5, 1],
      }}
    />
  );
};

const Shapes3D = () => {
  return (
    <div className="shapes-container fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      <AnimatedSphere 
        size="250px" 
        color="rgba(163, 41, 41, 0.5)" 
        position={{ top: "25%", left: "5%" }} 
      />
      <AnimatedSphere 
        size="180px" 
        color="rgba(163, 41, 41, 0.4)" 
        position={{ top: "60%", left: "20%" }} 
        delay={2}
      />
      <AnimatedCube 
        size="120px" 
        color="rgba(163, 41, 41, 0.2)" 
        position={{ top: "25%", right: "15%" }} 
        delay={1}
      />
      <AnimatedSphere 
        size="350px" 
        color="rgba(163, 41, 41, 0.2)" 
        position={{ bottom: "10%", right: "5%" }} 
        delay={0.5}
      />
    </div>
  );
};

export default Shapes3D;