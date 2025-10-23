import React from 'react';
import EventData from '../../api/event';
import { Link } from 'react-router-dom';

const EventAreaS2 = () => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <section className="space">
         <div className="container">
            <div className="row gy-4">
               {EventData.slice(0, 6).map((item, Eky) => (
                  <div className="col-md-6 col-xl-4" key={Eky}>
                     <div className="event-card">
                        <div className="box-img global-img">
                           <img src={item.img} alt="event" />
                        </div>
                        <div className="box-content">
                           <h3 className="box-title"><Link onClick={ClickHandler}to={`/event-details/${item.slug}`}>{item.title}</Link></h3>
                           <p className="box-text">{item.subtitle}</p>
                           <Link onClick={ClickHandler}to={`/event-details/${item.slug}`} className="th-btn2 th-icon style2">SEE MORE</Link>
                        </div>
                     </div>
                  </div>
               ))}


            </div>
         </div>
      </section>
   );
};

export default EventAreaS2;