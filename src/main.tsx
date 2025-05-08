
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './App.css';
import { Toaster } from './components/ui/toaster';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>,
);

// This function will be called by our language context to update the document language
window.updateDocumentLanguage = function(language: string) {
  document.documentElement.lang = language;
};

// Add device detection and secure connection handling to the window object
window.addEventListener('DOMContentLoaded', () => {
  console.log('Device width:', window.innerWidth);
  console.log('Device type:', window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop');
  console.log('Running on port:', window.location.port || (window.location.protocol === 'https:' ? '443' : '80'));
  console.log('IP access enabled on port 8080');
  
  // Set initial viewport meta for optimal display on all devices
  const viewportMeta = document.querySelector('meta[name="viewport"]');
  if (viewportMeta) {
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
  }
  
  // Check for connection speed to optimize content delivery
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    console.log('Connection type:', connection.effectiveType);
    
    if (connection.saveData) {
      console.log('Data saver mode is enabled');
      document.body.classList.add('data-saver');
    }
    
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      document.body.classList.add('slow-connection');
    }
  }
  
  // Make app installable
  window.addEventListener('beforeinstallprompt', (e: BeforeInstallPromptEvent) => {
    // Store the event so it can be triggered later
    window.deferredInstallPrompt = e;
    console.log('App is installable');
  });
});
