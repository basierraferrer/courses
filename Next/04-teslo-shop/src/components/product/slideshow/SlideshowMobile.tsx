"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

import "./slideshow.css";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const SlideshowMobile = ({ images, title, className = "" }: Props) => {
  return (
    <div className={className}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper2"
        style={{
          width: "100vw",
          height: "500px",
        }}
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={`${title}-image-${index}`}>
            <Image
              alt={`${title}-image-${index}`}
              src={`/products/${imgSrc}`}
              width={600}
              height={500}
              className="object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
