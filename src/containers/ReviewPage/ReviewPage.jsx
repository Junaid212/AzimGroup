import { Fragment } from 'react';
import testimonialData from '../../api/testimonial';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import quote from '../../img/icon/quote.svg';

const ReviewPage = () => {

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={'What guests says'} pagesub={'Reviews'} />
         <section className="space" id="testi-sec">
            <div className="container">
               <div className="row gy-4">
                  {testimonialData.slice(0, 3).map((testimonial, index) => (
                     <div className="col-12" key={index}>
                        <div className="testi-card style2">
                           <div className="box-img th-parallax">
                              <img src={testimonial.testi2} alt="Hotel" />
                           </div>
                           <div className="box-wrapp">
                              <div className="box-left">
                                 <h3 className="box-title">{testimonial.title}</h3>
                              </div>
                              <div className="box-content">
                                 <div className="box-review">
                                    {[...Array(5)].map((_, i) => (
                                       <i key={i} className="fa-sharp fa-solid fa-star"></i>
                                    ))}
                                 </div>
                                 <p className="box-text">
                                    {testimonial.document}
                                 </p>
                                 <div className="box-profile">
                                    <div className="box-avater">
                                       <img src={testimonial.img} alt="Avatar" />
                                    </div>
                                    <div className="media-body">
                                       <h3 className="box-title">{testimonial.athName}</h3>
                                       <p className="box-desig">{testimonial.postion}</p>
                                    </div>
                                 </div>
                                 <div className="box-quote">
                                    <img src={quote} alt="Quote" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}


               </div>
            </div>
         </section>
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default ReviewPage
