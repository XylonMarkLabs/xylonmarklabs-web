import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animation";
import SectionWrapper from "./ui/section-wrapper";
import { Box, Layers, Code2, Braces, PackageCheck, LineChart } from "lucide-react";
import { AnimatedCube, AnimatedSphere } from "../components/ui/3d-shapes";

const FeatureBox = ({
  icon,
  title,
  description,
  delay = 0
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", delay, 0.75)}
      className="glass-card rounded-lg p-5 flex flex-col items-center text-center"
    >
      <div className="w-14 h-14 rounded-full accent-gradient flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <Code2 size={24} className="text-white" />,
      title: "Custom Development",
      description: "Tailored software solutions designed to meet your specific business requirements."
    },
    {
      icon: <Layers size={24} className="text-white" />,
      title: "Full-Stack Expertise",
      description: "From front-end interfaces to back-end systems, we cover the entire development spectrum."
    },
    {
      icon: <PackageCheck size={24} className="text-white" />,
      title: "Quality Assurance",
      description: "Rigorous testing ensures our solutions meet the highest standards of performance."
    },
    {
      icon: <LineChart size={24} className="text-white" />,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with our advanced analytics solutions."
    },
    {
      icon: <Braces size={24} className="text-white" />,
      title: "API Integration",
      description: "Seamlessly connect with third-party services to extend your application's capabilities."
    },
    {
      icon: <Box size={24} className="text-white" />,
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure to support your growing business needs."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About
                <span className="accent-text"> XylonMark</span>
                <span className="block">Labs</span>
              </h2>

              <p className="text-[#4a4a4a] dark:text-gray-300 mb-6">
                At XylonMark Labs, we harness the power of technology to build solutions that aren't just functional but exceptional. Our expert team combines technical proficiency with creative thinking to develop software that addresses real-world challenges. We approach every project with a deep commitment to quality, innovation, and client satisfaction.
              </p>

              <p className="text-[#4a4a4a] dark:text-gray-300">
                Our expertise spans across web and mobile app development, custom software engineering, and enterprise solutions. We're passionate about creating digital products that go beyond expectations and deliver tangible value.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("left", "tween", 0.4, 1)}
              className="relative h-[300px] hidden md:block"
            >
              <div className="w-full h-full relative">
                {/* 3D Interactive Visual for About Section */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-md">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-1/4 w-60 h-60 bg-[#A32929] dark:bg-[#A32929] rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
                    {/* <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div> */}

                    {/* Connected nodes visualization */}
                    {/* <svg 
                      className="absolute inset-0 w-full h-full" 
                      viewBox="0 0 400 300" 
                      xmlns="http://www.w3.org/2000/svg"
                    > */}
                    {/* Connection lines */}
                    {/* <g className="connections">
                        <motion.path 
                          d="M 200,150 L 80,80" 
                          stroke="url(#line-gradient)" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.6 }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                        />
                        <motion.path 
                          d="M 200,150 L 320,80" 
                          stroke="url(#line-gradient)" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.6 }}
                          transition={{ duration: 1.5, delay: 0.4 }}
                        />
                        <motion.path 
                          d="M 200,150 L 80,220" 
                          stroke="url(#line-gradient)" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.6 }}
                          transition={{ duration: 1.5, delay: 0.6 }}
                        />
                        <motion.path 
                          d="M 200,150 L 320,220" 
                          stroke="url(#line-gradient)" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.6 }}
                          transition={{ duration: 1.5, delay: 0.8 }}
                        />
                        <motion.path 
                          d="M 200,150 L 200,40" 
                          stroke="url(#line-gradient)" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.6 }}
                          transition={{ duration: 1.5, delay: 1.0 }}
                        />
                        <motion.path 
                          d="M 200,150 L 200,260" 
                          stroke="url(#line-gradient)" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.6 }}
                          transition={{ duration: 1.5, delay: 1.2 }}
                        /> */}

                    {/* Gradient for lines */}
                    {/* <defs>
                          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FF3366" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#FF6B81" stopOpacity="0.6" />
                          </linearGradient>
                        </defs>
                      </g> */}

                    {/* Node points */}
                    {/* <g className="nodes"> */}
                    {/* Center node */}
                    {/* <motion.circle 
                          cx="200" cy="150" r="15" 
                          fill="#FF3366"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8 }}
                        /> */}

                    {/* Outer nodes */}
                    {/* <motion.circle 
                          cx="80" cy="80" r="12" 
                          fill="#4C6EF5"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                        <motion.circle 
                          cx="320" cy="80" r="12" 
                          fill="#4C6EF5"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        />
                        <motion.circle 
                          cx="80" cy="220" r="12" 
                          fill="#4C6EF5"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        />
                        <motion.circle 
                          cx="320" cy="220" r="12" 
                          fill="#4C6EF5"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                        />
                        <motion.circle 
                          cx="200" cy="40" r="12" 
                          fill="#4C6EF5"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 1.0 }}
                        />
                        <motion.circle 
                          cx="200" cy="260" r="12" 
                          fill="#4C6EF5"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 1.2 }}
                        />
                      </g>
                    </svg> */}

                    <motion.div
                      variants={fadeIn("left", "tween", 0.4, 1)}
                      className="relative h-[300px]"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img src={require('../assets/images/icon-noBack.png')} alt="Company Logo" />
                      </div>
                    </motion.div>



                    {/* Floating 3D elements */}
                    {/* <motion.div
                      className="absolute top-10 left-[15%]"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 10, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 8,
                        ease: "easeInOut"
                      }}
                    >
                      <AnimatedCube size="40px" color="#FF3366" opacity={0.7} position={{}} />
                    </motion.div> */}

                    {/* <motion.div
                      className="absolute bottom-10 right-[15%]"
                      animate={{
                        y: [0, 10, 0],
                        rotate: [0, -10, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 7,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    >
                      <AnimatedSphere size="40px" color="#A32929" opacity={0.7} position={{}} />
                    </motion.div> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature grid */}
          {/* <motion.div 
            variants={staggerContainer}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <FeatureBox
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
