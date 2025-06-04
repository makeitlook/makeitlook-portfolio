import { Palette, Monitor, Camera, FileText, Share2 } from "lucide-react";

export const services = [
  {
    id: 0,
    title: "Branding & Identity",
    subtitle: "Your story, visually told.",
    description:
      "Make It Look shapes recognisable, memorable brand visuals that connect instantly.",
    icon: Palette,
    accentColor: "text-elements-primary-main",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Color Palettes"],
  },
  {
    id: 1,
    title: "Digital & Web Design",
    subtitle: "Where digital dreams come to life.",
    description:
      "Make It Look builds immersive, responsive websites designed for clarity and impact.",
    icon: Monitor,
    accentColor: "text-helpers-info-main",
    features: ["Web Design", "UI/UX Design", "Mobile Apps", "User Experience"],
  },
  {
    id: 2,
    title: "Video & Photography",
    subtitle: "Visual storytelling in motion.",
    description:
      "Make It Look captures visuals that move, inspire, and communicate with purpose.",
    icon: Camera,
    accentColor: "text-helpers-warning-main",
    features: ["Video Production", "Photography", "Editing", "Visual Stories"],
  },
  {
    id: 3,
    title: "Presentation & Print Design",
    subtitle: "Polished visuals for powerful impact.",
    description:
      "Make It Look designs sleek presentations and print that inform and impress.",
    icon: FileText,
    accentColor: "text-helpers-success-main",
    features: ["Presentations", "Brochures", "Print Design", "Marketing Materials"],
  },
  {
    id: 4,
    title: "Social Media Management",
    subtitle: "Content that sparks conversations.",
    description:
      "Make It Look delivers standout social content that builds community and drives action.",
    icon: Share2,
    accentColor: "text-elements-primary-main",
    features: ["Content Creation", "Social Strategy", "Visual Content", "Community Building"],
  },
];
