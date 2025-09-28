import { RefObject } from "react";
import { ScrollButton } from "./Buttons";
import { NavbarAnimation } from "./Framer-actions";

export default function Navbar({
  slotRef,
}: {
  slotRef: RefObject<HTMLDivElement | null>;
}) {
  const scrollToSlots = () => {
    slotRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <NavbarAnimation>
      <div className="sticky top-0 w-full flex justify-between items-center px-4 sm:px-7 py-5">
        <div className="text-2xl font-medium">VEDIOCC</div>
        <ScrollButton
          title="Let's Talk"
          scrollFunction={scrollToSlots}
          styles="py-1 px-6 bg-white text-grad-dark-blue"
        />
      </div>
    </NavbarAnimation>
  );
}
