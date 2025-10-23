import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ColorScheme = () => {


   useEffect(() => {
      const containers = gsap.utils.toArray('.th-parallax');
      containers.forEach(container => {
         const img = container.querySelector('img');
         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: container,
               scrub: true,
            }
         });

         tl.fromTo(img, {
            yPercent: -15,
            scale: 1.2,
            ease: 'none'
         }, {
            yPercent: 15,
            scale: 1.2,
            ease: 'none'
         });
      });

      return () => {
         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
   }, []);



   const [themeColor, setThemeColor] = useState('#bf930f');
   const [isSwitcherActive, setIsSwitcherActive] = useState(false);
   const predefinedColors = [
      '#2A07F9',
      '#068FFF',
      '#044DBC',
      '#FFAF00',
      '#F80000',
      '#231E7A',
   ];

   useEffect(() => {
      document.documentElement.style.setProperty('--theme-color', themeColor);
   }, [themeColor]);


   return (
      <div>
         <div className={`color-scheme ${isSwitcherActive ? 'active' : ''}`}>
            <button className="switchIcon" onClick={() => setIsSwitcherActive(!isSwitcherActive)}>
               <i className="fa-solid fa-palette"></i>
            </button>
            <h4 className="color-scheme-title">
               <i className="far fa-palette"></i> Color Switcher
            </h4>
            <p className="color-scheme-text">Check template with your color</p>

            <div className="color-switch-btns">
               {predefinedColors.map((color, index) => (
                  <button
                     key={index}
                     style={{ '--theme-color': color }}
                     data-color={color}
                     onClick={() => setThemeColor(color)}
                  >
                     <i className="fa-solid fa-droplet"></i>
                  </button>
               ))}
            </div>

            <p className="color-scheme-text">Or custom color..</p>
            <input
               type="color"
               id="thcolorpicker"
               value={themeColor}
               onChange={(e) => setThemeColor(e.target.value)}
            />
         </div>
      </div>
   );
};

export default ColorScheme;
