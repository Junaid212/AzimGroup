import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';
import React, { useEffect, useRef } from 'react';

import img1 from '../../img/gallery/gallery_1_1.jpg';
import img2 from '../../img/gallery/gallery_1_2.jpg';
import img3 from '../../img/gallery/gallery_1_3.jpg';
import img4 from '../../img/gallery/gallery_1_4.jpg';
import img5 from '../../img/gallery/gallery_1_5.jpg';
import img6 from '../../img/gallery/gallery_1_6.jpg';
import img7 from '../../img/gallery/gallery_1_7.jpg';
import img8 from '../../img/gallery/gallery_1_8.jpg';

const GalleryData = [
   {
      id: 1,
      Image: img1,
   },
   {
      id: 2,
      Image: img2,
   },
   {
      id: 3,
      Image: img3,
   },
   {
      id: 4,
      Image: img4,
   },
   {
      id: 5,
      Image: img5,
   }, {
      id: 6,
      Image: img6,
   }, {
      id: 7,
      Image: img7,
   },
   {
      id: 8,
      Image: img8,
   },
]


const Gallery = () => {
   const gridRef = useRef(null);
   const isoRef = useRef(null);

   useEffect(() => {
      const grid = gridRef.current;

      imagesLoaded(grid, () => {
         isoRef.current = new Isotope(grid, {
            itemSelector: '.filter-item',
            filter: '*',
            masonry: {
               columnWidth: 1,
            },
         });
      });

      return () => {
         if (isoRef.current) isoRef.current.destroy();
      };
   }, []);

   const handleFilter = (filterValue) => {
      isoRef.current.arrange({ filter: filterValue });
   };

   return (
      <div className="row gallery-row filter-active" ref={gridRef}>
         {GalleryData.map((Gimg, i) => (
            <div key={i} className="col-md-6 col-xxl-auto filter-item">
               <div className="gallery-insta">
                  <a
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://www.instagram.com/"
                     className="box-btn"
                  >
                     <i className="fab fa-instagram"></i>
                  </a>
                  <img src={Gimg.Image} alt="Gallery" />
               </div>
            </div>
         ))}
      </div>
   );
};

export default Gallery;
