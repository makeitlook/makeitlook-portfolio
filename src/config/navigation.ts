import { usePathname } from "next/navigation";
import { useMemo } from "react";
import {
  LucideIcon,
  Home,
  Info,
  File,
  CalendarDays,
  Phone,
} from "lucide-react";

// Define navigation item structure
export interface NavigationItem {
  name: string;
  sectionId?: string; // For anchor-based single-page nav
  path?: string; // For route-based multi-page nav
  current: boolean;
  icon?: LucideIcon;
  description?: string;
  children?: NavigationItem[];
  disabled?: boolean;
}

// Hook-based config (e.g. for dynamic use in app)
export function useNavigationConfig(): {
  navigationItems: NavigationItem[];
  showNavigation: boolean;
} {
  const pathname = usePathname();

  const navigationItems: NavigationItem[] = useMemo(
    () => [
      {
        name: "",
        sectionId: "home",
        path: "/",
        current: pathname === "/",
        icon: Home,
      },
      {
        name: "Services",
        sectionId: "services",
        path: "/services",
        current: pathname.startsWith("/services"),
        icon: File,
        // children: [
        //   {
        //     name: "Web Development",
        //     sectionId: "web-development",
        //     path: "/services/web-development",
        //     current: pathname === "/services/web-development",
        //     icon: File,
        //     description: "Custom web development solutions",
        //   },
        //   {
        //     name: "App Design",
        //     sectionId: "app-design",
        //     path: "/services/app-design",
        //     current: pathname === "/services/app-design",
        //     icon: File,
        //     description: "Mobile and web application design",
        //   },
        //   {
        //     name: "Consulting",
        //     sectionId: "consulting",
        //     path: "/services/consulting",
        //     current: pathname === "/services/consulting",
        //     icon: File,
        //     description: "Expert technology consulting",
        //   },
        // ],
      },
      {
        name: "About",
        sectionId: "about",
        path: "/about",
        current: pathname === "/about",
        icon: Info,
      },
      {
        name: "Portfolio",
        sectionId: "portfolio",
        path: "/portfolio",
        current: pathname === "/portfolio",
        icon: Info,
      },
      {
        name: "Contact",
        sectionId: "contact",
        path: "/contact",
        current: pathname === "/contact",
        icon: Phone,
      },
    ],
    [pathname]
  );

  return {
    navigationItems,
    showNavigation: true,
  };
}

// Predefined configs for different layout needs
export const mainNavigation: {
  navigationItems: NavigationItem[];
  showNavigation: boolean;
} = {
  navigationItems: [
    // { name: "Home", sectionId: "home", path: "/", current: true },
    { name: "About", sectionId: "about", path: "/about", current: false },
    {
      name: "Services",
      sectionId: "services",
      path: "/services",
      current: false,
    },
    { name: "Contact", sectionId: "contact", path: "/contact", current: false },
  ],
  showNavigation: true,
};

export const minimalistNavigation: {
  navigationItems: NavigationItem[];
  showNavigation: boolean;
} = {
  navigationItems: [
    { name: "Home", sectionId: "home", path: "/", current: true },
    { name: "Contact", sectionId: "contact", path: "/contact", current: false },
  ],
  showNavigation: true,
};

export const fullNavigation: {
  navigationItems: NavigationItem[];
  showNavigation: boolean;
} = {
  navigationItems: [
    // { name: "Home", sectionId: "home", path: "/", current: true },
    {
      name: "Services",
      sectionId: "services",
      path: "/services",
      current: false,
    },
    { name: "About", sectionId: "about", path: "/about", current: false },

    { name: "Contact", sectionId: "contact", path: "/contact", current: false },
  ],
  showNavigation: true,
};
