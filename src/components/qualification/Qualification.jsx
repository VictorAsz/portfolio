import React from 'react'
import "./qualification.css"
const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section subtitle">My personal journey</span>

        <div className="qualification_container container">
            <div className="qualification_active button--flex">
                <i className="uil uil-graduation-cap qualification-icon"></i>
                {" "}Education
            </div>
            <div className="qualification_button button--flex">
                <i className="uil uil-biefcase-alt qualification_icon"></i>
                {" "}Experience
            </div>

        </div>
    </section>
  )
}

export default Qualification