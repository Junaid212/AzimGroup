import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const BookingArea = (props) => {
  const [formData, setFormData] = useState({
    location: '',
    date: '',
    subject: ''
  });

  const [, forceUpdate] = useState(); 
  const validator = useRef(new SimpleReactValidator({
    autoForceUpdate: { forceUpdate: () => forceUpdate({}) }
  }));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validator.current.showMessageFor(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      setFormData({ location: '', date: '', subject: '' });
      validator.current.hideMessages();
    } else {
      validator.current.showMessages();
      forceUpdate({});
    }
  };

  return (
    <div className={props.hclass || ''}>
      <div className="container">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="hero-wrap">
            <div className="form-group has-label">
              <label>Destination</label>
              <input
                type="text"
                className="form-control"
                name="location"
                id="location"
                placeholder="Click to choose city or hotel"
                value={formData.location}
                onChange={handleChange}
              />
              {validator.current.message('location', formData.location, 'required')}
              <i className="far fa-map-marker-alt"></i>
            </div>

            <div className="form-group">
              <label>Dates</label>
              <input
                type="date"
                className="form-control"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
              />
              {validator.current.message('date', formData.date, 'required')}
            </div>

            <div className="form-group has-label">
              <label>Guests & Rooms</label>
              <select
                name="subject"
                id="subject"
                className="form-select"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="" disabled hidden>Room & guests per room</option>
                <option value="option1">2 Adult Only</option>
                <option value="option2">2 Adult 1 Child</option>
                <option value="option3">2 Adult 2 Child</option>
                <option value="option4">3 or 4+ Adult Only</option>
              </select>
              {validator.current.message('subject', formData.subject, 'required')}
              <i className="fa-light fa-users"></i>
            </div>

            <div className="form-btn">
              <button type="submit" className="th-btn btn-fw style1">
                CHECK AVAILABILITY
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingArea;
