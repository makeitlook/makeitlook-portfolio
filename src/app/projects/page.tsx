"use client";

import React from "react";
import ProjectsGrid from "@/components/Projects/ProjectsGrid";
import SEO from "@/components/SEO/SEO";

const ProjectsIndex: React.FC = () => {
  return (
    <>
      <SEO
        title="Projects"
        description="Explore the latest design and development projects by Make It Look."
        url="https://makeitlook.co.uk/projects"
        image="/images/og-image.png"
      />
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <ProjectsGrid />
      </div>
    </>
  );
};

export default ProjectsIndex;
