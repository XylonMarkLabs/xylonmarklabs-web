import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { fadeIn, staggerContainer } from "../lib/animation";
import SectionWrapper from "./ui/section-wrapper";

const reasons = [
  {
    id: 1,
    title: "Innovative Approach",
    description: "We leverage cutting-edge technologies and methodologies to deliver forward-thinking solutions."
  },
  {
    id: 2,
    title: "Experienced Team",
    description: "Our professionals bring years of industry experience and technical expertise to every project."
  },
  {
    id: 3,
    title: "Client-Centered Process",
    description: "We prioritize your needs and goals, ensuring our solutions align with your business objectives."
  },
  {
    id: 4,
    title: "Quality Assurance",
    description: "Our rigorous testing and quality control processes ensure reliable, high-performance solutions."
  },
  {
    id: 5,
    title: "Ongoing Support",
    description: "We provide comprehensive support and maintenance services to ensure long-term success."
  }
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="why-us" className="py-20 relative">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why choose
                <span className="accent-text"> XylonMarks</span>
                <span className="block">Labs</span>
              </h2>

              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <motion.div 
                    key={reason.id}
                    variants={fadeIn("right", "tween", 0.2 + (index * 0.1), 1)}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full accent-gradient flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-1">{reason.title}</h3>
                      <p className="text-gray-300">{reason.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("left", "tween", 0.4, 1)}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                alt="Professional tech team working together"
                className="rounded-xl w-full h-auto shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(WhyChooseUs, "why-us");
