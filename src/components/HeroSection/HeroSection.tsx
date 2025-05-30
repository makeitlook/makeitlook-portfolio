"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  HeroHighlight,
  Highlight,
} from "@/components/HeroHighlight/HeroHighlight";
import Button from "@/components/Button/Button";
import IconWrapper from "@/components/IconWrapper/IconWrapper";
import { LuClock, LuMessageCircle, LuShield } from "react-icons/lu";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-full px-4 pt-32 pb-24 sm:pt-48 sm:pb-32 overflow-hidden">
      <HeroHighlight>
        <div className="mx-auto max-w-5xl text-center">
          {/* Premium badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-neutral-dimmed text-text-secondary border border-border-main">
              ✨ Premium Design Studio
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-balance text-center text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary mb-12"
          >
            <div className="mb-6">Bring Your Vision</div>
            <Highlight className="text-elements-secondary-main block px-2">
              To Life
            </Highlight>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-secondary leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Transform your ideas into sophisticated, polished designs that make
            an impact. From branding to digital content, every detail is crafted
            to perfection.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="#contact-section">
              <Button
                variant="standard"
                extraClassNames="text-text-clear py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group min-w-[200px]"
              >
                Start Your Project
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Button>
            </Link>

            <Link href="#portfolio">
              <Button
                variant="standard"
                extraClassNames="text-text-clear py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group min-w-[200px]"
              >
                View Portfolio
              </Button>
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-secondary"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-elements-secondary-dimmed to-elements-secondary-shadow-heavy flex items-center justify-center shadow-sm">
                <IconWrapper
                  icon={LuClock}
                  className="h-4 w-4 text-text-clear"
                />
              </div>
              <span className="font-medium">Fast Turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-elements-secondary-dimmed to-elements-secondary-shadow-heavy flex items-center justify-center shadow-sm">
                <IconWrapper
                  icon={LuShield}
                  className="h-4 w-4 text-text-clear"
                />
              </div>
              <span className="font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-elements-secondary-dimmed to-elements-secondary-shadow-heavy flex items-center justify-center shadow-sm">
                <IconWrapper
                  icon={LuMessageCircle}
                  className="h-4 w-4 text-text-clear"
                />
              </div>
              <span className="font-medium">Free Consultation</span>
            </div>
          </motion.div>
        </div>
      </HeroHighlight>
    </section>
  );
};

export default HeroSection;
