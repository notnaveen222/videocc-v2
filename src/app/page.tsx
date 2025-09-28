"use client";
import Hero from "@/components/Sections/Hero";
import Navbar from "@/components/Navbar";
import ServiceSection from "@/components/Sections/Services";
import PlanSection from "@/components/Sections/Plans";
import TestimonialSection from "@/components/Sections/Testimonials";
import SlotSection from "@/components/Sections/SlotSection";
import Footer from "@/components/Sections/Footer";
import { useRef, useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import FaqSection from "@/components/Sections/Faqs";
import { cursorHoverContext } from "@/context/cursor-context";
export default function Home() {
  const serviceRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);
  const [cursorHover, setCursorHover] = useState<boolean>(false);

  return (
    <div className="h-fit text-white w-screen bg-linear-to-b from-0% via-55% to-85% from-grad-purple via-grad-blue to-grad-dark-blue">
      <cursorHoverContext.Provider value={{ cursorHover, setCursorHover }}>
        <CustomCursor cursorVisible={cursorVisible} />
        <Navbar slotRef={slotRef} />
        <Hero serviceRef={serviceRef} slotRef={slotRef} />
      </cursorHoverContext.Provider>
      <ServiceSection serviceRef={serviceRef} />
      <PlanSection />
      <TestimonialSection />
      <SlotSection slotRef={slotRef} setCursorVisible={setCursorVisible} />
      <FaqSection />
      <Footer />
    </div>
  );
}
