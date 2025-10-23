import React from 'react';
import { Link } from 'react-router-dom';
import Bg from '../../img/bg/faq-shape-1.png'

const FaqArea = (props) => {
    const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
    <div className={"" +props.hclass} style={{backgroundImage:`url(${Bg})`}}>
        <div className="container">
            <div className="title-area text-center">
                <span className="sub-title2 style1">FAQ</span>
                <h2 className="sec-title">Frequently Ask Questions</h2>
            </div>
            <div className="row gy-4 justify-content-center">
                <div className="col-xl-9">
                    <div className="faq-accordion">
                        <div className="accordion" id="faqAccordion">


                            <div className="accordion-card">
                                <div className="accordion-header" id="collapse-item-1">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">01. What amenities are available in the rooms?</button>
                                </div>
                                <div id="collapse-1" className="accordion-collapse collapse " aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">At rotal booking in hotel, we provide amenities through a
                                            dynamic fusion of innovation, expertise, and strategic vision. Our dedicated
                                            team is committed to delivering tailored solutions that transcend traditional
                                            consulting boundaries.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-card">
                                <div className="accordion-header" id="collapse-item-2">
                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">02. How should I book a hotel consultant?</button>
                                </div>
                                <div id="collapse-2" className="accordion-collapse collapse show" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">At rotal booking in hotel, we provide amenities through a
                                            dynamic fusion of innovation, expertise, and strategic vision. Our dedicated
                                            team is committed to delivering tailored solutions that transcend traditional
                                            consulting boundaries.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-card">
                                <div className="accordion-header" id="collapse-item-3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">03. What services does rotal offer?</button>
                                </div>
                                <div id="collapse-3" className="accordion-collapse collapse " aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">At rotal booking in hotel, we provide amenities through a
                                            dynamic fusion of innovation, expertise, and strategic vision. Our dedicated
                                            team is committed to delivering tailored solutions that transcend traditional
                                            consulting boundaries.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-card">
                                <div className="accordion-header" id="collapse-item-4">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">04. What amenities are available in the rooms?</button>
                                </div>
                                <div id="collapse-4" className="accordion-collapse collapse " aria-labelledby="collapse-item-4" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">At rotal booking in hotel, we provide amenities through a
                                            dynamic fusion of innovation, expertise, and strategic vision. Our dedicated
                                            team is committed to delivering tailored solutions that transcend traditional
                                            consulting boundaries.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-card">
                                <div className="accordion-header" id="collapse-item-5">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">05. Are there accessible rooms for guests with disabilities?</button>
                                </div>
                                <div id="collapse-5" className="accordion-collapse collapse " aria-labelledby="collapse-item-5" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">At rotal booking in hotel, we provide amenities through a
                                            dynamic fusion of innovation, expertise, and strategic vision. Our dedicated
                                            team is committed to delivering tailored solutions that transcend traditional
                                            consulting boundaries.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-card">
                                <div className="accordion-header" id="collapse-item-6">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">06. What are your fees and payment terms?</button>
                                </div>
                                <div id="collapse-6" className="accordion-collapse collapse " aria-labelledby="collapse-item-6" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">At rotal booking in hotel, we provide amenities through a
                                            dynamic fusion of innovation, expertise, and strategic vision. Our dedicated
                                            team is committed to delivering tailored solutions that transcend traditional
                                            consulting boundaries.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-card">
                                <div className="accordion-header" id="collapse-item-7">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">07. Are there any nearby attractive places tor visit?</button>
                                </div>
                                <div id="collapse-7" className="accordion-collapse collapse " aria-labelledby="collapse-item-7" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">At rotal booking in hotel, we provide amenities through a
                                            dynamic fusion of innovation, expertise, and strategic vision. Our dedicated
                                            team is committed to delivering tailored solutions that transcend traditional
                                            consulting boundaries.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-card">
                                <div className="accordion-header" id="collapse-item-8">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="false" aria-controls="collapse-8">08. Are there accessible rooms for guests with disabilities?</button>
                                </div>
                                <div id="collapse-8" className="accordion-collapse collapse " aria-labelledby="collapse-item-8" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">At rotal booking in hotel, we provide amenities through a
                                            dynamic fusion of innovation, expertise, and strategic vision. Our dedicated
                                            team is committed to delivering tailored solutions that transcend traditional
                                            consulting boundaries.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-card">
                                <div className="accordion-header" id="collapse-item-9">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-9" aria-expanded="false" aria-controls="collapse-9">09. What services does Rotal offer?</button>
                                </div>
                                <div id="collapse-9" className="accordion-collapse collapse " aria-labelledby="collapse-item-9" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">At rotal booking in hotel, we provide amenities through a
                                            dynamic fusion of innovation, expertise, and strategic vision. Our dedicated
                                            team is committed to delivering tailored solutions that transcend traditional
                                            consulting boundaries.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-card">
                                <div className="accordion-header" id="collapse-item-10">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-10" aria-expanded="false" aria-controls="collapse-10">10. Does the hotel offer airport shuttle service?</button>
                                </div>
                                <div id="collapse-10" className="accordion-collapse collapse " aria-labelledby="collapse-item-10" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">At rotal booking in hotel, we provide amenities through a
                                            dynamic fusion of innovation, expertise, and strategic vision. Our dedicated
                                            team is committed to delivering tailored solutions that transcend traditional
                                            consulting boundaries.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faq-btn"><Link onClick={ClickHandler} className="th-btn" to="/faq">EXPLORE MORE</Link></div>
                </div>
            </div>
        </div>
    </div>
   );
};

export default FaqArea;