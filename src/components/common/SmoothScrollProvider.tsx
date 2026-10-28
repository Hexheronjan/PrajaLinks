"use client";

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";

export const SmoothScrollProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    // Respect prefers-reduced-motion & skip continuous RAF loop on mobile/touch devices
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (prefersReducedMotion || !isFinePointer) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // reducedMotion="user": gerakan transform dimatikan bila pengguna meminta, fade tetap jalan
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
};
