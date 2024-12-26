"use client";
import React, { useState } from "react";
import { Swiper as SwiperObj } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./slideshow.css";

import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const Slideshow = ({ images, title, className = "" }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObj>();
  return (
    <div className={`col-span-1 md:col-span-2 ${className}`}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={`${title}-image-${index}`}>
            <Image
              alt={`${title}-image-${index}`}
              src={`/products/${imgSrc}`}
              width={500}
              height={400}
              className="rounded-lg object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={`${title}-image-${index}`}>
            <Image
              alt={`${title}-image-${index}`}
              src={`/products/${imgSrc}`}
              width={200}
              height={400}
              className="rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
