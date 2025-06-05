import ProjectDetail from "@/components/Projects/ProjectDetail";
import { projectsData } from "@/data/projectsData";
import { notFound } from "next/navigation";
import SEO from "@/components/SEO/SEO";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return projectsData.map((project) => ({ slug: project.url }));
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projectsData.find((p) => p.url === slug);
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
