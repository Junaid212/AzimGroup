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
import PricingArea from '../../components/PricingArea/PricingArea';
import Ab1 from '../../img/new/117.png'



const VenYouEvents = () => {
   const { slug } = useParams()
   const ServiceDetails = ServiceData.find(item => item.slug === slug)

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={ServiceDetails.title} pagesub={'VenYou Event'} />
         <div className="about-shape overflow-hidden bg-shape " id="about-sec">
                        <div className="container">
                            <div className="row gy-40 align-items-center">
                                
                                <div className="col-lg-6 col-xxl-6">
                                    <div className="img-box1">
                                        <div className="img1">
                                            <img src={Ab1} alt="About" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-xxl-4 text-center text-xl-start">
                                    <div className="about-feature-wrap">
                                        <div className="about-feature">
                                            <div className="box-content">
                                             <span className="sub-title2 style1">We Create Experiences to Remember</span><br/>
                                                <h1 className="sec-title text-white">Event Excellence, Tailored for You: Venyou Events</h1>
                                                
                                            </div>
                                        </div>
                                        <div className="about-feature">
                                            <div className="box-content">
                                                <p className="box-text">VenYou events and Azim Facilities Management & Services work together seamlessly to offer a comprehensive range of services, ensuring that all of our customers' event needs are met and exceeded. This collaborative effort guarantees a smooth and efficient experience for our clients, ultimately contributing to the success of their events.<br/><br/>    With our vision to emerge as one of the Reputable and Recognized Events, Wedding & Exhibition Management we at VenYou Events are determined to deliver our client with a truly unique & memorable long-lasting event experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
         <PricingArea hclass={'space'} />
         <ServiceAreaS6 />
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default VenYouEvents
