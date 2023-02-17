import { useState } from 'react';
import {DarkMode,GlobalStyle} from '../styles/DarkModeToggle'


const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  const bodyStyle = isDarkMode
    ? { backgroundColor: '#333', color: '#fff', backgroundColorNav: '#201d1d'}
    : { backgroundColor: '#fff', color: '#333', backgroundColorNav: '#f5c123'};

  return (
    
    <DarkMode
      className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={handleToggleClick}>
      
      {isDarkMode ? '🌞 Light Mode' : '🌑 Dark Mode'}
      <GlobalStyle bodyStyle={bodyStyle} />
    </DarkMode>
  );
};

export default DarkModeToggle;
