import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'
import UIContextProvider from './context/UIcontext';

// Bootstrap styles
import "bootstrap/dist/css/bootstrap.css"

// Aos
import AOS from 'aos/dist/aos'
import "aos/dist/aos.css"

AOS.init({
  duration: 500,
  offset: 300,
  // delay: 200,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UIContextProvider>
      <Router>
        <App />
      </Router>
    </UIContextProvider>
  </React.StrictMode>
);
