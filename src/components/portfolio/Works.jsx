import React, {useState, useEffect} from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import './portfolio.css';
import Workitems from './Workitems';


const Works = () => {
  const [item, setItem] = useState({name: 'all'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if(item.name === "all"){
      setProjects(projectsData);
    } else{
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item])

  const handleFilter = (e, index) => {
    setItem({name: e.target.textContent.toLowerCase()});
    setActive(index);
  };

  return (
  <div>
      <div className="work_filters">
      {projectsNav.map((item, index) => {
        return(
          <span 
          onClick={(e) => {handleFilter(e, index);}}
          className={`${active === index ? 'active-work' : ' '} work_item`} 
          key={index}>

          {item.name}
          </span>
        )
      })}
    </div>

      <div className="projects_container container grid">
        {projects.map((item) =>{
          return <Workitems item={item} key={item.id}/>
        })}
      </div>

  </div>
  )
}

export default Works
