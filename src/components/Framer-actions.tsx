"use client";
import { easeInOut, easeOut, motion } from "motion/react";

export function HeroImageAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        ease: easeOut,
        delay: 0.6,
      }}
    >
      {children}
    </motion.div>
  );
}

export function WanderImage({
  offset,
  children,
}: {
  offset: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      animate={{
        x: [0, offset, offset, -offset, 0],
        y: [0, -offset, offset, offset + 2, 0],
      }}
      transition={{
        duration: 5,
        ease: easeOut,
        repeat: Infinity,
        delay: 1.5,
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroTextAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        ease: easeOut,
        staggerChildren: 2,
      }}
    >
      {children}
    </motion.div>
  );
}

export function NavbarAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        ease: easeOut,
      }}
    >
      {children}
    </motion.div>
  );
}

export function OpacityAnimation({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.4,
        ease: easeOut,
        delay: delay ? delay : 0,
      }}
    >
      {children}
    </motion.div>
  );
}
