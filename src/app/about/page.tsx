"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills, processSteps } from "@/data/aboutData";
import Image from "next/image";

// If you have specific icons, you might import them like this:
// import { BriefcaseIcon, LightBulbIcon, CodeIcon, RocketIcon } from '@heroicons/react/24/outline'; // Example

const About = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07, // Time delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // General fade-in from bottom animation for sections
  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 }, // Trigger when 20% of the element is in view
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-text-primary">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-20 md:mb-32">
        {/* Left - Sticky Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/2 md:sticky md:top-24"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text-primary">
            Helping people get their product{" "}
            <span className="text-elements-primary-main">professionally</span>{" "}
            designed.
          </h1>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2 prose prose-lg lg:prose-xl max-w-none text-text-secondary prose-headings:text-text-primary prose-headings:font-semibold prose-p:leading-relaxed"
        >
          <h2 className="text-2xl sm:text-3xl mb-4">My Story</h2>
          <p className="mb-6">
            I’m Aman — an engineer by training and a designer at heart. My
            journey began in a world of precision and problem-solving, but my
            true passion has always been creating polished, visually striking
            designs. Over time, I became the trusted expert for transforming
            ideas into sleek, professional visuals — whether it’s presentations,
            branding, or digital content.
          </p>

          <h2 className="text-2xl sm:text-3xl mb-4 mt-10">Philosophy</h2>
          <p className="mb-6">
            Great design isn't just about aesthetics—it's about creating a story
            that leaves a lasting impact. I approach every project with a blend
            of technical expertise and creative vision, ensuring that each
            detail is perfectly refined to match your unique vision.
          </p>

          <h2 className="text-2xl sm:text-3xl mb-4 mt-10">What I Do</h2>
          <p>
            At Make It Look, I turn your ideas into reality. I work one-on-one
            with clients to create designs that not only look good but also
            communicate a powerful message. My projects range from branding and
            marketing materials to digital assets that stand out in today's
            competitive landscape.
          </p>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.section
        {...sectionAnimation}
        className="py-16"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-text-primary"
          >
            My Skillset
          </h2>
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={itemVariants}
                className="bg-neutral-dimmed-heavy px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-border-dimmed text-text-secondary text-sm sm:text-base select-none cursor-default
                           hover:bg-elements-primary-main hover:text-elements-primary-contrastText hover:border-elements-primary-main transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* How I Work Section */}
      <motion.section
        {...sectionAnimation}
        className="mt-20 py-16 md:py-24"
        aria-labelledby="process-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl font-bold text-center mb-6 text-text-primary"
          >
            How I Work
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-12 md:mb-16 text-center max-w-2xl mx-auto">
            My process is designed to be collaborative and transparent, ensuring
            we're aligned every step of the way from concept to launch.
          </p>

          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
            {/* Step Selectors */}
            <div className="w-full lg:w-1/3 flex lg:flex-col gap-3 md:gap-4 justify-center lg:justify-start">
              {processSteps.map((step, i) => (
                <motion.button
                  key={step.id}
                  onClick={() => setActiveStep(i)}
                  className={`w-full p-3 md:p-4 rounded-lg text-left transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-elements-primary-main focus-visible:ring-opacity-50
                    ${
                      activeStep === i
                        ? "bg-elements-primary-main text-elements-primary-contrastText shadow-lg scale-105"
                        : "bg-neutral-dimmed-heavy hover:bg-opacity-80 text-text-primary shadow-sm hover:shadow-md border border-border-dimmed"
                    }`}
                  aria-pressed={activeStep === i}
                  whileHover={{ y: activeStep !== i ? -2 : 0 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    {/* step.icon */} {/* Uncomment if you add icons */}
                    <span className="font-semibold text-sm sm:text-base">{`0${
                      i + 1
                    }. ${step.title}`}</span>
                  </div>
                </motion.button>
              ))}
            </div>
            {/* Step Description */}

            <div className="w-full lg:w-2/3 min-h-[200px] md:min-h-[250px]">
              {/* Added min-height to reduce layout shift */}
              <motion.div
                key={activeStep} // Re-animate when step changes
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-card-background p-6 md:p-8 rounded-xl shadow-xl text-text-primary h-full flex flex-col justify-center"
              >
                {/* Image for the step */}
                <div className="mx-auto w-48 h-48 relative">
                  <Image
                    src={processSteps[activeStep].image} // make sure processSteps items have an image prop with valid path
                    alt={processSteps[activeStep].title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-elements-primary-main text-center">
                  {processSteps[activeStep].title}
                </h3>

                <p className="text-text-secondary leading-relaxed text-sm sm:text-base text-center">
                  {processSteps[activeStep].description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
