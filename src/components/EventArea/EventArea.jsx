import { Link } from 'react-router-dom';
import EventBg from '../../img/71.png';
import EventBg1 from '../../img/new/99.png';
import EventBg2 from '../../img/new/100.png';
import CircleTextS2 from '../CircleTextS2/CircleTextS2';
import VideoModal from '../ModalVideo/ModalVideo';
const EventArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }



   return (
      <section className={"" + props.hclass}>
         <div className="container">
            <div className="event-area bg-fixed background-image" style={{ backgroundImage: `url(${EventBg})` }}>
               <div className="row align-items-center justify-content-center">
                  <div className="col-xl-5">
                     <div className="event-item">
                        <div className="box-content" style={{ backgroundImage: `url(${EventBg1})`, height:'550px' }}>
                           {/* <h3 className="box-title">Companies Work and Relax <span>Come Together</span></h3>
                           <p className="box-text">Experience formal business meetings with a completely different
                              atmosphere. Beautiful
                              spaces,
                              accommodation and quality food.</p>
                           <Link onClick={ClickHandler} to="/event" className="th-btn style2 th-icon">SEE MORE</Link> */}
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-2">
                     <div className="event-wrapp">
                        <div className="discount-wrapp">
                           {/* <VideoModal vidclass={'play-btn popup-video'} /> */}
                           <div className='Rotal-round'>
                              <CircleTextS2 text="Certifications ISO &SMETA* Certifications ISO &SMETA*" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-5">
                     <div className="event-item">
                        <div className="box-content" style={{ backgroundImage: `url(${EventBg2})`, height:'550px' }}>
                           {/* <h3 className="box-title">Organize Family <span>Celebrations</span></h3>
                           <p className="box-text">Family celebrations are special occasions that bring loved ones together
                              to create cherished memories Whether it’s a birthday, anniversary, reunion</p>
                           <Link onClick={ClickHandler} to="/event" className="th-btn style2 th-icon">SEE MORE</Link> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default EventArea;