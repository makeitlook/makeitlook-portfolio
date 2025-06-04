"use client";

import React from "react";
import ProjectSingle from "@/components/Projects/ProjectsSingle";

interface RelatedProjectsProps {
  projects: Array<{
    id: string | number;
    title: string;
    description?: string;
    img: string;
    category: string;
    tags?: string[];
    link?: string;
  }>;
}

const RelatedProjects: React.FC<RelatedProjectsProps> = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="mt-20 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-text-primary text-center">
        Related Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectSingle key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProjects;
