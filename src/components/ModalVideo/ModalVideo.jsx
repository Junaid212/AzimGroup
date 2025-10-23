import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';


const VideoModal = (props) => {

   const [isOpen, setOpen] = useState(false)

   return (
      <React.Fragment>
         <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="_sI_Ps7JSEk?si=BxGZUIlX3AwnCQVb" onClose={() => setOpen(false)} />

         <div className={"" +props.vidclass} onClick={() => setOpen(true)}
            data-type="iframe">
            <i className="fa-sharp fa-solid fa-play"></i>
         </div>
      </React.Fragment>
   )
}

export default VideoModal;