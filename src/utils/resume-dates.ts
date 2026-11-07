import type { YearMonth } from "../types/resume";

export interface DateLabels {
  monthNames: string[];
  present: string;
  year: string;
  years: string;
  month: string;
  months: string;
}

const ENGLISH_LABELS: DateLabels = {
  monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  present: "Present",
  year: "yr",
  years: "yrs",
  month: "mo",
  months: "mos",
};

function parse(value: YearMonth): { year: number; month: number } {
  const [year, month] = value.split("-").map(Number);
  return { year, month };
}

export function formatYearMonth(value: YearMonth | null, labels: DateLabels = ENGLISH_LABELS): string {
  if (value === null) return labels.present;
  const { year, month } = parse(value);
  return `${labels.monthNames[month - 1]} ${year}`;
}

export function formatDuration(
  start: YearMonth,
  end: YearMonth | null,
  now: Date = new Date(),
  labels: DateLabels = ENGLISH_LABELS,
): string {
  const from = parse(start);
  const to = end ? parse(end) : { year: now.getFullYear(), month: now.getMonth() + 1 };
  // Inclusive of both start and end months.
  const total = Math.max(1, (to.year - from.year) * 12 + (to.month - from.month) + 1);
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} ${years > 1 ? labels.years : labels.year}`);
  if (months) parts.push(`${months} ${months > 1 ? labels.months : labels.month}`);
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
