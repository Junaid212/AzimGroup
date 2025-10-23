
import Location from '../../img/icon/location-dot.svg';

const ContactMap = () => {
   return (
      <div className="contact-map2">
         <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d253232.72287723454!2d51.40294236458428!3d25.23633796017646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3e45c5bf1c5b1b51%3A0x643fc6f5ecc3e715!2sAzim%20Facilities%20Management%20%26%20Services%2C%20NBK%20Building%2C%20Office%2C%20805%208th%20Floor%2C%20Doha%2C%20Qatar!3m2!1d25.279608399999997!2d51.5274698!5e1!3m2!1sen!2sin!4v1761117925896!5m2!1sen!2sin"  allowFullScreen="" loading="lazy"></iframe>
         <div className="contact-icon">
            <img src={Location} alt="" />
         </div>
      </div>
   );
};

export default ContactMap;