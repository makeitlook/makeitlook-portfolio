// components/AutoScrollRow.tsx
"use client";
import React, { useRef } from "react";
import { useMotionValue, useTransform, useAnimationFrame } from "framer-motion";

interface AutoScrollRowProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const AutoScrollRow: React.FC<AutoScrollRowProps> = ({
  children,
  speed = 0.5, // default speed (pixels per frame)
  className = "",
}) => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame(() => {
    x.set(x.get() - speed);
    const container = containerRef.current;
    if (container && container.scrollWidth / 2 <= -x.get()) {
      x.set(0); // reset for loop
    }
  });

  const scrollTransform = useTransform(x, (val) => `translateX(${val}px)`);

  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      <div
        ref={containerRef}
        className="flex gap-6"
        style={{
          width: "fit-content",
          transform: scrollTransform.get(),
          display: "flex",
          willChange: "transform",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export default AutoScrollRow;
