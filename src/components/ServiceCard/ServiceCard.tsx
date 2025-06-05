"use client";
import React from "react";
import { ArrowRight, Star } from "lucide-react";
import Button from "@/components/Button/Button";
import Tag from "@/components/Tag";

export const ServiceCard = ({
  service,
  isVisible,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: any) => {
  const Icon = service.icon;

  return (
    <div
      className={`relative group transition-all duration-700 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${service.id * 150}ms` }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <div className="relative h-full bg-card-background backdrop-blur-sm border border-border-dimmed rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-elements-primary-bg animate-pulse"></div>
        </div>
        <div className="absolute inset-0 rounded-3xl bg-elements-primary-main opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-dimmed-heavy shadow-lg mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 border border-border-dimmed">
            <Icon
              className={`w-8 h-8 ${service.accentColor} transition-colors duration-300`}
            />
          </div>

          <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-elements-secondary-main transition-colors duration-300">
            {service.title}
          </h3>
          <p className={`text-lg font-medium mb-4 ${service.accentColor}`}>
            {service.subtitle}
          </p>
          <p className="text-text-secondary mb-6 leading-relaxed line-clamp-3">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {service.features.map((feature: string, idx: number) => (
              <Tag
                key={idx}
                className="transition-all duration-300 hover:bg-neutral-dimmed-heavy hover:shadow-md hover:text-text-secondary"
              >
                {feature}
              </Tag>
            ))}
          </div>

          {/* <Button
            type="text"
            extraClassNames="text-text-clear hover:scale-105 transition-all duration-300 group min-w-[200px] w-full"
          >
            Learn More
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Button> */}
        </div>

        <div className="absolute top-4 right-4 opacity-20">
          <Star
            className={`w-6 h-6 ${service.accentColor} animate-spin`}
            style={{ animationDuration: "8s" }}
          />
        </div>
      </div>
    </div>
  );
};
