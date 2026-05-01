export type ProjectFilter =
  | "all"
  | "branding"
  | "social"
  | "digital"
  | "visual"
  | "consulting";

export interface Project {
  slug: string;
  title: string;
  filter: Exclude<ProjectFilter, "all">;
  categoryLabel: string;
  /** Texto para H3 en detalle (lista separada por guiones) */
  detailLine: string;
}

export const FILTERS: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "branding", label: "Branding" },
  { id: "social", label: "Social Media" },
  { id: "digital", label: "Digital Strategy" },
  { id: "visual", label: "Visual Identity" },
  { id: "consulting", label: "Consulting" },
];

export const PROJECTS: Project[] = [
  {
    slug: "koda",
    title: "Koda",
    filter: "branding",
    categoryLabel: "Project · Architecture",
    detailLine: "Branding · Digital Strategy · Social Media",
  },
  {
    slug: "open",
    title: "Open",
    filter: "visual",
    categoryLabel: "Project · Architecture",
    detailLine: "Visual Identity · Digital Strategy",
  },
  {
    slug: "nandez",
    title: "Nandez",
    filter: "digital",
    categoryLabel: "Project · Architecture",
    detailLine: "Digital Strategy · Consulting",
  },
  {
    slug: "valuge",
    title: "Valuge",
    filter: "branding",
    categoryLabel: "Project · Pharmaceutical",
    detailLine: "Branding · Social Media · Visual Identity",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
