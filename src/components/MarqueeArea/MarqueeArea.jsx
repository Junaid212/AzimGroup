import React from 'react';
import StarIcon from '../../img/icon/star.svg'

const MarqueeArea = (props) => {
   return (
      <div className={"" +props.hclass}>
      <div className="marquee-content positive-relative overflow-hidden">
          <div className="marquee">
              <div className="marquee-group">
                  <div className="item "><img src={StarIcon} alt="" /><span>EVENTS</span></div>
                  <div className="item"><img src={StarIcon} alt="" /><span>CELEBRATIONS</span></div>
                  <div className="item "><img src={StarIcon} alt="" /><span>EVENTS</span></div>
                  <div className="item"><img src={StarIcon} alt="" /><span>CELEBRATIONS</span></div>
                  <div className="item "><img src={StarIcon} alt="" /><span>EVENTS</span></div>
                  <div className="item "><img src={StarIcon} alt="" /><span>CELEBRATIONS</span></div>
                  <div className="item"><img src={StarIcon} alt="" /><span>EVENTS</span></div>
                  <div className="item "><img src={StarIcon} alt="" /><span>CELEBRATIONS</span></div>
                  <div className="item"><img src={StarIcon} alt="" /><span>EVENTS</span></div>
                  <div className="item "><img src={StarIcon} alt="" /><span>CELEBRATIONS</span></div>
                  <div className="item "><img src={StarIcon} alt="" /><span>EVENTS</span></div>
                  <div className="item"><img src={StarIcon} alt="" /><span>CELEBRATIONS</span></div>

              </div>
              <div aria-hidden="true" className="marquee-group">
                  <div className="item "><img src={StarIcon} alt="" /><span>EVENTS</span></div>
                  <div className="item"><img src={StarIcon} alt="" /><span>CELEBRATIONS</span></div>
                  <div className="item "><img src={StarIcon} alt="" /><span>EVENTS</span></div>
                  <div className="item"><img src={StarIcon} alt="" /><span>CELEBRATIONS</span></div>
                  <div className="item "><img src={StarIcon} alt="" /><span>EVENTS</span></div>
                  <div className="item "><img src={StarIcon} alt="" /><span>CELEBRATIONS</span></div>
                  <div className="item"><img src={StarIcon} alt="" /><span>EVENTS</span></div>
                  <div className="item "><img src={StarIcon} alt="" /><span>CELEBRATIONS</span></div>
                  <div className="item"><img src={StarIcon} alt="" /><span>EVENTS</span></div>
                  <div className="item "><img src={StarIcon} alt="" /><span>CELEBRATIONS</span></div>
                  <div className="item "><img src={StarIcon} alt="" /><span>EVENTS</span></div>
                  <div className="item"><img src={StarIcon} alt="" /><span>CELEBRATIONS</span></div>
              </div>
          </div>
      </div>
  </div>
   );
};

export default MarqueeArea;