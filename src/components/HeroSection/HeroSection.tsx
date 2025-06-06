"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  HeroHighlight,
  Highlight,
} from "@/components/HeroHighlight/HeroHighlight";
import Button from "@/components/Button/Button";
import IconWrapper from "@/components/IconWrapper/IconWrapper";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { heroProjects, socialProofItems } from "@/data/heroData";

// Container animation variants for staggered children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

// Card animation variants for fade + slide up
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden pt-32 pb-12 sm:pt-48 sm:pb-48">
      <HeroHighlight>
        <div className="mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.6 }}
            className="text-balance text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary mb-6"
          >
            <span className="block mb-6">Bring Your Vision</span>
            <Highlight className="text-elements-secondary-main block px-2">
              To Life
            </Highlight>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-text-secondary leading-relaxed sm:max-w-2xl max-w-xs mx-auto py-8"
          >
            Make It Look transforms bold ideas into elegant digital and print
            experiences — designed to captivate, inspire, and convert.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mb-16"
          >
            <Button
              type="continue"
              href="#portfolio"
              extraClassNames="text-text-clear hover:scale-105 transition-all duration-300 group min-w-[200px]"
            >
              View Portfolio
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </motion.div>

          {/* Animated Project Cards */}
          <motion.div className="relative w-full overflow-hidden py-6">
            <motion.div
              className="flex gap-6 whitespace-nowrap"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {heroProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  className="inline-block w-[320px] flex-shrink-0"
                  variants={cardVariants}
                >
                  <div
                    className={`transform transition-transform duration-300 hover:rotate-0 rounded-xl
            ${index % 2 === 0 ? "rotate-3" : "-rotate-3"}`}
                  >
                    <ProjectCard
                      title={project.title}
                      image={project.image}
                      tags={project.tags}
                      className="w-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 text-sm text-text-secondary"
          >
            {socialProofItems.map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-dimmed-heavy shadow-lg transform transition-all duration-200 hover:scale-110 hover:rotate-3 border border-border-dimmed">
                  <IconWrapper
                    icon={item.icon}
                    className="h-4 w-4 transition-colors duration-200"
                  />
                </div>
                <span className="font-semibold">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </HeroHighlight>
    </section>
  );
};

export default HeroSection;
