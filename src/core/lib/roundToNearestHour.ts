export function roundToNearestHour(dateString: string): string {
  const date = new Date(dateString);
  date.setHours(date.getHours() + 7);
  date.setMinutes(date.getMinutes() + 30);
  date.setMinutes(0, 0, 0);

  return date.toISOString().slice(0, 16).replace('T', ' ');
}
