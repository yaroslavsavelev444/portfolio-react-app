import NavBar from "../components/navbar/NavBar";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import FooterBar from "../components/FooterBar/FooterBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Skills />
      <AboutMe />
      <Projects />
      <FooterBar />
    </div>
  );
};

export default Home;
