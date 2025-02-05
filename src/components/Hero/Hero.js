import React, { useEffect, useRef } from "react";
import "./Hero.css";
import Aos from "aos";
import "aos/dist/aos.css"; 
import Typewriter from "typewriter-effect/dist/core";
import heroVideo from "../../video/2cadre.mp4"; 
import Button from "../UI/Buttons/Button";
const Hero = () => {
  const typewriterRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  useEffect(() => {
    if (typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        strings: ["FULLSTACK WEB DEVELOPER", "+ GRAPHIC DESIGNER"],
        autoStart: true,
        loop: true,
      });
    }
  }, []);

  // Убеждаемся, что видео перезапускается корректно при окончании
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", () => {
        videoRef.current.play(); // Гарантированный повтор
      });
    }
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  return (
    <section id="hero" className="hero">
      {/* Видео-фон */}
      <video ref={videoRef} autoPlay muted loop playsInline className="hero-video">
        <source src={heroVideo} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>

      <div 
        className="hero-container" 
        data-aos="fade-up" 
        data-aos-anchor-placement="top-center"
      >
        <h2 ref={typewriterRef} className="hero-title"></h2>
        <p className="hero-description"
   data-aos="fade-up" 
   data-aos-delay="1000" // 1 секунда задержки
>
  Разработка ПО с нуля
</p>

<Button
  onClick={scrollToProjects}
  className="hero-button"
  aosProps={{ "data-aos-delay": "1500" }} // Задержка в 1.5 секунды
>
  Проекты
</Button>
      </div>
    </section>
  );
};

export default Hero;