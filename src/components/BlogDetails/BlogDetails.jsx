import { Link, useParams } from 'react-router-dom';
import BlogData from '../../api/blog';
import blog1 from '../../img/blog/blog_inner_1.jpg';
import blog2 from '../../img/blog/blog_inner_2.jpg';
import author1 from '../../img/blog/comment-author-1.jpg';
import author2 from '../../img/blog/comment-author-2.jpg';
import author3 from '../../img/blog/comment-author-3.jpg';
import cat from '../../img/icon/cat_1.svg';
import BlogSidBar from '../BlogSidBar/BlogSidBar';
import CommentForm from './CommentForm';
import blogSingleimg from '../../img/blog/blog-s-1-1.jpg';

const BlogDetail = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   const { slug } = useParams()
   const BlogDetails = BlogData.find(item => item.slug === slug)

   const { BlogSid = true } = props

   return (
      <section className="th-blog-wrapper blog-details mt-50 space-extra-bottom">
         <div className="container">
            <div className="row">
               <div className={"" + props.rclass}>
                  <div className="th-blog blog-single">
                     <div className="blog-img">
                        <img src={blogSingleimg} alt="Blog Image" />
                     </div>
                     <div className="blog-content">
                        <div className="blog-meta">
                           <Link onClick={ClickHandler} className="author" to="/blog"><i className="fal fa-user"></i>By Rotal</Link>
                           <Link onClick={ClickHandler} to="/blog"><i className="fal fa-clock"></i>Feb 22, 2025</Link>
                           <Link onClick={ClickHandler} to="/blog"><img src={cat} alt="icon" /> Hotel</Link>
                           <Link onClick={ClickHandler} to="/blog">08 min read</Link>
                        </div>
                        <p>Welcome to Rotal Residence, where sustainability meets comfort in every corner. In this blog
                           post, we'll explore the green innovations seamlessly integrated into the fabric of EcoLand,
                           creating a unique and eco-friendly living experience for its residents.</p>
                        <p>A platform dedicated to exploring the transformative power of education. We believe that
                           education is not only a means to acquire knowledge but also a catalyst for personal growth,
                           societal progress, and global development. In this blog, we aim to inspire, inform, and
                           engage readers in conversations about the latest trends, insights, and innovations in the
                           field of education. Per vero inermis no, duo debet causae voluptaria ex. Vim iisque quaeque
                           impedit eu, equidem interesset.</p>
                        <p>Vim iisque quaeque impedit eu, equidem interesset delicatissimi sed no. Ex vim minim aliquid
                           suscipiantur. Cu vis fugit summo tation, eam ad tota iusto electram. Id omittam splendide
                           cum. Iracundia adolescens no vim, has corrumpit vituperata comprehensam ne. His dicant
                           appareat sententiae ne. Quo alia appareat ut, nemore aperiri eligendi te vel. Etiam
                           signiferumque eu nec. Alia clita ea eum. Affert quidam docendi duo et graece.</p>
                        <blockquote>
                           <p>"This business is outstanding! I found great pleasure in the enthusiasm and expert
                              guidance the entire team provided while we created our website. ingredients and have
                              discussions on sustainable life. Living sustainably at Rotal Residence is more than a
                              choice; it's an immersive experience that shapes every moment of your day.</p>
                           <cite>Edward Smith</cite>
                        </blockquote>
                        <p>Dinning Prepare a dinner using fresh ingredients from your own garden or the local CSA
                           program. The energy-efficient appliances in your kitchen make cooking a breeze while
                           minimizing your overall energy consumption. Share a meal with neighbors, The quiet night
                           offers a peaceful ambiance, reinforcing the community's commitment to a sustainable,
                           low-impact lifestyle.</p>
                        <p>Living sustainably at Realar Residence is more than a choice; it's an immersive experience
                           that shapes every moment of your day. From the moment you wake up in your solar-powered home
                           to the evening gatherings with like-minded neighbors</p>
                        <h3 className="h5 mt-40 fw-semibold">The sustainable traveller These 6 hotels epitomise ethical
                           luxury</h3>
                        <p>‍Whether you work from home or commute to a nearby office, the energy-efficient features of
                           your home contribute to a productive and eco-conscious workday. Smart home systems allow you
                           to monitor and control energy usage, ensuring that your environmental impact remains
                           minimal. Prepare a dinner using fresh ingredients from your own garden or the local CSA
                           program. The energy-efficient appliances in your kitchen make cooking a breeze while
                           minimizing your overall energy consumption. </p>
                        <div className="row mt-30">
                           <div className="col-md-6 mb-4">
                              <img className="w-100" src={blog1} alt="Blog Image" />
                           </div>
                           <div className="col-md-6 mb-4">
                              <img className="w-100" src={blog2} alt="Blog Image" />
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-md-6 mb-4">
                              <h3 className="box-title">Exclusive Sutie</h3>
                           </div>
                           <div className="col-md-6 mb-4">
                              <h3 className="box-title">Deluxe Room</h3>
                           </div>
                        </div>
                        <p>We are always striving for bigger and better things at Rotal Luxury Resorts – and so we also
                           treated our web presence to a new look! We are very pleased to present the result to you.
                           Browse through our new website and let yourself be inspired by the holiday specials for your
                           next stay in Val Passiria/Passeiertal or at Lake Garda. All our houses have a new online
                           look:</p>
                        <ol>
                           <li>Rotal luxury hotel, the origin of it all, the place where our story began</li>
                           <li>Luxurious Rotel see lodge, where guests aged 14 and above stay in unique lake villas
                              with Maldivian flair</li>
                           <li>Natural Hotel Michel smith, where you get to spend your holiday at the edge of the
                              forest</li>
                           <li> Exclusive Rotal luxury hotel sizes, where pure luxury meets Mediterranean flair on the
                              eastern shore of Lake Garda</li>
                        </ol>
                        <p className="mt-20">Have fun discovering all the nooks and crannies of our website. We are already looking forward to meeting you soon in person!</p>
                        <div className="share-links clearfix ">
                           <div className="row justify-content-between">
                              <div className="col-sm-auto">
                                 <span className="share-links-title">Tags:</span>
                                 <div className="tagcloud">
                                    <Link onClick={ClickHandler} to="/blog">Apartment</Link>
                                    <Link onClick={ClickHandler} to="/blog">Buyer</Link>
                                    <Link onClick={ClickHandler} to="/blog">Modern</Link>
                                    <Link onClick={ClickHandler} to="/blog">Luxury</Link>
                                 </div>
                              </div>
                              <div className="col-sm-auto text-xl-end">
                                 <span className="share-links-title">Share this article:</span>
                                 <div className="th-social">
                                    <a href="https://facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                                    <a href="https://linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="th-comments-wrap ">
                     <h2 className="blog-inner-title h4">Comments (3)</h2>
                     <ul className="comment-list">
                        <li className="th-comment-item">
                           <div className="th-post-comment">
                              <div className="comment-avater">
                                 <img src={author1} alt="Comment Author" />
                              </div>
                              <div className="comment-content">
                                 <h3 className="name">Adam Jhon</h3>
                                 <span className="commented-on">25 Feb, 2025 08:56pm</span>
                                 <p className="text">Through this blog, we aim to inspire readers to embrace education as a lifelong journey and to advocate for quality education</p>
                                 <div className="reply_and_edit">
                                    <Link onClick={ClickHandler} to="/blog" className="reply-btn"><i className="fas fa-reply"></i>Reply</Link>
                                 </div>
                              </div>
                           </div>
                           <ul className="children">
                              <li className="th-comment-item">
                                 <div className="th-post-comment">
                                    <div className="comment-avater">
                                       <img src={author2} alt="Comment Author" />
                                    </div>
                                    <div className="comment-content">
                                       <h3 className="name">Jusctin Dacon</h3>
                                       <span className="commented-on">26 Feb, 2025</span>
                                       <p className="text">Education News and Trends: We provide updates on the latest developments and trends in the education sector.</p>
                                       <div className="reply_and_edit">
                                          <Link onClick={ClickHandler} to="/blog" className="reply-btn"><i className="fas fa-reply"></i>Reply</Link>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </li>
                        <li className="th-comment-item">
                           <div className="th-post-comment">
                              <div className="comment-avater">
                                 <img src={author3} alt="Comment Author" />
                              </div>
                              <div className="comment-content">
                                 <h3 className="name">Jacklin July</h3>
                                 <span className="commented-on">28 Feb, 2025</span>
                                 <p className="text">We discuss strategies to help students make informed decisions about their educational and career paths.</p>
                                 <div className="reply_and_edit">
                                    <Link onClick={ClickHandler} to="/blog" className="reply-btn"><i className="fas fa-reply"></i>Reply</Link>
                                 </div>
                              </div>
                           </div>
                        </li>
                     </ul>
                  </div>
                  <CommentForm />

               </div>
               {BlogSid && (
                  <div className={'' + props.sclass}>
                     <BlogSidBar />
                  </div>
               )}
            </div>
         </div>
      </section>
   );
};

export default BlogDetail;