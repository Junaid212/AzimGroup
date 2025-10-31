import React from 'react';
import ServiceData from '../../api/service';
import { Link } from 'react-router-dom';
import CtaArea from '../CtaArea/CtaArea';
import titleimg from '../../img/theme-img/title_icon.svg';


const ServiceAreaS5 = () => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }

   // Array of background colors for each card
   const cardColors = [
      'linear-gradient(90deg,rgba(248, 151, 51, 1) 53%, rgba(255, 195, 0, 1) 100%)',
      'linear-gradient(90deg,rgba(0, 183, 190, 1) 0%, rgba(0, 120, 106, 1) 96%)',
      'linear-gradient(90deg,rgba(0, 183, 190, 1) 0%, rgba(0, 120, 106, 1) 96%)',
      'linear-gradient(90deg,rgba(248, 151, 51, 1) 53%, rgba(255, 195, 0, 1) 100%)',
      'linear-gradient(90deg,rgba(248, 151, 51, 1) 53%, rgba(255, 195, 0, 1) 100%)',
      'linear-gradient(90deg,rgba(0, 183, 190, 1) 0%, rgba(0, 120, 106, 1) 96%)',
      'linear-gradient(90deg,rgba(0, 183, 190, 1) 0%, rgba(0, 120, 106, 1) 96%)'
   ];

   return (
      <section className="overflow-hidden space" id="service-sec" >
         <div className="container">
            <div className="row justify-content-center">
                           <div className="col-lg-10">
                              <div className="title-area text-center">
                                 
                                 <h2 className="sec-title ">We are a Group of companies</h2>
                                 <span className="title-img"><img src={titleimg} alt="shape" /></span>
                                 <h6 style={{color:'#F89532'}}>
Empowering Growth, Uniting Excellence to Shape Tomorrow's Success
AZIM Group is a constellation of enterprises at the heart of Qatar's dynamic business landscape. With seven unique companies under our banner, we orchestrate services to deliver unmatched value across diverse industries
</h6>
                              </div>
                           </div>
                        </div>
            <div className="row gy-4">
               {ServiceData.slice(0, 6).map((item, Skye) => (
                  <div 
                     className={`col-xxl-6 ${Skye === 6 ? 'offset-xxl-3' : ''}`} 
                     key={Skye}
                  >
                     <div 
                        className="service-grid style-flex" 
                        style={{ 
                           background: cardColors[Skye],
                           borderRadius: '15px',
                           overflow: 'hidden'
                        }}
                     >
                        <div className="box-img global-img">
                           <img src={item.grid} alt="img" />
                        </div>
                        <div className="box-content" style={{ padding: '30px' }}>
                           <span className="sub-title2 style1" style={{ color: '#fff' }}>{item.num}</span>
                           <h3 className="box-title">
                              <Link 
                                 onClick={ClickHandler} 
                                 to={`/service-details/${item.slug}`}
                                 style={{ color: '#fff' }}
                              >
                                 {item.title}
                              </Link>
                           </h3>
                           <p className="box-text" style={{ color: '#fff' }}>{item.subtitle}</p>
                           <div className="">
                              <Link 
                                 onClick={ClickHandler} 
                                 to={item.link} 
                                 className="th-btn2 style2"
                                 style={{ 
                                    background: cardColors[Skye],
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                                 }}
                              >
                                 VIEW DETAILS
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ServiceAreaS5;