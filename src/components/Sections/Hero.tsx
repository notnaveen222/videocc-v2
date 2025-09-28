import Image from "next/image";
import { ScrollButton } from "../Buttons";
import MarqueeText from "../Marquee";
import {
  HeroImageAnimation,
  HeroTextAnimation,
  OpacityAnimation,
  WanderImage,
} from "../Framer-actions";
import { RefObject, useContext } from "react";
import { GridPattern } from "../PatternBg";
import { cn } from "@/lib/utils";
import { cursorHoverContext } from "@/context/cursor-context";
export default function Hero({
  serviceRef,
  slotRef,
}: {
  serviceRef: RefObject<HTMLDivElement | null>;
  slotRef: RefObject<HTMLDivElement | null>;
}) {
  const { setCursorHover } = useContext(cursorHoverContext);
  const scrollToServices = () => {
    serviceRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSlots = () => {
    slotRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative w-full flex flex-col justify-center items-center pt-48 mb-20">
      <OpacityAnimation delay={0.3}>
        <div className="bg-background left-0 absolute top-0 flex size-full items-center justify-center overflow-hidden z-0 p-20">
          <GridPattern
            width={20}
            height={20}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:radial-gradient(600px_250px_at_center,white,transparent)]"
            )}
          />
        </div>
      </OpacityAnimation>
      <OpacityAnimation delay={0.3}>
        <div className="bg-white/10 border border-white/30 px-3 py-px rounded-full mb-3">
          WELCOME TO VIDEOCC
        </div>
      </OpacityAnimation>
      <div className="text-4xl sm:text-8xl text-center overflow-y-hidden leading-10 sm:leading-24 text-shadow-[1px_4px_6px_rgba(0,0,0,0.45)] font-medium mb-5">
        <HeroTextAnimation>
          <span>
            We Build <br className="sm:hidden" />
            <span className="italic">
              Brands <br className="hidden sm:inline" />
            </span>
          </span>
          <span>
            That
            <br className="sm:hidden" /> People Remember.
          </span>
        </HeroTextAnimation>
      </div>
      <OpacityAnimation delay={0.3}>
        <div className="text-lg max-w-xl font-semibold text-center mb-5">
          We Make Brands that people remember, talk about and blah blah blah
          blah blah blah blah blah
        </div>
      </OpacityAnimation>
      <OpacityAnimation delay={0.3}>
        <div
          className="flex gap-x-5 items-center mb-40 z-20 sm:mb-36 lg:mb-28"
          onMouseEnter={() => setCursorHover(true)}
          onMouseLeave={() => setCursorHover(false)}
        >
          <ScrollButton
            title="Connect"
            styles="py-1 px-6 bg-white text-grad-dark-blue"
            scrollFunction={scrollToSlots}
            setCursorHover={setCursorHover}
          />
          <ScrollButton
            title="Services"
            styles="py-1 px-6"
            scrollFunction={scrollToServices}
            setCursorHover={setCursorHover}
          />
        </div>
      </OpacityAnimation>
      <div className="absolute top-4 sm:top-10 lg:top-36 right-[10%] lg:right-[18%]">
        <WanderImage offset={5}>
          <HeroImageAnimation>
            <Image
              src={"/hero-floater-1.svg"}
              alt="Floating Hero Image"
              width={224}
              height={126}
              priority
              className=" rotate-z-[15deg] shadow-[7px_9px_6px_rgba(0,0,0,0.6)] rounded-xl "
            />
          </HeroImageAnimation>
        </WanderImage>
      </div>
      <div className="absolute bottom-14 sm:bottom-10 lg:bottom-10 left-[10%] lg:left-[18%] z-10">
        <WanderImage offset={-5}>
          <HeroImageAnimation>
            <Image
              src={"/hero-floater-1.svg"}
              alt="Floating Hero Image"
              width={224}
              height={126}
              priority
              className="-rotate-z-[12deg] shadow-[7px_9px_6px_rgba(0,0,0,0.6)] rounded-xl "
            />
          </HeroImageAnimation>
        </WanderImage>
      </div>
      <OpacityAnimation delay={0.3}>
        <MarqueeText text="VIDEOCC" />
      </OpacityAnimation>
    </div>
  );
}
