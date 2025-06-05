"use client";
import React, { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import { FloatingElement } from "@/components/FloatingElement/FloatingElement";
import { ServiceCard } from "@/components/ServiceCard/ServiceCard";
import { services } from "@/data/servicesData";
import SEO from "@/components/SEO/SEO";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(new Set([0, 1, 2, 3, 4]));
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO
        title="Services"
        description="Discover the design and development services offered by Make It Look."
        url="https://makeitlook.co.uk/services"
        image="/images/og-image.png"
      />
      <div className="min-h-screen py-8 px-4 relative overflow-hidden">
        <FloatingElement delay={0} className="top-20 left-10 opacity-20">
          <div className="w-16 h-16 bg-elements-primary-main rounded-full blur-sm"></div>
        </FloatingElement>
        <FloatingElement delay={1000} className="top-40 right-20 opacity-30">
          <div className="w-12 h-12 bg-helpers-info-main rounded-full blur-sm"></div>
        </FloatingElement>
        <FloatingElement delay={2000} className="bottom-40 left-1/4 opacity-25">
          <div className="w-20 h-20 bg-helpers-warning-main rounded-full blur-sm"></div>
        </FloatingElement>
        <FloatingElement
          delay={1500}
          className="bottom-20 right-1/3 opacity-20"
        >
          <div className="w-14 h-14 bg-helpers-success-main rounded-full blur-sm"></div>
        </FloatingElement>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="inline-flex items-center gap-2 text-elements-secondary-main mb-4">
              <Zap className="w-8 h-8 text-elements-primary-main animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
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

          {/* <div className="text-center mt-20">
          <Button
            type="continue"
            href="/contact"
            extraClassNames="inline-flex gap-4 px-8 py-4 text-lg shadow-2xl hover:shadow-elements-primary-shadow/25 transform hover:scale-105 group"
          >
            <span>Ready to bring your vision to life?</span>
            <ArrowRight className="w-5 h-5 animate-pulse group-hover:translate-x-1 transition-transform" />
          </Button>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Services;
