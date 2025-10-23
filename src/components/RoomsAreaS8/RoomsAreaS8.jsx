import RoomData from '../../api/room';
import { Link } from 'react-router-dom';
import cat2 from '../../img/icon/cat_3.svg';
import cat3 from '../../img/icon/cat_4.svg';
const RoomsAreaS8 = () => {
    const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className="overflow-hidden space">
         <div className="container">
            <div className="title-area text-center">
               <span className="sub-title2 style1">LUXURY COMFORT</span>
               <h2 className="sec-title">Featured rooms & suits</h2>
            </div>
            <div className="row gy-4">
                {RoomData.slice(0, 6).map((item, iroom) => (
                  <div className="col-lg-6 col-xxl-4" key={iroom}>
                     <div className="room-box">
                        <div className="box-img">
                           <img src={item.imgRoom} alt="" />
                        </div>
                        <span className="discount">{item.discount}/night</span>
                        <div className="box-title-area">
                           <div className="box-number">{item.id}</div>
                           <h3 className="box-title"><Link onClick={ClickHandler} to="/room">{item.title}</Link></h3>
                           <div className="mt-10"><Link onClick={ClickHandler} to={`/room-details/${item.slug}`} className="th-btn2 style2">VIEW DETAILS</Link></div>
                        </div>
                        <div className="box-content">
                           <div className="box-wrapp">
                              <div className="box-number">{item.id}</div>
                              <h3 className="box-title"><Link onClick={ClickHandler} to="/room">{item.title}</Link></h3>
                              <div className="box-review">
                                 <i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i>
                              </div>
                              <div className="room-card-meta">
                                 <span><img src={item.cat} alt="icon" />{item.bed}</span>
                                 <span><img src={cat2} alt="icon" />{item.sqft} sqft/Room</span>
                                 <span><img src={cat3} alt="icon" />2 Person</span>
                              </div>
                              <div className="mt-10"><Link onClick={ClickHandler} to={`/room-details/${item.slug}`} className="th-btn2 style2">VIEW DETAILS</Link></div>
                           </div>
                        </div>
                     </div>
                  </div>

               ))}
            </div>
         </div>
      </section>
   );
};

export default RoomsAreaS8;