import React, { useState, useEffect } from 'react';

const NightModeToggle = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const nightModeEnabled = localStorage.getItem('nightMode') === 'enabled';
    setIsNightMode(nightModeEnabled);
  }, []);

  const toggleNightMode = () => {
    const newMode = !isNightMode;
    setIsNightMode(newMode);
    localStorage.setItem('nightMode', newMode ? 'enabled' : 'disabled');
    document.body.classList.toggle('night-mode', newMode);
  };

  return (
    <button onClick={toggleNightMode}>
      {isNightMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default NightModeToggle;
