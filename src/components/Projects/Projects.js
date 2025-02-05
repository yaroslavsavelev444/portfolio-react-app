import React, { useState } from "react";
import Slider from "react-slick";
import projectsList from "../../helpers/projectsList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLink } from "react-icons/fa"; 
import "./Projects.css";
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button 
      className={`slick-arrow slick-prev ${className}`} 
      style={{ ...style }} 
      onClick={onClick}
    >
      &#9664;
    </button>
  );
};
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button 
      className={`slick-arrow slick-next ${className}`} 
      style={{ ...style }} 
      onClick={onClick}
    >
      &#9654;
    </button>
  );
};
const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (_, next) => setActiveIndex(next),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">мои проекты </h2>
      <Slider {...settings} className="projects-slider">
        {projectsList.map((project, index) => (
          <div key={project.id} className={`slide ${index === activeIndex ? "active" : ""}`}>
            <div
              className={`project-card ${project.status === "dev" ? "dev" : ""}`}
              style={{
                borderColor: index === activeIndex ? project.color : "transparent",
                borderWidth: index === activeIndex ? ".5px" : "0px", // Толщина границы
                minHeight: "400px",
              }}
            >
              {project.status === "dev" ? (
                <div className="project-placeholder">В разработке</div>
              ) : project.image ? (
                <img src={project.image} alt={project.title} className="project-image" />
              ) : (
                <div className="project-placeholder">Нет изображения</div>
              )}
  
              <h3 className="project-title">{project.title || "Без названия"}</h3>
              {project.status === 'work' && (
                <div className="project-status">
                  Статус: <p style={{ color: "green", margin: 0 }}>В работе</p>
                </div>
              )}
              {project.status === 'dev' && (
                <div className="project-status">
                  Статус: <p style={{ color: "yellow", margin: 0 }}>В разработке</p>
                </div>
              )}
  
              <p className="project-description">{project.description}</p>

              {project.technologies && (
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              )}
           {project.status !== 'dev' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaLink />
              </a>
            )}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;