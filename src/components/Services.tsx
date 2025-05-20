import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer } from "../lib/animation";
import SectionWrapper from "./ui/section-wrapper";
import { ServiceItem } from "../lib/types";

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and frameworks. We deliver responsive, high-performance solutions.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=333&q=80",
    delay: 0.1
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android. We create intuitive and engaging mobile experiences.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=333&q=80",
    delay: 0.2
  },
  {
    id: 3,
    title: "ERP Implementation",
    description: "Enterprise Resource Planning solutions customized for your business needs. Streamline operations and increase efficiency.",
    image: "https://pixabay.com/get/gaf1a594296a664916da96f0b699413584f3c90a6164d23542ceab307b518fd7318ccfeec715358d2eb61ba8b6b143c4be424b551ca589210b358613dc0de1e3a_1280.jpg",
    delay: 0.3
  }
];

const featureData = [
  {
    id: 1,
    title: "Full-Spectrum Expertise",
    description: "Our team excels across the entire development lifecycle, from initial concept to deployment and ongoing maintenance. We handle everything so you don't have to.",
    delay: 0.4
  },
  {
    id: 2,
    title: "Solutions Tailored to You",
    description: "We don't believe in one-size-fits-all approaches. Each solution we create is carefully crafted to address your specific challenges and business requirements.",
    delay: 0.5
  },
  {
    id: 3,
    title: "Long-Term Support & Scalability",
    description: "We build with the future in mind, ensuring your digital solutions can grow and evolve alongside your business. Our support doesn't end at launch.",
    delay: 0.6
  },
  {
    id: 4,
    title: "Driven by Passion, Backed by Skill",
    description: "Our team of dedicated professionals is passionate about technology and committed to excellence. We combine creativity with technical prowess to deliver outstanding results.",
    delay: 0.7
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-col gap-16"
        >
          <motion.div 
            variants={fadeIn("up", "tween", 0.1, 1)}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Main <span className="accent-text">Services</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Smart Solutions Which Made Just for You.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featureData.map((feature) => (
              <motion.div
                key={feature.id}
                variants={fadeIn("up", "tween", feature.delay, 0.8)}
                className="glass-card rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }: { service: ServiceItem }) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", service.delay, 0.8)}
      className="glass-card rounded-2xl p-8 h-full flex flex-col"
    >
      <img
        src={service.image}
        alt={service.title}
        className="rounded-xl mb-6 w-full h-48 object-cover"
      />

      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-300 mb-4 flex-grow">{service.description}</p>
      <motion.a
        href="#"
        whileHover={{ x: 5 }}
        className="inline-flex items-center text-[#FF6B81] hover:text-[#FF3366] transition-colors font-medium"
      >
        Learn More
        <ArrowRight className="h-5 w-5 ml-1" />
      </motion.a>
    </motion.div>
  );
};

export default SectionWrapper(Services, "services");
