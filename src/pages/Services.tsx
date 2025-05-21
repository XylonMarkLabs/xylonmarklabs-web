import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animation";
import Footer from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";

type ServiceDetailProps = {
  title: string;
  description: string;
  technologies: string[];
  benefits: string[];
  imageSrc: string;
  reverse?: boolean;
};

const ServiceDetail = ({
  title,
  description,
  technologies,
  benefits,
  imageSrc,
  reverse = false,
}: ServiceDetailProps) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-16"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}>
        <motion.div variants={fadeIn(reverse ? "left" : "right", "tween", 0.2, 1)}>
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-slate-700 dark:text-gray-300 mb-8">{description}</p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full accent-gradient flex items-center justify-center">
                      <ArrowRight className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <span className="ml-3 text-slate-700 dark:text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Technologies We Use</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn(reverse ? "right" : "left", "tween", 0.4, 1)}
          className="glass-card rounded-xl p-8 flex items-center justify-center h-[400px]"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`gradient-${title}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF3366" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FF6B81" stopOpacity="0.1" />
              </linearGradient>
              <filter id={`shadow-${title}`}>
                <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#FF3366" floodOpacity="0.3" />
              </filter>
            </defs>
            {imageSrc === "web" && (
              <>
                <rect x="50" y="50" width="200" height="150" rx="10" fill="url(#gradient-web)" filter="url(#shadow-web)" />
                <rect x="70" y="70" width="160" height="20" rx="5" fill="#FF3366" fillOpacity="0.2" />
                <rect x="70" y="100" width="160" height="80" rx="5" fill="#FF3366" fillOpacity="0.1" />
                <circle cx="85" cy="210" r="10" fill="#FF3366" fillOpacity="0.2" />
                <circle cx="115" cy="210" r="10" fill="#FF3366" fillOpacity="0.2" />
                <circle cx="145" cy="210" r="10" fill="#FF3366" fillOpacity="0.2" />
              </>
            )}
            {imageSrc === "mobile" && (
              <>
                <rect x="120" y="50" width="80" height="170" rx="10" fill="url(#gradient-mobile)" filter="url(#shadow-mobile)" />
                <rect x="130" y="70" width="60" height="100" rx="2" fill="#FF3366" fillOpacity="0.1" />
                <circle cx="160" cy="190" r="15" fill="#FF3366" fillOpacity="0.2" />
                <rect x="145" y="60" width="30" height="5" rx="2" fill="#FF3366" fillOpacity="0.2" />
              </>
            )}
            {imageSrc === "erp" && (
              <>
                <rect x="30" y="70" width="240" height="140" rx="10" fill="url(#gradient-erp)" filter="url(#shadow-erp)" />
                <rect x="50" y="90" width="80" height="40" rx="5" fill="#FF3366" fillOpacity="0.2" />
                <rect x="140" y="90" width="100" height="40" rx="5" fill="#FF3366" fillOpacity="0.2" />
                <rect x="50" y="140" width="190" height="50" rx="5" fill="#FF3366" fillOpacity="0.1" />
                <line x1="50" y1="230" x2="250" y2="230" stroke="#FF3366" strokeOpacity="0.3" strokeWidth="2" />
              </>
            )}
            {imageSrc === "ai" && (
              <>
                <path d="M150,50 L230,100 L230,180 L150,230 L70,180 L70,100 Z" fill="url(#gradient-ai)" filter="url(#shadow-ai)" />
                <circle cx="150" cy="140" r="30" fill="#FF3366" fillOpacity="0.2" />
                <line x1="150" y1="50" x2="150" y2="110" stroke="#FF3366" strokeOpacity="0.3" strokeWidth="2" />
                <line x1="230" y1="100" x2="180" y2="140" stroke="#FF3366" strokeOpacity="0.3" strokeWidth="2" />
                <line x1="230" y1="180" x2="180" y2="140" stroke="#FF3366" strokeOpacity="0.3" strokeWidth="2" />
                <line x1="150" y1="230" x2="150" y2="170" stroke="#FF3366" strokeOpacity="0.3" strokeWidth="2" />
                <line x1="70" y1="180" x2="120" y2="140" stroke="#FF3366" strokeOpacity="0.3" strokeWidth="2" />
                <line x1="70" y1="100" x2="120" y2="140" stroke="#FF3366" strokeOpacity="0.3" strokeWidth="2" />
              </>
            )}
            {imageSrc === "cloud" && (
              <>
                <path d="M100,150 C70,150 50,130 50,100 C50,70 70,50 100,50 C110,30 140,20 170,40 C200,10 260,30 250,90 C280,90 290,130 270,150 Z" 
                  fill="url(#gradient-cloud)" filter="url(#shadow-cloud)" />
                <rect x="90" y="180" width="40" height="40" rx="5" fill="#FF3366" fillOpacity="0.2" />
                <rect x="140" y="180" width="40" height="40" rx="5" fill="#FF3366" fillOpacity="0.2" />
                <rect x="190" y="180" width="40" height="40" rx="5" fill="#FF3366" fillOpacity="0.2" />
                <line x1="110" y1="150" x2="110" y2="180" stroke="#FF3366" strokeOpacity="0.3" strokeWidth="2" />
                <line x1="160" y1="150" x2="160" y2="180" stroke="#FF3366" strokeOpacity="0.3" strokeWidth="2" />
                <line x1="210" y1="150" x2="210" y2="180" stroke="#FF3366" strokeOpacity="0.3" strokeWidth="2" />
              </>
            )}
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const servicesData = [
    {
      title: "Web Development",
      description: "We build custom web applications that are scalable, responsive, and user-friendly. Our web development solutions are designed to provide excellent user experiences while ensuring high performance and security. From simple corporate websites to complex web applications, our team of skilled developers will bring your vision to life.",
      technologies: ["React", "Next.js", "Vue.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "Tailwind CSS", "AWS", "Firebase"],
      benefits: [
        "Responsive design that works on all devices",
        "Search engine optimized codebase",
        "Fast loading times and performance optimization",
        "Secure and scalable architecture",
        "Integration with third-party services and APIs"
      ],
      imageSrc: "web"
    },
    {
      title: "Mobile App Development",
      description: "Our mobile app development services cover both iOS and Android platforms, allowing you to reach a wider audience. We focus on creating intuitive, feature-rich mobile applications that provide value to your users while aligning with your business goals. Our development process ensures your app is not only functional but also maintainable and future-proof.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux", "GraphQL", "REST APIs", "Push Notifications", "OAuth"],
      benefits: [
        "Cross-platform compatibility",
        "Intuitive user interface and experience",
        "Offline functionality and data synchronization",
        "Integration with device features (camera, GPS, etc.)",
        "Performance optimization for various devices"
      ],
      imageSrc: "mobile",
      reverse: true
    },
    {
      title: "ERP Implementation",
      description: "Our Enterprise Resource Planning (ERP) implementation services help businesses streamline their operations by integrating various business processes. We work closely with your team to understand your specific requirements, customize the ERP solution accordingly, and ensure smooth implementation with minimal disruption to your operations.",
      technologies: ["SAP", "Oracle", "Microsoft Dynamics", "Odoo", "NetSuite", "API Integration", "Data Migration", "Business Intelligence", "Process Automation"],
      benefits: [
        "Streamlined business processes and workflows",
        "Centralized data management and accessibility",
        "Real-time insights and reporting capabilities",
        "Improved productivity and efficiency",
        "Scalability to accommodate business growth"
      ],
      imageSrc: "erp"
    },
    {
      title: "AI and Machine Learning",
      description: "Harness the power of artificial intelligence and machine learning to gain competitive advantage. Our AI solutions range from predictive analytics and natural language processing to computer vision and recommendation systems. We help businesses leverage their data to derive meaningful insights and automate decision-making processes.",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Natural Language Processing", "Computer Vision", "Deep Learning", "Reinforcement Learning", "Big Data", "Cloud ML Services"],
      benefits: [
        "Data-driven decision making",
        "Predictive analytics for business forecasting",
        "Automated processes and reduced manual work",
        "Customer behavior analysis and personalization",
        "Real-time data processing and insights"
      ],
      imageSrc: "ai",
      reverse: true
    },
    {
      title: "Cloud Services & DevOps",
      description: "Our cloud services and DevOps solutions help businesses modernize their infrastructure, improve scalability, and optimize costs. We provide end-to-end cloud migration, infrastructure management, and CI/CD implementation services. Our DevOps practices ensure faster development cycles, improved collaboration, and reliable deployments.",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "CircleCI", "Prometheus", "Grafana"],
      benefits: [
        "Scalable and resilient infrastructure",
        "Automated deployment and testing processes",
        "Reduced operational costs and improved efficiency",
        "Enhanced security and compliance",
        "24/7 monitoring and quick issue resolution"
      ],
      imageSrc: "cloud"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - XylonMark Labs</title>
        <meta name="description" content="Explore our comprehensive range of tech services including Web Development, Mobile Apps, ERP Implementation, AI Solutions, and Cloud Services. We use cutting-edge technologies to deliver exceptional solutions." />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="text-center mb-16"
          >
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our <span className="accent-text">Services</span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="text-xl text-slate-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              We offer a comprehensive range of technology solutions tailored to your business needs. Our services are built on industry best practices and cutting-edge technologies.
            </motion.p>
          </motion.div>

          <div className="space-y-8 mb-16">
            {servicesData.map((service, index) => (
              <ServiceDetail
                key={index}
                title={service.title}
                description={service.description}
                technologies={service.technologies}
                benefits={service.benefits}
                imageSrc={service.imageSrc}
                reverse={service.reverse}
              />
            ))}
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="glass-card rounded-xl p-8 md:p-12 text-center"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold mb-6"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="text-slate-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              We're ready to help you bring your vision to life. Contact us today to discuss your project requirements and how we can help you achieve your business goals.
            </motion.p>
            <motion.a
              variants={fadeIn("up", "tween", 0.6, 1)}
              href="/contact"
              className="inline-block accent-gradient px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;