"use client";
import { easeOut } from "motion";
import { motion } from "motion/react";
import { OpacityAnimation, StaggerAnimation } from "../Framer-actions";
import ServiceCard from "../ServiceCard";

const SERVICES = [
  {
    title: "Web Design",
    description: "Offer an unforgettable user experience",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        />
      </svg>
    ),
    tags: ["Responsive", "Animations", "SEO", "E-Commerce"],
  },
  {
    title: "Digital Design",
    description: "Offer an unforgettable user experience",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
        />
      </svg>
    ),
    tags: ["Responsive", "Animations", "SEO", "E-Commerce"],
  },
  {
    title: "Video Production",
    description: "Offer an unforgettable user experience",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
    tags: ["Responsive", "Animations", "SEO", "E-Commerce"],
  },
];
export default function ServiceSection() {
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
  };
  return (
    <>
      <div className="mb-20">
        <OpacityAnimation delay={0.3}>
          <div className="text-center font-medium text-5xl mb-16">
            Our Services
          </div>
        </OpacityAnimation>

        <StaggerAnimation>
          <motion.div variants={childVariants}>
            <ServiceCard {...SERVICES[0]} />
          </motion.div>
          <motion.div variants={childVariants}>
            <ServiceCard {...SERVICES[1]} />
          </motion.div>
          <motion.div variants={childVariants}>
            <ServiceCard {...SERVICES[2]} />
          </motion.div>
        </StaggerAnimation>
      </div>
    </>
  );
}
