import { withRouter } from '../../utils/withRouter';
import doctors from '../../data/doctors';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import Spinner from '../spinner';
import './index.css';

class DoctorProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor: null,
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    const doctor = doctors.find(doc => doc.id === parseInt(id));

    // Simulate data loading
    setTimeout(() => {
      this.setState({ doctor, loading: false });
    }, 1000);
  }

  render() {
    const { doctor, loading } = this.state;

    if (loading) {
      return (
        <div className="spinner-container">
          <Spinner />
        </div>
      );
    }

    if (!doctor) {
      return <div className="notfound-container">Doctor not found</div>;
    }

    return (
      <div className="profile-container">
        <div className="profile-content">
          <div className="profile-image-wrapper">
            <img
              src={doctor.profileImage}
              alt={doctor.name}
              className="profile-image"
            />
          </div>
          <div className="profile-details">
            <h2 className="doctor-name">{doctor.name}</h2>
            <p className="doctor-specialization">
              <strong>Specialization:</strong> {doctor.specialization}
            </p>
            <p className="doctor-availability">
              <strong>Availability:</strong>{' '}
              <span
                className={
                  doctor.availability === 'available'
                    ? 'available'
                    : 'unavailable'
                }
              >
                {doctor.availability === 'available'
                  ? 'Available'
                  : 'Currently On Leave'}
              </span>
            </p>
            <p className="doctor-description">{doctor.description}</p>

            {doctor.availability === 'available' ? (
              <Link to={`/book-appointment/${doctor.id}`}>
                <button className="book-button">Book Appointment</button>
              </Link>
            ) : (
              <button className="book-button disabled" disabled>
                Currently On Leave
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DoctorProfile);
