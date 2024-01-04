import React from 'react'

const Services = () => {
  return (
    <section className="services section" id='services'>
        <h2 className='section_title'>Services</h2>
        <span className='section_subtitle'>What i offer</span>

        <div className="services_container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil services_icon"></i>
                    <h3 className="services_title"></h3>
                </div>
           

            <span className="services_button">View More <i className='uil uil-arrow-right services_button-icon'></i></span>

                <div className='services_modal'>
                    <div className='services_modal-content'>
                        <i className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title"></h3>
                        <p className="services_modal-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Eum ducimus ipsam expedita minus rerum provident asperiores nisi!
                            Id debitis delectus ducimus.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info"></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services