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
        width={256}
        height={178}
        sizes="256px"
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
        width={69}
        height={32}
        sizes="69px"
        priority={priority}
        className="h-8 w-auto"
      />
      <Image
        src="/logo-wordmark.png"
        alt=""
        width={89}
        height={18}
        sizes="89px"
        priority={priority}
        className="h-[18px] w-auto"
      />
    </span>
  );
};
