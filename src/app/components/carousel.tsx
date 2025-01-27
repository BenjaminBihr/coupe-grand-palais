"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";

const ImageCarousel = () => {
     const [emblaRef] = useEmblaCarousel({
     loop: true,
     align: 'center',
     skipSnaps: false,
     },  [Autoplay()]);
    const images = [
     '/coupe-grand-palais/grand_palais_01.jpg',
     '/coupe-grand-palais/grand_palais_02.jpg',
     '/coupe-grand-palais/grand_palais_03.jpg',
     '/coupe-grand-palais/grand_palais_04.jpg',
     ];
      return (
         <div className="embla" ref={emblaRef}>
           <div className="embla__container">
           {images.map((image, index) => (
             <div key={index} className="embla__slide">
               <img 
               src={image} 
               alt={`Slide ${index + 1}`} 
               className="embla__slide__img rounded-lg" 
               />
             </div>
           ))}
           </div>
         </div>
       );
};
export default ImageCarousel;