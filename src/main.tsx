
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
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
  
  // Set initial viewport meta for optimal display on all devices
  const viewportMeta = document.querySelector('meta[name="viewport"]');
  if (viewportMeta) {
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
  }
  
  // Check for secure connection
  if (window.location.protocol === 'http:' && !window.location.hostname.includes('localhost') && !window.location.hostname.includes('127.0.0.1')) {
    // Redirect to HTTPS
    window.location.href = window.location.href.replace('http:', 'https:');
  }
});
