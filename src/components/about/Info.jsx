import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box ">
      <i class='bx bx-award about_icon'></i>

        <h3 className="about_title">Nível</h3>
        <span className="about_subtitle">Júnior</span>
      </div>

      <div className="about_box ">
      <i class='bx bx-briefcase-alt about_icon'></i>
        <h3 className="about_title">Ensino</h3>
        <span className="about_subtitle">Unisinos</span>
      </div>

      <div className="about_box">
      <i class='bx bx-support about_icon'></i>
        <h3 className="about_title">Disponibilidade</h3>
        <span className="about_subtitle">Open to Work</span>
      </div>
      




    </div>
  )
}

export default Info