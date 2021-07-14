export const mergeSortedNumberArrays = (
  firstArray: number[],
  secondArray: number[],
): number[] => {
  const mergedArray: number[] = [];
  let firstIndex = 1;
  let secondIndex = 1;
  let firstArrayItem = firstArray[0];
  let secondArrayItem = secondArray[0];

  if (firstArray.length === 0) {
    return secondArray;
  } else if (secondArray.length === 0) {
    return firstArray;
  }

  while (firstArrayItem || secondArrayItem) {
    if (!secondArrayItem || firstArrayItem <= secondArrayItem) {
      mergedArray.push(firstArrayItem);
      firstArrayItem = firstArray[firstIndex];
      firstIndex++;
    } else {
      mergedArray.push(secondArrayItem);
      secondArrayItem = secondArray[secondIndex];
      secondIndex++;
    }
  }

  return mergedArray;
};
