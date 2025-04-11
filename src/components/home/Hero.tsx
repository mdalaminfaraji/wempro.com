"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 text-center relative">
        {/* Clock Image */}
        <div className="flex justify-center mb-8 animate-float">
          <Image
            src="/clock.png"
            alt="Wempro Clock"
            width={200}
            height={200}
            className="object-contain"
            priority
          />
        </div>

        {/* Text Content */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Rethink Globally
        </h1>
        <p className="text-xl md:text-2xl text-yellow-400 mb-8">
          Optimizing a 360° Experience For Our Customer Worldwide
        </p>
      </div>
    </div>
  );
};

export default Hero;
