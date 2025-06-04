// components/IconWrapper.tsx
"use client";
import React from "react";
import { LucideIcon } from "lucide-react";

interface IconWrapperProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  icon: Icon,
  size = 24,
  className = "",
}) => {
  return React.createElement(Icon as any, {
    size,
    className,
    "aria-hidden": true,
  });
};

export default IconWrapper;
