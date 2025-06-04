import { v4 as uuidv4 } from "uuid";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export interface CompanyInfo {
  id: string;
  title: string;
  details: string;
}

export interface Technology {
  title: string;
  techs: string[];
}

export interface ProjectDetail {
  id: string;
  details: string;
}

export interface ProjectImage {
  id: string;
  title: string;
  img: string;
}

export interface ProjectInfo {
  ClientHeading: string;
  CompanyInfo: CompanyInfo[];
  ObjectivesHeading: string;
  ObjectivesDetails: string;
  Technologies: Technology[];
  ProjectDetailsHeading: string;
  ProjectDetails: ProjectDetail[];
  SocialSharingHeading?: string;
  // SocialSharing?: { id: string; name: string; icon: React.ReactNode; url: string }[];
}

export interface Project {
  id: number;
  title: string;
  url: string;
  category: string;
  img: string;
  ProjectHeader: {
    title: string;
    publishDate: string;
    tags: string;
  };
  ProjectImages: ProjectImage[];
  ProjectInfo: ProjectInfo;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Google Health Platform",
    url: "google-health-platform",
    category: "Web Application",
    img: "/images/web-project-2.jpg",
    ProjectHeader: {
      title: "Google Health Platform",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Google Health Platform",
        img: "/images/ui-project-1.jpg",
      },
      {
        id: uuidv4(),
        title: "Google Health Platform",
        img: "/images/web-project-2.jpg",
      },
      {
        id: uuidv4(),
        title: "Google Health Platform",
        img: "/images/mobile-project-2.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Web Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo...",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo...",
        },
        // add more details as needed...
      ],
      SocialSharingHeading: "Share This",
      // Uncomment and populate if needed
      // SocialSharing: [
      //   {
      //     id: uuidv4(),
      //     name: "Twitter",
      //     icon: <Twitter />,
      //     url: "https://twitter.com/realstoman",
      //   },
      //   // ... other social links
      // ],
    },
  },

  // Repeat similar structure for other projects, eg:

  {
    id: 2,
    title: "Phoenix Digital Agency",
    url: "phoenix-digital-agency",
    category: "Mobile Application",
    img: "/images/mobile-project-2.jpg",
    ProjectHeader: {
      title: "Phoenix Digital Agency",
      publishDate: "Jul 26, 2021",
      tags: "Mobile Application",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Phoenix Digital Agency",
        img: "/images/ui-project-1.jpg",
      },
      {
        id: uuidv4(),
        title: "Phoenix Digital Agency",
        img: "/images/web-project-2.jpg",
      },
      {
        id: uuidv4(),
        title: "Phoenix Digital Agency",
        img: "/images/mobile-project-2.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo...",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo...",
        },
      ],
      SocialSharingHeading: "Share This",
      // SocialSharing: [...]
    },
  },

  // Add other projects similarly
];
