import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./NavBar.css";
import logo from "../../img/3d_logo_solo.png";
import { Mail, Github, Send } from "lucide-react";

const NavBar = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrolling, setScrolling] = useState(false); // Состояние для отслеживания прокрутки
  const [lastScrollY, setLastScrollY] = useState(0); // Для отслеживания направления прокрутки

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setScrolling(true); // Если прокрутка больше 50px, фон меняется
      } else {
        setScrolling(false); // Если прокручено меньше 50px, фон остается прозрачным
      }

      if (currentScrollY > lastScrollY) {
        // Прокрутка вниз - показываем navbar
        setLastScrollY(currentScrollY);
      } else {
        // Прокрутка вверх - скрываем navbar
        setLastScrollY(currentScrollY);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll); // Слушаем событие прокрутки

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll); // Убираем обработчик при размонтировании
    };
  }, [lastScrollY]);

  const telegramLink = process.env.REACT_APP_TELEGRAM;
  const githubLink = process.env.REACT_APP_GITHUB;
  const emailLink = `mailto:${process.env.REACT_APP_EMAIL}`;

  return (
    <header className={`header ${scrolling ? "scrolled" : ""} ${scrolling && lastScrollY > 50 ? "" : "hidden"}`}>
      <div className="glow" style={{ top: mousePos.y, left: mousePos.x }}></div>
      <div className="header-container" data-aos="fade-down">
        <div className="flex-row gap10">
          <img src={logo} alt="Logo" className="header-logo" />
        </div>
        <nav className="header-nav">
          <div className="social-links">
            {/* Telegram */}
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="icon telegram"
            >
              <Send size={24} />
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="icon github"
            >
              <Github size={24} />
            </a>
            <a href={emailLink} className="icon email">
              <Mail size={24} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;