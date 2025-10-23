import shape1 from '../../img/bg/video-bg-shape1.png';
import bg from '../../img/bg/video_bg_2.jpg';
import call from '../../img/icon/call-icon.svg';
import booking from '../../img/normal/booking-img.png';
import CircleTextS2 from '../CircleTextS2/CircleTextS2';
import VideoModal from '../ModalVideo/ModalVideo';

const VideoAreaS2 = (props) => {
   return (
      <div className={"" + props.hclass} style={{ backgroundImage: `url(${bg})` }} >
         <div className="video-bg-shape" >
            <img src={shape1} alt="" />
         </div>
         <div className="container">
            <div className="row gy-4 align-items-center">
               <div className="col-xl-4">
                  <div className="me-xl-4 pe-xl-3">
                     <div className="video-wrap2 text-center">
                        <div className="discount-wrapp">
                           <VideoModal vidclass={'play-btn popup-video'} />
                           <CircleTextS2 text="Rotal hotel since 1999* Rotal hotel since 1999*" />

                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4">
                  <div className="ps-xl-5 ">
                     <div className="video-content-wrap2">
                        <div className="title-area mb-45 pe-xxl-5">
                           <span className="sub-title2 style1 ">BOOKING ROOM</span>
                           <h2 className="sec-title text-white ">Excellence In Every Moment Of Your Stay</h2>
                        </div>
                        <div className="call-info">
                           <div className="call-icon"><a href="tel:+00123456789">
                              <img src={call} alt="" /></a></div>
                           <div className="media-body"><span className="call-label text-theme">Booking Now</span>
                              <p className="call-link"><a href="tel:+00123456789">+00123 456 789</a></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4">
                  <div className="video-img-box2">
                     <img src={booking} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default VideoAreaS2;