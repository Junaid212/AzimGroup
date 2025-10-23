import React from 'react';
import { Link } from 'react-router-dom';
import titleimg from '../../img/theme-img/title_icon.svg';
import BlogData from '../../api/blog';

const BlogArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className={"" +props.hclass} id="blog-sec">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-xxl-5">
                  <div className="title-area text-center">
                     <span className="sub-title">LATEST BLOG</span>
                     <h2 className="sec-title">Room Refresh Service Morning Wake-Up Call Tour</h2>
                     <span className="title-img"><img src={titleimg} alt="shape" /></span>
                  </div>
               </div>
            </div>
            <div className="row gy-4">
               {BlogData.slice(0,4).map((blog, index) => (
                  <div className="col-xl-3 col-md-6" key={index}>
                     <div className="blog-card">
                        <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="blog-img">
                           <img src={blog.imageUrl} alt="blog image" />
                        </Link>
                        <div className="blog-content">
                           <div className="blog-meta">
                              <Link onClick={ClickHandler} to='/blog'>{blog.date}</Link>
                              <Link onClick={ClickHandler} to='/blog'>{blog.minet}</Link>
                           </div>
                           <h3 className="box-title"><Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}>Discover and book a wide range of hotels rooms</Link></h3>
                           <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="th-btn2 style2 th-icon">Read More</Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default BlogArea;