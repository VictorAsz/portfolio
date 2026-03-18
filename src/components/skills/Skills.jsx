import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Database from './Database';
import Tools from './Tools';
import Practices from './Practices';

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section_title'>Habilidades</h2>
      <span className='section_subtitle'>My Technical Skills</span>
      <div className='skills_container container'>

        <div className="skills_row top">
          <Frontend />
          <Backend />
        </div>

        <div className="skills_row bottom">
          <Database />
          <Tools />
          <Practices />
        </div>

      </div>
    </section>
  )
}

export default Skills