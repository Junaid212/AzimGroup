import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import EventData from '../../api/event';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import SidebarArea from '../../components/SidebarArea/SidebarArea';
import service1 from '../../img/service/service_inner_1.jpg';
import service2 from '../../img/service/service_inner_2.jpg';


const EventDetailsPage = () => {
   const { slug } = useParams()
   const EventDetails = EventData.find(item => item.slug === slug)
   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={EventDetails.title} pagesub={'Event'} />
         <section className="space-top space-bottom">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-9 col-lg-8">
                     <div className="page-single mb-30">
                        <div className="page-content">
                           <span className="sub-title2 style1">STAY & DINE</span>
                           <h2 className="h3 sec-title page-title">{EventDetails.title}</h2>
                           <p className="">We offer a wide range of services to our guests, including a restaurant, bar, tennis
                              court, swimming pool, beauty salon, and fitness center. We are improving the hotel services
                              for your guests by providing the facilities that make them feel like they're in their own
                              homes. In-house restaurants and bars that serve a variety of cuisine and beverages. Room
                              packages sometimes include meal discounts or access to special events, such as wine
                              tastings. There are many variations of passages of Lorem Ipsum available, but the majority
                              have suffered alteration in some form, by injected humour, or randomised words which don't
                              look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
                              be sure there isn't anything embarrassing hidden in the middle of text.</p>
                           <p className="mb-30">We offer a wide range of services to our guests, including a restaurant, bar,
                              tennis court, swimming pool, beauty salon, and fitness center. We are improving the hotel
                              services for your guests by providing the facilities that make them feel like they're in
                              their own homes. In-house restaurants and bars that serve a variety of cuisine and
                              beverages. Room packages sometimes include meal discounts or access to special events, such
                              as wine tastings. There are many variations of passages of Lorem Ipsum available, but the
                              majority have suffered alteration in some form, by injected humour, or randomised words
                              which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                              you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>

                           <div className="space-extra2-top space-bottom">
                              <div className="row gy-4">
                                 <div className="col-md-6">
                                    <div className="service-gallery global-img">
                                       <img className="w-100" src={service1} alt="service" />
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="service-gallery global-img">
                                       <img className="w-100" src={service2} alt="service" />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <span className="sub-title2 style1">ALL FEATURES</span>
                           <h2>Service Overview</h2>
                           <div className="checklist list-four-column">
                              <ul>
                                 <li>New Recipe</li>
                                 <li>Free Wi-Fi</li>
                                 <li>Blackout Curtains</li>
                                 <li>Soundproofing</li>
                                 <li>Housekeeping</li>
                                 <li>In-Room Safe</li>
                                 <li>Telephone</li>
                                 <li>Bathrobes and Slippers</li>
                                 <li>Concierge Services</li>
                                 <li>Workspace</li>
                                 <li>En-Suite Bathroom</li>
                                 <li>USB Charging Ports</li>
                                 <li>Laundry & Dry Cleaning</li>
                                 <li>Closet and Hangers</li>
                                 <li>Free Breakfast</li>
                                 <li>Balcony or View Options</li>
                                 <li>Coffee and Tea Station</li>
                                 <li>Aircondition</li>
                                 <li>Restaurant Bar</li>
                                 <li>Swimming Pool</li>
                              </ul>
                           </div>

                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4">
                     <SidebarArea />
                  </div>
               </div>
            </div>

         </section>
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default EventDetailsPage
