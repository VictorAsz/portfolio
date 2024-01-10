import React from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import './portfolio.css';
import Workitems from './Workitems';


const Works = () => {
  return (
  <div>
      <div className="work_filters">
      {projectsNav.map((item, index) => {
        return(
          <span className="work_item" key={index}>{item.name}</span>
        )
      })}
    </div>

      <div className="projects_container container grid">
        {projectsData.map((item) =>{
          return <Workitems item={item} key={item.id}/>
        })}
      </div>

  </div>
  )
}

export default Works
