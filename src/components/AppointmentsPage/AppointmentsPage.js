import React, { useContext } from 'react';
import { AppointmentContext } from '../../context/AppointmentContext';
import './index.css';

const AppointmentsPage = () => {
  const { appointments } = useContext(AppointmentContext);

  console.log("Appointments on AppointmentsPage:", appointments);

  return (
    <div className="appointments-container">
      <h2 className="appointments-heading">Appointments</h2>

      {appointments.length === 0 ? (
        <p className="no-appointments">No appointments booked yet.</p>
      ) : (
        <ul className="appointments-list">
          {appointments.map((appt, idx) => (
            <li key={idx} className="appointment-card">
              <p><span className="label">Doctor:</span> {appt.doctorName}</p>
              <p><span className="label">Patient:</span> {appt.patientName}</p>
              <p><span className="label">Email:</span> {appt.email}</p>
              <p><span className="label">Date:</span> {appt.date}</p>
              <p><span className="label">Time:</span> {appt.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentsPage;
