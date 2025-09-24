import Marquee from "react-fast-marquee";
export default function MarqueeText({ text }: { text: string }) {
  return (
    <div className="marquee h-fit rotate-z-1">
      <div className="track flex gap-x-10 bg-white py-2">
        {Array.from({ length: 50 }).map((_, i) => (
          <p
            key={i}
            className="font-black text-4xl text-[#5019CD] whitespace-nowrap mx-5"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
