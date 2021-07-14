export const factorial = (number: number): number => {
  if (number === 1) {
    return 1;
  }
  return factorial(number - 1) * number;
};
