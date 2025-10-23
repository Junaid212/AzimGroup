import { Link } from 'react-router-dom';
import Bg from '../../img/bg/faq-shape-1.png';
import widget_bg from '../../img/bg/widget_bg_1.jpg';
import cat from '../../img/icon/cat_1.svg';
import Logo from '../../img/logo.svg';

const FaqAreaS2 = () => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className="space bg-top-center background-image" style={{ backgroundImage: `url(${Bg})` }}>
         <div className="container">
            <div className="row gy-4 justify-content-center flex-row-reverse">
               <div className="col-xl-9">
                  <div className="faq-accordion">
                     <div className="title-area text-center text-xl-start mb-30">
                        <span className="sub-title2 style1">FAQ</span>
                        <h2 className="sec-title">Main Questions</h2>
                     </div>
                     <div className="accordion" id="faqAccordion">


                        <div className="accordion-card">
                           <div className="accordion-header" id="collapse-item-1">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">01. What amenities are available in the rooms?</button>
                           </div>
                           <div id="collapse-1" className="accordion-collapse collapse " aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                              <div className="accordion-body">
                                 <p className="faq-text">At rotal booking in hotel, we provide amenities through a dynamic fusion of innovation, expertise, and strategic vision. Our dedicated team is committed to delivering tailored solutions that transcend traditional consulting boundaries.</p>
                              </div>
                           </div>
                        </div>


                        <div className="accordion-card">
                           <div className="accordion-header" id="collapse-item-2">
                              <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">02. How should I book a hotel consultant?</button>
                           </div>
                           <div id="collapse-2" className="accordion-collapse collapse show" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                              <div className="accordion-body">
                                 <p className="faq-text">At rotal booking in hotel, we provide amenities through a dynamic fusion of innovation, expertise, and strategic vision. Our dedicated team is committed to delivering tailored solutions that transcend traditional consulting boundaries.</p>
                              </div>
                           </div>
                        </div>


                        <div className="accordion-card">
                           <div className="accordion-header" id="collapse-item-3">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">03. What services does rotal offer?</button>
                           </div>
                           <div id="collapse-3" className="accordion-collapse collapse " aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                              <div className="accordion-body">
                                 <p className="faq-text">At rotal booking in hotel, we provide amenities through a dynamic fusion of innovation, expertise, and strategic vision. Our dedicated team is committed to delivering tailored solutions that transcend traditional consulting boundaries.</p>
                              </div>
                           </div>
                        </div>


                        <div className="accordion-card">
                           <div className="accordion-header" id="collapse-item-4">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">04. What amenities are available in the rooms?</button>
                           </div>
                           <div id="collapse-4" className="accordion-collapse collapse " aria-labelledby="collapse-item-4" data-bs-parent="#faqAccordion">
                              <div className="accordion-body">
                                 <p className="faq-text">At rotal booking in hotel, we provide amenities through a dynamic fusion of innovation, expertise, and strategic vision. Our dedicated team is committed to delivering tailored solutions that transcend traditional consulting boundaries.</p>
                              </div>
                           </div>
                        </div>


                        <div className="accordion-card">
                           <div className="accordion-header" id="collapse-item-5">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">05. Are there accessible rooms for guests with disabilities?</button>
                           </div>
                           <div id="collapse-5" className="accordion-collapse collapse " aria-labelledby="collapse-item-5" data-bs-parent="#faqAccordion">
                              <div className="accordion-body">
                                 <p className="faq-text">At rotal booking in hotel, we provide amenities through a dynamic fusion of innovation, expertise, and strategic vision. Our dedicated team is committed to delivering tailored solutions that transcend traditional consulting boundaries.</p>
                              </div>
                           </div>
                        </div>


                        <div className="accordion-card">
                           <div className="accordion-header" id="collapse-item-6">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">06. What are your fees and payment terms?</button>
                           </div>
                           <div id="collapse-6" className="accordion-collapse collapse " aria-labelledby="collapse-item-6" data-bs-parent="#faqAccordion">
                              <div className="accordion-body">
                                 <p className="faq-text">At rotal booking in hotel, we provide amenities through a dynamic fusion of innovation, expertise, and strategic vision. Our dedicated team is committed to delivering tailored solutions that transcend traditional consulting boundaries.</p>
                              </div>
                           </div>
                        </div>


                        <div className="accordion-card">
                           <div className="accordion-header" id="collapse-item-7">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">07. Are there any nearby attractive places tor visit?</button>
                           </div>
                           <div id="collapse-7" className="accordion-collapse collapse " aria-labelledby="collapse-item-7" data-bs-parent="#faqAccordion">
                              <div className="accordion-body">
                                 <p className="faq-text">At rotal booking in hotel, we provide amenities through a dynamic fusion of innovation, expertise, and strategic vision. Our dedicated team is committed to delivering tailored solutions that transcend traditional consulting boundaries.</p>
                              </div>
                           </div>
                        </div>


                        <div className="accordion-card">
                           <div className="accordion-header" id="collapse-item-8">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="false" aria-controls="collapse-8">08. Are there accessible rooms for guests with disabilities?</button>
                           </div>
                           <div id="collapse-8" className="accordion-collapse collapse " aria-labelledby="collapse-item-8" data-bs-parent="#faqAccordion">
                              <div className="accordion-body">
                                 <p className="faq-text">At rotal booking in hotel, we provide amenities through a dynamic fusion of innovation, expertise, and strategic vision. Our dedicated team is committed to delivering tailored solutions that transcend traditional consulting boundaries.</p>
                              </div>
                           </div>
                        </div>


                        <div className="accordion-card">
                           <div className="accordion-header" id="collapse-item-9">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-9" aria-expanded="false" aria-controls="collapse-9">09. What services does Rotal offer?</button>
                           </div>
                           <div id="collapse-9" className="accordion-collapse collapse " aria-labelledby="collapse-item-9" data-bs-parent="#faqAccordion">
                              <div className="accordion-body">
                                 <p className="faq-text">At rotal booking in hotel, we provide amenities through a dynamic fusion of innovation, expertise, and strategic vision. Our dedicated team is committed to delivering tailored solutions that transcend traditional consulting boundaries.</p>
                              </div>
                           </div>
                        </div>


                        <div className="accordion-card">
                           <div className="accordion-header" id="collapse-item-10">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-10" aria-expanded="false" aria-controls="collapse-10">10. Does the hotel offer airport shuttle service?</button>
                           </div>
                           <div id="collapse-10" className="accordion-collapse collapse " aria-labelledby="collapse-item-10" data-bs-parent="#faqAccordion">
                              <div className="accordion-body">
                                 <p className="faq-text">At rotal booking in hotel, we provide amenities through a dynamic fusion of innovation, expertise, and strategic vision. Our dedicated team is committed to delivering tailored solutions that transcend traditional consulting boundaries.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 mb-35 mb-xl-0">
                  <aside className="sidebar-area">
                     <div className="widget widget_categories  ">
                        <h3 className="widget_title">Categories</h3>
                        <ul>
                           <li>
                              <Link onClick={ClickHandler} to="/blog"><img src={cat} alt="icon" /> Hotel Equipment</Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to="/blog"><img src={cat} alt="icon" />Events</Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to="/blog"><img src={cat} alt="icon" />Facilities</Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to="/blog"><img src={cat} alt="icon" />Rooms & Suits</Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to="/blog"><img src={cat} alt="icon" /> Management</Link>
                           </li>
                           <li>
                              <Link onClick={ClickHandler} to="/blog"><img src={cat} alt="icon" />King Bed Room</Link>
                           </li>
                        </ul>
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
      </div>
   );
};

export default FaqAreaS2;