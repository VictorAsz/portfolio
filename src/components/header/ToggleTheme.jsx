import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className='toggle-theme-button' onClick={toggleDarkMode}>
      {darkMode ? 'Desativar Dark Mode' : 'Ativar Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;