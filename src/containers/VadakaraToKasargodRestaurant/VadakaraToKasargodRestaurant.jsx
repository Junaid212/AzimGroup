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
import AboutAreaS7 from '../../components/AboutAreaS7/AboutAreaS7';
import feature2 from '../../img/icon/about_feature_2.svg'
import feature3 from '../../img/icon/about_feature_3.svg'
import feature4 from '../../img/icon/about_feature_4.svg'
import Ab1 from '../../img/new/120.png'
import map from '../../img/shape/map.png';


const VadakaraToKasargodRestaurant = () => {
   const { slug } = useParams()
   const ServiceDetails = ServiceData.find(item => item.slug === slug)

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={ServiceDetails.title} pagesub={'Vadakara to Kasargod Restaurent'} />
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
                                    <span className="sub-title2 style1">Welcome To Our Restaurant</span><br/>
                                       <h1 className="sec-title text-white">VadaKara To kasargod Restaurant</h1>
                                       
                                   </div>
                               </div>
                               <div className="about-feature">
                                   <div className="box-content">
                                       <p className="box-text">Vadakara To Kasargod Restaurant, where culinary delight
                                         meets the essence of Vadakara and Kasargod. Our multi-cuisine restaurant invites
                                          you on a gastronomic journey that captures the rich flavors and cultural nuances
                                           of these vibrant locales. Indulge your taste buds in a unique fusion of culinary
                                            traditions, bringing the best of Vadakara and Kasargod to your plate.</p>
                                   </div>
                               </div>
                               <div className="map-view shape-mockup2" data-bottom="162px" data-left="131px">
                                           <span className="hero-map" ><i className="fa-sharp fa-solid fa-location-dot" style={{ fontSize: "44px" }}></i></span>
                                           <div className="card-view">
                                              <div className="map"> <a target="_blank" href="https://maps.app.goo.gl/pdNRddpxjVnbR8DX6">
                                                 <img src={map} alt="" /></a></div>
                                              <h3 className="box-title">Near Green Mosque, Bin Omran, Doha</h3>
                                              <a className="th-btn btn-fw" target="_blank" href="https://maps.app.goo.gl/pdNRddpxjVnbR8DX6">Open on Map</a>
                                           </div>
                                        </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
         <ServiceAreaS6 />
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default VadakaraToKasargodRestaurant
