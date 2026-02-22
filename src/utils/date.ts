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

/**
 * Returns the current hour (0–23) in the given IANA timezone.
 * e.g. getCurrentHourInTimezone("America/Bogota")
 */
export function getCurrentHourInTimezone(timezone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const h = parts.find((p) => p.type === "hour");
  return h ? Number(h.value) % 24 : new Date().getHours();
}

/**
 * Returns a formatted "Weekday, DD Mon · HH:mm" string for the current moment
 * in the given timezone, using the provided IETF locale (e.g. "en-US" / "es-CO").
 */
export function formatLocalDateTime(timezone: string, locale: string): string {
  const now = new Date();
  const date = new Intl.DateTimeFormat(locale, {
    timeZone: timezone,
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(now);
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);
  return `${date} · ${time}`;
}
