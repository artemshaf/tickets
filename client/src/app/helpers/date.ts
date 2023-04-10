export function areDateEquals(a: Date, b: Date) {
  if (!a || !b) return false;

  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export const getFullRussianDate = (date = new Date()): string =>
  new Intl.DateTimeFormat("ru", {
    dateStyle: "medium",
  }).format(date);

export const getFullRussianDateForTicketCell = (date = new Date()): string[] =>
  new Intl.DateTimeFormat("ru", {
    day: "numeric",
    weekday: "short",
    month: "short",
    year: "2-digit",
  })
    .format(date)
    .split(/[\s,.]+/)
    .slice(0, 5);
