import { Fragment } from 'react';
import testimonialData from '../../api/testimonial';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import quote2 from '../../img/icon/quote2.svg';

const TestimonialPage = () => {

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={'Testimonials'} pagesub={'Testimonials'} />
         <section className="space overflow-hidden">
            <div className="container">
               <div className="title-area text-center">
                  <span className="sub-title2 style1">TESTIMONIALS</span>
                  <h2 className="sec-title ">What Our Client’s Feedback</h2>
               </div>
               <div className="row gy-40 gx-100">
                  {testimonialData.slice(11, 15).map((item, Tkay) => (
                     <div className="col-xl-6" key={Tkay}>
                        <div className="testi-grid style2">
                           <div className="box-profile">
                              <div className="box-avater">
                                 <img src={item.img} alt="Avater" />
                              </div>
                              <p className="box-text">{item.document}</p>
                           </div>
                           <div className="box-quote"><img src={quote2} alt="" /></div>
                           <div className="box-review">
                              <i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i>
                           </div>
                           <div className="media-body">
                              <h3 className="box-title">{item.athName}</h3>
                              <p className="box-desig">{item.postion}</p>
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

export default TestimonialPage
