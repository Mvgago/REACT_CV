import React from "react";
import './Languages.scss';


const Languages = ({ languages }) => {
  return (
    <div className="languages">
      <h2>Idiomas</h2>
      <div className="education card">
        {languages.map((item) => {
          return (
            
            <div key={JSON.stringify(item)}>
            
              <p className="name">🏳️ {item.language}</p>
              <p>{item.writing}</p>
              <p>{item.speaking}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
 
export default Languages; 