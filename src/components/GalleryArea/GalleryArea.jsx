import React from 'react';
import titleimg from '../../img/theme-img/title_icon.svg';
import Gallery from './Gallery';
const GalleryArea = (props) => {
   return (
      <div className={"" +props.hclass}>
         <div className="container text-center">
            <div className="row justify-content-center">
               <div className="col-xxl-4">
                  <div className="title-area text-center">
                     <span className="sub-title">INSTAGRAM FEED</span>
                     <h2 className="sec-title">Relax In The Comfort Of Our Hotels</h2>
                     <div className="title-img"><img src={titleimg} alt="Icon" /></div>
                  </div>
               </div>
            </div>
            <Gallery />
         </div>
      </div>
   );
};

export default GalleryArea;