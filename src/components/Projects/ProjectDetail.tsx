"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Clock, Tag } from "lucide-react";
import RelatedProjects from "@/components/Projects/RelatedProjects";
import IconWrapper from "@/components/IconWrapper/IconWrapper";
import AnimatedDiv from "@/components/AnimatedDiv/AnimatedDiv";
import { motion, useInView } from "framer-motion";

interface CompanyInfo {
  id: number | string;
  title: string;
  details: string;
}

interface Technology {
  title: string;
  techs: string[];
}

interface ProjectDetails {
  id: number | string;
  details: string;
}

interface ProjectInfo {
  ClientHeading: string;
  CompanyInfo: CompanyInfo[];
  ObjectivesHeading: string;
  ObjectivesDetails: string;
  Technologies: Technology[];
  ProjectDetailsHeading: string;
  ProjectDetails: ProjectDetails[];
}

interface ProjectImage {
  id: number | string;
  image: string;
  title: string;
}

interface Project {
  id: number | string;
  title: string;
  ProjectHeader: {
    title: string;
    publishDate: string;
    tags: string;
  };
  ProjectImages: ProjectImage[];
  ProjectInfo: ProjectInfo;
}

interface ProjectDetailProps {
  project: Project;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const headerRef = useRef(null);
  const imagesRef = useRef(null);
  const infoRef = useRef(null);
  const detailsRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  const imagesInView = useInView(imagesRef, { once: true, amount: 0.3 });
  const infoInView = useInView(infoRef, { once: true, amount: 0.3 });
  const detailsInView = useInView(detailsRef, { once: true, amount: 0.3 });

  return (
    <div className="max-w-7xl mx-auto px-4 pt-16">
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-text-primary mb-7 mt-14 sm:mt-20">
          {project.ProjectHeader.title}
        </p>
        <div className="flex gap-10 mb-6">
          <div className="flex items-center gap-2">
            <IconWrapper icon={Clock} className="text-xl text-text-secondary" />
            <span className="font-general-regular text-text-primary leading-none">
              {project.ProjectHeader.publishDate}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <IconWrapper icon={Tag} className="w-4 h-4 text-text-secondary" />
            <span className="font-general-regular text-text-primary leading-none">
              {project.ProjectHeader.tags}
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={imagesRef}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
        initial="hidden"
        animate={imagesInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.25 }, // slower stagger (previously 0.15)
          },
        }}
      >
        {project.ProjectImages.map((image) => (
          <motion.div
            key={image.id}
            className="mb-10 sm:mb-0 rounded-xl overflow-hidden shadow-lg"
            variants={fadeInUp}
          >
            <Image
              src={image.image}
              alt={image.title}
              layout="responsive"
              width={100}
              height={90}
              className="object-cover rounded-xl"
              priority
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-10 mt-14">
        <motion.div
          ref={infoRef}
          className="sm:w-1/3 text-text-primary"
          initial="hidden"
          animate={infoInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.2,
                ease: "easeOut",
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.div variants={fadeInUp} className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-text-secondary mb-2">
              {project.ProjectInfo.ClientHeading}
            </p>
            <ul className="leading-loose">
              {project.ProjectInfo.CompanyInfo.map((info) => (
                <li
                  key={info.id}
                  className="font-general-regular text-text-secondary"
                >
                  <span>{info.title}: </span>
                  <a
                    href={
                      info.details.startsWith("http") ? info.details : undefined
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      info.title === "Website" || info.title === "Phone"
                        ? "hover:underline hover:text-elements-primary-main cursor-pointer transition-colors duration-300"
                        : ""
                    }
                    aria-label={`${info.title} Link`}
                  >
                    {info.details}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-text-secondary mb-2">
              {project.ProjectInfo.ObjectivesHeading}
            </p>
            <p className="font-general-regular text-text-primary">
              {project.ProjectInfo.ObjectivesDetails}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-text-secondary mb-2">
              {project.ProjectInfo.Technologies[0].title}
            </p>
            <p className="font-general-regular text-text-primary">
              {project.ProjectInfo.Technologies[0].techs.join(", ")}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          ref={detailsRef}
          className="sm:w-2/3 text-text-primary mt-10 sm:mt-0"
          initial="hidden"
          animate={detailsInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <p className="text-text-primary text-2xl font-bold mb-7">
            {project.ProjectInfo.ProjectDetailsHeading}
          </p>
          {project.ProjectInfo.ProjectDetails.map((detail) => (
            <p
              key={detail.id}
              className="font-general-regular mb-5 text-lg text-text-secondary"
            >
              {detail.details}
            </p>
          ))}
        </motion.div>
      </div>

      <RelatedProjects projects={[]} />
    </div>
  );
};

export default ProjectDetail;
