import Link from "next/link";
import { LangMenuBar } from "@/components/LangMenuBar";

export function PageHeader({ light = false }: { light?: boolean }) {
  return (
    <header
      className={`flex items-center justify-between px-5 py-6 md:px-8 ${light ? "bg-white text-neutral-900" : "bg-black text-white"}`}
    >
      <Link
        href="/"
        className={`text-[15px] font-light lowercase tracking-[0.08em] ${light ? "text-neutral-900" : "text-white"}`}
      >
        mutuo agencia
      </Link>
      <LangMenuBar variant={light ? "light" : "dark"} />
    </header>
  );
}
