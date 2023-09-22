export const getRemarks = (questionLength, correctAns) => {
    if (correctAns === questionLength) {
      return 'Excellent';
    } else if (correctAns === 8 || correctAns === 9) {
      return 'Very Good';
    } else if (correctAns === 6 || correctAns === 7) {
      return 'Good';
    }
    return 'Better Luck Next Time';
  };