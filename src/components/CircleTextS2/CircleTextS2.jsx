import { useEffect, useRef } from "react";

const CircleTextS2 = ({ text }) => {
   const circleRef = useRef(null);

   useEffect(() => {
      const diameter = 170;
      const radius = diameter / 2;

      const circle = circleRef.current;
      if (!circle || !text) return;

      circle.style.width = `${diameter}px`;
      circle.style.height = `${diameter}px`;
      circle.innerHTML = "";

      const characters = text.split("");
      const deltaAngle = 360 / characters.length;
      let currentAngle = -90;

      characters.forEach((char, index) => {
         const span = document.createElement("span");
         span.innerText = char;

         const angleRad = (angle) => angle * (Math.PI / 180);
         const xPos = radius + radius * Math.cos(angleRad(currentAngle));
         const yPos = radius + radius * Math.sin(angleRad(currentAngle));

         span.style.position = "absolute";
         span.style.transform = `translate(${xPos}px, ${yPos}px) rotate(${currentAngle + 90}deg)`;
         span.style.transformOrigin = "0 0";

         currentAngle += deltaAngle;
         circle.appendChild(span);
      });
   }, [text]);

   return (
      <div className="anim">
         <div className="discount-tag">
            <div className="discount-anime" ref={circleRef} style={{ position: "relative" }} />
         </div>
      </div>
   );
};

export default CircleTextS2;
