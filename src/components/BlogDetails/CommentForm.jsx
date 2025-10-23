import { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";

const CommentForm = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      website: "",
      comment: "",
      saveInfo: false,
   });

   const [, forceUpdate] = useState();
   const validator = useRef(new SimpleReactValidator());

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: type === "checkbox" ? checked : value,
      }));
      validator.current.showMessageFor(name);
   };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (validator.current.allValid()) {
    setFormData({
      name: "",
      email: "",
      website: "",
      comment: "",
      saveInfo: false,
    });

    validator.current.hideMessages();
    forceUpdate(1);
  } else {
    validator.current.showMessages();
    forceUpdate(1);
  }
};


   return (
      <form className="th-comment-form" onSubmit={handleSubmit}>
         <div className="form-title">
            <h3 className="blog-inner-title h4 mb-2">Leave a Reply</h3>
            <p className="form-text text-body">
               Your email address will not be published. Required fields are marked *
            </p>
         </div>
         <div className="row">
            <div className="col-md-6 form-group">
               <input
                  type="text"
                  name="name"
                  placeholder="Full Name*"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
               />
               <i className="far fa-user"></i>
               {validator.current.message("name", formData.name, "required")}
            </div>
            <div className="col-md-6 form-group">
               <input
                  type="text"
                  name="email"
                  placeholder="Your Email*"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
               />
               <i className="far fa-envelope"></i>
               {validator.current.message("email", formData.email, "required|email")}
            </div>
            <div className="col-12 form-group">
               <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  className="form-control"
                  value={formData.website}
                  onChange={handleChange}
               />
               <i className="far fa-globe"></i>
            </div>
            <div className="col-12 form-group">
               <textarea
                  name="comment"
                  placeholder="Comment*"
                  className="form-control"
                  value={formData.comment}
                  onChange={handleChange}
               />
               <i className="far fa-pencil"></i>
               {validator.current.message("comment", formData.comment, "required")}
            </div>
            <div className="col-12 form-group">
               <input
                  type="checkbox"
                  id="saveInfo"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleChange}
               />
               <label htmlFor="saveInfo">
                  Save my name, email, and website in this browser for the next time I comment.
               </label>
            </div>
            <div className="col-12 form-group mb-0">
               <button type="submit" className="th-btn">
                  Post Comment
               </button>
            </div>
         </div>
      </form>
   );
}

export default CommentForm;
