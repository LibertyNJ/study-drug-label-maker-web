'use-strict';

const DATE_FORMAT = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
};

export function formatDateOfBirthString(dateOfBirth) {
  const datetimeString = `${dateOfBirth}T00:00:00`;
  const date = new Date(datetimeString);
  return date.toLocaleString('en-US', DATE_FORMAT);
}
