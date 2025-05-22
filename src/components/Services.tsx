import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animation";
import SectionWrapper from "./ui/section-wrapper";
import { ServiceItem } from "../lib/types";

import webdevices from "../assets/services/web-devices.svg";
import mobiledev from "../assets/services/mobile-dev.svg";
import erp from "../assets/services/erp.svg";
import digitalmarketing from "../assets/services/digital.svg";
import uiux from "../assets/services/design.svg";


const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies and frameworks. We deliver responsive, high-performance solutions.",
    image: webdevices,
    delay: 0.1,
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android. We create intuitive and engaging mobile experiences.",
    image: mobiledev,
    delay: 0.2,
  },
  {
    id: 3,
    title: "ERP Implementation",
    description:
      "Enterprise Resource Planning solutions customized for your business needs. Streamline operations and increase efficiency.",
    image: erp,
    delay: 0.3,
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to enhance your online presence. From SEO to social media, we cover it all.",
    image: digitalmarketing,
    delay: 0.4,
  },
  {
    id: 5,
    title: "UI/UX Design",
    description:
      "User-centered design services that focus on creating intuitive and engaging interfaces. We prioritize user experience in every project.",
    image: uiux,
    delay: 0.5,
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const sliderRef = useRef<HTMLDivElement>(null);
  let scrollAmount = 0;
  let direction = 1;

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isHovered = false;

    const handleMouseEnter = () => (isHovered = true);
    const handleMouseLeave = () => (isHovered = false);
    const handleTouchStart = () => (isHovered = true);
    const handleTouchEnd = () => (isHovered = false);

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchend", handleTouchEnd);

    const interval = setInterval(() => {
      if (isHovered || !slider) return;

      const maxScroll = slider.scrollWidth - slider.clientWidth;

      scrollAmount += direction;

      if (scrollAmount >= maxScroll || scrollAmount <= 0) {
        direction *= -1;
      }

      slider.scrollTo({
        left: scrollAmount,
      });
    }, 20); // Adjust speed

    return () => {
      clearInterval(interval);
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

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
            <p className="text-[#4a4a4a] dark:text-gray-300 text-xl max-w-3xl mx-auto">
              Smart Solutions Which Made Just for You.
            </p>
          </motion.div>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto no-scrollbar py-2 px-1"
          >
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
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
      className="glass-card min-w-[300px] md:min-w-[350px] rounded-2xl p-8 h-full flex flex-col"
    >
      <img
        src={service.image}
        alt={service.title}
        className="rounded-xl mb-6 w-full h-48 object-contain"
      />
      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
      <p className="text-[#4a4a4a] dark:text-gray-300 mb-4 flex-grow">{service.description}</p>
    </motion.div>
  );
};

export default SectionWrapper(Services, "services");
