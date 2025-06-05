import { v4 as uuidv4 } from "uuid";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

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
  image: string;
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
  image: string;
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
    title: "Beauty Bar",
    url: "beautybar",
    category: "Print Design",
    image: "/images/hero-projects/beautybar.png",
    ProjectHeader: {
      title: "Beauty Bar Heston",
      publishDate: "March 2025",
      tags: "Print Design",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Business Card Image 1",
        image: "/images/projects/beautybar/img1.png",
      },
      {
        id: uuidv4(),
        title: "Business Card Image 2",
        image: "/images/projects/beautybar/img2.png",
      },
      {
        id: uuidv4(),
        title: "Business Card Image 3",
        image: "/images/projects/beautybar/img3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Beauty Bar Heston",
        },
        {
          id: uuidv4(),
          title: "Industry",
          details: "Beauty Salon",
        },
        {
          id: uuidv4(),
          title: "Project",
          details: "Business Cards",
        },
        // {
        //   id: uuidv4(),
        //   title: "Website",
        //   details: "https://company.com",
        // },
        // {
        //   id: uuidv4(),
        //   title: "Phone",
        //   details: "555 8888 888",
        // },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Redesign Beauty Bar’s business card to elevate its brand identity through a minimalist yet luxurious design that balances professionalism with a personal touch. The new portrait-oriented card will improve readability and functionality while reflecting the brand’s refined aesthetic and commitment to excellence.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Adobe Photoshop", "Adobe Illustrator"],
        },
      ],
      ProjectDetailsHeading: "Solution",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "The redesigned business cards for Beauty Bar feature a clean, modern layout that balances vibrant brand colors with elegant typography. The front side highlights essential business information with clear contact details and social media links, while the reverse side showcases the founder’s profile with a personal touch through a professional photo and key services offered. The cohesive wave graphic unifies both sides, creating visual continuity that reinforces brand recognition. This approach delivers a polished, approachable design that elevates Beauty Bar’s identity and effectively communicates its expertise in beauty and wellness.",
        },
        {
          id: uuidv4(),
          details:
            "The design process involved close collaboration with the client, including detailed discussions to understand their vision and brand values. Multiple iterations and adjustments were made based on client feedback to ensure the final design perfectly matched their expectations and effectively represented their business.",
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

  {
    id: 2,
    title: "Checkmate Barbers",
    url: "checkmate",
    category: "Print Design",
    image: "/images/hero-projects/leaflets.png",
    ProjectHeader: {
      title: "Checkmate Barbers",
      publishDate: "April 2025",
      tags: "Print Design",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Leaflet",
        image: "/images/projects/checkmate/img1.png",
      },
      {
        id: uuidv4(),
        title: "Price List",
        image: "/images/projects/checkmate/img2.png",
      },
      {
        id: uuidv4(),
        title: "Window Sticker",
        image: "/images/projects/checkmate/img3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Checkmate Barbers",
        },
        {
          id: uuidv4(),
          title: "Industry",
          details: "Hairdressers",
        },
        {
          id: uuidv4(),
          title: "Project",
          details: "Leaflets, Window Stickets, Acrylic Sign",
        },
        // {
        //   id: uuidv4(),
        //   title: "Website",
        //   details: "https://company.com",
        // },
        // {
        //   id: uuidv4(),
        //   title: "Phone",
        //   details: "555 8888 888",
        // },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "To create a cohesive set of marketing materials for Checkmate Barbers—including a leaflet, window stickers, and an acrylic price list—that effectively communicate their services, attract new clients, and enhance brand visibility. The designs aim to reflect the barber shop’s professional and stylish identity while ensuring clear, easy-to-read information for customers.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Adobe Photoshop", "Adobe Illustrator"],
        },
      ],
      ProjectDetailsHeading: "Solution",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "To elevate Checkmate Barbers’ brand presence and enhance customer engagement, I designed a cohesive suite of printed materials including a stylish leaflet, eye-catching window stickers, and a premium acrylic price list. These assets combine classic barber aesthetics with modern design elements, clearly communicating services and special offers while reinforcing brand identity. Throughout the process, close collaboration with the client ensured each piece met their vision and practical needs, resulting in a polished and effective branding package that stands out in-store.",
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

  {
    id: 3,
    title: "NextGen Roofing",
    url: "nextgenroofing",
    category: "Print & Web Design",
    image: "/images/hero-projects/nextgen-website.png",
    ProjectHeader: {
      title: "NextGen Roofing Specialist LTD",
      publishDate: "May 2025",
      tags: "Print Design, Web Design",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Leaflet",
        image: "/images/projects/nextgen/img1.png",
      },
      {
        id: uuidv4(),
        title: "Price List",
        image: "/images/projects/nextgen/img2.png",
      },
      {
        id: uuidv4(),
        title: "Window Sticker",
        image: "/images/projects/nextgen/img3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "NextGen Roofing Specialist LTD",
        },
        {
          id: uuidv4(),
          title: "Industry",
          details: "Roofing",
        },
        {
          id: uuidv4(),
          title: "Project",
          details: "ID Cards, Business Cards, Website",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.nextgenroofingspecialist.co.uk/",
        },
        // {
        //   id: uuidv4(),
        //   title: "Phone",
        //   details: "555 8888 888",
        // },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Create a cohesive and professional brand identity for NextGen Roofing Specialist by designing bespoke ID cards, business cards, and a modern website. The goal is to attract new customers through visually appealing, consistent branding that communicates trust, expertise, and quality service.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Adobe Photoshop", "Adobe Illustrator", "React"],
        },
      ],
      ProjectDetailsHeading: "Solution",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "I designed and developed a bespoke website for NextGen Roofing Specialist using React and Next.js, ensuring that every element was carefully tailored to align with their unique brand identity and business objectives. The site features a clean, modern layout with intuitive navigation, enhancing user experience and encouraging customer engagement. It leverages server-side rendering and is optimised for fast loading speeds, which improves accessibility and keeps visitors engaged. Furthermore, the website is fully SEO-friendly, incorporating semantic HTML, comprehensive meta tags, and structured data to maximise visibility in search engine results, thus helping NextGen Roofing attract and convert new clients effectively.",
        },
        {
          id: uuidv4(),
          details:
            "The business cards were crafted to reflect NextGen Roofing Specialist’s brand ethos with a bold yet professional design. Utilising a striking colour palette and clear typography, the cards ensure that essential contact details are easily legible and memorable. Subtle design elements inspired by the roofing industry reinforce brand recognition and convey professionalism. The final artwork was prepared meticulously for high-quality print reproduction, guaranteeing a polished look that leaves a lasting impression on clients and partners alike.",
        },
        {
          id: uuidv4(),
          details:
            "The ID cards were designed with both practicality and brand consistency in mind. Each card features designated space for employee photographs, names, and job titles, framed within the company’s signature colours and logo. This approach not only facilitates easy staff identification but also strengthens the professional image of NextGen Roofing Specialist. The cards adhere to standard size specifications and are compatible with common badge holders, ensuring both functionality and a refined aesthetic.",
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

  // {
  //   id: 2,
  //   title: "Phoenix Digital Agency",
  //   url: "phoenix-digital-agency",
  //   category: "Mobile Application",
  //   image: "/images/mobile-project-2.jpg",
  //   ProjectHeader: {
  //     title: "Phoenix Digital Agency",
  //     publishDate: "Jul 26, 2021",
  //     tags: "Mobile Application",
  //   },
  //   ProjectImages: [
  //     {
  //       id: uuidv4(),
  //       title: "Phoenix Digital Agency",
  //       image: "/images/ui-project-1.jpg",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Phoenix Digital Agency",
  //       image: "/images/web-project-2.jpg",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Phoenix Digital Agency",
  //       image: "/images/mobile-project-2.jpg",
  //     },
  //   ],
  //   ProjectInfo: {
  //     ClientHeading: "About Client",
  //     CompanyInfo: [
  //       {
  //         id: uuidv4(),
  //         title: "Name",
  //         details: "Company Ltd",
  //       },
  //       {
  //         id: uuidv4(),
  //         title: "Services",
  //         details: "UI Design & Frontend Development",
  //       },
  //       {
  //         id: uuidv4(),
  //         title: "Website",
  //         details: "https://company.com",
  //       },
  //       {
  //         id: uuidv4(),
  //         title: "Phone",
  //         details: "555 8888 888",
  //       },
  //     ],
  //     ObjectivesHeading: "Objective",
  //     ObjectivesDetails:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
  //     Technologies: [
  //       {
  //         title: "Tools & Technologies",
  //         techs: [
  //           "HTML",
  //           "CSS",
  //           "JavaScript",
  //           "Vue.js",
  //           "TailwindCSS",
  //           "AdobeXD",
  //         ],
  //       },
  //     ],
  //     ProjectDetailsHeading: "Challenge",
  //     ProjectDetails: [
  //       {
  //         id: uuidv4(),
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo...",
  //       },
  //       {
  //         id: uuidv4(),
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo...",
  //       },
  //     ],
  //     SocialSharingHeading: "Share This",
  //     // SocialSharing: [...]
  //   },
  // },

  // Add other projects similarly
];
