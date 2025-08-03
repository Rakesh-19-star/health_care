# 🏥 Healthcare Appointment Booking App

A responsive single-page React application that allows users to:

- View doctors by specialization
- Book appointments
- See booked appointments

---

## 🚀 Live Demo

[Hosted Link (optional)](https://health-care-mu-ebon.vercel.app/)
https://health-care-mu-ebon.vercel.app/   --click here for live link 
Added vercel live link 

---

## 🛠 Tools & Libraries Used

### Frontend:

- React.js (with hooks)
- React Router DOM
- Context API (for global state)
- HTML5 + CSS3
- JS Date methods (for date validation)

### Styling:

- Pure CSS (mobile-first & responsive)
- Custom form validation logic

---

## 📌 Features

- View list of doctors with images and specialization
- Book appointments with form validation
- Display booked appointments
- Routing between Home, Doctors, and Appointment pages
- State persistence with localStorage

---

## ⏳ Improvements with More Time

- Backend API integration with Node.js/Express and MongoDB
- Authentication (login/signup for patients)
- Admin dashboard to manage appointments
- Filtering doctors by rating or availability
- Email confirmation of booked appointments

---

## 😮 Challenges Faced & Solutions

### 1. **Handling past date validation**

- Used `new Date().toDateString()` to compare input date with current date without time errors.

### 2. **Passing data between routes**

- Used React Router's `useParams()` and `Context API` to track doctor ID and appointments across pages.

### 3. **Image rendering and layout cropping issues**

- Solved by setting fixed aspect ratios and using `object-fit: cover` in CSS for responsive doctor card design.

---

## 💻 Run Locally

```bash
git clone https://github.com/Rakesh-19-star/health_care.git
cd healthcare-appointment-app
npm install
npm start
```
