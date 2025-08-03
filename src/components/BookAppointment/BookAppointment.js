import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppointmentContext } from '../../context/AppointmentContext';
import doctors from '../../data/doctors';
import './index.css';

const BookAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addAppointment } = useContext(AppointmentContext);

  const doctor = doctors.find(doc => doc.id === parseInt(id));
  const [form, setForm] = useState({
    patientName: '',
    email: '',
    date: '',
    time: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  if (!doctor) return <div className="notfound">Doctor not found.</div>;

  const validate = () => {
    const newErrors = {};
    if (!form.patientName.trim()) newErrors.patientName = 'Patient name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email format';
    if (!form.date) newErrors.date = 'Date is required';
    else if (new Date(form.date) < new Date(new Date().toDateString())) newErrors.date = 'Cannot select past date';
    if (!form.time) newErrors.time = 'Time is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
    if (success) setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    addAppointment({
      doctorName: doctor.name,
      patientName: form.patientName,
      email: form.email,
      date: form.date,
      time: form.time,
    });

    alert('✅ Appointment booked successfully!');
    setSuccess(true);
    setForm({ patientName: '', email: '', date: '', time: '' });
    setErrors({});
  };

  return (
    <div className="container">
      <h2 className="heading">Book Appointment with Dr. {doctor.name}</h2>

      {success && (
        <div className="success-container">
          <p className="success-message">✅ Appointment booked successfully!</p>
          <button className="home-button" onClick={() => navigate('/appointments')}>
            Go To Appointments
          </button>
        </div>
      )}

      {!success && (
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="form-group">
            <label htmlFor="patientName">Patient Name</label>
            <input
              id="patientName"
              type="text"
              name="patientName"
              value={form.patientName}
              onChange={handleChange}
              className={`input ${errors.patientName ? 'input-error' : ''}`}
              placeholder="Enter your full name"
            />
            {errors.patientName && <p className="error">{errors.patientName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`input ${errors.email ? 'input-error' : ''}`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="date">Appointment Date</label>
            <input
              id="date"
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className={`input ${errors.date ? 'input-error' : ''}`}
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.date && <p className="error">{errors.date}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="time">Appointment Time</label>
            <input
              id="time"
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className={`input ${errors.time ? 'input-error' : ''}`}
            />
            {errors.time && <p className="error">{errors.time}</p>}
          </div>

          <button type="submit" className="button">
            Book Appointment
          </button>
        </form>
      )}
    </div>
  );
};

export default BookAppointment;
