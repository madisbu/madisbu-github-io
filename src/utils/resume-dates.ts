import type { YearMonth } from "../types/resume";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parse(value: YearMonth): { year: number; month: number } {
  const [year, month] = value.split("-").map(Number);
  return { year, month };
}

export function formatYearMonth(value: YearMonth | null): string {
  if (value === null) return "Present";
  const { year, month } = parse(value);
  return `${MONTHS[month - 1]} ${year}`;
}

export function formatDuration(start: YearMonth, end: YearMonth | null, now: Date = new Date()): string {
  const from = parse(start);
  const to = end ? parse(end) : { year: now.getFullYear(), month: now.getMonth() + 1 };
  // Inclusive of both start and end months.
  const total = Math.max(1, (to.year - from.year) * 12 + (to.month - from.month) + 1);
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ");
}

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]!.toUpperCase())
    .join("");
}
