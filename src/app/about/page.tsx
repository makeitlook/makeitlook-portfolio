"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

const About = () => {
  const heroRef = useRef(null);
  const { scrollYProgress: pageScrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const heroBgParallaxY = useTransform(
    pageScrollYProgress,
    [0, 1],
    ["0%", "-30%"]
  );

  return (
    <div className="text-text-primary">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32 text-center"
      >
        <motion.div
          style={{ y: heroBgParallaxY }}
          className="absolute inset-0 -z-10 bg-neutral-dimmed"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-semibold tracking-tight sm:text-6xl"
        >
          Make It Look
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-2xl text-lg text-text-secondary sm:text-xl"
        >
          Strategic Design. Measurable Results.
        </motion.p>
      </motion.section>

      {/* Mission Section */}
      <section className="py-24 px-6 sm:py-32 bg-background text-text-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Our Guiding Philosophy
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            We believe great design is more than aesthetics; it's a strategic
            asset that solves problems, communicates clearly, and drives growth.
          </p>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-24 px-6 sm:py-32 bg-neutral-100 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12">
            The Aman Advantage
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            {["Creative Precision", "Tailored Approach", "Results-Driven"].map(
              (title, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.2 }}
                  className="text-left md:text-center"
                >
                  <h3 className="text-xl font-semibold text-elements-primary-main mb-2">
                    {title}
                  </h3>
                  <p className="text-text-secondary">
                    {title === "Creative Precision" &&
                      "We combine design flair with engineering discipline to ensure your projects are as functional as they are beautiful."}
                    {title === "Tailored Approach" &&
                      "Every brand is unique. We take time to understand yours, crafting solutions that reflect your identity and goals."}
                    {title === "Results-Driven" &&
                      "Our work doesn’t just look good — it performs. We design with purpose and measure success with impact."}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 sm:py-32 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-12">
            Our Collaborative Process
          </h2>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-4 bg-white dark:bg-neutral-900 shadow-md rounded-lg p-6"
          >
            <span className="text-3xl font-bold text-elements-primary-main">
              01
            </span>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-text-primary">
                Discovery & Strategy
              </h3>
              <p className="text-text-secondary">
                Understanding your goals, audience, and challenges to build a
                solid foundation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-elements-primary-main py-20 text-center text-white sm:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl sm:text-4xl font-semibold mb-6"
        >
          Ready to Create Something Amazing?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl mb-8 max-w-xl mx-auto"
        >
          Let's discuss how we can bring your vision to life with impactful
          design.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4 }}
          className="rounded-lg bg-white px-8 py-3 font-semibold text-elements-primary-main shadow-md transition-colors duration-300 hover:bg-gray-100"
        >
          Get In Touch
        </motion.button>
      </section>
    </div>
  );
};

export default About;
