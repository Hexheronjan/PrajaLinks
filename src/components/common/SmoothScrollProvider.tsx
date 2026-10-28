"use client";

import { useEffect } from "react";

export const SmoothScrollProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    let revealObserver: IntersectionObserver | null = null;
    let scrollHandled = false;

    if (!prefersReducedMotion) {
      const onFirstScroll = () => {
        if (scrollHandled) return;
        scrollHandled = true;
        window.removeEventListener("scroll", onFirstScroll);
        window.removeEventListener("wheel", onFirstScroll);
        window.removeEventListener("touchmove", onFirstScroll);

        if (!("IntersectionObserver" in window)) return;

        revealObserver = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                const el = entry.target as HTMLElement;
                el.style.transition =
                  "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)";
                el.style.opacity = "1";
                el.style.transform = "translate3d(0, 0, 0)";
                revealObserver?.unobserve(el);
              }
            }
          },
          { threshold: 0.12 }
        );

        const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
        const vh = window.innerHeight;
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top > vh * 0.92) {
            const dir = el.getAttribute("data-reveal");
            const x = dir === "left" ? "-60px" : dir === "right" ? "60px" : "0px";
            const y = dir === "up" ? "24px" : "0px";
            el.style.transition = "none";
            el.style.opacity = "0";
            el.style.transform = `translate3d(${x}, ${y}, 0)`;
            revealObserver?.observe(el);
          }
        });
      };

      window.addEventListener("scroll", onFirstScroll, { passive: true });
      window.addEventListener("wheel", onFirstScroll, { passive: true });
      window.addEventListener("touchmove", onFirstScroll, { passive: true });
    }

    if (prefersReducedMotion || !isFinePointer) {
      return () => {
        revealObserver?.disconnect();
      };
    }

    let animationFrameId: number;
    let destroyed = false;
    let lenisInstance: { raf: (t: number) => void; destroy: () => void } | null = null;

    import("lenis").then(({ default: Lenis }) => {
      if (destroyed) return;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,
      });
      lenisInstance = lenis;

      function raf(time: number) {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }

      animationFrameId = requestAnimationFrame(raf);
    });

    return () => {
      destroyed = true;
      revealObserver?.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      lenisInstance?.destroy();
    };
  }, []);

  return <>{children}</>;
};
