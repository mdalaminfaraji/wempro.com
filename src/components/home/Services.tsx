"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Development",
    image: "/block_1.png",
    description:
      "Custom web solutions built with modern technologies for optimal performance and user experience.",
  },
  {
    id: 2,
    title: "E-Commerce",
    image: "/block_2.png",
    description:
      "Complete e-commerce solutions with secure payment gateways and inventory management systems.",
  },
  {
    id: 3,
    title: "Online Marketing",
    image: "/block_3.png",
    description:
      "Strategic digital marketing services to boost your online presence and reach target audiences.",
  },
  {
    id: 4,
    title: "Domain Registration and Hosting",
    image: "/block_4.png",
    description:
      "Reliable domain registration and hosting services with 24/7 technical support.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 50 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.2 },
                },
              }}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  priority={index < 2}
                />
              </div>
              <div className="px-6 pt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-justify">
                  {service.description}
                </p>
              </div>
              <div className="mx-auto p-6 max-w-[200px]">
                <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
