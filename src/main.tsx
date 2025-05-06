
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

// Add device detection to the window object for debugging
window.addEventListener('DOMContentLoaded', () => {
  console.log('Device width:', window.innerWidth);
  console.log('Device type:', window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop');
});
