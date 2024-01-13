import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Portfolio from './components/portfolio/Portfolio';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.getElementById('html');
    const darkModeSwitch = document.querySelector('#dark_mode_button');

    const toggleDarkMode = () => {
      html.classList.toggle('dark-mode', isDarkMode);
    };

    darkModeSwitch.addEventListener('change', () => {
      setIsDarkMode(!isDarkMode);
    });

    return () => {
      darkModeSwitch.removeEventListener('change', () => {
        setIsDarkMode(!isDarkMode);
        console.log('mudei de cor');
      });
    };
  }, [isDarkMode]);

}

const App = () => {

  
  return (
    <>
    <Header/>

    <main className='main'>
      <div>
    <button id='dark_mode_button' onClick={DarkModeToggle()}>Dark mode</button>

    </div>
      <Home/>
      <About/>
      <Skills/>
      {/* <Services/> */}
      <Portfolio/>
      <Qualification/>
      {/* <Testimonials/> */}
      <Contact/>
      
    </main>
    <Footer/>
    <ScrollUp/>

    </>
  );
}

export default App;
