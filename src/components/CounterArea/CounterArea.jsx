import React from 'react';
import CountUp from 'react-countup';

const CounterArea = (props) => {
   return (
      <div className={"" + props.hclass}>
         <div className="container">
            <div className="counter-card-wrap style3">
               <div className="counter-card style2">
                  <div className="media-body">
                     <h2 className="box-number">
                        <span className="counter-number">
                           <CountUp end={20}></CountUp>
                        </span>+</h2>
                     <p className="box-text">Years of Experience</p>
                  </div>
               </div>
               <div className="divider"></div>
               <div className="counter-card style2">
                  <div className="media-body">
                     <h2 className="box-number"><span className="counter-number">
                        <CountUp end={50}></CountUp>
                     </span>+</h2>
                     <p className="box-text">Team Members</p>
                  </div>
               </div>
               <div className="divider"></div>
               <div className="counter-card style2">
                  <div className="media-body">
                     <h2 className="box-number"><span className="counter-number">
                        <CountUp end={50}></CountUp>
                     </span>k+</h2>
                     <p className="box-text">Guests Serve</p>
                  </div>
               </div>
               <div className="divider"></div>
               <div className="counter-card style2">
                  <div className="media-body">
                     <h2 className="box-number"><span className="counter-number">
                        <CountUp end={98}></CountUp>
                     </span>%</h2>
                     <p className="box-text">Annual Client Retention</p>
                  </div>
               </div>
               <div className="divider"></div>
            </div>
         </div>
      </div>
   );
};

export default CounterArea;