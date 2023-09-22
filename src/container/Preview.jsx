import PropTypes from 'prop-types';
import { getRemarks } from '../helpers/utils';
import {
  PreviewAnswer,
  PreviewQuestion,
  QuizCompletedMessage,
  Score,
} from '../styles/StyledComponents';
import useStore from '../data/store';

export const PreviewPage = ({
  correctAnswers,
  totalQuestions,
  // onPreviewButtonClick,
}) => {
  const { questions, selectedAnswers, result, setResult } = useStore();

  return result ? (
    <>
      <QuizCompletedMessage>RESULT</QuizCompletedMessage>
      <Score>Total Questions: {totalQuestions}</Score>
      <Score>Correct Answers: {correctAnswers}</Score>
      <Score>Wrong Answers: {totalQuestions - correctAnswers}</Score>
      <Score>Remarks: {getRemarks(totalQuestions, correctAnswers)}</Score>
    </>
  ) : (
    <>
      <QuizCompletedMessage>
        PREVIEW RESULTS BEFORE SUBMITTING
      </QuizCompletedMessage>
      <Score>
        {questions.map((question, index) => (
          <PreviewQuestion key={question.id}>
            {question.question}: {'  '}
            <PreviewAnswer>{selectedAnswers[index]}</PreviewAnswer>
          </PreviewQuestion>
        ))}
      </Score>
      <button onClick={() => setResult(true)}>NEXT</button>
      <button>BACK</button>
    </>
  );
};

PreviewPage.propTypes = {
  correctAnswers: PropTypes.any,
  totalQuestions: PropTypes.any,
};
