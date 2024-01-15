import React from 'react';
import './portfolio.css';
import Works from './Works';

const Portfolio = () => {
  


  return (
    <section className="portfolio section" id='portfolio'>
        <h2 className="section_title">Portfólio</h2>
        <span className="section_subtitle">Meus Projetos</span>


     
          <Works/>
     


    </section>
  )
}

export default Portfolio