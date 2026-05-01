"use client";

import Link from "next/link";

function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Projects" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

function SocialIcon({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <span
      className="flex size-10 items-center justify-center rounded-full border border-white/25 text-[10px] font-medium uppercase text-white"
      aria-label={label}
    >
      {children}
    </span>
  );
}

export function MainFooter() {
  return (
    <footer className="bg-[#000000] px-6 py-24 text-white md:px-10">
      <p className="text-center text-[11px] font-light uppercase tracking-[0.24em] text-white/50">
        texto
      </p>
      <h2 className="mx-auto mt-12 max-w-4xl text-center text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.12] tracking-tight">
        texto
      </h2>
      <nav
        className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 text-[15px] font-light"
        aria-label="Footer"
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-white/90 transition-colors hover:text-white"
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="mx-auto mt-16 max-w-5xl border-t border-white/12 pt-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <button
            type="button"
            onClick={scrollTop}
            className="flex items-center gap-3 text-[12px] font-light uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
          >
            Back to top
            <span className="flex size-9 items-center justify-center rounded-full border border-white/30 text-sm">
              ↑
            </span>
          </button>
          <div className="flex items-center gap-4" aria-label="Social links">
            <SocialIcon label="Instagram">IG</SocialIcon>
            <SocialIcon label="LinkedIn">in</SocialIcon>
            <SocialIcon label="TikTok">TT</SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
