// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookAppointment from './components/BookAppointment/BookAppointment';
import AllDoctors from './components/AllDoctors/AllDoctors';

import AppointmentsPage from './components/AppointmentsPage/AppointmentsPage';
import DoctorProfile from './components/DoctorProfile/DoctorProfile';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';


function App() {
  return (
   
  <div>
     <Navbar/>

      <Routes>

       <Route path="/" element={<Home />} />
      <Route path="/all-doctors" element={<AllDoctors />} />
      <Route path="/doctor/:id" element={<DoctorProfile />} />
      <Route path="/book-appointment/:id" element={<BookAppointment />} />
      <Route path="/appointments" element={<AppointmentsPage />} />
    </Routes>
  </div>
  );
}

export default App;
