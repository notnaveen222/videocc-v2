"use client";

import { useInView, motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import Marquee from "react-fast-marquee";
const TESTIMONIALS = [
  {
    name: "Naveen",
    role: "Freelancer",
    comment: "Vediocc is literally the best agency i have every worked with.",
    profile: "pfp.png",
  },
  {
    name: "Naveen",
    role: "Freelancer",
    comment: "Vediocc is literally the best agency i have every worked with.",
    profile: "pfp.png",
  },
  {
    name: "Naveen",
    role: "Freelancer",
    comment: "Vediocc is literally the best agency i have every worked with.",
    profile: "pfp.png",
  },
  {
    name: "Naveen",
    role: "Freelancer",
    comment: "Vediocc is literally the best agency i have every worked with.",
    profile: "pfp.png",
  },
];

export default function TestimonialSection() {
  const titleRef = useRef(null);
  const titleIsInView = useInView(titleRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });
  const marqueeRef = useRef(null);
  const marqueeIsInView = useInView(marqueeRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });
  return (
    <div className=" flex flex-col justify-center items-center  lg:max-w-7xl  mx-auto mb-16  overflow-hidden">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: titleIsInView ? 1 : 0,
          y: titleIsInView ? 0 : 30,
        }}
        ref={titleRef}
        className="text-center font-medium text-5xl mb-16"
      >
        Testimonials
      </motion.div>
      <motion.div
        ref={marqueeRef}
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: marqueeIsInView ? 1 : 0,
          y: marqueeIsInView ? 0 : 30,
        }}
        className="w-screen lg:max-w-7xl mx-auto"
      >
        <Marquee speed={100} ref={marqueeRef}>
          {TESTIMONIALS.map((user, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl flex flex-col px-4 py-2 pb-4  w-sm mr-3"
            >
              <div className="flex gap-x-2 justify-start mb-2 items-center">
                <Image
                  src={`/${user.profile}`}
                  alt="User Profile Picture"
                  height={44}
                  width={44}
                />
                <div className="flex flex-col justify-center gap-y-0">
                  <div className="text-xl text-black font-medium">
                    {user.name}
                  </div>
                  <div className="text-sm text-black relative -top-1">
                    {user.role}
                  </div>
                </div>
              </div>
              <div className="text-black text-xl">{user.comment}</div>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </div>
  );
}
