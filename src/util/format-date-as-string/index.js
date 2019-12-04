const DATE_FORMAT = {
  day: '2-digit',
  hour: '2-digit',
  hour12: false,
  minute: '2-digit',
  month: '2-digit',
  year: 'numeric',
};

export function formatDateAsString(date) {
  return date.toLocaleString('en-US', DATE_FORMAT);
}
