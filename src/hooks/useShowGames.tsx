
import { useState, useEffect } from "react";

export const useShowGames = () => {
  const [showGames, setShowGames] = useState(true);

  useEffect(() => {
    const loadSettings = () => {
      const savedSettings = localStorage.getItem('userSettings');
      if (savedSettings) {
        try {
          const settings = JSON.parse(savedSettings);
          if (settings.features && typeof settings.features.showGames === 'boolean') {
            setShowGames(settings.features.showGames);
          }
        } catch (error) {
          console.error("Error parsing settings:", error);
        }
      }
    };

    loadSettings();

    // Listen for storage changes (in case settings are updated in another tab)
    const handleStorageChange = () => {
      loadSettings();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Create a custom event listener for settings changes within the same tab
    const handleSettingsChange = () => {
      loadSettings();
    };
    
    window.addEventListener('settingsChanged', handleSettingsChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('settingsChanged', handleSettingsChange);
    };
  }, []);

  return showGames;
};
