import { motion, useInView } from "motion/react";
import { useRef } from "react";

const FAQS = [
  {
    question: "How long does completion take?",
    answer: "Most projects take 2-4 weeks depending on complexity.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Due to effort put into our projects, we are unable to provide refunds.",
  },
  {
    question: "Do we create content or should you provide it?",
    answer:
      "We handle both. Our team can design graphics, write captions, and edit videos, or work with your existing content.",
  },
];

export default function FaqSection() {
  const titleRef = useRef(null);
  const titleIsInView = useInView(titleRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });
  return (
    <div className=" flex flex-col justify-center items-center  max-w-7xl mx-auto mb-32 px-5 lg:px-0 ">
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: titleIsInView ? 1 : 0,
          y: titleIsInView ? 0 : 10,
        }}
        ref={titleRef}
        className="text-center font-medium text-5xl mb-16"
      >
        FAQs
      </motion.div>
      <div className="flex flex-col gap-y-5">
        {FAQS.map((faq, idx) => (
          <div
            key={idx}
            className="w-full border px-4 py-3 border-white rounded-2xl flex flex-col gap-y-2 bg-linear-to-b from-white/10 to-transparent"
          >
            <div className="text-lg sm:text-xl font-normal">
              Q : {faq.question}
            </div>
            <div className="text-base sm:text-lg">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
