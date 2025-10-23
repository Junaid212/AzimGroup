import { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";

import { Link } from 'react-router-dom';
import widget_bg from '../../img/bg/widget_bg_1.jpg';
import recent1 from '../../img/blog/recent-post-1-1.jpg';
import recent2 from '../../img/blog/recent-post-1-2.jpg';
import recent3 from '../../img/blog/recent-post-1-3.jpg';
import cat_1 from '../../img/icon/cat_1.svg';
import Logo from '../../img/logo.svg';

const BlogSidBar = () => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }



   const [search, setSearch] = useState("");
   const [, forceUpdate] = useState();
   const validator = useRef(new SimpleReactValidator());

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validator.current.allValid()) {
      } else {
         validator.current.showMessages();
         forceUpdate(1);
      }
   };
   return (
      <aside className="sidebar-area">
         <div className="widget widget_search  ">
            <form className="search-form" onSubmit={handleSubmit}>
               <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => {
                     setSearch(e.target.value);
                     validator.current.showMessageFor("search");
                  }}
               />
               <button type="submit">
                  <i className="far fa-search"></i>
               </button>

               <div className="text-danger">
               </div>
            </form>
         </div>
         <div className="widget  ">
            <h3 className="widget_title">Popular Posts</h3>
            <div className="recent-post-wrap">
               <div className="recent-post">
                  <div className="media-img">
                     <Link onClick={ClickHandler} to="/blog-details/1"><img src={recent1} alt="Blog Image" /></Link>
                  </div>
                  <div className="media-body">
                     <h4 className="post-title"><Link onClick={ClickHandler} className="text-inherit" to="/blog-details/1">Interior Repair in the Home Using Up-to-Date</Link></h4>
                     <div className="recent-post-meta">
                        <Link onClick={ClickHandler} to="/blog"><i className="far fa-calendar"></i>22/ Feb/ 2025</Link>
                     </div>
                  </div>
               </div>
               <div className="recent-post">
                  <div className="media-img">
                     <Link onClick={ClickHandler} to="/blog-details/1"><img src={recent2} alt="Blog Image" /></Link>
                  </div>
                  <div className="media-body">
                     <h4 className="post-title"><Link onClick={ClickHandler} className="text-inherit" to="/blog-details/1">Discover and book a wide range of hotels rooms</Link></h4>
                     <div className="recent-post-meta">
                        <Link onClick={ClickHandler} to="/blog"><i className="far fa-calendar"></i>25/ Feb/ 2025</Link>
                     </div>
                  </div>
               </div>
               <div className="recent-post">
                  <div className="media-img">
                     <Link onClick={ClickHandler} to="/blog-details/1"><img src={recent3} alt="Blog Image" /></Link>
                  </div>
                  <div className="media-body">
                     <h4 className="post-title"><Link onClick={ClickHandler} className="text-inherit" to="/blog-details/1">where hospitality meets adventure, tales from hotel</Link></h4>
                     <div className="recent-post-meta">
                        <Link onClick={ClickHandler} to="/blog"><i className="far fa-calendar"></i>28/ Feb/ 2025</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="widget widget_categories  ">
            <h3 className="widget_title">Categories</h3>
            <ul>
               <li>
                  <Link onClick={ClickHandler} to="/blog"><img src={cat_1} alt="icon" /> Hotel Equipment</Link>
               </li>
               <li>
                  <Link onClick={ClickHandler} to="/blog"><img src={cat_1} alt="icon" />Events</Link>
               </li>
               <li>
                  <Link onClick={ClickHandler} to="/blog"><img src={cat_1} alt="icon" />Facilities</Link>
               </li>
               <li>
                  <Link onClick={ClickHandler} to="/blog"><img src={cat_1} alt="icon" />Rooms & Suits</Link>
               </li>
               <li>
                  <Link onClick={ClickHandler} to="/blog"><img src={cat_1} alt="icon" /> Management</Link>
               </li>
               <li>
                  <Link onClick={ClickHandler} to="/blog"><img src={cat_1} alt="icon" />King Bed Room</Link>
               </li>
            </ul>
         </div>
         <div className="widget widget_tag_cloud  ">
            <h3 className="widget_title">Popular Tags</h3>
            <div className="tagcloud">
               <Link onClick={ClickHandler} to="/blog">Tour</Link>
               <Link onClick={ClickHandler} to="/blog">Adventure</Link>
               <Link onClick={ClickHandler} to="/blog">Rent</Link>
               <Link onClick={ClickHandler} to="/blog">Innovate</Link>
               <Link onClick={ClickHandler} to="/blog">Hotel</Link>
               <Link onClick={ClickHandler} to="/blog">Modern</Link>
               <Link onClick={ClickHandler} to="/blog">Luxury</Link>
               <Link onClick={ClickHandler} to="/blog">Travel</Link>
            </div>
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
   );
};

export default BlogSidBar;