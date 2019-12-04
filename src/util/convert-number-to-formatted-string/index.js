const NUMBER_FORMAT = {
  maximumFractionDigits: 2,
  useGrouping: true,
};

export function convertNumberToFormattedString(number) {
  return Number(number).toLocaleString('en-US', NUMBER_FORMAT);
}
