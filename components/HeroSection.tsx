import Link from "next/link";
import { MutuoWordmarkHeroLink } from "@/components/MutuoWordmark";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ExploreButton } from "@/components/ExploreButton";
import { LangMenuBar } from "@/components/LangMenuBar";
import { HERO_SPLITS } from "@/lib/public-images";

/** Hero split pantalla inicial (referencia Captura 13.00.46) */
export function HeroSectionSplit() {
  return (
    <section
      aria-label="Inicio"
      className="grid min-h-[100dvh] grid-cols-1 md:grid-cols-2"
    >
      <div className="relative flex min-h-[55dvh] flex-col md:min-h-[100dvh]">
        <MutuoWordmarkHeroLink />
        <ImagePlaceholder
          src={HERO_SPLITS.left}
          alt=""
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="absolute inset-0 size-full rounded-none md:min-h-0"
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/55 via-black/10 to-transparent"
          aria-hidden
        />
        <div className="pointer-events-none relative z-10 mt-auto md:absolute md:bottom-10 md:left-6 md:right-6">
          <div className="pointer-events-auto pb-10 pl-8 pt-28 md:p-0">
            <ExploreButton href="#purpose" />
          </div>
        </div>
      </div>
      <div className="relative min-h-[50dvh] overflow-hidden bg-[#141414] md:min-h-[100dvh]">
        <ImagePlaceholder
          src={HERO_SPLITS.right}
          alt=""
          priority
          objectFit="contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="absolute inset-0 size-full rounded-none md:min-h-0"
        />
        <div className="absolute left-0 right-0 top-0 z-20 flex justify-end px-5 pt-6 md:px-8 md:pt-8">
          <LangMenuBar variant="dark" />
        </div>
      </div>
    </section>
  );
}

type HeroFullProps = {
  title: string;
  categoryLine: string;
  /** Ruta desde /public (codificada) */
  coverSrc: string;
};

/** Hero full-bleed + overlay abajo a la izquierda (detalle proyecto) */
export function HeroSectionFull({ title, categoryLine, coverSrc }: HeroFullProps) {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-black">
      <ImagePlaceholder
        src={coverSrc}
        alt=""
        priority
        sizes="100vw"
        className="absolute inset-0 size-full min-h-[100dvh] rounded-none bg-neutral-800"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-5 py-6 md:px-8">
        <Link
          href="/"
          className="text-[15px] font-light lowercase tracking-[0.08em] text-white"
        >
          mutuo agencia
        </Link>
        <LangMenuBar variant="dark" />
      </div>
      <div className="absolute bottom-16 left-5 z-20 max-w-2xl md:bottom-20 md:left-10">
        <h1 className="text-5xl font-light tracking-tight text-white md:text-7xl">
          {title}
        </h1>
        <p className="mt-4 text-[13px] font-light uppercase tracking-[0.2em] text-white/85">
          {categoryLine}
        </p>
        <div className="mt-10">
          <ExploreButton href="#content" />
        </div>
      </div>
    </section>
  );
}
