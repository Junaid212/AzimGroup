import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import { Link } from 'react-router-dom';
import BlogData from '../../api/blog';
import blog1 from '../../img/blog/blog-s-1-2.jpg';
import blog2 from '../../img/blog/blog-s-1-3.jpg';
import blog3 from '../../img/blog/blog-s-1-4.jpg';
import cat from '../../img/icon/cat_1.svg';
import left from '../../img/icon/left-arrow.svg';
import right from '../../img/icon/right-arrow.svg';
import VideoModal from '../ModalVideo/ModalVideo';
import BlogSidBar from '../BlogSidBar/BlogSidBar';

const BlogPageArea = () => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className="th-blog-wrapper mt-50 space-extra-bottom">
         <div className="container">
            <div className="row">
               <div className="col-xxl-9 col-lg-7">
                  {BlogData.slice(0, 1).map((item, index) => (
                     <div className="th-blog blog-single has-post-thumbnail" key={index}>
                        <div className="blog-img">
                           <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}><img src={item.grid} alt="Blog Image" /></Link>
                        </div>
                        <div className="blog-content">
                           <div className="blog-meta">
                              <Link className="author" onClick={ClickHandler} to="/blog"><i className="fal fa-user"></i>By Rotal</Link>
                              <Link onClick={ClickHandler} to="/blog"><i className="fal fa-clock"></i>{item.date}</Link>
                              <Link onClick={ClickHandler} to="/blog"><img src={cat} alt="icon" />Room</Link>
                           </div>
                           <h2 className="blog-title"><Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}>{item.title}</Link>
                           </h2>
                           <p className="blog-text">Uniquely pursue emerging experiences before liemerging content. Efficiently underwhelm customer directed total linkage after B2C synergy. Dynamically simplify superior human capital whereas efficient infrastructures generate business web-readiness after wireless outsourcing.</p>
                           <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`} className="th-btn style2 th-icon">READ MORE</Link>
                        </div>
                     </div>
                  ))}


                  <div className="th-blog blog-single has-post-thumbnail">
                     <div className="blog-img th-slider">
                        <Swiper
                           modules={[Navigation, EffectFade]}
                           effect="fade"
                           navigation={{
                              nextEl: '.slider-next',
                              prevEl: '.slider-prev',
                           }}
                           className="swiper-wrapper"
                        >
                           <SwiperSlide>
                              <img src={blog1} alt="Blog Image" />
                           </SwiperSlide>
                           <SwiperSlide>
                              <img src={blog2} alt="Blog Image" />
                           </SwiperSlide>
                           <SwiperSlide>
                              <img src={blog3} alt="Blog Image" />
                           </SwiperSlide>
                        </Swiper>

                        <button className="slider-arrow slider-prev">
                           <i className="far fa-arrow-left"></i>
                        </button>
                        <button className="slider-arrow slider-next">
                           <i className="far fa-arrow-right"></i>
                        </button>
                     </div>
                     {BlogData.slice(1, 2).map((item, index) => (
                        <div className="blog-content" key={index}>
                           <div className="blog-meta">
                              <Link className="author" onClick={ClickHandler} to="/blog"><i className="fal fa-user"></i>By Rotal</Link>
                              <Link onClick={ClickHandler} to="/blog"><i className="fal fa-clock"></i>{item.date}</Link>
                              <Link onClick={ClickHandler} to="/blog"><img src={cat} alt="icon" />Room</Link>
                           </div>
                           <h2 className="blog-title"><Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}>{item.title}</Link>
                           </h2>
                           <p className="blog-text">Uniquely pursue emerging experiences before liemerging content. Efficiently underwhelm customer directed total linkage after B2C synergy. Dynamically simplify superior human capital whereas efficient infrastructures generate business web-readiness after wireless outsourcing.</p>
                           <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`} className="th-btn style2 th-icon">READ MORE</Link>
                        </div>
                     ))}
                  </div>

                  {BlogData.slice(1, 2).map((item, index) => (
                     <div className="th-blog blog-single has-post-thumbnail" key={index}>
                        <div className="blog-img">
                           <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}><img src={item.imageUrl} alt="Blog Image" /></Link>
                           <VideoModal vidclass={'play-btn popup-video'} />
                        </div>
                        <div className="blog-content">
                           <div className="blog-meta">
                              <Link className="author" onClick={ClickHandler} to="/blog"><i className="fal fa-user"></i>By Rotal</Link>
                              <Link onClick={ClickHandler} to="/blog"><i className="fal fa-clock"></i>{item.date}</Link>
                              <Link onClick={ClickHandler} to="/blog"><img src={cat} alt="icon" />Room</Link>
                           </div>
                           <h2 className="blog-title"><Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}>{item.title}</Link>
                           </h2>
                           <p className="blog-text">Uniquely pursue emerging experiences before liemerging content. Efficiently underwhelm customer directed total linkage after B2C synergy. Dynamically simplify superior human capital whereas efficient infrastructures generate business web-readiness after wireless outsourcing.</p>
                           <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`} className="th-btn style2 th-icon">READ MORE</Link>
                        </div>
                     </div>
                  ))}
                  {BlogData.slice(2, 3).map((item, index) => (
                     <div className="th-blog blog-single has-post-thumbnail" key={index}>
                        <div className="blog-img">
                           <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}><img src={item.imageUrl} alt="Blog Image" /></Link>
                        </div>
                        <div className="blog-content">
                           <div className="blog-meta">
                              <Link className="author" onClick={ClickHandler} to="/blog"><i className="fal fa-user"></i>By Rotal</Link>
                              <Link onClick={ClickHandler} to="/blog"><i className="fal fa-clock"></i>{item.date}</Link>
                              <Link onClick={ClickHandler} to="/blog"><img src={cat} alt="icon" />Room</Link>
                           </div>
                           <h2 className="blog-title"><Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}>{item.title}</Link>
                           </h2>
                           <p className="blog-text">Uniquely pursue emerging experiences before liemerging content. Efficiently underwhelm customer directed total linkage after B2C synergy. Dynamically simplify superior human capital whereas efficient infrastructures generate business web-readiness after wireless outsourcing.</p>
                           <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`} className="th-btn style2 th-icon">READ MORE</Link>
                        </div>
                     </div>
                  ))}
                  <div className="th-pagination ">
                     <ul>
                        <li><Link onClick={ClickHandler} to="/blog"><img src={left} alt="" /></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">1</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">2</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">3</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">4</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog"><img src={right} alt="" /></Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-xxl-3 col-lg-5">
                  <BlogSidBar />
               </div>
            </div>
         </div>
      </section>
   );
};

export default BlogPageArea;