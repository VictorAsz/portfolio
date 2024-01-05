import React, { useState } from 'react';
import "./qualification.css";
const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personal journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div 
                    className={
                    toggleState === 1 
                    ? "qualification_button qualification_active button--flex" 
                    :"qualification_button button--flex"
                }
                onClick={() => toggleTab(1)}
                
                >

                    <i className="uil uil-graduation-cap qualification_icon"></i>
                    Education
                </div>
                <div 
                className={
                    toggleState === 2
                    ? "qualification_button qualification_active button--flex"
                    : "qualification_button button--flex"
                }
                onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification_icon"></i>
                    Experience
                </div>
            </div>
          

            <div className="qualification_sections">

                    {/* STUDY */}
                <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">FrontEnd Developer</h3>
                            <span className="qualification_subtitle">Uninter - Institute</span>
                            <div className="qualification_calendr">
                                <i className="uil uil-calendar-alt"></i>
                                2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification_title">Web Design</h3>
                            <span className="qualification_subtitle">Uninter - Institute</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>
                                2019 - 2020
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Web Design</h3>
                            <span className="qualification_subtitle">Uninter - Institute</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>
                                2018 - 2019
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification_title">UX design</h3>
                            <span className="qualification_subtitle">Uninter - Institute</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>
                                2017 - 2018
                            </div>
                        </div>
                    </div>
                </div>

                    {/* EXPERIENCE */}
                <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Web Developer</h3>
                            <span className="qualification_subtitle">Freelance - Gramado</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>
                                2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification_title">waiter</h3>
                            <span className="qualification_subtitle">Laghetto Siena - Gramado</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>
                                2023 - 2023
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Financial Intern</h3>
                            <span className="qualification_subtitle">Laghetto Centro - Gramado</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification_title">Designer</h3>
                            <span className="qualification_subtitle">Freelance</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>
                                2020 - 2022
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification