import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Shapes3D from "../components/ui/3d-shapes";
import AnimatedSVG from "../components/ui/animated-svg";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>XylonMark Labs - From Strategy to Software</title>
        <meta name="description" content="XylonMark Labs - We blend technology, creativity, and strategy to build custom software solutions that drive growth. Our goal is to transform your vision into standout digital solutions." />
      </Helmet>
      
      <Shapes3D />
      <AnimatedSVG />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
