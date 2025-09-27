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
export default function Home() {
  const serviceRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  return (
    <div className="h-[330vh] text-white w-screen bg-linear-to-b from-0% via-55% to-85% from-grad-purple via-grad-blue to-grad-dark-blue">
      <CustomCursor cursorVisible={cursorVisible} />
      <Navbar slotRef={slotRef} />
      <Hero serviceRef={serviceRef} slotRef={slotRef} />
      <ServiceSection serviceRef={serviceRef} />
      <PlanSection />
      <TestimonialSection />
      <SlotSection slotRef={slotRef} setCursorVisible={setCursorVisible} />
      <Footer />
    </div>
  );
}
