import BdVideo from '../../img/normal/cta-video.jpg';
import VideoModal from '../ModalVideo/ModalVideo';
const CtaArea = (props) => {
   return (
      <section className={'' +props.hclass} style={{ zIndex: 4,position: 'relative' }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="cta-area pe-xl-4 ps-xl-4">
                     <h2 className="sec-title text-white text-center d-inline-block mb-0">A Series Of Open-House Hotels Inspired
                        <span className="cta-img">
                           <img src={BdVideo} alt="" />
                           <VideoModal vidclass={'simple-btn popup-video'} />
                        </span> By The Diversity And
                        Originality Of The Streets And Scenes That Surround Us.
                     </h2>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default CtaArea;