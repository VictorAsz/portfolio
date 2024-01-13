import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Victor</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer_link">Projects</a>
                </li>
                <li>
                    <a href="#services" className="footer_link">Services</a>
                </li>
            </ul>
            <div className="footer_social">
                <a href="https://www.instagram.com/victor_aszo/" className="footer_social-link" target="_blank">
                <i className="uil uil-instagram"></i>
                </a>
                <a href="https://www.youtube.com/@drayuuta9927" className="footer_social-link" target="_blank">
                <i class="uil uil-youtube"></i>
                </a>
                <a href="https://github.com/VictorAsz" className="footer_social-link" target="_blank">
                <i className="uil uil-github"></i>
                </a>
            </div>

            <span className='footer_copy'>
                &#169; Crypticalcoder. All rigths reserved
            </span>

        </div>
    </footer>
  )
}

export default Footer