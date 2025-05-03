
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// This function will be called by our language context to update the document language
window.updateDocumentLanguage = function(language: string) {
  document.documentElement.lang = language;
};
