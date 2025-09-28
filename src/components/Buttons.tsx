"use client";

import { twMerge } from "tailwind-merge";

export function ConnectButton({
  title,
  styles,
}: {
  title: string;
  styles?: string;
}) {
  return (
    <button
      className={twMerge(
        `bg-white text-xl text-grad-dark-blue rounded-full px-5 py-1.5 cursor-none inset-shadow-sm inset-shadow-black pointer`,
        styles
      )}
    >
      {title}
    </button>
  );
}

export function ScrollButton({
  title,
  styles,
  scrollFunction,
  setCursorHover,
}: {
  title: string;
  styles?: string;
  scrollFunction: () => void;
  setCursorHover: (cursorHover: boolean) => void;
}) {
  return (
    <button
      onMouseEnter={() => setCursorHover(true)}
      onMouseLeave={() => setCursorHover(false)}
      onClick={scrollFunction}
      className={twMerge(
        `bg-grad-dark-blue z-20 text-xl text-white rounded-full px-5 py-1.5 cursor-none`,
        styles
      )}
    >
      {title}
    </button>
  );
}
