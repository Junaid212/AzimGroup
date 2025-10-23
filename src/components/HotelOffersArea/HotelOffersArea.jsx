import React from 'react';
import { Link } from 'react-router-dom';
import HoteleOfferData from '../../api/HotelOffers';
import shapeImg from '../../img/shape/room-shape.png';
import titleimg from '../../img/theme-img/title_icon.svg';

const HotelOffersArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }

   return (
      <section className={"" + props.hclass}>
         <div className="container">
            <div className="title-area text-center">
               <span className="sub-title">STAY MEMORABLES</span>
               <h2 className="sec-title">Best Offers At Our hotels</h2>
               <div className="title-img"><img src={titleimg} alt="Icon" /></div>
            </div>
            <div className="row gy-4">
               {HoteleOfferData.slice(0, 3).map((hotel, index) => (
                  <div className="12" key={index}>
                     <div className="room-card style2 style-flex" style={{ backgroundImage: `url(${shapeImg})` }}>
                        <div className="box-img global-img">
                           <img src={hotel.himg} alt="" />
                           <span className="discount">{hotel.discount}</span>
                        </div>
                        <div className="box-content">
                           <div className="box-number">{hotel.num}</div>
                           <h3 className="box-title">
                              <Link onClick={ClickHandler} to="/pricing">{hotel.title}</Link>
                           </h3>
                           <div className="box-wrapp">
                              <div className="box-review">
                                 <i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i>
                              </div>
                              <span className="title">4.9 Reviews</span>
                           </div>
                           <p className="box-text">{hotel.subtitle}</p>
                           <div className="box-price">
                              <h4 className="price">${hotel.price}</h4>Expiry: {hotel.date}
                           </div>
                           <Link onClick={ClickHandler} to="/pricing" className="th-btn2 style2">VIEW OFFER</Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="d-flex justify-content-center mt-60 text-center"><Link onClick={ClickHandler} to="/package" className="th-btn2 ser-btn">Explore More</Link></div>
         </div>
      </section>
   );
};

export default HotelOffersArea;