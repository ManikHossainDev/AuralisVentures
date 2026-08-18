"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from "antd";

const images = [
  {
    src: "https://i.ibb.co.com/HTppp72W/image4.png",
    alt: "Hero Image 4",
  },
  {
    src: "https://i.ibb.co.com/0RGyhkm6/image3.png",
    alt: "Hero Image 3",
  },
  {
    src: "https://i.ibb.co.com/DHYw4PWG/image2.png",
    alt: "Hero Image 2",
  },
  {
    src: "https://i.ibb.co.com/bM5xY6tx/image1.png",
    alt: "Hero Image 1",
  },
  {
    src: "https://i.ibb.co.com/DPMVWF3m/eid-sale-03.png",
    alt: "Eid Sale 03",
  },
  {
    src: "https://i.ibb.co.com/tpRFTCxf/eid-sale-04.png",
    alt: "Eid Sale 04",
  },
  {
    src: "https://i.ibb.co.com/qXVbWNf/eid-sale-05.png",
    alt: "Eid Sale 05",
  },
  {
    src: "https://i.ibb.co.com/zW0sDVjf/eid-sale-06.png",
    alt: "Eid Sale 06",
  },
];

const Herosection: React.FC = () => {
  return (
    <section className="relative w-full">
      {/* Carousel */}
      <Carousel
        autoplay
        autoplaySpeed={2000}
        dots
        effect="scrollx"
      >
        {images.map((image, index) => (
          <div key={image.src}>
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-fill"
              />
            </div>
          </div>
        ))}
      </Carousel>

      {/* Fixed Shop Now Button */}
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-8 md:left-10 lg:left-16 z-20">
        <button
          type="button"
          className="rounded-md bg-[#00BBA7] px-5 py-2.5 text-sm font-semibold  text-white shadow-lg transition-all duration-300 hover:bg-[#00BBA7] hover:scale-105 sm:px-7 sm:py-3 sm:text-base"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Herosection;