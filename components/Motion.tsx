"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const easing = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article" | "span";
} & Omit<HTMLMotionProps<"div">, "ref">;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
  ...rest
}: RevealProps) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easing, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function Stagger({
  children,
  className,
  delayChildren = 0.05,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: easing },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
