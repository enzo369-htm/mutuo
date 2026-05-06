"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";
import { coverForProjectSlug, coversForProjectSlug } from "@/lib/public-images";

const STACK_TRACK_VH = 130;

function StackScrollItem({
  slug,
  title,
  categoryLabel,
  index,
  isLast,
}: {
  slug: string;
  title: string;
  categoryLabel: string;
  index: number;
  isLast: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end start"],
  });

  // Lenis already handles inertial smoothing; the spring just removes the
  // last bit of jitter on framer-motion's scroll signal so transforms breathe.
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 36,
    mass: 0.45,
  });

  // Continuous curves (no flat plateau) so the card starts reacting from the
  // very first pixel of scroll and hands off smoothly to the next one.
  const scale = useTransform(progress, [0, 1], [1, 0.88]);
  const opacity = useTransform(progress, [0, 0.7, 1], [1, 0.85, isLast ? 1 : 0.45]);
  const y = useTransform(progress, [0, 1], [0, -90]);
  const rotateX = useTransform(progress, [0, 1], [0, 7]);
  const filter = useTransform(
    progress,
    [0, 1],
    ["brightness(1) saturate(1)", "brightness(0.7) saturate(0.9)"],
  );

  const prefersReducedMotion = useReducedMotion();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const motionStyle =
    mounted && prefersReducedMotion !== true
      ? { scale, opacity, y, rotateX, filter }
      : undefined;

  return (
    <div
      ref={trackRef}
      className="relative"
      style={{ zIndex: index + 1, minHeight: `${STACK_TRACK_VH}vh` }}
    >
      <div className="sticky top-0 flex h-[100dvh] items-center justify-center px-4 pb-28 pt-24 md:px-10 [perspective:1400px] [transform-style:preserve-3d]">
        <motion.div
          className="relative w-full max-w-4xl origin-[50%_45%] will-change-transform"
          style={motionStyle}
        >
          <ProjectCard
            variant="stack"
            title={title}
            category={categoryLabel}
            href={`/work/${slug}`}
            imageSrc={coverForProjectSlug(slug)}
            imageSrcs={coversForProjectSlug(slug)}
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
          isLast={index === items.length - 1}
        />
      ))}
    </section>
  );
}
