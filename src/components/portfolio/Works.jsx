import React from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import './portfolio.css';


const Works = () => {
  return (
    <div className="work_filters">
      {projectsNav.map((item, index) => {
        return(
          <span className="work_item" key={index}>{item.name}</span>
        )
      })}
    </div>

  

  )
}

export default Works
