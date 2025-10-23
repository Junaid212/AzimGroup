import React from 'react';
import CountUp from 'react-countup';
import line from '../../img/bg/line-pattern.png';

const CounterAreaS2 = (props) => {
   return (
      <div className={"" + props.hclass}>
         <div className="container">
            <div className="counter-card-wrap style3" style={{backgroundImage:`url(${line})`}}>
               <div className="counter-card style2">
                  <div className="media-body">
                     <h2 className="box-number">
                        <span className="counter-number">
                           <CountUp end={10}></CountUp>
                        </span>+</h2>
                     <p className="box-text">Years of Experience</p>
                  </div>
               </div>
               <div className="divider"></div>
               <div className="counter-card style2">
                  <div className="media-body">
                     <h2 className="box-number"><span className="counter-number">
                        <CountUp end={58}></CountUp>
                     </span>+</h2>
                     <p className="box-text">Clents</p>
                  </div>
               </div>
               <div className="divider"></div>
               <div className="counter-card style2">
                  <div className="media-body">
                     <h2 className="box-number"><span className="counter-number">
                        <CountUp end={370}></CountUp>
                     </span>+</h2>
                     <p className="box-text">Staff</p>
                  </div>
               </div>
               <div className="divider"></div>
               {/* <div className="counter-card style2">
                  <div className="media-body">
                     <h2 className="box-number"><span className="counter-number">
                        <CountUp end={98}></CountUp>
                     </span>%</h2>
                     <p className="box-text">Annual Client Retention</p>
                  </div>
               </div>
               <div className="divider"></div> */}
            </div>
         </div>
      </div>
   );
};

export default CounterAreaS2;