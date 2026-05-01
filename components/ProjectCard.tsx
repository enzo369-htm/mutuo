"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type ProjectCardProps = {
  title: string;
  category: string;
  href: string;
  variant: "stack" | "portfolio";
  imageSrc: string;
};

export function ProjectCard({
  title: _title,
  category: _category,
  href,
  variant,
  imageSrc,
}: ProjectCardProps) {
  if (variant === "stack") {
    return (
      <article className="relative w-full max-w-4xl">
        <Link href={href} className="block">
          <div className="relative flex h-[min(78vh,640px)] w-full flex-col overflow-hidden rounded-[26px] bg-[#2e2e2e] shadow-[0_36px_120px_rgba(0,0,0,0.72)] transition-shadow duration-300">
            <div className="absolute left-7 top-7 z-10 md:left-9 md:top-9">
              <h3 className="text-3xl font-light tracking-tight text-white md:text-4xl">
                texto
              </h3>
              <p className="mt-2 max-w-xs text-[11px] font-light uppercase leading-relaxed tracking-[0.2em] text-white/55">
                texto
              </p>
            </div>
            <ImagePlaceholder
              src={imageSrc}
              alt=""
              sizes="(max-width: 768px) 100vw, 896px"
              className="mt-auto min-h-[55%] flex-1 rounded-none border-0 brightness-[0.85]"
            />
          </div>
        </Link>
      </article>
    );
  }

  return (
    <motion.article
      className="group mx-auto w-[min(90vw,65rem)] md:w-[65%]"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={href}
        className="block transition-opacity duration-300 group-hover:opacity-[0.88]"
      >
        <header className="mb-8">
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-light tracking-tight text-white">
            texto
          </h2>
          <p className="mt-2 text-[11px] font-light uppercase tracking-[0.2em] text-white/55">
            texto
          </p>
        </header>
        <ImagePlaceholder
          src={imageSrc}
          alt=""
          sizes="(max-width: 768px) 90vw, 65vw"
          className="aspect-[16/10] w-full rounded-lg border border-white/[0.06]"
        />
      </Link>
    </motion.article>
  );
}
