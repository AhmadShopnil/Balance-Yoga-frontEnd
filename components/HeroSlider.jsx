"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      title: "Experienced Instructor in Bangladesh",
      desc: "Learn the art of balance, breathing, and mindfulness. Start your transformation journey today with guided yoga practices tailored to your lifestyle.",
      btnText: "Contact Today",
      bg: "/images/service/2.jpg",
    },
    {
      id: 2,
      title: "Yoga for Mind & Body",
      desc: "Reconnect with yourself through mindful yoga sessions. Build strength, flexibility, and inner peace with Balance Yoga.",
      btnText: "Join a Class",
      bg: "/images/service/3.jpg",
    },
    {
      id: 3,
      title: "Start Your Wellness Journey",
      desc: "Balance Yoga helps you achieve harmony with a mix of traditional and modern practices. Begin today!",
      btnText: "Get Started",
      bg: "/images/service/4.jpg",
    },
  ];

  return (
    <section className="relative w-full h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[90vh]">
              {/* Background Image */}
              <Image
                src={slide.bg}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center px-6">
                <div className="text-white max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 mb-8">
                    {slide.desc}
                  </p>
                  <a
                    href="#contact"
                    className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
                  >
                    {slide.btnText}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
