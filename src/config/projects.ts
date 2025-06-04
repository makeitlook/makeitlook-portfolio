export interface Project {
  title: string;
  slug: string;
  description: string;
  image: string; // main thumbnail
  images: string[]; // gallery images
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: "Minimalist Brand Kit",
    slug: "minimalist-brand-kit",
    description: "A clean brand identity package including logo, color palette and guidelines.",
    image: "https://source.unsplash.com/collection/190727/800x600", // placeholder
    images: [
      "https://source.unsplash.com/collection/190727/1200x800",
      "https://source.unsplash.com/collection/190727/1200x801",
    ],
    tags: ["Branding", "Design"],
  },
  {
    title: "Modern Portfolio Site",
    slug: "modern-portfolio-site",
    description: "Responsive portfolio website built with modern web technologies.",
    image: "https://source.unsplash.com/collection/190728/800x600",
    images: [
      "https://source.unsplash.com/collection/190728/1200x800",
      "https://source.unsplash.com/collection/190728/1200x801",
    ],
    tags: ["UI/UX", "Web"],
  },
  {
    title: "Restaurant Menu Design",
    slug: "restaurant-menu-design",
    description: "Elegant print design for a local restaurant including menus and flyers.",
    image: "https://source.unsplash.com/collection/190729/800x600",
    images: [
      "https://source.unsplash.com/collection/190729/1200x800",
      "https://source.unsplash.com/collection/190729/1200x801",
    ],
    tags: ["Print", "Brand"],
  },
  {
    title: "Interactive Presentation Deck",
    slug: "interactive-presentation-deck",
    description: "Animated pitch deck created to help startups tell their story.",
    image: "https://source.unsplash.com/collection/190730/800x600",
    images: [
      "https://source.unsplash.com/collection/190730/1200x800",
      "https://source.unsplash.com/collection/190730/1200x801",
    ],
    tags: ["Presentation", "Motion"],
  },
];
