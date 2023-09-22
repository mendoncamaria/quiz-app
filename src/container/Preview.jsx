import PropTypes from "prop-types"
import { getRemarks } from "../helpers/utils";
import { QuizCompletedMessage, Score } from "../styles/StyledComponents";

export const PreviewPage = ({
  correctAnswers,
  totalQuestions,
  // onPreviewButtonClick,
}) => {
  return (
    <>
      <QuizCompletedMessage>RESULT</QuizCompletedMessage>
      <Score>Total Questions: {totalQuestions}</Score>
      <Score>Correct Answers: {correctAnswers}</Score>
      <Score>Wrong Answers: {totalQuestions - correctAnswers}</Score>
      <Score>Remarks: {getRemarks(totalQuestions, correctAnswers)}</Score>
    </>
  );
};

PreviewPage.propTypes = {
  correctAnswers: PropTypes.any,
  totalQuestions: PropTypes.any
}
