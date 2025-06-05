"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/Tag";

interface ProjectCardProps {
  title: string;
  image: string;
  tags?: string[];
  className?: string;
  url?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  tags = [],
  className = "",
  url,
}) => {
  const content = (
    <>
      {/* Full background image */}
      <Image
        src={image}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 40vw, 360px"
        priority={false}
        className="transform transition-transform duration-500 will-change-transform hover:scale-105"
      />

      {/* Gradient fade overlay: transparent top to white bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 1) 95%)",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-neutral-dimmed-heavy bg-opacity-20 transition-opacity duration-500 hover:bg-opacity-30" />

      {/* Text container bottom-left */}
      <div className="absolute bottom-6 left-6 right-6 text-text-primary z-10">
        <h3 className="text-lg font-semibold mb-2 text-left">{title}</h3>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <Tag key={idx}>{tag}</Tag>
            ))}
          </div>
        )}
      </div>
    </>
  );

  if (url) {
    return (
      <Link
        href={`/projects/${url}`}
        className={`relative rounded-3xl overflow-hidden shadow-lg ${className} cursor-pointer group block`}
        style={{ aspectRatio: "1 / 1.2" }}
      >
        {content}
      </Link>
    );
  }

  // If no url, just render the div normally
  return (
    <div
      className={`relative rounded-3xl overflow-hidden shadow-lg ${className} cursor-default`}
      style={{ aspectRatio: "1 / 1.2" }}
    >
      {content}
    </div>
  );
};

export default ProjectCard;
