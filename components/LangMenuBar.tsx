"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Projects" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function LangMenuBar({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const [open, setOpen] = useState(false);
  const ring =
    variant === "dark"
      ? "border border-white/35 bg-white/10"
      : "border border-neutral-400/60 bg-white";

  return (
    <div className={`relative z-40 flex items-center justify-end ${className}`}>
      <button
        type="button"
        className={`relative flex size-11 shrink-0 items-center justify-center rounded-full ${ring} backdrop-blur-sm transition-opacity hover:opacity-90`}
        aria-expanded={open}
        aria-controls="site-drawer"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="flex w-[18px] flex-col gap-1.5" aria-hidden>
          <span
            className={`h-px w-full origin-center transition-transform ${variant === "dark" ? "bg-white" : "bg-neutral-800"} ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-full origin-center transition-transform ${variant === "dark" ? "bg-white" : "bg-neutral-800"} ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </span>
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            id="site-drawer"
            className="fixed inset-0 z-30 bg-black/45 backdrop-blur-[6px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
          >
            <motion.nav
              className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col gap-8 bg-[#0a0a0a] px-10 pb-16 pt-28 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-[11px] font-light uppercase tracking-[0.26em] text-white/35">
                Menu
              </p>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-lg font-light text-white transition-colors hover:text-white/65"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
