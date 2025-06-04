import React from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ children, className = "" }) => {
  return (
    <span
      className={cn(
        "px-3 py-1 text-xs font-medium rounded-full bg-neutral-dimmed text-text-tertiary border border-border-dimmed",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Tag;
