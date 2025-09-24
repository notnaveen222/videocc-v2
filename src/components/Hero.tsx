import Image from "next/image";
import { ConnectButton, ScrollButton } from "./Buttons";
import MarqueeText from "./Marquee";

export default function Hero() {
  return (
    <div className="relative w-full flex flex-col justify-center items-center pt-48">
      <div className="bg-white/10 border border-white/30 px-3 py-px rounded-full mb-3">
        WELCOME TO VIDEOCC
      </div>
      <div className="text-[96px] text-center leading-24 text-shadow-[1px_4px_6px_rgba(0,0,0,0.4)] font-semibold mb-5">
        We Build Brands <br />
        That People Remember.
      </div>
      <div className="text-lg max-w-xl font-semibold text-center mb-5">
        We Make Brands that people remember, talk about and blah blah blah blah
        blah blah blah blah
      </div>
      <div className="flex gap-x-5 items-center mb-28">
        <ConnectButton title="Connect" styles="py-1 px-6" />
        <ScrollButton title="Services" styles="py-1 px-6" />
      </div>
      <Image
        src={"/hero-floater-1.svg"}
        alt="Floating Hero Image"
        width={224}
        height={126}
        className="absolute top-36 right-[18%] rotate-z-[15deg] shadow-[7px_9px_6px_rgba(0,0,0,0.6)] rounded-xl "
      />
      <Image
        src={"/hero-floater-1.svg"}
        alt="Floating Hero Image"
        width={224}
        height={126}
        className="absolute bottom-10 -rotate-z-[12deg] shadow-[7px_9px_6px_rgba(0,0,0,0.6)] rounded-xl left-[18%] z-10"
      />
      <MarqueeText text="VIDEOCC" />
    </div>
  );
}
