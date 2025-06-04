import PageLayout from "@/components/Layouts/PageLayout";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/config/projects";
import Link from "next/link";

export default function Portfolio() {
  return (
    <PageLayout title="Portfolio">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.slug} href={`/portfolio/${project.slug}`}
            className="block">
            <ProjectCard
              title={project.title}
              image={project.image}
              tags={project.tags}
              className="h-full"
            />
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
