import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false);

  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: { forceUpdate: () => setForceUpdate(!forceUpdate) },
    })
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    validator.current.showMessageFor(name); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validator.current.allValid()) {
      
      setSubmitted(true);
      setFormData({
        name: '',
        number: '',
        email: '',
        subject: '',
        message: '',
      });
      validator.current.hideMessages();
    } else {
      validator.current.showMessages();
      setForceUpdate(!forceUpdate); 
    }
  };

  return (
    <form className="contact-form style2 ajax-contact" onSubmit={handleSubmit}>
      <div className="title-area mb-45">
        <span className="sub-title2 style1">CONTACT ME</span>
        <h3 className="h2">Contact with Me</h3>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
          />
          {validator.current.message('name', formData.name, 'required|alpha_space')}
        </div>
        <div className="form-group col-md-6">
          <input
            type="tel"
            className="form-control"
            name="number"
            placeholder="Phone*"
            value={formData.number}
            onChange={handleChange}
          />
          {validator.current.message('number', formData.number, 'required|numeric')}
        </div>
        <div className="form-group col-md-6">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email Address*"
            value={formData.email}
            onChange={handleChange}
          />
          {validator.current.message('email', formData.email, 'required|email')}
        </div>
        <div className="form-group col-md-6">
          <select
            name="subject"
            className="form-select nice-select"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Subject
            </option>
            <option value="Luxury Hotel">Luxury Hotel</option>
            <option value="Rooms">Rooms</option>
            <option value="Hotel">Hotel</option>
          </select>
          {validator.current.message('subject', formData.subject, 'required')}
          <i className="fa-solid fa-caret-down"></i>
        </div>
        <div className="form-group col-12">
          <textarea
            name="message"
            cols="30"
            rows="3"
            className="form-control"
            placeholder="How can I help you? Feel free to get in touch!"
            value={formData.message}
            onChange={handleChange}
          />
          {validator.current.message('message', formData.message, 'required|min:10')}
        </div>
        <div className="form-btn col-12">
          <button type="submit" className="th-btn">
            Send Message
          </button>
        </div>
      </div>
      <p className="form-messages mb-0 mt-3">
        {submitted && <span className="text-success">Message sent successfully!</span>}
      </p>
    </form>
  );
};

export default ContactForm;
