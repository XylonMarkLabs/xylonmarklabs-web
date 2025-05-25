import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/animation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedSVG from "../components/ui/animated-svg";

type TeamMemberProps = {
  name: string;
  role: string;
  description: string;
  index: number;
};

const TeamMember = ({ name, role, description, index }: TeamMemberProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="glass-card rounded-xl p-6 md:p-8 flex flex-col items-center"
    >
      <div className="w-32 h-32 rounded-full mb-4 overflow-hidden accent-gradient flex items-center justify-center">
        <div className="w-28 h-28 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
          <svg
            className="w-16 h-16 text-slate-400"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="7"
              r="4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-xl font-bold text-center">{name}</h3>
      <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-4 text-center">{role}</p>
      <p className="text-slate-700 dark:text-gray-300 text-center">{description}</p>
    </motion.div>
  );
};

type ValueCardProps = {
  title: string;
  description: string;
  icon: JSX.Element;
  index: number;
};

const ValueCard = ({ title, description, icon, index }: ValueCardProps) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className="glass-card rounded-xl p-6 flex flex-col md:flex-row gap-4 items-start md:items-center"
    >
      <div className="w-12 h-12 rounded-full accent-gradient flex-shrink-0 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-700 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Chandupa Ranawaka",
      role: "Founder & CEO",
      description: "With over 15 years of experience in tech, Alex founded XylonMark Labs with a vision to help businesses transform digitally through innovative solutions."
    },
    {
      name: "Kavija Sapukotana",
      role: "CTO",
      description: "Sarah leads our technical team with expertise in software architecture, cloud infrastructure, and emerging technologies. She ensures our solutions are cutting-edge."
    },
    {
      name: "Nethmi Liyanage",
      role: "Creative Director",
      description: "Michael brings visual excellence to our projects, focusing on creating intuitive user interfaces and engaging user experiences that delight customers."
    },
    {
      name: "Rachel Kim",
      role: "Project Manager",
      description: "Rachel excels at coordinating complex projects, ensuring they're delivered on time and within budget while meeting all client requirements."
    },
    {
      name: "David Thompson",
      role: "Lead Developer",
      description: "With expertise in multiple programming languages and frameworks, David leads our development team in building robust and scalable software solutions."
    },
    {
      name: "Lisa Johnson",
      role: "UX Researcher",
      description: "Lisa applies her background in psychology and design to understand user needs and behaviors, creating product experiences that truly connect with users."
    },
    {
      name: "Thilina Dilshan",
      role: "Tea Boy",
      description: "Thilina is the heart of our office, ensuring everyone stays energized and focused. His positive attitude and dedication to service make him an invaluable part of our team."
    }
  ];

  const coreValues = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and approaches to deliver forward-thinking solutions that give our clients a competitive edge.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      )
    },
    {
      title: "Excellence",
      description: "We are committed to delivering exceptional quality in everything we do, with attention to detail and a focus on exceeding expectations.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L4 7l8 5 8-5-8-5zM4 15l8 5 8-5M4 11l8 5 8-5" />
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnership and work closely with our clients to understand their needs and develop tailored solutions.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Integrity",
      description: "We conduct our business with transparency, honesty, and respect, building lasting relationships based on trust and ethical practices.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - XylonMark Labs</title>
        <meta name="description" content="Learn about XylonMark Labs, our mission, values, and the talented team behind our innovative technology solutions. We're dedicated to helping businesses succeed through digital transformation." />
      </Helmet>

      <AnimatedSVG />
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Hero Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mb-20"
          >
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl md:text-5xl font-bold text-center mb-6"
            >
              About <span className="accent-text">XylonMark</span> Labs
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="text-xl text-slate-700 dark:text-gray-300 text-center max-w-3xl mx-auto"
            >
              We're a team of passionate technology experts dedicated to transforming businesses through innovative digital solutions.
            </motion.p>
          </motion.div>

          {/* Our Story Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="glass-card rounded-3xl p-8 md:p-12 mb-20"
          >
            <div className="grid gap-10 items-center">
              <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
                <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
                <div className="space-y-4 text-lg text-justify text-slate-700 dark:text-gray-300">
                  <p>
                    Introducing XylonMark Labs, a place where innovation meets reliability and creativity drives progress. We are a passionate team dedicated to providing top-quality solutions that make everyday tasks easier, faster, and smarter. Our journey began with a simple goal: to solve real problems through technology and creativity. Since then, we've grown into a trusted name, known for our unwavering commitment to excellence, customer satisfaction, and continuous improvement.
                  </p>
                  <p>
                    Whether you're here to explore new possibilities, collaborate on exciting projects, or grow alongside us, we're truly glad to have you on board. Together, we can push the boundaries of innovation, create meaningful impact, and build a brighter, smarter digital future that empowers businesses and communities alike. We look forward to forging strong partnerships, sharing knowledge, and achieving success hand in hand with you.
                  </p>
                </div>
              </motion.div>

              {/* <motion.div
                variants={fadeIn("left", "tween", 0.4, 1)}
                className="relative h-[400px] flex items-center justify-center"
              >
                <svg 
                  className="w-full h-full" 
                  viewBox="0 0 400 400" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF3366" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#FF6B81" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  
                  Timeline
                  <line x1="200" y1="50" x2="200" y2="350" stroke="url(#timeline-gradient)" strokeWidth="4" />
                  
                  Timeline nodes
                  <circle cx="200" cy="80" r="12" fill="url(#timeline-gradient)" />
                  <circle cx="200" cy="160" r="12" fill="url(#timeline-gradient)" />
                  <circle cx="200" cy="240" r="12" fill="url(#timeline-gradient)" />
                  <circle cx="200" cy="320" r="12" fill="url(#timeline-gradient)" />
                  
                  Timeline events
                  <text x="220" y="85" fill="currentColor" className="text-slate-700 dark:text-gray-300 text-sm font-bold">2018: Founded</text>
                  <text x="70" y="165" fill="currentColor" className="text-slate-700 dark:text-gray-300 text-sm font-bold" textAnchor="end">2020: Expanded Services</text>
                  <text x="220" y="245" fill="currentColor" className="text-slate-700 dark:text-gray-300 text-sm font-bold">2022: Global Reach</text>
                  <text x="70" y="325" fill="currentColor" className="text-slate-700 dark:text-gray-300 text-sm font-bold" textAnchor="end">2024: AI Innovation</text>
                </svg>
              </motion.div> */}
            </div>
          </motion.div>

          {/* Our Values Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-20"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-center mb-12"
            >
              Our Core <span className="accent-text">Values</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <ValueCard
                  key={index}
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Our Team Section */}
          {/* <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-20"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-center mb-6"
            >
              Meet Our <span className="accent-text">Team</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="text-lg text-slate-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12"
            >
              Our success is driven by our talented team of experts who bring diverse skills and perspectives to every project.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div> */}

          {/* Our Mission Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold mb-6"
            >
              Our Mission
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="text-xl text-slate-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              To empower businesses through innovative technology solutions that drive growth, enhance efficiency, and create exceptional user experiences.
            </motion.p>
            <motion.a
              variants={fadeIn("up", "tween", 0.6, 1)}
              href="/contact"
              className="inline-block accent-gradient px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg text-white"
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

export default AboutPage;