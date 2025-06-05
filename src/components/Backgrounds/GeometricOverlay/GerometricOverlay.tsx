"use client";

import React from "react";

interface GeometricOverlayProps {
  opacity?: number;
  variant?: "tech" | "minimal" | "geometric" | "geometric-alt";
  className?: string;
  colorClass?: string;
}

export const GeometricOverlay: React.FC<GeometricOverlayProps> = ({
  opacity = 0.15,
  variant = "tech",
  className = "",
  colorClass = "elements-primary-main",
}) => {
  const renderTechVariant = () => (
    <>
      {/* Neural Network Pattern */}
      <div className="absolute inset-0" style={{ opacity: opacity * 1.2 }}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 600"
          fill="none"
        >
          {/* Neural Network Nodes */}
          <circle
            cx="100"
            cy="150"
            r="6"
            className={`fill-${colorClass}`}
            opacity="0.8"
          />
          <circle
            cx="300"
            cy="100"
            r="6"
            className={`fill-${colorClass}`}
            opacity="0.8"
          />
          <circle
            cx="500"
            cy="120"
            r="6"
            className={`fill-${colorClass}`}
            opacity="0.8"
          />
          <circle
            cx="700"
            cy="80"
            r="6"
            className={`fill-${colorClass}`}
            opacity="0.8"
          />

          <circle
            cx="150"
            cy="300"
            r="6"
            className={`fill-${colorClass}`}
            opacity="0.6"
          />
          <circle
            cx="350"
            cy="280"
            r="6"
            className={`fill-${colorClass}`}
            opacity="0.6"
          />
          <circle
            cx="550"
            cy="320"
            r="6"
            className={`fill-${colorClass}`}
            opacity="0.6"
          />
          <circle
            cx="750"
            cy="290"
            r="6"
            className={`fill-${colorClass}`}
            opacity="0.6"
          />

          <circle
            cx="200"
            cy="450"
            r="6"
            className={`fill-${colorClass}`}
            opacity="0.7"
          />
          <circle
            cx="400"
            cy="480"
            r="6"
            className={`fill-${colorClass}`}
            opacity="0.7"
          />
          <circle
            cx="600"
            cy="460"
            r="6"
            className={`fill-${colorClass}`}
            opacity="0.7"
          />

          {/* Connecting Neural Paths */}
          <path
            d="M100,150 Q200,200 300,100"
            stroke={colorClass}
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            className={`stroke-${colorClass}`}
          />
          <path
            d="M300,100 Q400,160 500,120"
            stroke={colorClass}
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            className={`stroke-${colorClass}`}
          />
          <path
            d="M500,120 Q600,100 700,80"
            stroke={colorClass}
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            className={`stroke-${colorClass}`}
          />

          <path
            d="M150,300 Q250,240 350,280"
            stroke={colorClass}
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            className={`stroke-${colorClass}`}
          />
          <path
            d="M350,280 Q450,300 550,320"
            stroke={colorClass}
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            className={`stroke-${colorClass}`}
          />

          <path
            d="M200,450 Q300,465 400,480"
            stroke={colorClass}
            strokeWidth="2"
            fill="none"
            opacity="0.5"
            className={`stroke-${colorClass}`}
          />
          <path
            d="M400,480 Q500,470 600,460"
            stroke={colorClass}
            strokeWidth="2"
            fill="none"
            opacity="0.5"
            className={`stroke-${colorClass}`}
          />

          {/* Cross-layer connections */}
          <line
            x1="100"
            y1="150"
            x2="150"
            y2="300"
            className={`stroke-${colorClass}`}
            strokeWidth="1"
            opacity="0.2"
          />
          <line
            x1="300"
            y1="100"
            x2="350"
            y2="280"
            className={`stroke-${colorClass}`}
            strokeWidth="1"
            opacity="0.2"
          />
          <line
            x1="350"
            y1="280"
            x2="400"
            y2="480"
            className={`stroke-${colorClass}`}
            strokeWidth="1"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* Floating Tech Elements */}
      <div
        className={`absolute top-8 right-16 w-12 h-12 border-2 rounded-lg rotate-12 border-${colorClass}`}
        style={{ opacity: opacity * 1.8 }}
      />
      <div
        className={`absolute bottom-20 left-16 w-8 h-8 bg-${colorClass} transform rotate-45`}
        style={{
          opacity: opacity * 1.5,
          clipPath:
            "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        }}
      />
      <div
        className={`absolute top-1/2 right-8 w-6 h-16 bg-${colorClass} rounded-full transform -rotate-24`}
        style={{ opacity: opacity * 1.3 }}
      />

      {/* Data Flow Lines */}
      <div
        className={`absolute top-0 left-1/5 w-0.5 h-3/4 bg-gradient-to-b from-${colorClass} to-transparent transform rotate-6`}
        style={{ opacity: opacity * 2 }}
      />
      <div
        className={`absolute bottom-0 right-1/4 w-0.5 h-2/3 bg-gradient-to-t from-${colorClass} to-transparent transform -rotate-6`}
        style={{ opacity: opacity * 1.8 }}
      />
    </>
  );

  const renderMinimalVariant = () => (
    <>
      {/* Zen-like Floating Elements */}
      <div
        className={`absolute top-16 right-12 w-8 h-8 border-2 rounded-full border-${colorClass}`}
        style={{ opacity: opacity * 2.2 }}
      />
      <div
        className={`absolute top-1/3 left-8 w-20 h-1 bg-${colorClass} rounded-full transform rotate-12`}
        style={{ opacity: opacity * 1.6 }}
      />
      <div
        className={`absolute bottom-1/4 right-20 w-4 h-4 bg-${colorClass} transform rotate-45`}
        style={{ opacity: opacity * 1.4 }}
      />
      <div
        className={`absolute bottom-16 left-16 w-2 h-12 bg-${colorClass} rounded-full transform -rotate-18`}
        style={{ opacity: opacity * 1.8 }}
      />
      <div
        className={`absolute top-1/2 right-1/3 w-6 h-6 border border-${colorClass} transform rotate-12`}
        style={{ opacity: opacity * 1.3 }}
      />

      {/* Subtle Accent Dots */}
      <div
        className={`absolute top-20 left-1/4 w-1 h-1 bg-${colorClass} rounded-full`}
        style={{ opacity: opacity * 2.5 }}
      />
      <div
        className={`absolute bottom-20 right-1/4 w-1 h-1 bg-${colorClass} rounded-full`}
        style={{ opacity: opacity * 2 }}
      />
      <div
        className={`absolute top-2/3 left-1/2 w-0.5 h-0.5 bg-${colorClass} rounded-full`}
        style={{ opacity: opacity * 1.8 }}
      />

      {/* Flowing Lines */}
      <div
        className={`absolute top-0 left-2/3 w-px h-1/3 bg-gradient-to-b from-${colorClass} to-transparent transform rotate-3`}
        style={{ opacity: opacity * 2.2 }}
      />
      <div
        className={`absolute bottom-0 left-1/4 w-px h-1/4 bg-gradient-to-t from-${colorClass} to-transparent transform -rotate-3`}
        style={{ opacity: opacity * 1.9 }}
      />
    </>
  );

  const renderGeometricVariant = () => (
    <>
      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{ opacity: opacity }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
                 linear-gradient(currentColor 1px, transparent 1px),
                 linear-gradient(90deg, currentColor 1px, transparent 1px)
               `,
            backgroundSize: "60px 60px",
            opacity: 0.3,
            color: `var(--${colorClass})`,
          }}
        />
      </div>

      {/* Large Geometric Shapes */}
      <div
        className={`absolute top-4 right-4 w-16 h-16 border-2 border-${colorClass} transform rotate-12`}
        style={{ opacity: opacity * 1.5 }}
      />
      <div
        className={`absolute bottom-8 left-4 w-12 h-12 bg-${colorClass} transform rotate-45`}
        style={{ opacity: opacity * 1.2 }}
      />
      <div
        className={`absolute top-1/2 left-1/4 w-8 h-8 border border-${colorClass} rounded-full`}
        style={{ opacity: opacity * 1.8 }}
      />
      <div
        className={`absolute bottom-1/3 right-1/3 w-6 h-20 bg-${colorClass} rounded-full transform -rotate-24`}
        style={{ opacity: opacity * 1.3 }}
      />

      {/* Connecting Lines */}
      <div
        className={`absolute top-20 left-20 w-24 h-px bg-${colorClass} transform rotate-12`}
        style={{ opacity: opacity * 2 }}
      />
      <div
        className={`absolute bottom-20 right-20 w-32 h-px bg-${colorClass} transform -rotate-12`}
        style={{ opacity: opacity * 1.5 }}
      />
    </>
  );

  const renderGeometricAltVariant = () => (
    <>
      {/* Crystalline Pattern */}
      <div className="absolute inset-0" style={{ opacity: opacity * 1.1 }}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 600"
          fill="none"
        >
          {/* Crystal Shapes */}
          <polygon
            points="150,100 200,150 150,200 100,150"
            className={`fill-${colorClass}`}
            opacity="0.3"
          />
          <polygon
            points="400,80 470,130 420,200 350,150"
            className={`stroke-${colorClass}`}
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
          <polygon
            points="600,180 680,220 640,300 560,260"
            className={`fill-${colorClass}`}
            opacity="0.2"
          />

          {/* Hexagonal Elements */}
          <polygon
            points="250,300 280,320 280,360 250,380 220,360 220,320"
            className={`stroke-${colorClass}`}
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          <polygon
            points="500,400 540,425 540,475 500,500 460,475 460,425"
            className={`fill-${colorClass}`}
            opacity="0.25"
          />

          {/* Triangular Clusters */}
          <polygon
            points="700,400 720,430 680,430"
            className={`fill-${colorClass}`}
            opacity="0.4"
          />
          <polygon
            points="80,350 110,370 80,390 50,370"
            className={`stroke-${colorClass}`}
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Floating Geometric Elements */}
      <div
        className={`absolute top-12 right-24 w-10 h-10 bg-${colorClass} transform rotate-30`}
        style={{
          opacity: opacity * 1.6,
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      />
      <div
        className={`absolute bottom-24 left-20 w-14 h-8 bg-${colorClass} transform -rotate-15`}
        style={{
          opacity: opacity * 1.3,
          clipPath: "polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)",
        }}
      />
      <div
        className={`absolute top-1/2 left-12 w-8 h-8 border-2 border-${colorClass} transform rotate-45`}
        style={{ opacity: opacity * 1.7 }}
      />
      <div
        className={`absolute top-1/4 right-16 w-6 h-12 bg-${colorClass} rounded-full transform rotate-20`}
        style={{ opacity: opacity * 1.4 }}
      />

      {/* Geometric Accent Lines */}
      <div
        className={`absolute top-16 left-1/3 w-20 h-px bg-${colorClass} transform rotate-30`}
        style={{ opacity: opacity * 2.2 }}
      />
      <div
        className={`absolute bottom-16 right-1/3 w-16 h-px bg-${colorClass} transform -rotate-30`}
        style={{ opacity: opacity * 1.9 }}
      />
      <div
        className={`absolute top-2/3 left-1/2 w-12 h-px bg-${colorClass} transform rotate-60`}
        style={{ opacity: opacity * 1.6 }}
      />
    </>
  );

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Animated Elements */}
      <div
        className={`absolute top-20 left-20 w-3 h-3 bg-${colorClass} rounded-full animate-pulse`}
        style={{ opacity: opacity * 3 }}
      />
      <div
        className={`absolute bottom-20 right-20 w-2 h-2 bg-${colorClass} rounded-full animate-pulse`}
        style={{
          opacity: opacity * 2.5,
          animationDelay: "1s",
        }}
      />
      <div
        className={`absolute top-1/2 left-12 w-2 h-2 bg-${colorClass} rounded-full animate-ping`}
        style={{
          opacity: opacity * 2,
          animationDelay: "2s",
        }}
      />
      <div
        className={`absolute top-16 right-1/3 w-1 h-1 bg-${colorClass} rounded-full animate-ping`}
        style={{
          opacity: opacity * 1.5,
          animationDelay: "3s",
        }}
      />

      {/* Variant-specific elements */}
      {variant === "tech" && renderTechVariant()}
      {variant === "minimal" && renderMinimalVariant()}
      {variant === "geometric" && renderGeometricVariant()}
      {variant === "geometric-alt" && renderGeometricAltVariant()}
    </div>
  );
};

export default GeometricOverlay;

{
  /* 
    <GeometricOverlay 
  variant="geometric-alt" 
  colorClass="elements-primary-main"
  opacity={0.2}
/>
*/
}
