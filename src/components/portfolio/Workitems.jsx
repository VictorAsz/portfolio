import React, { useState, useEffect } from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'

const Workitems = ({item}) => {
  const [demoButton, setDemoButton] = useState(false);

  useEffect(() => {
    if (item.demo !== null) {
      setDemoButton(true);
    }
  }, [item.demo]);
  
  return (
    <div className="work_card" key={item.id}>
        <img src={item.image} alt="" className='work_img' />
        <h3 className='work_title'>{item.title}</h3>

      
        <a href={item.githublink} target='blank' className="work_button github_button">
            Github <i className="uil uil-github work_github-icon"></i>
        </a>

        {demoButton && (
        <a href={item.demo}  target="_blank" className="work_button">
          Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
        </a>
      )}

    </div>
  )
}

export default Workitems