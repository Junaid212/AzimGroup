import { Link } from 'react-router-dom';
import BlogData from '../../api/blog';
import left from '../../img/icon/left-arrow.svg';
import right from '../../img/icon/right-arrow.svg';

const BlogGrid = () => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className="th-blog-wrapper mt-50 space-extra-bottom">
         <div className="container">
            <div className="row">
               {BlogData.slice(0, 12).map((item, bindex) => (
                  <div className="col-md-6 col-lg-4 col-xl-3" key={bindex}>
                     <div className="th-blog blog-single has-post-thumbnail single-grid">
                        <div className="blog-img">
                           <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}>
                              <img src={item.grid} alt="Blog Image" /></Link>
                        </div>
                        <div className="blog-content">
                           <div className="blog-meta">
                              <Link onClick={ClickHandler}><i className="fal fa-clock"></i>{item.date}</Link>
                              <Link onClick={ClickHandler}>{item.minet}</Link>
                           </div>
                           <h2 className="blog-title"><Link onClick={ClickHandler} to={`/blog-details/${item.slug}`}>{item.title}</Link>
                           </h2>
                           <Link onClick={ClickHandler} to={`/blog-details/${item.slug}`} className="th-btn style2">READ MORE</Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="th-pagination text-center mt-30">
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
      </section>
   );
};

export default BlogGrid;