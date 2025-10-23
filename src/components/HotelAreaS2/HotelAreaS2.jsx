// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ImageShape from '../../img/shape/circle-line.png';

// import icon1 from '../../img/icon/hotel_1_1.svg';
// import icon2 from '../../img/icon/hotel_1_2.svg';
// import icon3 from '../../img/icon/hotel_1_3.svg';
// import icon4 from '../../img/icon/hotel_1_4.svg';
// import icon5 from '../../img/icon/hotel_1_5.svg';
// import icon6 from '../../img/icon/hotel_1_6.svg';
// import icon7 from '../../img/icon/hotel_1_7.svg';

// import image1 from '../../img/hotel/hotel_2_1.jpg';
// import image2 from '../../img/hotel/hotel_2_2.jpg';
// import image3 from '../../img/hotel/hotel_2_3.jpg';
// import image4 from '../../img/hotel/hotel_2_4.jpg';
// import image5 from '../../img/hotel/hotel_2_5.jpg';
// import image6 from '../../img/hotel/hotel_2_6.jpg';
// import image7 from '../../img/hotel/hotel_2_7.jpg';



// const amenities = [
//    {
//       title: 'Free Parking',
//       icon: icon1,
//       image: image1,
//    },
//    {
//       title: 'Free Wifi Internet',
//       icon: icon2,
//       image: image2,
//    },
//    {
//       title: 'Fitness & Wellbeing',
//       icon: icon3,
//       image: image3,
//    },
//    {
//       title: 'Room Services',
//       icon: icon4,
//       image: image4,
//    },
//    {
//       title: 'SPA & WELLNESS',
//       icon: icon5,
//       image: image5,
//    },
//    {
//       title: 'Rooftop Bar',
//       icon: icon6,
//       image: image6,
//    },
//    {
//       title: 'Swimming Pool',
//       icon: icon7,
//       image: image7,
//    },
// ];

// const ClickHandler = () => {
//    window.scrollTo(10, 0);
// }

// const HotelAreaS2 = (props) => {
//    const [activeIndex, setActiveIndex] = useState(0);
//    const backgroundImage = amenities[activeIndex].image;
//    return (
//       <div
//          className={"" + props.hclass}
//          style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//          <div className="container">
//             <div className="row justify-content-center">
//                <div className="col-lg-5">
//                   <div className="title-area text-center space">
//                      <span className="sub-title2">HOTEL AMENITIES</span>
//                      <h2 className="sec-title">All Facilities at Rotal</h2>
//                      <p className="fs-18 mt-30">
//                         A lavish hotel is insufficient for us, we provide our clients
//                         with several first-rate services to ensure the ideal vacation.
//                         Soleat eirmod civibus vix te.
//                      </p>
//                   </div>
//                </div>
//             </div>

//             <div className="row">
//                <div className="col-xl-12 hotel-card2_wrapp">
//                   {amenities.map((item, index) => (
//                      <div
//                         key={index}
//                         className={`hotel-card2 hover-item ${index === activeIndex ? 'item-active' : ''
//                            }`}
//                         onMouseEnter={() => setActiveIndex(index)}
//                      >
//                         <div className="box-icon">
//                            <img src={item.icon} alt="Icon" />
//                         </div>
//                         <div className="box-content">
//                            <div className="box-img">
//                               <img src={item.image} alt="" />
//                            </div>
//                            <h3 className="box-title">{item.title}</h3>
//                            <div>
//                               <Link onClick={ClickHandler} to="/room" className="th-btn style2">
//                                  View Details
//                               </Link>
//                            </div>
//                         </div>
//                      </div>
//                   ))}
//                </div>
//             </div>
//          </div>
//          <div className="circle-line">
//             <img src={ImageShape} alt="" />
//          </div>
//       </div>
//    );
// };

// export default HotelAreaS2;


