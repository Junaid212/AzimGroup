import React from 'react';
import { Link } from 'react-router-dom';
import HoteleOfferData from '../../api/hotelOffers.jsx';
import shapeImg from '../../img/shape/room-shape.png';
import himg from '../../img/new/127.png'
const HotelOffersAreaS2 = (props) => {
   

   return (
      <section >
         <div className="container">
            <div className="row gy-4">
               {HoteleOfferData.slice(0, 1).map((hotel, index) => (
                  <div className="12" key={index}>
                     <div className="room-card style2 style-flex" >
                        <div className="box-img global-img">
                           <img src={himg} alt="" />
                           {/* <span className="discount">{hotel.discount}</span> */}
                        </div>
                        <div className="box-content">
                           {/* <div className="box-number">{hotel.num}</div> */}
                           <h3 className="box-title">
                              Residential Sector
                           </h3>
                           <div className="box-wrapp">
                              <div className="box-review">
                                 {/* <i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i> */}
                              </div>
                              {/* <span className="title">4.9 Reviews</span> */}
                           </div>
                           <p className="sub-title">Azim FMS delivers specialized Facility Management solutions for Residential Communities, ensuring smooth operations, enhanced living experiences, and well-maintained environments that foster vibrant, connected lifestyles.</p>
                           <div className="box-price">
                              {/* <h4 className="price">${hotel.price}</h4>Expiry: {hotel.date} */}
                           </div>
                           {/* <Link onClick={ClickHandler} to="/pricing" className="th-btn2 style2">VIEW OFFER</Link> */}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
             {/* <div className="d-flex justify-content-center mt-60 text-center">
               <Link onClick={ClickHandler} to="/room" className="th-btn">Explore More</Link></div> */}
         </div>
      </section>
   );
};

export default HotelOffersAreaS2;