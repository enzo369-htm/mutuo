"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";
import { coverForProjectSlug } from "@/lib/public-images";

const STACK_TRACK_VH = 155;

function StackScrollItem({
  slug,
  title,
  categoryLabel,
  index,
}: {
  slug: string;
  title: string;
  categoryLabel: string;
  index: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.55, 1], [1, 1, 0.82]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.85, 1], [1, 1, 0.72, 0.38]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -56]);
  const rotateX = useTransform(scrollYProgress, [0, 0.45, 1], [0, 0, 9]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    ["brightness(1) saturate(1)", "brightness(1) saturate(1)", "brightness(0.55) saturate(0.85)"],
  );

  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      ref={trackRef}
      className="relative"
      style={{ zIndex: index + 1, minHeight: `${STACK_TRACK_VH}vh` }}
    >
      <div className="sticky top-0 flex h-[100dvh] items-center justify-center px-4 pb-28 pt-24 md:px-10 [perspective:1400px] [transform-style:preserve-3d]">
        <motion.div
          className="relative w-full max-w-4xl origin-[50%_45%] will-change-transform"
          style={
            prefersReducedMotion === true
              ? undefined
              : {
                  scale,
                  opacity,
                  y,
                  rotateX,
                  filter,
                }
          }
        >
          <ProjectCard
            variant="stack"
            title={title}
            category={categoryLabel}
            href={`/work/${slug}`}
            imageSrc={coverForProjectSlug(slug)}
          />
        </motion.div>
      </div>
    </div>
  );
}

export function ProjectsStack() {
  const items = PROJECTS.slice(0, 4);

  return (
    <section
      id="stack"
      className="relative bg-black"
      aria-labelledby="featured-stack-heading"
    >
      <h2 id="featured-stack-heading" className="sr-only">
        Featured projects
      </h2>
      {items.map((project, index) => (
        <StackScrollItem
          key={project.slug}
          slug={project.slug}
          title={project.title}
          categoryLabel={project.categoryLabel}
          index={index}
        />
      ))}
    </section>
  );
}
