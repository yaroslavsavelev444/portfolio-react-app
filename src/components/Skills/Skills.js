import React from "react";
import Marquee from "react-fast-marquee";
import "./Skills.css";

const skills = [
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React", color: "#61DBFB" },
  { name: "Node.js", color: "#68A063" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "CSS", color: "#2965F1" },
  { name: "HTML", color: "#E44D26" },
  // { name: "TypeScript", color: "#3178C6" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Express", color: "#000000" },
  { name: "GraphQL", color: "#E10098" },
  { name: "SQL", color: "#00758F" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  // { name: "AWS", color: "#FF9900" },
  // { name: "GCP", color: "#4285F4" },
  { name: "Next.js", color: "#000000" },
  { name: "Redux", color: "#764ABC" },
  // { name: "Jest", color: "#C21325" },
  // { name: "Mocha", color: "#8D6748" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Bootstrap", color: "#7952B3" },
  { name: "PHP", color: "#777BB3" },
  { name: "Laravel", color: "#FF2D20" }
  
];

const Skills = () => {
  return (
    <section className="skills">
      <Marquee speed={50} gradient={false} direction="left" className="marquee">
        <div className="skills-list">
          {skills.concat(skills).map((skill, index) => (
            <div key={index} className="skill" style={{ backgroundColor: skill.color }}>
              {skill.name}
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Skills;