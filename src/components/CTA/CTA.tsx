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
      className="relative mx-6 overflow-hidden rounded-3xl py-12 px-8 sm:px-16 bg-gradient-to-r from-elements-primary-main to-elements-primary-light shadow-md shadow-elements-primary-shadow my-10 md:my-16"
      variants={ctaVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-text-clear mb-6 tracking-tight leading-tight"
          variants={itemVariants}
        >
          Ready to Elevate Your Project?
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-text-clear mb-10 max-w-xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Collaborate to create something truly outstanding. Whether you’re
          starting fresh or refining, the right design and development will
          bring your vision to life.
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
            href="#portfolio"
            extraClassNames="text-text-clear hover:scale-105 transition-all duration-300 group min-w-[200px]"
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
