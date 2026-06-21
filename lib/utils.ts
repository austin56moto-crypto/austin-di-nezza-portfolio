import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRelativeMonth(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    year: "numeric",
  }).format(date);
}
