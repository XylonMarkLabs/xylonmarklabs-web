import { motion } from "framer-motion";

export const AnimatedSVG = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3366" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF6B81" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF3366" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FF6B81" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="sphereGradient" cx="30%" cy="30%" r="70%" fx="30%" fy="30%">
            <stop offset="0%" stopColor="#FF3366" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF6B81" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 3D Animated Elements */}
        <motion.circle
          cx="250"
          cy="200"
          r="100"
          fill="url(#sphereGradient)"
          filter="url(#glow)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.rect
          x="800"
          y="150"
          width="120"
          height="120"
          rx="10"
          fill="url(#gradient1)"
          filter="url(#glow)"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: 1,
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.ellipse
          cx="350"
          cy="600"
          rx="150"
          ry="80"
          fill="url(#gradient2)"
          filter="url(#glow)"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            rotate: [-10, 10, -10],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M800,550 Q950,450 900,650 T800,550"
          stroke="#FF3366"
          strokeWidth="5"
          fill="none"
          strokeOpacity="0.3"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 0.5,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />

        {/* 3D Cube */}
        <g filter="url(#glow)">
          <motion.polygon
            points="600,400 650,430 650,510 600,540 550,510 550,430"
            fill="url(#gradient1)"
            strokeWidth="2"
            stroke="#FF3366"
            strokeOpacity="0.4"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.7,
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedSVG;