export const numericalDisplay = (input: number): string => {
  const formatter = new Intl.NumberFormat('en-US');

  const toTwoDecimals: number = parseFloat(input.toFixed(2));
  return formatter.format(toTwoDecimals);
};
