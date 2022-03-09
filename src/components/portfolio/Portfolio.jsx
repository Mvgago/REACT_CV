import React from 'react';
import Work from './work';
import './Portfolio.scss';

export default function Portfolio({ portfolio }) {
  return (
        <section className='Portfolio'>
            <h2 className='Portfolio__title'>Portfolio</h2>
            <div className='Portfolio__wrap'>
                {portfolio.map((work, index) =>  <Work key={work.alt + index} work={work}/>)}
            </div>
         </section>
    
  )
}
