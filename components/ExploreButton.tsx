import Link from "next/link";

export function ExploreButton({ href = "#purpose" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="group ml-6 flex items-center gap-5 text-[13px] font-light uppercase tracking-[0.26em] text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)]"
    >
      <span
        className="relative flex size-14 items-center justify-center rounded-full border border-white/85 text-white transition-colors group-hover:border-white"
        aria-hidden
      >
        <span className="arrow-float flex flex-col">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            className="opacity-90"
          >
            <path d="M12 5v13" strokeLinecap="round" />
            <path d="m6 12 6 7 6-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
      <span className="text-white">Explore</span>
    </Link>
  );
}
