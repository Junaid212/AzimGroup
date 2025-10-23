import { Link } from 'react-router-dom';
import shape from '../../img/shape/error_image.png';

const ErrorArea = () => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className="space overflow-hidden" >
         <div className="container">
            <div className="row gy-4">
               <div className="col-xl-6 align-self-center">
                  <div className="error-content">
                     <h2 className="h2 error-title">The page doesn’t exit</h2>
                     <p className="error-text">The page you are looking for doesn't exist or has been moved.</p>
                     <h3 className="box-title">404</h3>
                     <Link onClick={ClickHandler} to="/" className="th-btn"><i className="fal fa-home me-2"></i>BACK TO HOME</Link>
                  </div>
               </div>
               <div className="col-xl-6">
                  <div className="error-img global-img">
                     <img src={shape} alt="404 image" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ErrorArea;