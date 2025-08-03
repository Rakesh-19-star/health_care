import React from 'react';
import './index.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Adithya Multispeciality Hospital</h1>
          <p>Delivering Excellence in Healthcare with Compassion, Care, and Innovation</p>
          <a href="/all-doctors" className="btn-primary">Meet Our Doctors</a>
        </div>
        <div className="hero-image">
          <img src="https://images.pexels.com/photos/32828968/pexels-photo-32828968.jpeg" alt="Hospital Front" />
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          At Adithya Multispeciality Hospital, we pride ourselves on being a center of excellence
          for advanced medical treatments and compassionate care. We provide 24/7 emergency services, 
          modern facilities, and highly experienced doctors across all specializations.
        </p>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png" alt="Cardiology" />
            <h3>Cardiology</h3>
            <p>Advanced heart care with minimally invasive procedures.</p>
          </div>
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/3621/3621443.png" alt="Orthopedics" />
            <h3>Orthopedics</h3>
            <p>World-class orthopedic treatments including joint replacements.</p>
          </div>
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/2965/2965496.png" alt="Neurology" />
            <h3>Neurology</h3>
            <p>Expert care for brain, spine and nervous system disorders.</p>
          </div>
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/1973/1973820.png" alt="Pediatrics" />
            <h3>Pediatrics</h3>
            <p>Compassionate care for children’s health and wellness.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose Adithya?</h2>
        <ul>
          <li>✅ 24/7 Emergency and Trauma Care</li>
          <li>✅ Experienced Specialists in All Departments</li>
          <li>✅ Fully Equipped Operation Theatres & ICU</li>
          <li>✅ Personalized Patient Care and Follow-ups</li>
          <li>✅ NABH Accredited and Hygienic Infrastructure</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Adithya Multispeciality Hospital. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
