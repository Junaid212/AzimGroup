import React from 'react';
import { Link } from 'react-router-dom';
import BlogData from '../../api/blog';

const BlogAreaS3 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className={"" + props.hclass} id="blog-sec">
         <div className="container">
            <div className="row justify-content-between align-items-center">
               <div className="col-xl-5 col-lg-6 col-md-7">
                  <div className="title-area text-center text-md-start">
                     <span className="sub-title2 style1">BLOG & NEWS</span>
                     <h2 className="sec-title">Room Refresh Service Morning Wake-Up Call Tour</h2>
                  </div>
               </div>
               <div className="col-md-auto">
                  <div className="sec-btn mt-n3 mt-md-0">
                     <Link onClick={ClickHandler} to="/blog" className="th-btn style3 th-icon">VIEW ALL</Link>
                  </div>
               </div>
            </div>
            <div className="row gy-4">
               {BlogData.slice(6, 8).map((item, index) => (
                  <div className="col-lg-6" key={index}>
                     <div className="blog-card style3">
                        <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`} className="blog-img">
                           <img src={item.imageUrl} alt="blog image" />
                        </Link>
                        <div className="blog-meta">
                           <Link onClick={ClickHandler} to="/blog"><span className="date">{item.date}</span><span className="meta-title">HOTEL ROOM</span></Link>
                        </div>

                        <h3 className="box-title"><Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}>{item.title}</Link></h3>
                        <div className="blog-content">
                           <p className="box-text">{item.discrip}</p>
                        </div>
                        <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`} className="th-btn style2 extra-btn">EXPLORE MORE</Link>
                     </div>
                  </div>
               ))}


            </div>
         </div>
      </section>
   );
};

export default BlogAreaS3;