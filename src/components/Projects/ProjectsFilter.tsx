"use client";

import React from "react";
import Tag from "@/components/Tag/Tag";

interface ProjectsFilterProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const categories = [
  "Branding",
  "UI/UX",
  "Web",
  "Print",
  "Motion",
  "Presentation",
  "All",
];

const ProjectsFilter: React.FC<ProjectsFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
      {categories.map((category) => {
        const isActive =
          category.toLowerCase() === selectedCategory.toLowerCase() ||
          (category === "All" && selectedCategory === "");

        return (
          <Tag
            key={category}
            onClick={() =>
              setSelectedCategory(category === "All" ? "" : category)
            }
            selected={isActive}
            className="px-4 py-2 text-sm font-semibold"
          >
            {category}
          </Tag>
        );
      })}
    </div>
  );
};

export default ProjectsFilter;
