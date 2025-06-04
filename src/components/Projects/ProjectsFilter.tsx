"use client";

import React from "react";
import { projectCategories } from "@/data/projectFilters";

interface ProjectsFilterProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}


const ProjectsFilter: React.FC<ProjectsFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
      {projectCategories.map((category) => {
        const isActive =
          category.toLowerCase() === selectedCategory.toLowerCase() ||
          (category === "All" && selectedCategory === "");

        return (
          <button
            key={category}
            onClick={() =>
              setSelectedCategory(category === "All" ? "" : category)
            }
            className={`px-4 py-2 rounded-full text-sm font-semibold transition 
              ${
                isActive
                  ? "bg-elements-primary-main text-elements-primary-contrastText shadow-md"
                  : "bg-background-secondary text-text-secondary hover:bg-background-primary hover:text-text-primary"
              }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectsFilter;
