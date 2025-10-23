import React from 'react';
import { Link } from 'react-router-dom';
import teamData from '../../api/team';
import teamimg from '../../img/team/team-img.jpg';

const TeamArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={"" + props.hclass}>
         <div className="container">
            <div className="row justify-content-between align-items-center">
               <div className="col-lg-3">
                  {teamData.slice(0, 2).map((item, index) => (
                     <div key={index}>
                        <div className={`th-team team-card ${item.class || ""}`} >
                           <div className="box-img">
                              <img src={item.image} alt="Team" />
                           </div>
                           <div className="box-content">
                              <h3 className="box-title"><Link onClick={ClickHandler} to={`/team-details/${item.slug}`}>{item.title}</Link></h3>
                              <p className="box-desig">{item.subtitle}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="col-lg-6">
                  <div className="team-member-area">
                     <div className={"" +props.subClass}>
                        <div className="title-area mb-10 text-center">
                           <span className="sub-title2">TEAM MEMEBER</span>
                           <h2 className="sec-title">Meet Our<span> Hotel Staffs</span></h2>
                           <p className="sec-text">We pride ourselves on a high standard of friendly cheerful service which
                              cafers to the needs of the whole family.</p>
                        </div>
                     </div>
                     <div className="team-img global-img">
                        <img src={teamimg} alt="" />
                     </div>
                  </div>
               </div>
               <div className="col-lg-3">
                  {teamData.slice(2, 4).map((item, index) => (
                     <div key={index}>
                        <div className={`th-team team-card ${item.class || ""}`} >
                           <div className="box-img">
                              <img src={item.image} alt="Team" />
                           </div>
                           <div className="box-content">
                              <h3 className="box-title"><Link onClick={ClickHandler} to={`/team-details/${item.slug}`}>{item.title}</Link></h3>
                              <p className="box-desig">{item.subtitle}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default TeamArea;