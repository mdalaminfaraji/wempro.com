"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      id="about"
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-600">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Wempro help clients exceed their business goals using online
                  marketing by creating brand compelling stories with content
                  that educates and entertains. We believe in treating your
                  business and work as if it were part of yours. At Wempro, we
                  do not cutting corners or practice unethical marketing
                  tactics. Our talented team of smart, creative and
                  results-focused professionals has developed methodologies for
                  tackling the most challenging digital marketing solutions.
                  Since 1999, we&apos;ve made it our mission to help businesses
                  grow online and watch that growth continue offline.
                </p>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-600">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  At WEMPRO, we believe in delivering only the best to our
                  customers since our foundation is based on &quot;Our Team =
                  Our Customers + Us&quot;. There is no way we could describe
                  our team without including our clients. Some of the top
                  innovators in their industries, our clients have tremendous
                  expectations and provide us with the challenges we crave.
                  It&apos;s an astoundingly effective collaboration that makes
                  our joint vision become reality and yields amazing results.
                  Our talented team of smart, creative and results-focused
                  professionals has developed methodologies.
                </p>
              </div>

              {/* Stats or Additional Info */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-green-600">
                  <h4 className="text-3xl font-bold text-green-600 mb-2">20+</h4>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-green-600">
                  <h4 className="text-3xl font-bold text-green-600 mb-2">500+</h4>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
