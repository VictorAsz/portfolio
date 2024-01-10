import React from 'react';
import './portfolio.css';
import Works from './Works';

const Portfolio = () => {
  return (
    <section className="portfolio section" id='portfolio'>
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">My recents projects</span>


        <div className='projects_container container grid'>
          <Works/>
        </div>


    </section>
  )
}

export default Portfolio