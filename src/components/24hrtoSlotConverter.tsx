// ✅ This should be the entire file
export default function convert24hToSlotRangeHelper(startTime24: string): string {
  const [hoursStr, minutesStr] = startTime24.split(":");
  const hours = parseInt(hoursStr, 10);
  
  const formatTime = (h: number, m: string) => {
    const ampm = h >= 12 ? "PM" : "AM";
    const displayHour = h % 12 === 0 ? 12 : h % 12;
    return `${displayHour}:${m} ${ampm}`;
  };

  const startFormatted = formatTime(hours, minutesStr);
  const endFormatted = formatTime((hours + 1) % 24, minutesStr);

  return `${startFormatted} - ${endFormatted}`;
}