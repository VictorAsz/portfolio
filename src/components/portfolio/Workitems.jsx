import React from 'react'

const Workitems = ({item}) => {
  return (
    <div className="work_card" key={item.id}>
        <img src={item.image} alt="" className='work_img' />
        <h3 className='work_title'>{item.title}</h3>

      
        <a href='https://github.com/VictorAsz/HDCevents' target='blank' className="work_button github_button">
            Github <i className="uil uil-github work_github-icon"></i>
        </a>
        <a href={item.demo} className="work_button">
            Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
        </a>
        
    </div>
  )
}

export default Workitems