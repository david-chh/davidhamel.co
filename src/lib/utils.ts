import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes with conflict resolution */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Format a date for display */
export function formatDate(date: Date, locale: string = "en-US"): string {
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/** Estimate reading time from text content */
export function getReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
