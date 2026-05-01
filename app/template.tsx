import type { ReactNode } from "react";

/** Wrapper estable entre rutas: evita fallos de hidratación por Framer/reduced-motion. */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="flex flex-1 flex-col">{children}</div>;
}
