import Link from "next/link";
import { HeroSectionSplit } from "@/components/HeroSection";
import { MutuoWordmarkPurpose } from "@/components/MutuoWordmark";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { MainFooter } from "@/components/MainFooter";
import { ProjectsStack } from "@/components/ProjectsStack";
import {
  ABOUT_IMAGE,
  SERVICES_ARCHITECTURE_IMAGE,
  SERVICES_ARQUI2_IMAGE,
} from "@/lib/public-images";

export default function Home() {
  return (
    <>
      <HeroSectionSplit />
      <section
        id="purpose"
        aria-label="Propósito"
        className="scroll-mt-24 flex min-h-[100dvh] flex-col justify-center bg-[#f2f2f0] px-6 py-16 md:px-10 md:py-20"
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col items-start justify-center">
          <MutuoWordmarkPurpose />
          <p
            lang="es"
            className="max-w-xl text-left text-lg font-light leading-[2] text-neutral-600 md:text-[1.35rem] md:leading-[1.95]"
          >
            Somos una Agencia que integra la mirada de diversos{" "}
            <strong className="font-semibold italic text-neutral-800">
              profesionales creativos
            </strong>{" "}
            para brindar{" "}
            <strong className="font-semibold italic text-neutral-800">
              soluciones integrales
            </strong>{" "}
            en materia de Comunicación.
          </p>
          <Link
            href="#stack"
            className="mt-14 inline-flex rounded-full border border-neutral-300 px-9 py-3.5 text-[13px] font-light tracking-wide text-neutral-800 transition-colors hover:border-neutral-500"
          >
            What we do
          </Link>
        </div>
      </section>

      <section
        id="services"
        aria-label="Arquitectura"
        className="grid min-h-[100dvh] w-full scroll-mt-24 grid-cols-1 bg-black md:grid-cols-2"
      >
        <div className="relative min-h-[50dvh] w-full md:min-h-[100dvh]">
          <ImagePlaceholder
            src={SERVICES_ARCHITECTURE_IMAGE}
            alt=""
            sizes="(max-width: 768px) 100vw, 50vw"
            objectFit="contain"
            unoptimized
            className="absolute inset-0 size-full min-h-[50dvh] md:min-h-[100dvh]"
          />
        </div>
        <div className="relative min-h-[50dvh] w-full md:min-h-[100dvh]">
          <ImagePlaceholder
            src={SERVICES_ARQUI2_IMAGE}
            alt=""
            sizes="(max-width: 768px) 100vw, 50vw"
            objectFit="contain"
            unoptimized
            className="absolute inset-0 size-full min-h-[50dvh] md:min-h-[100dvh]"
          />
        </div>
      </section>

      <section className="flex min-h-[50vh] flex-col justify-center bg-black px-6 py-24 text-white md:min-h-[55vh] md:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-[11px] font-light uppercase tracking-[0.28em] text-white/45">
            Featured
          </p>
          <h2 className="mt-2 text-[clamp(3rem,9vw,6.75rem)] font-extralight leading-[0.95]">
            projects
          </h2>
          <Link
            href="/work"
            className="mt-12 inline-flex rounded-full border border-white/40 px-9 py-3.5 text-[12px] font-light uppercase tracking-[0.18em] text-white transition-colors hover:border-white"
          >
            View all
          </Link>
        </div>
      </section>

      <ProjectsStack />

      <section
        id="about"
        className="scroll-mt-24 grid grid-cols-1 bg-white md:min-h-[85vh] md:grid-cols-2"
      >
        <div className="flex flex-col justify-center px-6 py-20 md:px-14 lg:px-20">
          <p className="text-[13px] font-light text-neutral-500">texto</p>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-light leading-snug tracking-tight text-neutral-900">
            texto
          </h2>
          <Link
            href="/work"
            className="mt-12 inline-flex w-fit rounded-full border border-neutral-300 px-9 py-3.5 text-[13px] font-light text-neutral-800 transition-colors hover:border-neutral-500"
          >
            texto
          </Link>
        </div>
        <div className="relative min-h-[52vh] w-full md:min-h-0">
          <ImagePlaceholder
            src={ABOUT_IMAGE}
            alt=""
            sizes="(max-width: 768px) 100vw, 50vw"
            className="absolute inset-0 size-full rounded-none md:min-h-[85vh]"
          />
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-neutral-200 bg-white py-20 text-center"
      >
        <p className="text-[11px] font-light uppercase tracking-[0.22em] text-neutral-500">
          Contact
        </p>
        <a
          href="mailto:hola@mutuoagencia.com"
          className="mt-4 inline-block text-lg font-light text-neutral-900 underline-offset-4 hover:underline"
        >
          hola@mutuoagencia.com
        </a>
      </section>

      <MainFooter />
    </>
  );
}
