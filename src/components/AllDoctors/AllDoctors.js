import React, { Component } from 'react';
import doctors from '../../data/doctors';
import DoctorCard from '../DoctorCard/DoctorCard';
import Spinner from '../spinner';
import './index.css';

class AllDoctors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredDoctors: [],
      specializations: [],
      selectedSpecialization: '',
      isLoading: true,
      search: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const specializations = [...new Set(doctors.map(doc => doc.specialization))];
      this.setState({
        filteredDoctors: doctors,
        specializations,
        isLoading: false,
      });
    }, 1000);
  }

  handleSpecializationClick = (specialization) => {
    const { search } = this.state;
    let filtered = doctors;
    if (specialization) {
      filtered = filtered.filter(doc => doc.specialization === specialization);
    }
    if (search.trim()) {
      const str = search.toLowerCase();
      filtered = filtered.filter(
        doc =>
          doc.name.toLowerCase().includes(str) ||
          doc.specialization.toLowerCase().includes(str)
      );
    }
    this.setState({
      filteredDoctors: filtered,
      selectedSpecialization: specialization,
    });
  };

  handleShowAll = () => {
    const { search } = this.state;
    let filtered = doctors;
    if (search.trim()) {
      const str = search.toLowerCase();
      filtered = doctors.filter(
        doc =>
          doc.name.toLowerCase().includes(str) ||
          doc.specialization.toLowerCase().includes(str)
      );
    }
    this.setState({
      filteredDoctors: filtered,
      selectedSpecialization: '',
    });
  };

  handleSearchChange = (e) => {
    const searchValue = e.target.value;
    const { selectedSpecialization } = this.state;
    let filtered = doctors;
    if (selectedSpecialization) {
      filtered = filtered.filter(doc => doc.specialization === selectedSpecialization);
    }
    if (searchValue.trim()) {
      const str = searchValue.toLowerCase();
      filtered = filtered.filter(
        doc =>
          doc.name.toLowerCase().includes(str) ||
          doc.specialization.toLowerCase().includes(str)
      );
    }
    this.setState({
      search: searchValue,
      filteredDoctors: filtered,
    });
  };

  render() {
    const {
      filteredDoctors,
      specializations,
      selectedSpecialization,
      isLoading,
      search,
    } = this.state;

    if (isLoading) {
      return <Spinner />;
    }

    return (
      <div className="container">
        <h1 className="heading">Our Doctors</h1>
        <div className="search-row">
          <input
            className="doctor-search"
            type="text"
            placeholder="Search by doctor name or specialization"
            value={search}
            onChange={this.handleSearchChange}
          />
        </div>
        <div className="filterBar">
          <button
            className={`filterButton ${selectedSpecialization === '' ? 'active' : ''}`}
            onClick={this.handleShowAll}
            aria-pressed={selectedSpecialization === ''}
          >
            Show All
          </button>
          {specializations.map((spec, index) => (
            <button
              key={index}
              className={`filterButton ${selectedSpecialization === spec ? 'active' : ''}`}
              onClick={() => this.handleSpecializationClick(spec)}
              aria-pressed={selectedSpecialization === spec}
            >
              {spec}
            </button>
          ))}
        </div>
        <div className="list">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <p className="no-results">No doctors found.</p>
          )}
        </div>
      </div>
    );
  }
}

export default AllDoctors;
