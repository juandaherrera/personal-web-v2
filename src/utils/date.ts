const MONTHS_EN = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const MONTHS_ES = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];

/**
 * Formats a date string ("YYYY-MM-DD") as "Mon YYYY" in the active language.
 * Passing null returns "Present" / "Actualidad".
 */
export function formatMonthYear(dateStr: string | null, isEn: boolean): string {
  if (!dateStr) return isEn ? "Present" : "Actualidad";
  const d = new Date(`${dateStr}T00:00:00`);
  const month = isEn ? MONTHS_EN[d.getMonth()] : MONTHS_ES[d.getMonth()];
  return `${month} ${d.getFullYear()}`;
}
