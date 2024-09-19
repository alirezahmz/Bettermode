// eslint-disable-next-line import/prefer-default-export
export function DateRenderer(date: string): string {
  const now = new Date();
  const then = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - then.getTime()) / 1000);

  const timeUnits = [
    { unit: "years", value: 365 * 24 * 60 * 60 },
    { unit: "months", value: 30 * 24 * 60 * 60 },
    { unit: "weeks", value: 7 * 24 * 60 * 60 },
    { unit: "days", value: 24 * 60 * 60 },
    { unit: "hours", value: 60 * 60 },
    { unit: "minutes", value: 60 }
  ];

  for (const { unit, value } of timeUnits) {
    const unitCount = Math.floor(diffInSeconds / value);
    if (unitCount > 0) {
      return `${unitCount} ${unit} ago`;
    }
  }

  return "just now";
}
