"use client";
import { motion } from "motion/react";
interface Props {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}
export default function ServiceCard(props: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        duration: 0.1,
      }}
      className="flex flex-col justify-between h-[440px] max-w-sm border border-white rounded-4xl  shadow-[7.0px_10.0px_20.0px_rgba(0,0,0,0.35)] px-7 py-5 pb-7 bg-linear-to-b from-white/10 to-transparent"
    >
      <div className="flex flex-col gap-y-3">
        <div className="bg-white/10 rounded-full p-1.5 w-fit flex justify-center items-center">
          {props.icon}
        </div>
        <div className="text-3xl">{props.title}</div>
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="text-xl">{props.description}</div>
        <div className="flex gap-x-2 flex-wrap gap-y-2">
          {props.tags.map((tag, index) => (
            <div
              className="text-grad-dark-blue bg-white px-2  rounded-full"
              key={index}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
