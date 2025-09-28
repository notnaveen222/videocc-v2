"use client";
import { useRef, useEffect, RefObject } from "react";
import { motion, useInView } from "motion/react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function SlotSection({
  slotRef,
  setCursorVisible,
}: {
  slotRef: RefObject<HTMLDivElement | null>;
  setCursorVisible: (visible: boolean) => void;
}) {
  const titleIsInView = useInView(slotRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });
  const calRef = useRef(null);
  const calIsInView = useInView(calRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#7226ff" },
          dark: { "cal-brand": "#ffffff" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <div className="max-w-7xl mx-auto mb-16 px-5 lg:px-0">
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: titleIsInView ? 1 : 0,
          y: titleIsInView ? 0 : 10,
        }}
        ref={slotRef}
        className="text-center font-medium text-5xl mb-16"
      >
        Book a slot
      </motion.div>
      <motion.div
        ref={calRef}
        initial={{
          opacity: 0,
          y: 200,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: calIsInView ? 1 : 0,
          y: calIsInView ? 0 : 200,
          filter: calIsInView ? "blur(0px)" : "blur(30px",
        }}
        onMouseEnter={() => setCursorVisible(false)}
        onMouseLeave={() => setCursorVisible(true)}
      >
        <Cal
          namespace="30min"
          calLink="naveen-6i2gww/30min"
          style={{ width: "100%", height: "100%", overflow: "visible" }}
          config={{ layout: "month_view", theme: "light" }}
        />
      </motion.div>
    </div>
  );
}
