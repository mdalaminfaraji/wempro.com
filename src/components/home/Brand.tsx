"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const brands = [
  {
    id: 1,
    name: "Gurus4Gadgets",
    image: "/brands/brand_1.png",
  },
  {
    id: 2,
    name: "Bankruptcy Attorney",
    image: "/brands/brand_2.png",
  },
  {
    id: 3,
    name: "Taqueria Carnitas",
    image: "/brands/brand_3.png",
  },
  {
    id: 4,
    name: "Burt Process Equipment",
    image: "/brands/brand_4.png",
  },
  {
    id: 5,
    name: "Xpress Office Furniture",
    image: "/brands/brand_5.png",
  },
  {
    id: 6,
    name: "Xpress Office Furniture",
    image: "/brands/brand_6.png",
  },
  {
    id: 7,
    name: "Xpress Office Furniture",
    image: "/brands/brand_7.png",
  },
  {
    id: 8,
    name: "Xpress Office Furniture",
    image: "/brands/brand_8.png",
  },
];

export default function Brand() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      id="brands"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Brands</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our clients are our family. At Wempro, our clients are the center of
            attention. Our dedication and attention to detail has not only
            helped us grow increasingly closer together, but it has also
            propelled many businesses across the world forward.
          </p>
        </motion.div>

        {/* Brands Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="py-8"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="bg-white rounded-lg shadow-md p-6 h-40 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
