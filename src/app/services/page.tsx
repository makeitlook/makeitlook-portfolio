"use client";
import React, { useState, useEffect } from "react";
import {
  Zap,
  Palette,
  Monitor,
  Camera,
  FileText,
  Share2,
  ArrowRight,
} from "lucide-react";
import { FloatingElement } from "@/components/FloatingElement/FloatingElement";
import { ServiceCard } from "@/components/ServiceCard/ServiceCard";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(new Set([0, 1, 2, 3, 4]));
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 0,
      title: "Branding & Identity",
      subtitle: "Your story, visually told.",
      description:
        "Make It Look shapes recognisable, memorable brand visuals that connect instantly.",
      icon: Palette,
      accentColor: "text-elements-primary-main",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
        "Color Palettes",
      ],
    },
    {
      id: 1,
      title: "Digital & Web Design",
      subtitle: "Where digital dreams come to life.",
      description:
        "Make It Look builds immersive, responsive websites designed for clarity and impact.",
      icon: Monitor,
      accentColor: "text-helpers-info-main",
      features: [
        "Web Design",
        "UI/UX Design",
        "Mobile Apps",
        "User Experience",
      ],
    },
    {
      id: 2,
      title: "Video & Photography",
      subtitle: "Visual storytelling in motion.",
      description:
        "Make It Look captures visuals that move, inspire, and communicate with purpose.",
      icon: Camera,
      accentColor: "text-helpers-warning-main",
      features: [
        "Video Production",
        "Photography",
        "Editing",
        "Visual Stories",
      ],
    },
    {
      id: 3,
      title: "Presentation & Print Design",
      subtitle: "Polished visuals for powerful impact.",
      description:
        "Make It Look designs sleek presentations and print that inform and impress.",
      icon: FileText,
      accentColor: "text-helpers-success-main",
      features: [
        "Presentations",
        "Brochures",
        "Print Design",
        "Marketing Materials",
      ],
    },
    {
      id: 4,
      title: "Social Media Management",
      subtitle: "Content that sparks conversations.",
      description:
        "Make It Look delivers standout social content that builds community and drives action.",
      icon: Share2,
      accentColor: "text-elements-primary-main",
      features: [
        "Content Creation",
        "Social Strategy",
        "Visual Content",
        "Community Building",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 relative overflow-hidden">
      <FloatingElement delay={0} className="top-20 left-10 opacity-20">
        <div className="w-16 h-16 bg-elements-primary-main rounded-full blur-sm"></div>
      </FloatingElement>
      <FloatingElement delay={1000} className="top-40 right-20 opacity-30">
        <div className="w-12 h-12 bg-helpers-info-main rounded-full blur-sm"></div>
      </FloatingElement>
      <FloatingElement delay={2000} className="bottom-40 left-1/4 opacity-25">
        <div className="w-20 h-20 bg-helpers-warning-main rounded-full blur-sm"></div>
      </FloatingElement>
      <FloatingElement delay={1500} className="bottom-20 right-1/3 opacity-20">
        <div className="w-14 h-14 bg-helpers-success-main rounded-full blur-sm"></div>
      </FloatingElement>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 text-elements-secondary-main mb-4">
            <Zap className="w-8 h-8 text-elements-primary-main animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Creative Excellence
            </span>
          </div>
          <h2 className="text-6xl font-bold mb-6 text-text-primary">
            Services
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Versatile Expertise for Every Creative Need
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-elements-primary-main rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isVisible={visibleCards.has(service.id)}
              isHovered={hoveredCard === service.id}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
            />
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-elements-primary-main hover:bg-elements-primary-shadow text-elements-primary-contrastText px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-elements-primary-shadow/25 transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <span>Ready to bring your vision to life?</span>
            <ArrowRight className="w-5 h-5 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
