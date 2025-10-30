import { Fragment } from 'react';
import AboutArea from '../../components/AboutArea/AboutArea';
import AboutAreaS2 from '../../components/AboutAreaS2/AboutAreaS2';
import BlogArea from '../../components/BlogArea/BlogArea';
import BrandArea from '../../components/BrandArea/BrandArea';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FeatureArea from '../../components/FeatureArea/FeatureArea';
import FooterArea from '../../components/FooterArea/FooterArea';
import GalleryArea from '../../components/GalleryArea/GalleryArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import HeroArea from '../../components/HeroArea/HeroArea';
import HotelArea from '../../components/HotelArea/HotelArea';
import HotelOffersArea from '../../components/HotelOffersArea/HotelOffersArea';
import RoomsArea from '../../components/RoomsArea/RoomsArea';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceArea from '../../components/ServiceArea/ServiceArea';
import TestimonialArea from '../../components/TestimonialArea/TestimonialArea';
import CtaArea from '../../components/CtaArea/CtaArea';
import about4 from '../../img/new/95.png';
import about5 from '../../img/new/96.png';
import about6 from '../../img/new/97.png';
import about7 from '../../img/new/98.png';
import titleimg from '../../img/theme-img/title_icon.svg'
import Ab1 from '../../img/new/48.png'
import feature2 from '../../img/icon/about_feature_2.svg'
import feature3 from '../../img/icon/about_feature_3.svg'
import feature4 from '../../img/icon/about_feature_4.svg'


const HomePage = () => {

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'}  />
         <HeroArea />
         <AboutArea hclass={'about-shape overflow-hidden bg-shape'} />
         <RoomsArea hclass={'overflow-hidden bg-shape space-top'} />
         {/* <HotelArea hclass={'bg-shape space-top overflow-hidden'} /> */}
         {/* <FeatureArea hclass={'space-top overflow-hidden bg-shape'} /> */}
         
         {/* <AboutAreaS2 hclass={'about-area2 overflow-hidden shape-mockup-wrap'} /> */}
         <ServiceArea hclass={'overflow-hidden bg-shape space-top'} />
         <div className="about-shape overflow-hidden bg-shape " id="about-sec">
               <div className="container">
                   <div className="row gy-40 align-items-center">
                       {/* <div className="col-lg-6 col-xxl-4">
                           <div className="title-area mb-30 pe-xxl-5">
                             
                               <h2 className="sec-title text-white">Who We Are</h2>
                               <img src={title2} alt="shape" />
                               <p className="text-body fs-18 mt-25 mb-40">At the heart of Qatar's business landscape, AZIM Group 
                                 emerges as a constellation of enterprises dedicated to the pursuit of excellence. With Seven unique
                                  companies under our banner, we orchestrate a symphony of services aimed at delivering unmatched value
                                   to our esteemed clients in various industries.</p>
                               <p className="text-body fs-18 mb-60">Our commitment to excellence makes Azim Group the trusted choice for
                                  businesses seeking reliability and results.
         Join our satisfied clients and experience the difference today.</p>
                           </div>
                           <div className="counter-card-wrap">
                               <div className="counter-card">
                                   <div className="media-body">
                                       <h2 className="box-number"><span className="counter-number"><CountUp end={58}/></span>+</h2>
                                       <p className="box-text">Clients</p>
                                   </div>
                               </div>
                               <div className="divider"></div>
                               <div className="counter-card">
                                   <div className="media-body">
                                       <h2 className="box-number"><span className="counter-number"><CountUp end={10}/></span>+</h2>
                                       <p className="box-text">Years of Experience</p>
                                   </div>
                               </div>
                               <div className="divider"></div>
                               <div className="counter-card">
                                   <div className="media-body">
                                       <h2 className="box-number"><span className="counter-number"><CountUp end={370}/></span>+</h2>
                                       <p className="box-text">Staff</p>
                                   </div>
                               </div>
                               <div className="divider"></div>
                           </div>
                           <div className="btn-group mt-60">
                               <Link onClick={ClickHandler} to="/about" className="th-btn2 th-icon">KNOW MORE</Link>
                           </div>
                       </div> */}
                       <div className="col-lg-6 col-xxl-6">
                           <div className="img-box1">
                               <div className="img1">
                                   <img src={Ab1} alt="About" />
                               </div>
                               {/* <div className="about-wrapp">
                                   <CircleText text="* welcome to Azim Group* Committed to People, Committed to Future" />
                               </div> */}
                           </div>
                       </div>
                       <div className="col-xl-12 col-xxl-4 text-center text-xl-start">
                           <div className="about-feature-wrap">
                               <div className="about-feature">
                                   {/* <div className="box-icon">
                                       <div className="color-masking">
                                           <div className="masking-src" ></div>
                                           <img src={feature1} alt="Icon" />
                                       </div>
                                   </div> */}
                                   <div className="box-content">
                                    <span className="sub-title2 style1 ">What We Do</span>
                                       <h1 className="sec-title text-white">Services we provide include</h1>
                                       
                                   </div>
                               </div>
                               <div className="about-feature">
                                   <div className="box-icon">
                                       <div className="color-masking">
                                           <div className="masking-src" ></div>
                                           <img src={feature2} alt="Icon" />
                                       </div>
                                   </div>
                                   <div className="box-content">
                                       {/* <h3 className="box-title">Innovative Vision</h3> */}
                                       <p className="box-text">Hospitality Staffs like Butler, Captain, bartender, waiter/waitress, host/hostess, commis etc</p>
                                   </div>
                               </div>
                               <div className="about-feature">
                                   <div className="box-icon">
                                       <div className="color-masking">
                                           <div className="masking-src" ></div>
                                           <img src={feature3} alt="Icon" />
                                       </div>
                                   </div>
                                   <div className="box-content">
                                       {/* <h3 className="box-title">Commitment to Excellence</h3> */}
                                       <p className="box-text">Professional Cleaning & Housekeeping services to star facilities</p>
                                   </div>
                               </div>
                               <div className="about-feature">
                                   <div className="box-icon">
                                       <div className="color-masking">
                                           <div className="masking-src" ></div>
                                           <img src={feature4} alt="Icon" />
                                       </div>
                                   </div>
                                   <div className="box-content">
                                       {/* <h3 className="box-title">Success</h3> */}
                                       <p className="box-text">Maintenance services for buildings which includes Plumbing, Electrical, HVAC, Landscaping, Security systems etc</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
         <div className="space-top">
               <div className="row gy-4">
                  <div className="row justify-content-center">
                                 <div className="col-lg-5">
                                    <div className="title-area text-center">
                                       {/* <span className="sub-title">SERVICES</span> */}
                                       <h2 className="sec-title ">Strengths and Differentiators</h2>
                                       <span className="title-img"><img src={titleimg} alt="shape" /></span>
                                    </div>
                                 </div>
                              </div>
                  <div className="col-xl-6">
                     <div className="about-card8" style={{background:'linear-gradient(135deg, rgba(0, 183, 190, 0.9) 0%, rgba(0, 120, 106, 0.9) 100%)'}}>
                        <div className="box-img">
                           <img src={about4} alt="img" />
                        </div>
                        <div className="box-content">
                           <h4 className="box-title">Highly Qualified Workforce</h4>
                           <p className="box-text">Professional and trained staff ready to deliver excellence.</p>
                           {/* <Link onClick={ClickHandler} to="/about" className="th-btn2 th-icon">EXPLORE MORE</Link> */}
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6">
                     <div className="about-card8" style={{background:'linear-gradient(135deg, rgba(248, 151, 51, 0.9) 0%, rgba(255, 195, 0, 0.9) 100%)'}}>
                        <div className="box-img">
                           <img src={about5} alt="img" />
                        </div>
                        <div className="box-content">
                           <h4 className="box-title">Scalability without Compromise</h4>
                           <p className="box-text">Flexible solutions that grow with your needs.</p>
                           {/* <Link onClick={ClickHandler} to="/about" className="th-btn2 th-icon">BOOK NOW</Link> */}
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6">
                     <div className="about-card8" style={{background:'linear-gradient(135deg, rgba(248, 151, 51, 0.9) 0%, rgba(255, 195, 0, 0.9) 100%)'}}>
                        <div className="box-img">
                           <img src={about6} alt="img" />
                        </div>
                        <div className="box-content">
                           <h4 className="box-title">ISO 9001:2015 certified company</h4>
                           <p className="box-text">Internationally recognized quality standards.</p>
                           {/* <Link onClick={ClickHandler} to="/about" className="th-btn2 th-icon">BOOK NOW</Link> */}
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6">
                     <div className="about-card8" style={{background:'linear-gradient(135deg, rgba(0, 183, 190, 0.9) 0%, rgba(0, 120, 106, 0.9) 100%)'}}>
                        <div className="box-img">
                           <img src={about7} alt="img" />
                        </div>
                        <div className="box-content">
                           <h4 className="box-title">Compliant to Sedex Smeta 4- pillar guidelines</h4>
                           <p className="box-text">Ethical and sustainable business practices.</p>
                           {/* <Link onClick={ClickHandler} to="/about" className="th-btn2 th-icon">BOOK NOW</Link> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div> 

         <BrandArea hclass={'space bg-shape'} />
         {/* <CtaArea hclass={' space-bottom'} /> */}
         {/* <HotelOffersArea hclass={'space-top overflow-hidden bg-shape'} /> */}
         {/* <GalleryArea hclass={'overflow-hidden bg-shape space-top'} /> */}
         {/* <TestimonialArea hclass={'overflow-hidden space-top bg-shape TestimonialOn'} /> */}
         {/* <BlogArea hclass={'space bg-shape overflow-hidden'} /> */}
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default HomePage