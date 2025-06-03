"use client";
import React from "react";

export const FloatingElement = ({
  delay,
  children,
  className,
}: {
  delay: number;
  children: React.ReactNode;
  className: string;
}) => (
  <div
    className={`absolute animate-bounce ${className}`}
    style={{
      animationDelay: `${delay}ms`,
      animationDuration: "3s",
      animationIterationCount: "infinite",
    }}
  >
    {children}
  </div>
);
