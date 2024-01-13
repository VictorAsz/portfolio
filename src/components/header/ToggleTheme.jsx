import React, { useState, useEffect } from "react";
import Toggle from 'react-toggle';
import { useMediaQuery } from "react-responsive";
import './toggletheme.css';

export const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(true);

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: light)",
    },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  );

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]); 

  return (
    <Toggle
      checked={isDark}
      onChange={({ target }) => setIsDark(target.checked)}
      icons={{ checked: "🌙", unchecked: "" }}
      aria-label="Dark mode toggle"
    />
  );
};


export default ToggleTheme