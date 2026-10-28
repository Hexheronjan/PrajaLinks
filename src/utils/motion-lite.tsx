import React, { type ElementType } from "react";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createMotionComponent<T extends ElementType>(Tag: T): React.ComponentType<any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = (props: any) => {
    const cleanProps: Record<string, unknown> = {};

    for (const key in props) {
      if (!MOTION_PROPS.has(key)) {
        cleanProps[key] = props[key];
      }
    }

    const whileInView = props.whileInView as Record<string, unknown> | undefined;
    const initial = props.initial as Record<string, unknown> | undefined;

    if (whileInView && initial && typeof initial === "object") {
      const x = typeof initial.x === "number" ? initial.x : 0;
      cleanProps["data-reveal"] = x < 0 ? "left" : x > 0 ? "right" : "up";
    }

    const ElementTag = Tag as ElementType;
    return <ElementTag {...cleanProps} />;
  };
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
  _ref?: unknown,
  _options?: Record<string, unknown>
): boolean {
  return true;
}
