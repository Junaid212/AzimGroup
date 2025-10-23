import React from 'react';
import { Link } from 'react-router-dom';
import BlogData from '../../api/blog';

const BlogAreaS4 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className={"" + props.hclass} id="blog-sec">
         <div className="container">
            <div className="title-area text-center">
               <span className="sub-title2 style2">BLOGS & ARTICLES</span>
               <h2 className="sec-title">Our latest events & news</h2>
            </div>
            <div className="row gy-4 justify-content-center">

               {BlogData.slice(8, 11).map((item, index) => (
                  <div className="col-xl-4 col-md-6" key={index}>
                     <div className="blog-card style4">
                        <Link to="blog-details" className="blog-img">
                           <img src={item.imageUrl} alt="blog image" />
                        </Link>
                        <div className="blog-content">
                           <div className="blog-meta">
                              <Link onClick={ClickHandler} to="/blog"><i className="fas fa-calendar-days"></i>
                                 <span className="date">15 Dec</span>, 2025</Link>
                              <Link onClick={ClickHandler} to="/blog">08 min read</Link>
                           </div>
                           <h3 className="box-title"><Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}>{item.title}</Link></h3>
                           <Link onClick={ClickHandler} to="/about" className="th-btn2 style2 th-icon">READ MORE</Link>
                        </div>
                     </div>
                  </div>
               ))}



            </div>
         </div>
      </section>
   );
};

export default BlogAreaS4;