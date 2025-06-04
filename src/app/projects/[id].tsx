"use client";

import React from "react";
import Image from "next/image";
import { FiClock, FiTag } from "react-icons/fi";
import RelatedProjects from "@/components/Projects/RelatedProjects";
import IconWrapper from "@/components/IconWrapper/IconWrapper";

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
  SocialSharingHeading: string;
  // SocialSharing?: { icon: React.ReactNode; url: string }[]; // Uncomment if needed
  ProjectDetailsHeading: string;
  ProjectDetails: ProjectDetails[];
}

interface ProjectImage {
  id: number | string;
  img: string;
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

interface ProjectSingleProps {
  project: Project;
}

const ProjectSingle: React.FC<ProjectSingleProps> = ({ project }) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-text-primary mb-7 mt-14 sm:mt-20">
          {project.ProjectHeader.title}
        </p>
        <div className="flex gap-10 mb-6">
          <div className="flex items-center gap-2">
            <IconWrapper
              icon={FiClock}
              className="text-xl text-text-secondary"
            />
            <span className="font-general-regular text-text-primary leading-none">
              {project.ProjectHeader.publishDate}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <IconWrapper icon={FiTag} className="w-4 h-4 text-text-secondary" />
            <span className="font-general-regular text-text-primary leading-none">
              {project.ProjectHeader.tags}
            </span>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        {project.ProjectImages.map((image) => (
          <div
            key={image.id}
            className="mb-10 sm:mb-0 rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >
            <Image
              src={image.img}
              alt={image.title}
              layout="responsive"
              width={100}
              height={90}
              className="object-cover rounded-xl"
              priority
            />
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="flex flex-col sm:flex-row gap-10 mt-14">
        <div className="sm:w-1/3 text-text-primary">
          {/* Client Details */}
          <div className="mb-7">
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
          </div>

          {/* Objectives */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-text-secondary mb-2">
              {project.ProjectInfo.ObjectivesHeading}
            </p>
            <p className="font-general-regular text-text-primary">
              {project.ProjectInfo.ObjectivesDetails}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-text-secondary mb-2">
              {project.ProjectInfo.Technologies[0].title}
            </p>
            <p className="font-general-regular text-text-primary">
              {project.ProjectInfo.Technologies[0].techs.join(", ")}
            </p>
          </div>

          {/* Social Sharing (commented out, uncomment if needed) */}
          {/* <div>
            <p className="font-general-regular text-2xl font-semibold text-text-secondary mb-2">
              {project.ProjectInfo.SocialSharingHeading}
            </p>
            <div className="flex items-center gap-3 mt-5">
              {project.ProjectInfo.SocialSharing?.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share Project"
                  className="bg-background-secondary text-text-secondary hover:text-text-primary p-2 rounded-lg shadow-sm transition duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div> */}
        </div>

        {/* Project Details */}
        <div className="sm:w-2/3 text-text-primary mt-10 sm:mt-0">
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
        </div>
      </div>

      <RelatedProjects projects={[]} />
    </div>
  );
};

export default ProjectSingle;
