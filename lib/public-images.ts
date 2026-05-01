export const ALL_SITE_JPEG = [
  "Bonutto.jpg",
  "Musky1.jpg",
  "arqui2.jpg",
  "arquitectura .jpg",
  "personas.jpg",
  "Vesta .jpg",
  "Vesta es el resultado de un proceso profundo, sensible y estratégico. Cada decisión en su desarr.jpg",
  "Vesta.jpg",
  "Vesta2.jpg",
  "bonutto2.jpg",
  "bonutto3 .jpg",
  "𝙈𝙪𝙨𝙠𝙪𝙮 .jpg",
  "alvaro.jpg",
] as const;

export function publicAssetPath(filename: string): string {
  return `/${encodeURIComponent(filename)}`;
}

/** Hero split inicial: izquierda Vesta2, derecha personas */
export const HERO_SPLITS = {
  left: publicAssetPath("Vesta2.jpg"),
  right: publicAssetPath("personas.jpg"),
} as const;

/** #services dual: izquierda arquitectura, derecha arqui2 */
export const SERVICES_ARQUI2_IMAGE = publicAssetPath("arqui2.jpg");

export const SERVICES_ARCHITECTURE_IMAGE = publicAssetPath("arquitectura .jpg");

/** (Reservado — ya no usado en home tras sección arquitectura) */
export const PURPOSE_MAIN_IMAGE = publicAssetPath("𝙈𝙪𝙨𝙠𝙪𝙮 .jpg");

/** About — columna imagen */
export const ABOUT_IMAGE = publicAssetPath("alvaro.jpg");

export const PROJECT_COVER_FILENAME: Record<
  "koda" | "open" | "nandez" | "valuge",
  string
> = {
  koda: "Vesta.jpg",
  open: "bonutto3 .jpg",
  nandez: "Musky1.jpg",
  valuge: "Vesta .jpg",
};

export function projectCoverHref(
  slug: keyof typeof PROJECT_COVER_FILENAME,
): string {
  return publicAssetPath(PROJECT_COVER_FILENAME[slug]);
}

export type ProjectSlug = keyof typeof PROJECT_COVER_FILENAME;

function isProjectSlug(slug: string): slug is ProjectSlug {
  return Object.hasOwn(PROJECT_COVER_FILENAME, slug);
}

export function coverForProjectSlug(slug: string): string {
  return isProjectSlug(slug) ? projectCoverHref(slug) : projectCoverHref("koda");
}

export function coversAllUploads(filename: string): boolean {
  return (ALL_SITE_JPEG as readonly string[]).includes(filename);
}
