"use client";
import React from "react";
import Image from "next/image";
import Tag from "@/components/Tag/Tag";

interface ProjectCardProps {
  title: string;
  image: string; // ideally an imported static file or a string URL
  tags?: string[];
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  tags = [],
  className = "",
}) => {
  return (
    <div
      className={`relative h-full bg-card-background backdrop-blur-sm border border-border-dimmed rounded-3xl my-2 p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2 overflow-hidden ${className}`}
    >
      <div className="relative w-full h-40 sm:h-44 mb-4 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 40vw, 360px"
          priority={false} // set true only for above-the-fold images
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-1">
          {title}
        </h3>
        {tags.length > 0 && (
          <div className="space-x-2">
            {tags.map((tag, idx) => (
              <Tag key={idx}>{tag}</Tag>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
