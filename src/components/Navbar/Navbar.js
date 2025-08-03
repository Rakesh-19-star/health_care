import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHospitalSymbol } from 'react-icons/fa';  
import  "./index.css"


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaHospitalSymbol className="logo-icon" />
        <span className="logo-text">AdityaCare</span>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/all-doctors" className={({ isActive }) => isActive ? "active-link" : ""}>
            Our Doctors
          </NavLink>
        </li>
        <li>
          <NavLink to="/appointments" className={({ isActive }) => isActive ? "active-link" : ""}>
            Booked Appointments
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
