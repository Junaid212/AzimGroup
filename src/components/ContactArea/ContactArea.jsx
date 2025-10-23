import { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import contactimg from '../../img/normal/contact-img.jpg';

const ContactArea = () => {
   const [formData, setFormData] = useState({
      name: "",
      number: "",
      email: "",
      subject: "",
      message: "",
   });
   const [, forceUpdate] = useState();
   const validator = useRef(new SimpleReactValidator());

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      validator.current.showMessageFor(name);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validator.current.allValid()) {

         setFormData({
            name: "",
            number: "",
            email: "",
            subject: "",
            message: "",
         });

         validator.current.hideMessages();
         forceUpdate(1);
      } else {
         validator.current.showMessages();
         forceUpdate(1);
      }
   };



   return (
      <div className="space">
         <div className="container">
            <div className="row gx-0">
               <div className="col-xl-6">
                  <form onSubmit={handleSubmit} className="contact-form">
                     <div className="title-area mb-45 text-center text-lg-start">
                        <span className="sub-title2 style1">CONTACT US</span>
                        <h2 className="sec-title text-white">Do you have questions?</h2>
                     </div>
                     <div className="row">
                        <div className="form-group col-md-6">
                           <input
                              type="text"
                              name="name"
                              placeholder="Name*"
                              value={formData.name}
                              onChange={handleChange}
                           />
                           {validator.current.message("name", formData.name, "required")}
                        </div>
                        <div className="form-group col-md-6">
                           <input
                              type="tel"
                              name="number"
                              placeholder="Phone*"
                              value={formData.number}
                              onChange={handleChange}
                           />
                           {validator.current.message("number", formData.number, "required|numeric")}
                        </div>
                        <div className="form-group col-12">
                           <input
                              type="email"
                              name="email"
                              placeholder="Email Address*"
                              value={formData.email}
                              onChange={handleChange}
                           />
                           {validator.current.message("email", formData.email, "required|email")}
                        </div>
                        <div className="form-group col-12">
                           <select
                              name="subject"
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
                           {validator.current.message("subject", formData.subject, "required")}
                           <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <div className="form-group col-12">
                           <textarea
                              name="message"
                              placeholder="Your Message"
                              value={formData.message}
                              onChange={handleChange}
                           ></textarea>
                           {validator.current.message("message", formData.message, "required")}
                        </div>
                        <div className="form-group col-12">
                           <button type="submit" className="th-btn">
                              SEND MESSAGE
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="col-xl-6">
                  <div className="contact-image global-img">
                     <img src={contactimg} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactArea;