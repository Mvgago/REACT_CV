import React from 'react'
import './Hero.scss';
import Developer from '../../assets/developer.png';

export default function Hero({ hero }) {
  return (
    <section className='Hero'>
      <div className='Hero__info'>
          <h1>{hero.name}</h1>
          <h2 className='Hero__title'>{hero.profession}</h2>
          <ul>
            <li>
              <span className='Hero__icon'>🏠</span>
              <a href={`tel:${hero.city}`} className='Hero__link'>{hero.city}</a>
          
            </li>
            <li>
              <span className='Hero__icon'>📧</span>
              <a href={`mailto:${hero.email}`} className='Hero__link'>{hero.email}</a>
            </li>
          </ul>
          </div>
          <div className='Hero__image'>
          <img src={Developer} alt='women developer'/>
      </div>
    </section>
  )
}  
