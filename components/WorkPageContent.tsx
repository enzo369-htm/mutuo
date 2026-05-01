"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { PageHeader } from "@/components/PageHeader";
import { FILTERS, PROJECTS, type ProjectFilter } from "@/lib/projects";
import { coverForProjectSlug } from "@/lib/public-images";

export function WorkPageContent() {
  const [active, setActive] = useState<ProjectFilter>("all");

  const filtered = useMemo(() => {
    if (active === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.filter === active);
  }, [active]);

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader />
      <div className="px-5 pb-10 pt-6 md:px-8 md:pb-16 md:pt-10">
        <h1 className="max-w-4xl text-[clamp(2.25rem,5.5vw,4rem)] font-light leading-[1.12] tracking-tight">
          titulo
        </h1>

        <div className="mt-16">
          <p className="text-[11px] font-light uppercase tracking-[0.2em] text-white/40">
            texto
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                className={`relative text-[13px] font-light tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-white after:transition-transform ${
                  active === f.id
                    ? "text-white after:scale-x-100"
                    : "text-white/50 after:scale-x-0 hover:text-white/80"
                }`}
              >
                texto
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-28 pb-32 pt-8">
        {filtered.map((p) => (
          <ProjectCard
            key={p.slug}
            variant="portfolio"
            title={p.title}
            category={p.categoryLabel}
            href={`/work/${p.slug}`}
            imageSrc={coverForProjectSlug(p.slug)}
          />
        ))}
        {filtered.length === 0 ? (
          <p className="text-center text-white/45">No projects in this filter.</p>
        ) : null}
      </div>
    </div>
  );
}
