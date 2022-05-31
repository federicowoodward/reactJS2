import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import getFirestoreApp from './firebase/config.js';

getFirestoreApp()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

