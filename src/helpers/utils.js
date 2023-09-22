export const getRemarks = (questionLength, correctAns) => {
  if (correctAns === questionLength) {
    return 'Excellent';
  } else if (
    correctAns === questionLength - 1 ||
    correctAns === questionLength - 2
  ) {
    return 'Very Good';
  } else if (
    correctAns === questionLength - 4 ||
    correctAns === questionLength - 3
  ) {
    return 'Good';
  }
  return 'Better Luck Next Time';
};
