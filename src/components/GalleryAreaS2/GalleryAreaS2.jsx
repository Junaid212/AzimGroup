import React from 'react';
import { Link } from 'react-router-dom';
import Gallerybg from '../../img/bg/gallery_bg_1.png';
import gallery1 from '../../img/gallery/gallery_2_1.jpg';
import gallery2 from '../../img/gallery/gallery_2_2.jpg';
import gallery3 from '../../img/gallery/gallery_2_3.jpg';
import gallery4 from '../../img/gallery/gallery_2_4.jpg';
import gallery5 from '../../img/gallery/gallery_2_5.jpg';
import gallery6 from '../../img/gallery/gallery_2_6.jpg';
import gallery7 from '../../img/gallery/gallery_2_7.jpg';
import gallery8 from '../../img/gallery/gallery_2_8.jpg';
import gallery9 from '../../img/gallery/gallery_2_9.jpg';

const GalleryAreaS2 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={"" + props.hclass} style={{ backgroundImage: `url(${Gallerybg})` }}>
         <div className="container">
            <div className="row gy-48 gx-48 align-items-center">
               <div className="col-lg-3">
                  <div className="gallery-grid">
                     <div className="box-img">
                        <img src={gallery1} alt="gallery image" />
                     </div>
                     <a href="https://www.instagram.com/" target="_blank" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
               <div className="col-lg-3">
                  <div className="gallery-grid">
                     <div className="box-img">
                        <img src={gallery2} alt="gallery image" />
                     </div>
                     <a href="https://www.instagram.com/" target="_blank" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="title-area ps-xl-5">
                     <span className="sub-title2 style1">INSTAGRAM</span>
                     <h2 className="sec-title"><a className="text-white" href="https://www.instagram.com/">@rotalresort</a></h2>
                     <p className="sec-text mt-30 pe-xl-4">We provide you with the best quality of services and facilities for all
                        your travel and place needs.</p>
                  </div>
               </div>
            </div>
            <div className="row gy-48 gx-48 mt-0">
               <div className="col-lg-3">
                  <div className="gallery-grid">
                     <div className="box-img">
                        <img src={gallery3} alt="gallery image" />
                     </div>
                     <a href="https://www.instagram.com/" target="_blank" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
                  <div className="gallery-grid style3 mt-45">
                     <div className="box-img">
                        <img src={gallery4} alt="gallery image" />
                     </div>
                     <a href="https://www.instagram.com/" target="_blank" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="gallery-grid style2">
                     <div className="box-img">
                        <img src={gallery5} alt="gallery image" />
                     </div>
                     <a href="https://www.instagram.com/" target="_blank" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
               <div className="col-lg-3">
                  <div className="gallery-grid style4">
                     <div className="box-img">
                        <img src={gallery6} alt="gallery image" />
                     </div>
                     <a href="https://www.instagram.com/" target="_blank" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
                  <div className="gallery-grid mt-45">
                     <div className="box-img">
                        <img src={gallery7} alt="gallery image" />
                     </div>
                     <a href="https://www.instagram.com/" target="_blank" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
            </div>
            <div className="row gy-48 gx-48 mt-0 justify-content-end align-items-center">
               <div className="col-lg-4">
                  <div className="sec-btn mt-n3 mt-md-0">
                     <Link onClick={ClickHandler} to="/gallery" className="th-btn style3 extra-btn">EXPLORE MORE</Link>
                  </div>
               </div>
               <div className="col-lg-3">
                  <div className="gallery-grid">
                     <div className="box-img">
                        <img src={gallery8} alt="gallery image" />
                     </div>
                     <a href="https://www.instagram.com/" target="_blank" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
               <div className="col-lg-3">
                  <div className="gallery-grid">
                     <div className="box-img">
                        <img src={gallery9} alt="gallery image" />
                     </div>
                     <a href="https://www.instagram.com/" target="_blank" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>

               </div>
            </div>
         </div>
      </div>
   );
};

export default GalleryAreaS2;