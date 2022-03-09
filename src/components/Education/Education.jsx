import React from "react";
import "./Education.scss";


const Education = ({ education }) => {
  return (
    <div className="cd">
        <div className="card">
        <div className="education_card">
            {education.map((item) => {
            return (
                <div key={JSON.stringify(item)}>
                <p className="name">📗 {item.name}</p>
                <p>{item.where}</p>
                <p>{item.date}</p>
                </div>
            );
            })}
        </div>
        </div>
    </div>
  );
};
 
export default Education; 