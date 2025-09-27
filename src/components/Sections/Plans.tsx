"use client";
import { ReactNode, useRef, useState } from "react";
import { easeOut, motion, stagger, useInView } from "motion/react";
type Plan = {
  title: string;
  icon: ReactNode;
  description: string;
  options: string[];
};
const PLANS: Plan[] = [
  {
    title: "Web Design",
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
    description:
      "We design and develop custom,  SEO-friendly websites that look stunning, perform flawlessly, and convert visitors into customers.",
    options: ["Landing Page", "Full-Stack Site"],
  },
  {
    title: "Video Production",
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
    description:
      "We design and develop custom,  SEO-friendly websites that look stunning, perform flawlessly, and convert visitors into customers.",
    options: ["Short Form", "Long Form"],
  },
  {
    title: "Digital Marketting",
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
    description:
      "We design and develop custom,  SEO-friendly websites that look stunning, perform flawlessly, and convert visitors into customers.",
    options: ["Creator", "Buisness"],
  },
];

export default function PlanSection() {
  const titleRef = useRef(null);
  const titleIsInView = useInView(titleRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });
  const cardsRef = useRef(null);
  const cardIsInView = useInView(cardsRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });
  const [selectedPlan, setSelectedPlan] = useState<number>(0);
  return (
    <div className=" flex flex-col justify-center items-center max-w-7xl mx-auto mb-16">
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
        Plans
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 200,
          filter: "blur(10px)",
        }}
        ref={cardsRef}
        animate={{
          opacity: cardIsInView ? 1 : 0,
          y: cardIsInView ? 0 : 200,
          filter: cardIsInView ? "blur(0px)" : "blur(30px",
        }}
        transition={{
          delayChildren: stagger(0.3),
        }}
        className="flex gap-x-2 "
      >
        {PLANS.map((plan, index) => (
          <motion.div
            key={index}
            animate={{
              width: selectedPlan == index ? "1050px" : "64px",
              borderRadius: selectedPlan == index ? "24px" : "16px",
              writingMode:
                selectedPlan == index ? "horizontal-tb" : "vertical-rl",
            }}
            transition={{
              delay: 0,
              duration: 0.3,
            }}
            onClick={() => setSelectedPlan(index)}
            className={`flex flex-col border border-white p-5  overflow-hidden h-[400px] bg-linear-to-b from-white/10 to-transparent ${
              selectedPlan == index ? "" : "justify-center "
            }`}
          >
            <div className="flex gap-x-5 items-center mb-5">
              <div className="bg-white/10 rounded-full p-1.5 w-fit flex justify-center items-center">
                {plan.icon}
              </div>
              <motion.div className="text-nowrap  text-3xl">
                {plan.title}
              </motion.div>
            </div>
            {selectedPlan == index && (
              <motion.div
                initial={{
                  opacity: 0,
                  filter: "blur(5px)",
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                transition={{
                  delay: 0.15,
                  duration: 0.35,
                }}
              >
                <div className="text-2xl mb-[134px]">{plan.description}</div>
                <div className="flex gap-x-5 ">
                  {plan.options.map((option, idx) => (
                    <div
                      key={`option-${idx}`}
                      className="text-2xl bg-white text-grad-dark-blue text-shadow-md rounded-2xl px-10 flex-2 text-center py-3 flex justify-center items-center"
                    >
                      {option}
                    </div>
                  ))}
                  <div className="flex flex-1 flex-col items-center gap-y-2">
                    <div className="text-center text-xl">
                      Got Specific Requirements?
                    </div>
                    <button className="bg-white text-grad-dark-blue w-fit px-5 py-1 rounded-full text-xl cursor-none ">
                      Connect
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

type PlanCardProps = {
  plan: Plan;
  index: number;
  selectedPlan: number;
  setSelectedPlan: (index: number) => void;
};
function PlanCard({
  plan,
  index,
  selectedPlan,
  setSelectedPlan,
}: PlanCardProps) {
  const selected = index == selectedPlan;
  return (
    <motion.div
      animate={{
        flexGrow: selectedPlan == index ? 1 : 0,
        flexBasis: selectedPlan == index ? "auto" : "70px",
        borderRadius: selectedPlan == index ? "24px" : "16px",
        writingMode: selectedPlan == index ? "horizontal-tb" : "vertical-rl",
      }}
      transition={{
        delay: 0,
        duration: 0.3,
      }}
      onClick={() => setSelectedPlan(index)}
      className="flex flex-col border border-white p-5  overflow-hidden h-72 rounded-2xl"
    >
      <div className="flex gap-x-5">
        <div>{plan.icon}</div>
        <motion.div className="text-nowrap">{plan.title}</motion.div>
      </div>
      {selectedPlan == index && (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.3,
          }}
        >
          {plan.description}
        </motion.div>
      )}
    </motion.div>
  );
}
