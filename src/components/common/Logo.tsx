import Image from "next/image";

interface LogoProps {
  /** nav: horizontal ringkas · full: logo tersusun vertikal */
  variant?: "nav" | "full";
  className?: string;
  priority?: boolean;
}

/**
 * Logo resmi PrajaLinks (dari berkas yang diunggah).
 * Versi "nav" menyusun lambang dan tulisan secara horizontal dari dua potongan gambar yang sama.
 */
export const Logo = ({ variant = "nav", className = "", priority = false }: LogoProps) => {
  if (variant === "full") {
    return (
      <Image
        src="/logo-full.png"
        alt="PrajaLinks"
        width={381}
        height={265}
        priority={priority}
        className={className}
      />
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2.5 dark:bg-white dark:rounded-md dark:px-2.5 dark:py-1.5 ${className}`}
      role="img"
      aria-label="PrajaLinks"
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={381}
        height={176}
        priority={priority}
        className="h-8 w-auto"
      />
      <Image
        src="/logo-wordmark.png"
        alt=""
        width={381}
        height={77}
        priority={priority}
        className="h-[18px] w-auto"
      />
    </span>
  );
};
