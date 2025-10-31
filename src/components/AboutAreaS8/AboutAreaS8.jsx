import CountUp from "react-countup";
import { Link } from "react-router-dom";
import Ab1 from '../../img//new/111.png';
import Ab2 from '../../img//new/24.png';
import Ab3 from '../../img//new/25.png';
import Ab4 from '../../img//new/23.png';
import title2 from '../../img/theme-img/title_icon2.svg'
import CircleTextS2 from "../CircleTextS2/CircleTextS2";
import VideoModal from "../ModalVideo/ModalVideo";




const AboutAreaS8 = () => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className=" overflow-hidden space-extra2-top space-bottom" id="about-sec">
         <div className="container">
            <div className="row">
               <div className="col-xl-5 mb-35 mb-xl-0">
                  <div className="title-area mb-30 pe-xxl-5">
                     {/* <img src={title} alt="shape" /> */}
                     <h2 className="sec-title text-white">We are a Group of companies</h2>
                     <img src={title2} alt="shape" />
                     <p className="text-body fs-18 mt-25 mb-40">Empowering Growth, Uniting Excellence to Shape Tomorrow's Success</p>
                     <p className="text-body fs-18 mb-60">AZIM Group is a constellation of enterprises at the heart of Qatar's dynamic business landscape. With seven unique companies under our banner, we orchestrate services to deliver unmatched value across diverse industries</p>
                  </div>
                  <div className="counter-card-wrap style2">
                     <div className="counter-card">
                        <div className="media-body">
                           <h2 className="box-number"><span className="counter-number"><CountUp end={58}></CountUp></span>+</h2>
                           <p className="box-text">Clients</p>
                        </div>
                     </div>
                     <div className="divider"></div>
                     <div className="counter-card">
                        <div className="media-body">
                           <h2 className="box-number"><span className="counter-number"><CountUp end={10}></CountUp></span>+</h2>
                           <p className="box-text">Years of Experience</p>
                        </div>
                     </div>
                     <div className="divider"></div>
                     <div className="counter-card">
                        <div className="media-body">
                           <h2 className="box-number"><span className="counter-number"><CountUp end={370}></CountUp></span>+</h2>
                           <p className="box-text">Staff</p>
                        </div>
                     </div>
                     <div className="divider"></div>
                  </div>
                  <div className="btn-group mt-60">
                     <a href="about" className="th-btn extra-btn th-radius">LEARN MORE</a>
                     {/* <div className="call-info style2">
                        <div className="call-icon"><a href="tel:+00123456789"><i className="fa-sharp fa-light fa-phone-volume"></i></a>
                        </div>
                        <div className="media-body"><span className="call-label">For Reservation</span>
                           <p className="call-link"><a href="tel:+01234567890">+01 234 567 890</a></p>
                        </div>
                     </div> */}
                  </div>
               </div>
               <div className="col-xl-7">
                  <div className="img-box6">
                     <div className="img1">
                        <img src={Ab1} alt="" />
                        <div className="about-wrapp">
                           <div className="discount-wrapp">
                              {/* <VideoModal vidclass={'play-btn popup-video'} /> */}
                              <CircleTextS2 text=" AZIM Facilities Management and services *" />

                           </div>
                        </div>
                     </div>
                     <div >
                        <img src={Ab4} alt="" />
                     </div>
                     <div className="img2">
                        <img src={Ab2} alt="" />
                     </div>
                     <div className="img3">
                        <img src={Ab3} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutAreaS8;