import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn = "class name"
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
