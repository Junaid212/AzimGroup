import React from 'react';
import { Link } from 'react-router-dom';
import GalleryBg from '../../img/bg/gallery_bg_2.png';
import gallery1 from '../../img/gallery/gallery_3_1.jpg';
import gallery2 from '../../img/gallery/gallery_3_2.jpg';
import gallery3 from '../../img/gallery/gallery_3_3.jpg';
import gallery4 from '../../img/gallery/gallery_3_4.jpg';
import gallery5 from '../../img/gallery/gallery_3_5.jpg';
import gallery6 from '../../img/gallery/gallery_3_6.jpg';




const GalleryAreaS3 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={"" + props.hclass} style={{ backgroundImage: `url(${GalleryBg})` }}>
         <div className="container">
            <div className="gallery-title-area">
               <div className="title-area">
                  <span className="sub-title2 style1">INSTAGRAM</span>
                  <h2 className="sec-title">Awesome Gallery</h2>
               </div>
               <p>We provide you with the best quality of services and facilities for all your travel and place needs.</p>
            </div>
            <div className="row gy-4">
               <div className="col-md-6 col-lg-4 gallery-card_wrapp">
                  <div className="gallery-card">
                     <div className="box-img">
                        <img src={gallery1} alt="gallery image" />
                     </div>
                     <a href="https://www.instagram.com/" target="_blank" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4 gallery-card_wrapp">
                  <div className="gallery-card">
                     <div className="box-img">
                        <img src={gallery2} alt="gallery image" />
                     </div>
                     <a href="https://www.instagram.com/" target="_blank" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4 gallery-card_wrapp">
                  <div className="gallery-card">
                     <div className="box-img">
                        <img src={gallery3} alt="gallery image" />
                     </div>
                     <a href="https://www.instagram.com/" target="_blank" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4 gallery-card_wrapp">
                  <div className="gallery-card">
                     <div className="box-img">
                        <img src={gallery4} alt="gallery image" />
                     </div>
                     <a href="https://www.instagram.com/" target="_blank" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4 gallery-card_wrapp">
                  <div className="gallery-card">
                     <div className="box-img">
                        <img src={gallery5} alt="gallery image" />
                     </div>
                     <a href="https://www.instagram.com/" target="_blank" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4 gallery-card_wrapp">
                  <div className="gallery-card">
                     <div className="box-img">
                        <img src={gallery6} alt="gallery image" />
                     </div>
                     <a href="https://www.instagram.com/" target="_blank" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
            </div>
            <div className="gallery-btn">
               <h2 className="sec-title"><a className="text-white" href="https://www.instagram.com/">@rotalresort</a></h2>
               <Link onClick={ClickHandler} to="/gallery" target="_blank" className="th-btn style3 th-icon">EXPLORE MORE</Link>
            </div>
         </div>
      </div>
   );
};

export default GalleryAreaS3;