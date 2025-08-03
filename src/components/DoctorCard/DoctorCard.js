import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';  // (Update import to match your filename!)

const DoctorCard = ({ doctor }) => (
  <div className="card">
    <div className="card-photo-wrapper">
      <img
        src={doctor.profileImage}
        alt={doctor.name}
        className="card-image"
      />
    </div>
    <h3 className="card-name">{doctor.name}</h3>
    <p className="card-specialization">{doctor.specialization}</p>
    <p
      className={`card-availability ${
        doctor.availability === 'available' ? 'available' : 'unavailable'
      }`}
    >
      {doctor.availability === 'available' ? 'Available' : 'On Leave'}
    </p>
    {doctor.availability === 'available' ? (
      <Link to={`/doctor/${doctor.id}`}>
        <button className="card-button">Book Appointment</button>
      </Link>
    ) : (
      <button className="card-button disabled" disabled>
        Not Available
      </button>
    )}
  </div>
);

export default DoctorCard;
