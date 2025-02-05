import NavBar from "../components/navbar/NavBar";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import FooterBar from "../components/FooterBar/FooterBar";
import "./Home.css";
import { Helmet } from "react-helmet";

const Home = () => {
  return (

    <div className="App">
      <Helmet>
      <title>Мое Портфолио | FULLSTACK WEB DEVELOPER</title>
        <meta name="description" content="G1-J1.whodev | FULLSTACK" />
        <meta name="keywords" content="G1-J1.whodev" />
        <meta property="og:title" content="G1-J1.whodev | FULLSTACK" />
        <meta property="og:description" content="G1-J1.whodev | FULLSTACK" />
        <meta property="og:image" content="https://yourdomain.com/path/to/your/image.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="G1-J1.whodev | FULLSTACK" />
        <meta name="twitter:description" content="G1-J1.whodev | FULLSTACK" />
      </Helmet>
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
