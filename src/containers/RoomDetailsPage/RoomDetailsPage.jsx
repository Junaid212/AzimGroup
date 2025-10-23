import { Fragment, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RoomData from '../../api/room';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import RoomsAreaS7 from '../../components/RoomsAreaS7/RoomsAreaS7';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import widget_bg from '../../img/bg/widget_bg_1.jpg';
import gallery1 from '../../img/gallery/gallery_5_1.jpg';
import gallery2 from '../../img/gallery/gallery_5_2.jpg';
import gallery3 from '../../img/gallery/gallery_5_3.jpg';
import gallery4 from '../../img/gallery/gallery_5_4.jpg';
import gallery5 from '../../img/gallery/gallery_5_5.jpg';
import gallery6 from '../../img/gallery/gallery_5_6.jpg';
import gallery7 from '../../img/gallery/gallery_5_7.jpg';
import icon1 from '../../img/icon/hotel-icon1-1.svg';
import icon2 from '../../img/icon/hotel-icon1-2.svg';
import icon3 from '../../img/icon/hotel-icon1-3.svg';
import icon4 from '../../img/icon/hotel-icon1-4.svg';
import icon5 from '../../img/icon/hotel-icon1-5.svg';
import icon6 from '../../img/icon/hotel-icon1-6.svg';
import icon7 from '../../img/icon/hotel-icon1-7.svg';
import icon8 from '../../img/icon/hotel-icon1-8.svg';
import Logo from '../../img/logo.svg';
import RoomSlider from './RoomSlider';


const RoomDetailsPage = () => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }


   const { slug } = useParams()
   const RoomDetails = RoomData.find(item => item.slug === slug)


   const [checkIn, setCheckIn] = useState('2025-01-20');
   const [checkOut, setCheckOut] = useState('2025-01-26');


   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={RoomDetails.title} pagesub={'Room Details'} />

         <section className="room-area space-top space-extra-bottom overflow-hidden">
            <div className="container">
               <div className="row flex-row-reverse">
                  <div className="col-xl-9 col-lg-8">
                     <div className="room-page-single">
                        <RoomSlider />
                        <div className="page-content">
                           <h2 className="box-title mt-50">{RoomDetails.title}</h2>
                           <p className="box-text fs-18 mb-10">Soleat legimus albucius qualisque. Cibo aliquam eos ei, nonumy
                              singulis expetendis eu vel. At sit putent antiopam, cu erat tincidunt qui. Has agam veri no,
                              ex pericula molestiae eos. Mea autem iusto moderatius cu, est habeo fugit docendi ad, eum eu
                              utroque propriae pertinacia. Per feugiat appetere petentium et, id modus impedit eleifend
                              qui, agam albucius ut mei. Facilis menandri in vis, no his paulo simul fuisset, sed erant
                              iuvaret.</p>
                           <p className="box-text fs-18 mb-50">Facer impetus ea his. Pri ea consul dignissim scribentur. Id
                              pericula
                              molestiae interesset pro, quo maiorum repudiare ad. Te duo hinc ocurreret. Eos at interesset
                              voluptatibus, quando graeco putant id pri. No vim sale debet, vis at assum denique. Rebum
                              perfecto scripserit per in sed case efficiendi. Veri regione sea an. Eam utroque accusam
                              fierent in. Per placerat prodesset cu, pro id elitr nostrud.</p>

                           <h2 className="box-title mb-20">Room Features</h2>
                           <div className="room-checklist mb-60">
                              <div className="checklist style2 list-four-column">
                                 <ul>
                                    <li>Comfortable Bedding</li>
                                    <li>Room Service</li>
                                    <li>Blackout Curtains</li>
                                    <li>Soundproofing</li>
                                    <li>Air Conditioning and Heating</li>
                                    <li>In-Room Safe</li>
                                    <li>Telephone</li>
                                    <li>Bathrobes and Slippers</li>
                                    <li>Flat-Screen TV</li>
                                    <li>Workspace</li>
                                    <li>En-Suite Bathroom</li>
                                    <li>USB Charging Ports</li>
                                    <li>Mini Refrigerator</li>
                                    <li>Closet and Hangers</li>
                                    <li>Hair Dryer</li>
                                    <li>Balcony or View Options</li>
                                    <li>Coffee and Tea Station</li>
                                    <li>Iron and Ironing Board</li>
                                    <li>Alarm Clock</li>
                                    <li>Swimming Pool</li>
                                 </ul>
                              </div>
                           </div>
                           <h2 className="box-title mb-20">Hotel Amenities</h2>
                           <ul className="hotel-grid-list">
                              <li>
                                 <div className="hotel-grid-list-icon"><img src={icon1} alt="img" /></div>
                                 <div className="hotel-grid-list-details">
                                    <p className="box-text">Swimming Pool</p>
                                 </div>
                              </li>
                              <li>
                                 <div className="hotel-grid-list-icon"><img src={icon2} alt="img" /></div>
                                 <div className="hotel-grid-list-details">
                                    <p className="box-text">Free Breakfast</p>
                                 </div>
                              </li>
                              <li>
                                 <div className="hotel-grid-list-icon"><img src={icon3} alt="img" /></div>
                                 <div className="hotel-grid-list-details">
                                    <p className="box-text">Animals & Pets Care</p>
                                 </div>
                              </li>
                              <li>
                                 <div className="hotel-grid-list-icon"><img src={icon4} alt="img" /></div>
                                 <div className="hotel-grid-list-details">
                                    <p className="box-text">Toproof Bar</p>
                                 </div>
                              </li>
                              <li>
                                 <div className="hotel-grid-list-icon"><img src={icon5} alt="img" /></div>
                                 <div className="hotel-grid-list-details">
                                    <p className="box-text">Free High Speed WiFi</p>
                                 </div>
                              </li>
                              <li>
                                 <div className="hotel-grid-list-icon"><img src={icon6} alt="img" /></div>
                                 <div className="hotel-grid-list-details">
                                    <p className="box-text">Wellness & Spa</p>
                                 </div>
                              </li>
                              <li>
                                 <div className="hotel-grid-list-icon"><img src={icon7} alt="img" /></div>
                                 <div className="hotel-grid-list-details">
                                    <p className="box-text">Well Furnished Rooms</p>
                                 </div>
                              </li>
                              <li>
                                 <div className="hotel-grid-list-icon"><img src={icon8} alt="img" /></div>
                                 <div className="hotel-grid-list-details">
                                    <p className="box-text">Car Parking</p>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        <div className="location-map">
                           <h3 className="page-title fs-28 mt-45 mb-30">Hotel Lacation</h3>
                           <div className="contact-map">
                              <iframe
                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"

                              ></iframe>
                              <div className="contact-icon">
                                 <i className="fas fa-location-dot"></i>
                              </div>
                           </div>
                        </div>
                        <div className="room-gallery-wrapper">
                           <h3 className="page-title fs-28 mt-60 mb-30">Awesome Gallery</h3>
                           <div className="row gy-4 filter-active">
                              <div className="col-xxl-auto filter-item">
                                 <div className="gallery-box">
                                    <div className="gallery-img global-img">
                                       <img src={gallery1} alt="gallery image" />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xxl-auto filter-item">
                                 <div className="gallery-box">
                                    <div className="gallery-img global-img">
                                       <img src={gallery2} alt="gallery image" />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xxl-auto filter-item">
                                 <div className="gallery-box">
                                    <div className="gallery-img global-img">
                                       <img src={gallery3} alt="gallery image" />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xxl-auto filter-item">
                                 <div className="gallery-box">
                                    <div className="gallery-img global-img">
                                       <img src={gallery4} alt="gallery image" />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xxl-auto filter-item">
                                 <div className="gallery-box">
                                    <div className="gallery-img global-img">
                                       <img src={gallery5} alt="gallery image" />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xxl-auto filter-item">
                                 <div className="gallery-box">
                                    <div className="gallery-img global-img">
                                       <img src={gallery6} alt="gallery image" />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xxl-auto filter-item">
                                 <div className="gallery-box">
                                    <div className="gallery-img global-img">
                                       <img src={gallery7} alt="gallery image" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4">
                     <aside className="sidebar-area">
                        <div className="widget widget_quote  ">
                           <form className="booking-form2 style4 ajax-contact">
                              <div className="input-wrap">
                                 <div className="title-area mb-40">
                                    <span className="sub-title2 style1 mb-15">RESERVATION</span>
                                    <h2 className="box-title text-white">Check availablility</h2>
                                 </div>
                                 <div className="row gx-24 align-items-center justify-content-between">
                                    <div className="form-group col-12">
                                       <div className="form-item">
                                          <label>Check In</label>
                                          <input
                                             type="date"
                                             className="form-control"
                                             name="date"
                                             id="date"
                                             value={checkIn}
                                             onChange={(e) => setCheckIn(e.target.value)}
                                          />
                                          <i className="fa-solid fa-calendar-days"></i>
                                       </div>
                                    </div>

                                    <div className="form-group col-12">
                                       <div className="form-item">
                                          <label>CHECK - OUT</label>
                                          <input
                                             type="date"
                                             className="form-control"
                                             name="date"
                                             id="date2"
                                             value={checkOut}
                                             onChange={(e) => setCheckOut(e.target.value)}
                                          />
                                          <i className="fa-solid fa-calendar-days"></i>
                                       </div>
                                    </div>
                                    <div className="col-12 form-group">
                                       <div className="form-item">
                                          <label>ADULT</label>
                                          <select name="subject" id="subject" className="form-select nice-select">
                                             <option value="Adults">Adult 01</option>
                                             <option value="2 Room">Adult 02</option>
                                             <option value="3 Room">Adult 03</option>
                                          </select>
                                          <i className="fa-solid fa-caret-down"></i>
                                       </div>
                                    </div>
                                    <div className="col-12 form-group">
                                       <div className="form-item">
                                          <label>Children</label>
                                          <select name="subject" id="subject2" className="form-select nice-select">
                                             <option value="0" >Children 0</option>
                                             <option value="1">Children 1</option>
                                             <option value="2">Children 2</option>
                                          </select>
                                          <i className="fa-solid fa-caret-down"></i>
                                       </div>
                                    </div>
                                 </div>
                                 <p className="form-messages mb-0 mt-3"></p>
                              </div>
                           </form>
                           <div className="widget-service-list">
                              <h3 className="box-title mb-25">Extra Services</h3>
                              <div className="service-list">
                                 <div className="list">
                                    <input type="checkbox" id="one" />
                                    <label htmlFor="one">High Speed WiFi</label>
                                 </div>
                                 <span className="text">free</span>
                              </div>
                              <div className="service-list">
                                 <div className="list">
                                    <input type="checkbox" id="two" />
                                    <label htmlFor="two">Wellness & Spa</label>
                                 </div>
                                 <span className="text">$85</span>
                              </div>
                              <div className="service-list">
                                 <div className="list">
                                    <input type="checkbox" id="three" />
                                    <label htmlFor="three">Airport Transport</label>
                                 </div>
                                 <span className="text"></span>
                              </div>
                              <div className="service-list">
                                 <div className="list">
                                    <input type="checkbox" id="four" />
                                    <label htmlFor="four">Car Parking</label>
                                 </div>
                                 <span className="text">$18</span>
                              </div>
                              <div className="service-list">
                                 <div className="list">
                                    <input type="checkbox" id="five" />
                                    <label htmlFor="five">Swimming Pool</label>
                                 </div>
                                 <span className="text">free</span>
                              </div>
                              <div className="service-list">
                                 <div className="list">
                                    <input type="checkbox" id="six" />
                                    <label htmlFor="six">Breakfast</label>
                                 </div>
                                 <span className="text">free</span>
                              </div>
                              <div className="service-list style2">
                                 <h3 className="box-title">Total Price</h3>
                                 <span className="text">$790</span>
                              </div>

                              <div className="btn-form">
                                 <button type="submit" className="th-btn style1">BOOK NOW</button>
                              </div>
                           </div>
                        </div>
                        <div className="widget widget_offer  background-image" style={{ backgroundImage: `url(${widget_bg})` }}>
                           <div className="offer-banner">
                              <h5 className="banner-title">Need Help? We Are Here To Help You</h5>
                              <div className="banner-logo">
                                 <img src={Logo} alt="Rotal" />
                              </div>
                              <div className="offer">
                                 <h6 className="offer-title">You Get Online support</h6>
                                 <p className="offer-text"><a href="tel:+256214203215">+256 214 203 215</a></p>
                              </div>
                              <Link onClick={ClickHandler} to="/contact" className="th-btn">EXPLORE MORE</Link>
                           </div>
                        </div>
                     </aside>
                  </div>
               </div>
            </div>
         </section>

         <RoomsAreaS7 />
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default RoomDetailsPage
