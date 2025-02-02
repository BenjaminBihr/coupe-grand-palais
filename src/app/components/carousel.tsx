"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const ImageCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay()]
  );
  const images = [
    "/grand_palais_01.jpg",
    "/grand_palais_02.jpg",
    "/grand_palais_03.jpg",
    "/grand_palais_04.jpg",
  ];
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image, index) => (
          <div key={index} className="embla__slide">
            <Image
              className="embla__slide__img rounded-lg"
              src={image}
              alt={`Slide ${index + 1}`}
              width={800}
              height={500}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageCarousel;
