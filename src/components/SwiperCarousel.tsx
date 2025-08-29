"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface SwiperCarouselProps {
  images: string[];
  projectTitle: string;
}

export default function SwiperCarousel({
  images,
  projectTitle,
}: SwiperCarouselProps) {
  const settings = {
    modules: [Navigation, Pagination],
    navigation: true,
    pagination: { clickable: true },
    slidesPerView: 1,
    spaceBetween: 30,
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="h-[400px] sm:h-[500px] rounded-lg overflow-hidden relative">
        <Swiper {...settings}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[400px] sm:h-[500px] w-full max-w-[1000px] mx-auto bg-slate-900">
                <Image
                  src={image}
                  alt={`Скріншот проєкту ${projectTitle} ${index + 1}`}
                  fill
                  className="object-contain"
                  priority={index === 0} // швидше завантаження першого
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
