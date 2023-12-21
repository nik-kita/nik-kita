import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const tw = (...args: ClassValue[]) => {
  return twMerge(clsx(...args));
};
