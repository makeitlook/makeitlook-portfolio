import ProjectDetail from "@/components/Projects/ProjectDetail";
import { projectsData } from "@/data/projectsData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.url }));
}

interface PageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projectsData.find((p) => p.url === params.slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
