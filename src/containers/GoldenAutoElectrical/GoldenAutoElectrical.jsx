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
import testimonialData from '../../api/testimonial';
import quote from '../../img/icon/quote.svg';
import FeatureAreaS2 from '../../components/FeatureAreaS2/FeatureAreaS2';



const GoldenAutoElectrical = () => {
   const { slug } = useParams()
   const ServiceDetails = ServiceData.find(item => item.slug === slug)

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={ServiceDetails.title} pagesub={'Golden Auto Electrical'} />
         <AboutAreaS7 hclass={'overflow-hidden space bg-top-right background-image'} />
         <section className="space" id="testi-sec">
            <div className="container">
               <div className="row gy-4">
                  {testimonialData.slice(0, 1).map((testimonial, index) => (
                     <div className="col-12" key={index}>
                        <div className="testi-card style2">
                           <div className="box-img th-parallax">
                              <img src={testimonial.testi2} alt="Hotel" />
                           </div>
                           <div className="box-wrapp">
                              <div className="box-left">
                                 <h3 className="box-title"></h3>
                              </div>
                              <div className="box-content">
                                <div className="box-profile">
                                    {/* <div className="box-avater">
                                       <img src={testimonial.img} alt="Avatar" />
                                    </div> */}
                                    <div className="media-body">
                                       <h3 className="box-title">Why Choose Golden Auto Electrical ?</h3>
                                       {/* <p className="box-desig">{testimonial.postion}</p> */}
                                    </div>
                                 </div>
                                 <div className="box-review">
                                    {[...Array(6)].map((_, i) => (
                                       <i key={i} className="fa-sharp fa-solid fa-star"></i>
                                    ))}
                                 </div>
                                 <p className="box-text">
                                    Choose Golden Vision Auto Electrical for trusted expertise, cutting-edge technology, 
                                    comprehensive one-stop services, and a commitment to quality, all provided by a dedicated
                                     team focused on customer satisfaction.
                                 </p>
                                 
                                 <div className="box-quote">
                                    {/* <img src={quote} alt="Quote" /> */}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}


               </div>
            </div>
         </section>
         <FeatureAreaS2 hclass={'space overflow-hidden'} />
         <ServiceAreaS6 />
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default GoldenAutoElectrical
