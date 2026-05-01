import Image from "next/image";

type ImagePlaceholderProps = {
  className?: string;
  /** Solo si no hay \`src\` */
  label?: string;
  src?: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain";
  /** 1–100; por defecto el de Next (~75). Útil en fotos grandes. */
  quality?: number;
  /** Evita el optimizador (útil si el src con `%20` se codifica dos veces o para máxima nitidez local). */
  unoptimized?: boolean;
};

export function ImagePlaceholder({
  className = "",
  label = "aca va una imagen",
  src,
  alt = "",
  sizes = "100vw",
  priority = false,
  objectFit = "cover",
  quality,
  unoptimized = false,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          unoptimized={unoptimized || undefined}
          {...(!unoptimized && quality !== undefined ? { quality } : {})}
          className={
            objectFit === "contain" ? "object-contain" : "object-cover"
          }
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center bg-neutral-200/90 text-neutral-500 ${className}`}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label || undefined}
    >
      <span className="px-6 text-center text-sm font-light tracking-wide">
        {label}
      </span>
    </div>
  );
}
