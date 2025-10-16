import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useRevealOnScroll } from "./components/CounterHelpers.jsx";
import Counters from "./components/Counters.jsx";
import useStickyNavbar from "./components/useStickyNavbar.jsx";
import useSmoothAnchorScroll from "./components/useSmoothAnchorScroll.jsx";
import HireMe from "./components/HireMe.jsx";

export default function App() {
  useSmoothAnchorScroll("#ftco-navbar");
  useStickyNavbar();
  useRevealOnScroll();
  return (
    <>
      <Navbar />
      <Hero />
      <Counters />
      <About />
      <Skills />
      <Services />
      <HireMe />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}