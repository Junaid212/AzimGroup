import React from 'react';
import { Link } from 'react-router-dom';
import RoomData from '../../api/room';
import Group from '../../img/normal/group-img1.png';

const RoomsAreaS2 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className={"" + props.hclass}>
         <div className="container">
            <div className="title-area text-center">
               <span className="sub-title2 style1">Golden Vision Cleaning and Hospitality Services</span>
               <h2 className="sec-title text-white">We Are Specialized In</h2>
            </div>
            <div className="row">
               {RoomData.slice(4, 7).map((room, index) => (
                  <div className="room-card style3 style-flex" key={index}>
                     <div className="box-img global-img">
                        <img src={room.img} alt="" />
                        {/* <span className="tag"><img src={room.cat2} alt="" /></span> */}
                     </div>
                     <div className="box-content">
                        <h3 className="box-title">
                           <Link onClick={ClickHandler} to="/room">{room.title}</Link></h3>
                        <div className="box-review">
                           {[...Array(5)].map((_, i) => (
                              <i key={i} className="fa-sharp fa-solid fa-star"></i>
                           ))}
                        </div>
                        <p className="box-text">{room.subtitle}</p>
                        <div className="box-price">
                           {/* <h4 className="price">{room.discount}</h4>Expiry: 21 Feb */}
                        </div>
                        {/* <div> <Link onClick={ClickHandler} to={`/room-details/${room.slug}`} className="th-btn style2">VIEW DETAILS</Link></div> */}
                     </div>
                     {/* <div className="client-box2 mb-sm-0 mb-3">
                        <div className="client-thumb-group ">
                           <img src={Group} alt="img" />
                        </div>
                        <div className="client-wrapp">
                           <div className="client-review">
                              {[...Array(5)].map((_, i) => (
                                 <i key={i} className="fa-sharp fa-solid fa-star"></i>
                              ))}
                           </div>
                           <span className="rating">128k+ Reviews</span>
                        </div>
                     </div> */}
                  </div>
               ))}


            </div>
         </div>
      </section>
   );
};

export default RoomsAreaS2;