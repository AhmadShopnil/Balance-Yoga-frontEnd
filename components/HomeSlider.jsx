"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HomeSlider() {
  const slides = [
    { img: "/images/slider1.jpg", title: "Find Your Inner Balance" },
    { img: "/images/slider2.jpg", title: "Yoga for Every Body" },
    { img: "/images/slider3.jpg", title: "Mindfulness & Wellness" },
  ];

  return (
    <section className="relative w-full h-[80vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[80vh]">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
                <h2 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg px-4">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
