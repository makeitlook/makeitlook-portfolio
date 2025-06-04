import PageLayout from "@/components/Layouts/PageLayout";
import SEO from "@/components/SEO/SEO";
import { projects } from "@/config/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <PageLayout title={project?.title}>
      <SEO title={project?.title} description={project?.description} />
      <div className="space-y-6">
        <p className="text-lg text-text-secondary">{project?.description}</p>
        {project?.images.map((img, i) => (
          <div key={i} className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden">
            <Image src={img} alt={`${project.title} image ${i + 1}`} fill style={{objectFit:"cover"}} />
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

// Needed for Next.js static export when using dynamic routes
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
