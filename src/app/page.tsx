import Hero from "@/components/Sections/Hero";
import Navbar from "@/components/Navbar";
import ServiceSection from "@/components/Sections/Services";
import PlanSection from "@/components/Sections/Plans";

export default function Home() {
  return (
    <div className="h-[400vh] text-white w-screen bg-linear-to-b from-0% via-55% to-85% from-grad-purple via-grad-blue to-grad-dark-blue">
      <Navbar />
      <Hero />
      <ServiceSection />
      <PlanSection />
    </div>
  );
}
