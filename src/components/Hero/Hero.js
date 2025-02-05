import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import Aos from "aos";
import "aos/dist/aos.css"; 
import Typewriter from "typewriter-effect/dist/core";
import heroVideo from "../../video/2cadre.mp4"; 
import Button from "../UI/Buttons/Button";
import Skeleton from "react-loading-skeleton"; // Импортируем скелетон

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Стейт для проверки загрузки видео
  const [isTypewriterReady, setIsTypewriterReady] = useState(false); // Стейт для отслеживания, когда Typewriter должен начать работать
  const typewriterRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  useEffect(() => {
    // Запускаем Typewriter только после того, как видео загрузится
    if (isVideoLoaded && typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        strings: ["FULLSTACK WEB DEVELOPER", "+ GRAPHIC DESIGNER"],
        autoStart: true,
        loop: true,
      });
    }
  }, [isVideoLoaded]);

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

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true); // Видео загружено
    setIsTypewriterReady(true); // Разрешаем запуск Typewriter
  };

  return (
    <section id="hero" className="hero">
      {/* Видео-фон */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
        onCanPlayThrough={handleVideoLoaded} // Отслеживаем загрузку видео
      >
        <source src={heroVideo} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>

      <div 
        className="hero-container" 
        data-aos="fade-up" 
        data-aos-anchor-placement="top-center"
      >
        {!isVideoLoaded ? (
          // Пока видео не загружено, показываем скелетон
          <>
            <Skeleton height={40} width={300} className="hero-title-skeleton" />
            <Skeleton height={30} width={200} className="hero-description-skeleton" />
            <Skeleton height={50} width={150} className="hero-button-skeleton" />
          </>
        ) : (
          <>
            <h2 ref={typewriterRef} className="hero-title"></h2>
            <p className="hero-description" data-aos="fade-up" data-aos-delay="1000">
              Разработка ПО с нуля
            </p>
            <Button
              onClick={scrollToProjects}
              className="hero-button"
              aosProps={{ "data-aos-delay": "1500" }}
            >
              Проекты
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;