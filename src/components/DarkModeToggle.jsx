import { useState } from 'react';
import '../styles/DarkModeToggle.css';


const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  const bodyStyle = isDarkMode
    ? { backgroundColor: '#333', color: '#fff' }
    : { backgroundColor: '#fff', color: '#333' };

  return (
    
    <button
      className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={handleToggleClick}>
      
      {isDarkMode ? '🌞 Light Mode' : '🌑 Dark Mode'}
      <style>
        {`
          body {
            background-color: ${bodyStyle.backgroundColor};
            color: ${bodyStyle.color};
          }
        `}
      </style>
    </button>
  );
};

export default DarkModeToggle;
