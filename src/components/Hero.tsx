import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animation";
import { AnimatedCube, AnimatedSphere, AnimatedRing } from "../components/ui/3d-shapes";
import { Code, Server, Database, Globe, Cpu, ShieldCheck, MonitorSmartphone, Cloud } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              From Strategy to Software
              <span className="block mt-3">We Build What Your Business Needs.</span>
            </h1>

            <p className="mt-6  text-lg md:text-xl max-w-xl text-[#4a4a4a] dark:text-gray-300">
              At XylonMark Labs, we blend technology, creativity, and strategy to build custom software solutions that drive growth. Our goal is to transform your vision into standout digital solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 w-full">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="accent-gradient text-white text-center px-8 py-3 w-1/3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg inline-block"
              >
                Contact Us
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border dark:border-white text-center border-black px-8 py-3 w-1/3 rounded-full font-semibold hover:bg-white/10 transition-all inline-block"
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="relative h-[400px]"
          >
            <div className="w-full h-full relative">
              {/* 3D Interactive Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-lg h-[400px]">
                  {/* Background decorative elements */}
                  <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
                  <div className="absolute top-10 right-1/4 w-72 h-72 bg-yellow-300 dark:bg-yellow-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                  <div className="absolute bottom-8 left-1/3 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                  
                  {/* 3D Objects */}
                  {/* <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40"
                    animate={{ 
                      y: [0, -10, 0], 
                      rotate: [0, 5, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 5,
                      ease: "easeInOut"
                    }}
                  >
                    <AnimatedCube 
                      size="150px" 
                      color="#FF3366" 
                      opacity={0.9} 
                      position={{}} 
                    />
                  </motion.div> */}
                  
                  <motion.div 
                    className="absolute top-[30%] left-[20%] w-16 h-16"
                    animate={{ 
                      y: [0, -15, 0], 
                      x: [0, 10, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 7,
                      ease: "easeInOut" 
                    }}
                  >
                    <AnimatedSphere 
                      size="60px" 
                      color="#3477eb" 
                      opacity={0.8} 
                      position={{}} 
                    />
                  </motion.div>
                  
                  {/* <motion.div 
                    className="absolute bottom-[25%] right-[20%] w-24 h-24"
                    animate={{ 
                      y: [0, 10, 0], 
                      rotate: [0, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 9,
                      ease: "easeInOut" 
                    }}
                  >
                    <AnimatedRing 
                      size="90px" 
                      color="#f7b325" 
                      thickness="6px" 
                      opacity={0.7} 
                      position={{}} 
                    />
                  </motion.div> */}
                  
                  {/* Tech icons around the 3D objects */}
                  <motion.div 
                    className="absolute top-[15%] right-[30%] p-3 rounded-full accent-gradient shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 20 }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ 
                      y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                      default: { duration: 0.3 }
                    }}
                  >
                    <Code size={38} className="text-white" />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute bottom-[30%] left-[25%] p-3 rounded-full accent-gradient shadow-lg"
                    whileHover={{ scale: 1.2, rotate: -20 }}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ 
                      y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 },
                      default: { duration: 0.3 }
                    }}
                  >
                    <Server size={36} className="text-white" />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-[40%] left-[15%] p-3 rounded-full accent-gradient shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 20 }}
                    animate={{ y: [0, 5, 0] }}
                    transition={{ 
                      y: { repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 },
                      default: { duration: 0.3 }
                    }}
                  >
                    <Database size={36} className="text-white" />
                  </motion.div>

                  <motion.div 
                    className="absolute top-[23%] left-[27%] p-3 rounded-full accent-gradient shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 20 }}
                    animate={{ y: [0, 5, 0] }}
                    transition={{ 
                      y: { repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 },
                      default: { duration: 0.3 }
                    }}
                  >
                    <Cloud size={36} className="text-white" />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-[30%] right-[15%] p-3 rounded-full accent-gradient shadow-lg"
                    whileHover={{ scale: 1.2, rotate: -20 }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ 
                      y: { repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1.5 },
                      default: { duration: 0.3 }
                    }}
                  >
                    <Globe size={36} className="text-white" />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute bottom-[15%] right-[10%] p-3 rounded-full accent-gradient shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 20 }}
                    animate={{ y: [0, 10, 3] }}
                    transition={{ 
                      y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 },
                      default: { duration: 0.3 }
                    }}
                  >
                    <Cpu size={36} className="text-white" />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute bottom-[50%] left-[40%] p-3 rounded-full accent-gradient shadow-lg"
                    whileHover={{ scale: 1.2, rotate: -20 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ 
                      y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.7 },
                      default: { duration: 0.3 }
                    }}
                  >
                    <ShieldCheck size={36} className="text-white" />
                  </motion.div>

                  <motion.div 
                    className="absolute bottom-[30%] left-[60%] p-3 rounded-full accent-gradient shadow-lg"
                    whileHover={{ scale: 1.2, rotate: -20 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ 
                      y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.7 },
                      default: { duration: 0.3 }
                    }}
                  >
                    <MonitorSmartphone size={36} className="text-white" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
