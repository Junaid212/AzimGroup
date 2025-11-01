import React from 'react';
import { Link } from 'react-router-dom';
import avater2 from '../../img/normal/about_avater2.png';
import signature2 from '../../img/normal/signature2.svg';
import offer_1 from '../../img/offer/offer_6_1.jpg';
import tag from '../../img/shape/tag.png';
import offer_2 from '../../img/offer/offer_6_2.jpg';
import offer_3 from '../../img/offer/offer_6_3.jpg';
import offer_4 from '../../img/offer/offer_6_4.jpg';
import offer_5 from '../../img/offer/offer_6_5.jpg';
import img2 from '../../img/new/40.png'
import testimonialData from '../../api/testimonial';
import img3 from '../../img/new/41.png'
import img4 from '../../img/new/116.png'
import img5 from '../../img/new/42.png'
import img6 from '../../img/new/43.png'

const OfferAreaS5 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
    <section >
        <div className="container" style={{backgroundColor:'#000000', marginTop:'80px'}}>
            <div className="row gy-60 gx-60 align-items-center">
                <div className="col-xxl-4">
                    <div className="title-area">
                        <span className="sub-title2 style1">ABOUT</span>
                        <h2 className="sec-title text-white">Introducing One Way Limousine</h2>
                        <p className="sec-text mt-35">At One Way Limousine WLL, We Epitomize sophistication and convenience in 
                            the realm of transportation. As a premier provider of chauffeured services, we offer an expansive 
                            fleet that caters to diverse preferences, ranging from budget- friendly vehicles to the heights of
                             luxury. With a commitment to excellence, safety, and punctuality, we redefine the concept of travel,
                              ensuring that every journey with us is nothing short of exceptional.</p>
                    </div>
                    {/* <div className="about-author-wrap style2">
                        <div className="thumb">
                            <img src={avater2} alt="img" />
                        </div>
                        <div className="box-content">
                            <h4 className="about-author-title">Andrew Karlex</h4>
                            <span className="about-author-desig">Manager</span>
                        </div>
                        <div className="author-sign">
                            <img src={signature2} alt="img" />
                        </div>
                    </div> */}
                </div>
                <div className="col-xxl-8">
                    <div className="offer-wrap6">
                        <div className="offer-tag-thumb global-img">
                            <div className="thumb">
                                <img className="w-100" src={img4} alt="img" />
                            </div>
                            {/* <span className="tag"><img src={tag} alt="img" /></span> */}
                        </div>
                        <div className="offer-list-wrap">
                            <div className="offer-list">
                                <div className="box-img global-img">
                                    <img src={img2} alt="img" />
                                </div>
                                {/* <div className="box-content">
                                    <h4 className="box-title"><Link onClick={ClickHandler} to="/room">Family Suite</Link></h4>
                                    <p className="box-text">One Week</p>
                                    <span className="box-price">$99</span>
                                </div> */}
                            </div>
                            <div className="offer-list">
                                <div className="box-img global-img">
                                    <img src={img3} alt="img" />
                                </div>
                                {/* <div className="box-content">
                                    <h4 className="box-title"><Link onClick={ClickHandler} to="/room">Premium Room</Link></h4>
                                    <p className="box-text">One month</p>
                                    <span className="box-price">$89</span>
                                </div> */}
                            </div>
                            <div className="offer-list">
                                <div className="box-img global-img">
                                    <img src={img5} alt="img" />
                                </div>
                                {/* <div className="box-content">
                                    <h4 className="box-title"><Link onClick={ClickHandler} to="/room">Apartment</Link></h4>
                                    <p className="box-text">One Week</p>
                                    <span className="box-price">$79</span>
                                </div> */}
                            </div>
                            <div className="offer-list">
                                <div className="box-img global-img">
                                    <img src={img6} alt="img" />
                                </div>
                                {/* <div className="box-content">
                                    <h4 className="box-title"><Link onClick={ClickHandler} to="/room">Small Room</Link></h4>
                                    <p className="box-text">One month</p>
                                    <span className="box-price">$69</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   );
};

export default OfferAreaS5;