import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ServiceData from '../../api/service';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import Experience from '../../components/Experience/Experience';
import FooterArea from '../../components/FooterArea/FooterArea';
import GalleryAreaS6 from '../../components/GalleryAreaS6/GalleryAreaS6';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceAreaS6 from '../../components/ServiceAreaS6/ServiceAreaS6';
import SidebarArea from '../../components/SidebarArea/SidebarArea';
import Simg1 from '../../img/service/service_inner_1.jpg';
import Simg2 from '../../img/service/service_inner_2.jpg';
import AboutAreaS3 from '../../components/AboutAreaS3/AboutAreaS3';
import EventArea from '../../components/EventArea/EventArea';
import Ab1 from '../../img/new/109.png'
import title from '../../img/theme-img/ab-logo.png'
import title2 from '../../img/theme-img/title_icon2.svg'
import feature1 from '../../img/icon/about_feature_1.svg'
import feature2 from '../../img/icon/about_feature_2.svg'
import feature3 from '../../img/icon/about_feature_3.svg'
import feature4 from '../../img/icon/about_feature_4.svg'
// import CircleText from './CircleText';




const AzimFacilitiesManagementandservices = () => {
   const { slug } = useParams()
   const ServiceDetails = ServiceData.find(item => item.slug === slug)

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={ServiceDetails.title} pagesub={'Facilities Management and Services'} />
         <AboutAreaS3 hclass={'overflow-hidden space'} />
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
                           <p className="box-text">What we do</p><br/>
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
         <EventArea hclass={'space-extra2-top space-bottom overflow-hidden'} />
         <ServiceAreaS6 />
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default AzimFacilitiesManagementandservices
