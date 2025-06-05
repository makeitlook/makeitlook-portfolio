import ProjectDetail from "@/components/Projects/ProjectDetail";
import { projectsData } from "@/data/projectsData";
import { notFound } from "next/navigation";
import SEO from "@/components/SEO/SEO";

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.url }));
}

interface PageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projectsData.find((p) => p.url === params.slug);
  if (!project) notFound();
  return (
    <>
      <SEO
        title={project.title}
        description={project.ProjectInfo.ObjectivesDetails}
        url={`https://makeitlook.co.uk/projects/${project.url}`}
        image={project.image}
      />
      <ProjectDetail project={project} />
    </>
  );
}
