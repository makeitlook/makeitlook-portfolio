"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import ProjectsFilter from "@/components/Projects/ProjectsFilter";
import { projectsData, Project } from "@/data/projectsData";
import IconWrapper from "@/components/IconWrapper/IconWrapper";
import { Pencil } from "lucide-react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

const ProjectsGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredProjects = selectedCategory
    ? projectsData.filter(
        (project) =>
          project.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : projectsData;

  const searchedProjects = filteredProjects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="pb-24">
      <div className="text-center mb-16 relative">
        <div className="inline-flex items-center gap-2 text-elements-secondary-main mb-4">
          <Pencil className="w-8 h-8 text-elements-primary-main animate-pulse" />
          <span className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
            Recent Work
          </span>
        </div>
        <h2 className="text-6xl font-bold mb-6 text-text-primary">Portfolio</h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Search projects by title or filter by category
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-elements-primary-main rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 mx-auto px-4">
        <div className="flex items-center gap-2 border border-border-dimmed rounded-lg px-3 py-2 w-full sm:max-w-xs bg-background-secondary">
          <IconWrapper icon={Search} className="text-text-secondary w-5 h-5" />
          <input
            type="search"
            aria-label="Search projects"
            placeholder="Search projects"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none text-text-primary w-full text-sm"
          />
        </div>

        {/* <ProjectsFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        /> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {searchedProjects.length > 0 ? (
          searchedProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))
        ) : (
          <p className="text-center col-span-full text-text-secondary">
            No projects found matching your criteria.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
