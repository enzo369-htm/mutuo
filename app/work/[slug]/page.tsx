import { notFound } from "next/navigation";
import Link from "next/link";
import { HeroSectionFull } from "@/components/HeroSection";
import { PROJECTS, getProjectBySlug } from "@/lib/projects";
import { MainFooter } from "@/components/MainFooter";
import { coverForProjectSlug } from "@/lib/public-images";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return {
    title: project ? "texto · Mutuo Agencia" : "Project",
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <HeroSectionFull
        title="titulo"
        categoryLine="texto"
        coverSrc={coverForProjectSlug(project.slug)}
      />
      <article
        id="content"
        className="bg-white px-6 py-24 text-neutral-800 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-2xl font-light leading-relaxed text-neutral-600">
          <p>
            Contenido del caso (placeholder). Aquí irá descripción, galería y
            créditos del proyecto.
          </p>
          <Link
            href="/work"
            className="mt-10 inline-block text-sm uppercase tracking-[0.16em] text-neutral-900 underline-offset-4 hover:underline"
          >
            ← All projects
          </Link>
        </div>
      </article>
      <MainFooter />
    </>
  );
}
