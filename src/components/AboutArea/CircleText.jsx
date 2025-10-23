import React, { useEffect, useRef } from "react";

const CircleText = ({ text }) => {
   const circleRef = useRef(null);

   useEffect(() => {
      const radius = window.innerWidth < 576 ? 168 : 255;
      const diameter = radius * 2;

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
         const xPos = radius * (1 + Math.cos(angleRad(currentAngle)));
         const yPos = radius * (1 + Math.sin(angleRad(currentAngle)));

         const transform = `translate(${xPos}px, ${yPos}px) rotate(${index * deltaAngle}deg)`;
         span.style.position = "absolute";
         span.style.transform = transform;
         span.style.transformOrigin = "0 0";

         currentAngle += deltaAngle;
         circle.appendChild(span);
      });
   }, [text]);

   return (

      <div className="curve-text">
         <div className="circle-text" ref={circleRef} />
      </div>
   );
};

export default CircleText;
