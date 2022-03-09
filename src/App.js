import './App.css';
import { useState } from 'react';
import Hero from './components/Hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Languages from './components/Languages/Languages';
import { CV } from './CV/CV';

const { hero, portfolio, education, experience, languages, skills, volunteer } = CV;

export default function App() {

  const [showEducation, setShowEducation] = useState(true);
  
  return (
    <div>
      <Hero hero={hero}/>
      <div className='btn'>
          <button className="btn2"
                  onClick={() => setShowEducation(true)}>
                  Education
          </button>
          <button className="btn2"
                  onClick={() => setShowEducation(false)}>
                  Experience
          </button>

          {showEducation ? (
            <Education education={education} />
            ) : (
              <Experience experience={experience} />
            )}

      </div>


      <div>
        
          <Skills skills={skills} />
      </div>

      <div>
          <Languages languages={languages} />
      </div>


      
      <Portfolio portfolio={portfolio} />
    </div>

    
  )
}