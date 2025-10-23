import React from 'react';
import VideoBg from '../../img/bg/video_bg_1.jpg';
import VideoModal from '../ModalVideo/ModalVideo';

const VideoArea = (props) => {
   return (
      <div className={"" + props.hclass} style={{ backgroundImage: `url(${VideoBg})` }}>
         <div className="container">
            <div className="video-content1">
               <div className="title-area text-center">
                  <div className="video-review">
                     <i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i>
                     <i className="fa-sharp fa-solid fa-star"></i>
                  </div>
                  <span className="sub-title text-white ">Best Rotal Resort</span>
                  <h2 className="sec-title ">resort Promotional Video</h2>
               </div>
               <VideoModal vidclass={'play-btn border-play-btn popup-video'} />
            </div>
         </div>
      </div>
   );
};

export default VideoArea;