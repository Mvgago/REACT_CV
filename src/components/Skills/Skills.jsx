import React from "react";
import './Skills.scss';


const Skills = ({ skills }) => {
  return (
    <div className="skills">
    <h2>Habilidades</h2>
      <div className="skills card">
        {skills.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">🔨 {item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
 
export default Skills; 