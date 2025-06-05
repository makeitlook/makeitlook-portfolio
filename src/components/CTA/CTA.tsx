"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button/Button";
import { ArrowRight } from "lucide-react";

export const CTA: React.FC = () => {
  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="relative mx-6 overflow-hidden rounded-3xl py-12 px-8 sm:px-16 bg-gradient-to-br from-elements-primary-main via-elements-primary-light to-elements-primary-main shadow-xl shadow-elements-primary-shadow/30 my-10 md:my-16"
      variants={ctaVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Bold Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Strong Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10" />

        {/* Large Geometric Shapes */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/15 rounded-full blur-xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-white/8 transform rotate-45 blur-xl" />

        {/* Circuit-like Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 400"
            fill="none"
          >
            {/* Horizontal Lines */}
            <line
              x1="0"
              y1="100"
              x2="200"
              y2="100"
              stroke="white"
              strokeWidth="2"
              opacity="0.4"
            />
            <line
              x1="250"
              y1="100"
              x2="400"
              y2="100"
              stroke="white"
              strokeWidth="2"
              opacity="0.4"
            />
            <line
              x1="450"
              y1="100"
              x2="600"
              y2="100"
              stroke="white"
              strokeWidth="2"
              opacity="0.4"
            />
            <line
              x1="650"
              y1="100"
              x2="800"
              y2="100"
              stroke="white"
              strokeWidth="2"
              opacity="0.4"
            />

            <line
              x1="0"
              y1="200"
              x2="150"
              y2="200"
              stroke="white"
              strokeWidth="2"
              opacity="0.3"
            />
            <line
              x1="200"
              y1="200"
              x2="350"
              y2="200"
              stroke="white"
              strokeWidth="2"
              opacity="0.3"
            />
            <line
              x1="400"
              y1="200"
              x2="550"
              y2="200"
              stroke="white"
              strokeWidth="2"
              opacity="0.3"
            />
            <line
              x1="600"
              y1="200"
              x2="800"
              y2="200"
              stroke="white"
              strokeWidth="2"
              opacity="0.3"
            />

            <line
              x1="0"
              y1="300"
              x2="180"
              y2="300"
              stroke="white"
              strokeWidth="2"
              opacity="0.3"
            />
            <line
              x1="230"
              y1="300"
              x2="380"
              y2="300"
              stroke="white"
              strokeWidth="2"
              opacity="0.3"
            />
            <line
              x1="430"
              y1="300"
              x2="580"
              y2="300"
              stroke="white"
              strokeWidth="2"
              opacity="0.3"
            />
            <line
              x1="630"
              y1="300"
              x2="800"
              y2="300"
              stroke="white"
              strokeWidth="2"
              opacity="0.3"
            />

            {/* Vertical Connectors */}
            <line
              x1="200"
              y1="100"
              x2="200"
              y2="200"
              stroke="white"
              strokeWidth="2"
              opacity="0.3"
            />
            <line
              x1="350"
              y1="200"
              x2="350"
              y2="300"
              stroke="white"
              strokeWidth="2"
              opacity="0.3"
            />
            <line
              x1="550"
              y1="200"
              x2="550"
              y2="300"
              stroke="white"
              strokeWidth="2"
              opacity="0.3"
            />
            <line
              x1="180"
              y1="300"
              x2="180"
              y2="400"
              stroke="white"
              strokeWidth="2"
              opacity="0.3"
            />

            {/* Circuit Nodes */}
            <circle cx="200" cy="100" r="4" fill="white" opacity="0.6" />
            <circle cx="350" cy="200" r="4" fill="white" opacity="0.6" />
            <circle cx="550" cy="200" r="4" fill="white" opacity="0.6" />
            <circle cx="180" cy="300" r="4" fill="white" opacity="0.6" />

            {/* Small squares as components */}
            <rect
              x="220"
              y="95"
              width="10"
              height="10"
              fill="white"
              opacity="0.4"
            />
            <rect
              x="370"
              y="195"
              width="10"
              height="10"
              fill="white"
              opacity="0.4"
            />
            <rect
              x="570"
              y="195"
              width="10"
              height="10"
              fill="white"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Prominent Geometric Accents */}
        <div className="absolute top-12 right-16 w-8 h-8 border-2 border-white/40 rotate-45" />
        <div className="absolute bottom-16 left-12 w-6 h-20 bg-white/25 rounded-full transform -rotate-12" />
        <div
          className="absolute top-1/3 left-8 w-12 h-12 bg-white/20"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
        <div className="absolute bottom-1/4 right-12 w-10 h-10 border-2 border-white/30 rounded-full" />

        {/* Diagonal Light Streaks */}
        <div className="absolute top-0 left-1/4 w-1 h-2/3 bg-gradient-to-b from-white/40 to-transparent transform rotate-12" />
        <div className="absolute bottom-0 right-1/3 w-1 h-1/2 bg-gradient-to-t from-white/35 to-transparent transform -rotate-12" />
        <div className="absolute top-1/4 right-1/4 w-1 h-1/3 bg-gradient-to-b from-white/30 to-transparent transform rotate-45" />

        {/* Animated Elements */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-white/50 rounded-full animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-2 h-2 bg-white/40 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-12 w-2 h-2 bg-white/45 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-text-clear mb-6 tracking-tight leading-tight drop-shadow-sm"
          variants={itemVariants}
        >
          Ready to Elevate Your Project?
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-text-clear/90 mb-10 max-w-xl mx-auto leading-relaxed drop-shadow-sm"
          variants={itemVariants}
        >
          Let’s collaborate to create something remarkable. Whether you’re
          starting fresh or elevating your brand, the perfect design and
          development will bring your vision to life.
        </motion.p>

        {/* Your Button component usage inside motion wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <Button
            type="undo"
            href="#contact"
            extraClassNames="text-text-clear hover:scale-105 transition-all duration-300 group min-w-[200px] shadow-lg hover:shadow-xl backdrop-blur-sm"
          >
            Get in Touch
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CTA;
