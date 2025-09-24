import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-[400vh] text-white w-screen bg-linear-to-b from-0% via-55% to-85% from-grad-purple via-grad-blue to-grad-dark-blue">
      <Navbar />
      <Hero />
    </div>
  );
}
