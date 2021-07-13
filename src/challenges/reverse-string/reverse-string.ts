export const reverseString = (string: string): string => {
  let backwards = '';

  for (let i = string.length - 1; i >= 0; i--) {
    backwards = backwards + string[i];
  }

  return backwards;
};
