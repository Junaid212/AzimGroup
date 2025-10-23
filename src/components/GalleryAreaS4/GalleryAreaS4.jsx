import React from 'react';

import gallery1 from '../../img/gallery/gallery_7_1.jpg';
import gallery2 from '../../img/gallery/gallery_7_2.jpg';
import gallery3 from '../../img/gallery/gallery_7_3.jpg';
import gallery4 from '../../img/gallery/gallery_7_4.jpg';
import gallery5 from '../../img/gallery/gallery_7_5.jpg';
import gallery6 from '../../img/gallery/gallery_7_6.jpg';
import gallery7 from '../../img/gallery/gallery_7_7.jpg';
import Icon from '../../img/icon/tripadvisor.svg';

const GalleryAreaS4 = (props) => {
   return (
      <div className={"" + props.hclass}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-5">
                  <div className="title-area">
                     <span className="sub-title2 style1 ">GALLERY</span>
                     <h2 className="sec-title text-white ">A handful of guests have submitted their best memories</h2>
                  </div>
               </div>
               <div className="col-lg-7">
                  <div className="social-media-wrapp">
                     <div className="social-media">
                        <i className="fab fa-instagram"></i>
                        <p className="text mb-0">Instagram</p>
                     </div>
                     <div className="divider"></div>
                     <div className="social-media">
                        <img src={Icon} alt="" />
                        <p className="text mb-0">tripadvisor</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row gy-4 filter-active">
               <div className="col-lg-6 col-xxl-auto filter-item cat1 cat2">
                  <div className="gallery-card2 style2">
                     <div className="box-img">
                        <img src={gallery1} alt="gallery image" />
                        <a href="https://www.instagram.com/" target="_blank" className="simple-btn popup-image"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-xxl-auto filter-item cat3">
                  <div className="gallery-card2 style2">
                     <div className="box-img">
                        <img src={gallery2} alt="gallery image" />
                        <a href="https://www.instagram.com/" target="_blank" className="simple-btn popup-image"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-xxl-auto filter-item cat2 cat5">
                  <div className="gallery-card2 style2">
                     <div className="box-img">
                        <img src={gallery3} alt="gallery image" />
                        <a href="https://www.instagram.com/" target="_blank" className="simple-btn popup-image"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-xxl-auto filter-item cat3 cat2">
                  <div className="gallery-card2 style2">
                     <div className="box-img">
                        <img src={gallery4} alt="gallery image" />
                        <a href="https://www.instagram.com/" target="_blank" className="simple-btn popup-image"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-xxl-auto filter-item cat1">
                  <div className="gallery-card2 style2">
                     <div className="box-img">
                        <img src={gallery5} alt="gallery image" />
                        <a href="https://www.instagram.com/" target="_blank" className="simple-btn popup-image"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-xxl-auto filter-item cat3 cat5">
                  <div className="gallery-card2 style2">
                     <div className="box-img">
                        <img src={gallery6} alt="gallery image" />
                        <a href="https://www.instagram.com/" target="_blank" className="simple-btn popup-image"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-xxl-auto filter-item cat1 cat5">
                  <div className="gallery-card2 style2">
                     <div className="box-img">
                        <img src={gallery7} alt="gallery image" />
                        <a href="https://www.instagram.com/" target="_blank" className="simple-btn popup-image"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default GalleryAreaS4;