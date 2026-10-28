"use client";

import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ElementType,
} from "react";

export type Variants = Record<string, unknown>;

const MOTION_PROPS = new Set([
  "initial",
  "animate",
  "exit",
  "whileInView",
  "whileHover",
  "whileTap",
  "variants",
  "transition",
  "viewport",
  "layout",
  "layoutId",
  "onAnimationComplete",
]);

// Satu IntersectionObserver bersama yang baru aktif saat pengguna mulai scroll
let sharedObserver: IntersectionObserver | null = null;
const observedCallbacks = new Map<Element, () => void>();
let scrollActivated = false;
const pendingElements = new Set<{
  el: HTMLElement;
  initial: Record<string, unknown>;
  transition?: Record<string, unknown>;
}>();

function ensureScrollListener() {
  if (typeof window === "undefined" || scrollActivated) return;
  const onFirstScroll = () => {
    scrollActivated = true;
    window.removeEventListener("scroll", onFirstScroll);
    window.removeEventListener("wheel", onFirstScroll);
    window.removeEventListener("touchmove", onFirstScroll);

    if (!sharedObserver && "IntersectionObserver" in window) {
      sharedObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const cb = observedCallbacks.get(entry.target);
              if (cb) {
                cb();
                observedCallbacks.delete(entry.target);
                sharedObserver?.unobserve(entry.target);
              }
            }
          }
        },
        { threshold: 0.12 }
      );
    }

    pendingElements.forEach((item) => {
      const { el, initial, transition } = item;
      const rect = el.getBoundingClientRect();
      // Hanya animasikan elemen yang masih berada di bawah layar saat mulai scroll
      if (rect.top > window.innerHeight * 0.92) {
        const x = typeof initial.x === "number" ? `${initial.x}px` : initial.x || "0px";
        const y = typeof initial.y === "number" ? `${initial.y}px` : initial.y || "0px";
        el.style.transition = "none";
        el.style.opacity = "0";
        el.style.transform = `translate3d(${x}, ${y}, 0)`;

        observedCallbacks.set(el, () => {
          const dur = typeof transition?.duration === "number" ? transition.duration : 0.75;
          const delay = typeof transition?.delay === "number" ? transition.delay : 0;
          el.style.transition = `opacity ${dur}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${dur}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;
          el.style.opacity = "1";
          el.style.transform = "translate3d(0, 0, 0)";
        });
        sharedObserver?.observe(el);
      }
    });
    pendingElements.clear();
  };

  window.addEventListener("scroll", onFirstScroll, { passive: true });
  window.addEventListener("wheel", onFirstScroll, { passive: true });
  window.addEventListener("touchmove", onFirstScroll, { passive: true });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createMotionComponent<T extends ElementType>(Tag: T): React.ComponentType<any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = forwardRef<HTMLElement, any>((props, extRef) => {
    const innerRef = useRef<HTMLElement | null>(null);
    const cleanProps: Record<string, unknown> = {};

    for (const key in props) {
      if (!MOTION_PROPS.has(key)) {
        cleanProps[key] = props[key];
      }
    }

    const whileInView = props.whileInView as Record<string, unknown> | undefined;
    const initial = props.initial as Record<string, unknown> | undefined;
    const transition = props.transition as Record<string, unknown> | undefined;

    useEffect(() => {
      const el = innerRef.current;
      if (!el || !whileInView || !initial || typeof initial !== "object") return;
      ensureScrollListener();
      const item = { el, initial, transition };
      pendingElements.add(item);
      return () => {
        pendingElements.delete(item);
        observedCallbacks.delete(el);
        sharedObserver?.unobserve(el);
      };
    }, [whileInView, initial, transition]);

    const ElementTag = Tag as ElementType;
    return (
      <ElementTag
        ref={(node: HTMLElement | null) => {
          innerRef.current = node;
          if (typeof extRef === "function") extRef(node);
          else if (extRef && typeof extRef === "object") {
            (extRef as React.MutableRefObject<HTMLElement | null>).current = node;
          }
        }}
        {...cleanProps}
      />
    );
  });
  Comp.displayName = `motion.${String(Tag)}`;
  return Comp;
}

export const motion = {
  div: createMotionComponent("div"),
  span: createMotionComponent("span"),
  p: createMotionComponent("p"),
  h1: createMotionComponent("h1"),
  h2: createMotionComponent("h2"),
  h3: createMotionComponent("h3"),
  h4: createMotionComponent("h4"),
  ul: createMotionComponent("ul"),
  li: createMotionComponent("li"),
  a: createMotionComponent("a"),
  button: createMotionComponent("button"),
  section: createMotionComponent("section"),
  article: createMotionComponent("article"),
  header: createMotionComponent("header"),
  footer: createMotionComponent("footer"),
  nav: createMotionComponent("nav"),
  form: createMotionComponent("form"),
  img: createMotionComponent("img"),
  svg: createMotionComponent("svg"),
  path: createMotionComponent("path"),
};

export const AnimatePresence: React.FC<{
  children?: React.ReactNode;
  mode?: string;
  initial?: boolean;
  onExitComplete?: () => void;
}> = ({ children }) => <>{children}</>;

export const MotionConfig: React.FC<{
  children?: React.ReactNode;
  reducedMotion?: string;
}> = ({ children }) => <>{children}</>;

export function useInView(
  _ref?: React.RefObject<Element | null>,
  _options?: Record<string, unknown>
): boolean {
  const [inView] = useState(true);
  return inView;
}
