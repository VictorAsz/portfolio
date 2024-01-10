import React from 'react'

const Workitems = ({item}) => {
  return (
    <div className="work_card" key={item.id}>
        <img src={item.image} alt="" className='work_img' />
        <h3 className='work_title'>{item.title}</h3>

      
        <button onclick="#" className="work_button github_button">
            Github <i className="uil uil-github work_github-icon"></i>
        </button>
        <button onclick="#" className="work_button">
            Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
        </button>
        
    </div>
  )
}

export default Workitems