import React from 'react';
import { Link } from 'react-router-dom';
import RoomData from '../../api/room';
import titleimg from '../../img/theme-img/title_icon.svg';


const RoomsArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className={"" + props.hclass}>
         <div className="container">
            <div className="row gx-0 justify-content-center">
               <div className="col-xxl-6 align-self-center">
                  <div className="title-area pe-xl-5 me-xl-5">
                     <h2 className="sec-title">Trusted By Clients</h2>
                     <img src={titleimg} alt="Icon" />
                     <span className="sub-title">At Azim Group, trust is at the heart of everything we do. 
                        For years, we've been dedicated to exceeding our clients' expectations, building
                         lasting relationships based on reliability, integrity, and unparalleled service.</span>
                     
                  </div>
               </div>
               {RoomData.slice(0,4).map((room, index) => (
                  <div className="col-xxl-6 room-card_wrapp" key={index}>
                     <div className="room-card style-flex">
                        <div className="box-content">
                           <div className="box-number">{room.number}</div>
                           <h3 className="box-title">{room.title}</h3>
                           <div className="box-review">
                              {[...Array(5)].map((_, i) => (
                                 <i key={i} className="fa-sharp fa-solid fa-star"></i>
                              ))}
                           </div>
                           <p className="box-text">{room.subtitle}</p>
                           {/* <div className="room-card-meta">
                              <span><img src={room.cat} alt="icon" />{room.bed}</span>
                              <span><img src={room.cat2} alt="icon" />{room.sqft} sqft/Room</span>
                           </div> */}
                           {/* <div><Link onClick={ClickHandler} to={`/room-details/${room.slug}`} className="th-btn2 style2">VIEW DETAILS</Link></div> */}
                        </div>
                        <div className="box-img global-img">
                           <img src={room.imgRoom2} alt="" />
                           {/* <span className="discount">{room.discount} / NIGHT</span> */}
                        </div>

                     </div>
                  </div>
               ))}

               <div className="col-xxl-6 align-self-center">
                  <div className="room-btn text-center">
                     <Link to="/service" onClick={ClickHandler} className="th-btn2 style3 th-icon">EXPLORE
                        ALL
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

   );
};

export default RoomsArea;