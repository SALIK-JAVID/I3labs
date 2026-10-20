import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Shared easing curves so every animation on the site feels like one system. */
export const EASE = {
  out: [0.16, 1, 0.3, 1] as const,
  site: [0.2, 0.7, 0.2, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
};
