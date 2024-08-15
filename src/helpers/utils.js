import TEXT_CONSTANTS from '../data/textConstants';

/**
 * Depending on the question length and right answers, you get a remark
 * @param {number} questionLength
 * @param {number} correctAns
 * @returns {string} remarks of the Quiz
 */
export const getRemarks = (questionLength, correctAns) => {
  if (correctAns === questionLength) {
    return TEXT_CONSTANTS.EXCELLENT;
  } else if (
    correctAns === questionLength - 1 ||
    correctAns === questionLength - 2
  ) {
    return TEXT_CONSTANTS.VERY_GOOD;
  } else if (
    correctAns === questionLength - 4 ||
    correctAns === questionLength - 3
  ) {
    return TEXT_CONSTANTS.GOOD;
  }
  return TEXT_CONSTANTS.BETTER_LUCK;
};
