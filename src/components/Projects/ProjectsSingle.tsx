"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/Tag";

interface ProjectSingleProps {
  id: number | string;
  title: string;
  description?: string;
  img: string; // rename from image to img here
  tags?: string[];
  url: string;
}

const ProjectSingle: React.FC<ProjectSingleProps> = ({
  title,
  description,
  img,
  tags = [],
  url,
}) => {
  return (
    <article className="bg-card-background rounded-3xl border border-border-dimmed shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover rounded-t-3xl"
          priority
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-text-secondary flex-grow mb-4">{description}</p>
        )}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <Tag key={i} className="bg-background-secondary">
              {tag}
            </Tag>
          ))}
        </div>
        <Link
          href={`/projects/${url}`}
          className="mt-auto inline-block text-elements-primary-main font-semibold hover:underline"
        >
          View Project →
        </Link>
      </div>
    </article>
  );
};

export default ProjectSingle;
