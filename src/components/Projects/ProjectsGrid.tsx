"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectsFilter from "@/components/Projects/ProjectsFilter";
import ProjectSingle from "@/components/Projects/ProjectsSingle";
import { projectsData, Project } from "@/data/projectsData";
import IconWrapper from "@/components/IconWrapper/IconWrapper";

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
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary">
          Projects Portfolio
        </h2>
        <p className="text-text-secondary mt-2">
          Search projects by title or filter by category
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-2 border border-border-dimmed rounded-lg px-3 py-2 w-full sm:max-w-xs bg-background-secondary">
          <IconWrapper
            icon={FiSearch}
            className="text-text-secondary w-5 h-5"
          />
          <input
            type="search"
            aria-label="Search projects"
            placeholder="Search projects"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none text-text-primary w-full text-sm"
          />
        </div>

        <ProjectsFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {searchedProjects.length > 0 ? (
          searchedProjects.map((project) => (
            <ProjectSingle key={project.id} {...project} />
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
