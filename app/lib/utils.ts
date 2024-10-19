import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function Clm(...inputs: any) {
  return twMerge(clsx(inputs));
}
