import React from 'react';
import './work.scss';

export default function Work({ work }) {
  return (
    <article className='work'>
        <img alt={work.alt} src={work.url}/>
    </article>
  )
}
