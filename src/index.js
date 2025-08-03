// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppointmentProvider } from './context/AppointmentContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppointmentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppointmentProvider>
  </React.StrictMode>
);

reportWebVitals();
