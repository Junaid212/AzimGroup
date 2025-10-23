import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

// images

import aboutimg1 from '../../images/about/ab1.jpg';
import aboutimg2 from '../../images/about/ab2.jpg';
import mark from '../../images/about/mark.svg';
import aboutimg3 from '../../images/about/shape.png';
import aboutimg4 from '../../images/about/shape2.png';



const AboutSection = () => {

   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className="about_section section_space">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6 col-12">
                  <div className="image">
                     <div className="about_img-1">
                        <img src={aboutimg1} alt="" />
                     </div>
                     <div className="about_img-2">
                        <img src={aboutimg2} alt="" />
                     </div>
                     <div className="shape float-bob-x">
                        <img src={aboutimg3} alt="" />
                     </div>
                     <div className="shape2 float-bob-y">
                        <img src={aboutimg4} alt="" />
                     </div>
                     <div className="content">
                        <h2><CountUp end={280}></CountUp>k+</h2>
                        <p>World-wide Happy Students</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-12">
                  <div className="about-content">
                     <div className="top_title">
                        <span>ABOUT US</span>
                        <h2>delivering top <strong>motivational</strong> courses to you</h2>
                        <p>At Stadum, you’ll be welcomed into a diverse community of learners of different races, genders, ages and ethnicities. With online and on-campus learning available, our students are scattered around the country and the world</p>
                     </div>
                     <p>We want each student to feel included, supported and recognized as they earn their degree. No matter where you come from, earning a degree is a challenging but rewarding.</p>

                     <ul>
                        <li>
                           <img src={mark} alt="" />
                           <span>Highly Professinal Staff</span>
                        </li>
                        <li>
                           <img src={mark} alt="" />
                           <span>Engaging adn dynamic presention</span>
                        </li>
                        <li>
                           <img src={mark} alt="" />
                           <span>100% satisfaction guarantee</span>
                        </li>
                        <li>
                           <img src={mark} alt="" />
                           <span>Proven track record of success</span>
                        </li>
                        <li>
                           <img src={mark} alt="" />
                           <span>Quality control system</span>
                        </li>
                        <li>
                           <img src={mark} alt="" />
                           <span>24/7 Enhance customer care</span>
                        </li>
                     </ul>
                     <div className="about_btn">
                        <Link to='/' onClick={ClickHandler} className="btn_primary">
                           <span>Apply To Stadum</span>
                           <div className="arrow">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <path d="M12 2.1216C12 3.1659 13.035 4.7286 14.0812 6.041C15.4284 7.7307 17.0362 9.2068 18.8811 10.3338C20.2632 11.1777 21.9414 11.9878 23.2896 11.9878M12 21.8784C12 20.8341 13.035 19.2714 14.0812 17.959C15.4284 16.2694 17.0362 14.7932 18.8811 13.6662C20.2632 12.8223 21.9414 12.0122 23.2896 12.0122M23.2896 12H0.710449" />
                              </svg>
                           </div>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <div className="shape">
                <img src={shape} alt="" />
            </div> */}
      </section>
   )

}

export default AboutSection