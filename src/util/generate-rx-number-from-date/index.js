export function generateRxNumberFromDate(date) {
  const day = convertToPaddedString(date.getDate());
  const hours = convertToPaddedString(date.getHours());
  const minutes = convertToPaddedString(date.getMinutes());
  const month = convertToPaddedString(date.getMonth() + 1);
  const seconds = convertToPaddedString(date.getSeconds());
  const year = date.getFullYear();
  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

function convertToPaddedString(number) {
  return number.toString().padStart(2, '0');
}
