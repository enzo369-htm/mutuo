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
  /** Si se pasan varias, en `stack` se renderizan en grilla horizontal. */
  imageSrcs?: string[];
};

export function ProjectCard({
  title: _title,
  category: _category,
  href,
  variant,
  imageSrc,
  imageSrcs,
}: ProjectCardProps) {
  if (variant === "stack") {
    const sources =
      imageSrcs && imageSrcs.length > 0 ? imageSrcs : [imageSrc];
    const isMulti = sources.length > 1;

    // En modo multi (triptych) usamos el color de fondo exacto de las imágenes
    // (#e2dbc8) en lugar del gris del card, así las franjas superior/inferior
    // se funden con las imágenes sin que se note el corte. Sin brightness para
    // que el color renderizado y el del card matcheen.
    const cardBg = isMulti ? "bg-[#e2dbc8]" : "bg-[#2e2e2e]";
    const titleClass = isMulti
      ? "text-3xl font-light tracking-tight text-neutral-900 md:text-4xl"
      : "text-3xl font-light tracking-tight text-white md:text-4xl";
    const subtitleClass = isMulti
      ? "mt-2 max-w-xs text-[11px] font-light uppercase leading-relaxed tracking-[0.2em] text-neutral-700"
      : "mt-2 max-w-xs text-[11px] font-light uppercase leading-relaxed tracking-[0.2em] text-white/55";

    return (
      <article className="relative w-full max-w-4xl">
        <Link href={href} className="block">
          <div
            className={`relative flex h-[min(78vh,640px)] w-full flex-col overflow-hidden rounded-[26px] ${cardBg} shadow-[0_36px_120px_rgba(0,0,0,0.72)] transition-shadow duration-300`}
          >
            <div className="absolute left-7 top-7 z-10 md:left-9 md:top-9">
              <h3 className={titleClass}>texto</h3>
              <p className={subtitleClass}>texto</p>
            </div>
            {isMulti ? (
              <div
                className="mt-auto grid min-h-[55%] flex-1 gap-0"
                style={{
                  gridTemplateColumns: `repeat(${sources.length}, minmax(0, 1fr))`,
                }}
              >
                {sources.map((src, i) => (
                  <ImagePlaceholder
                    key={`${src}-${i}`}
                    src={src}
                    alt=""
                    objectFit="contain"
                    sizes={`(max-width: 768px) ${Math.round(100 / sources.length)}vw, ${Math.round(896 / sources.length)}px`}
                    className="relative size-full rounded-none border-0"
                  />
                ))}
              </div>
            ) : (
              <ImagePlaceholder
                src={sources[0]}
                alt=""
                sizes="(max-width: 768px) 100vw, 896px"
                className="mt-auto min-h-[55%] flex-1 rounded-none border-0 brightness-[0.85]"
              />
            )}
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
