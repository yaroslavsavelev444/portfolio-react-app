import React from "react";
import PropTypes from "prop-types";
import "./Button.css"; // Подключаем стили

const Button = ({ children, onClick, className = "", aosProps = {} }) => {
  return (
    <button
      className={`btn ${className}`} // Базовый стиль + кастомные классы
      onClick={onClick}
      data-aos={aosProps["data-aos"] || "fade-up"}
      data-aos-delay={aosProps["data-aos-delay"] || "0"}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  aosProps: PropTypes.object, // Пропсы для AOS
};

export default Button;