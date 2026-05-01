import Link from "next/link";
import { mutuoDisplay } from "@/lib/mutuo-display-font";

/** #purpose sobre fondo claro */
const purposeWordmarkBase = `${mutuoDisplay.className} font-black lowercase leading-[0.92] tracking-[-0.04em] text-[#282828]`;

/** Hero sobre foto: marca blanca, sin sombras ni “aura” */
const heroWordmarkBase = `${mutuoDisplay.className} font-black lowercase leading-[0.92] tracking-[-0.04em] text-white`;

/** Título grande en #purpose */
export function MutuoWordmarkPurpose() {
  return (
    <h2
      className={`${purposeWordmarkBase} mb-10 text-[clamp(3.65rem,14vw,6.85rem)] md:mb-14`}
      aria-label="mutuo."
    >
      mutuo
      <span
        className="text-[0.9em] align-baseline text-[#9885d6]"
        aria-hidden
      >
        .
      </span>
    </h2>
  );
}

/** Marca en esquina del hero */
export function MutuoWordmarkHeroLink() {
  return (
    <Link
      href="/"
      className="absolute left-6 top-6 z-20 outline-offset-4 transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-white/40"
      aria-label="Inicio · mutuo."
    >
      <span
        className={`${heroWordmarkBase} inline-block text-[clamp(1.4rem,3.2vw,2.5rem)]`}
      >
        mutuo
        <span className="text-[0.9em] align-baseline text-white" aria-hidden>
          .
        </span>
      </span>
    </Link>
  );
}
