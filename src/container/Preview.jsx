import PropTypes from 'prop-types';
import { getRemarks } from '../helpers/utils';
import {
  BackButton,
  NextButton,
  PreviewAnswer,
  PreviewMessage,
  PreviewQuestion,
  QuizCompletedMessage,
  Score,
} from '../styles/StyledComponents';
import useStore from '../data/store';

export const PreviewPage = ({
  correctAnswers,
  totalQuestions,
  onBackButtonClick,
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
      <PreviewMessage>
        PREVIEW RESULTS BEFORE SUBMITTING
      </PreviewMessage>
      <Score>
        {questions.map((question, index) => (
          <PreviewQuestion key={question.id}>
            {question.question}: {'   '}
            <PreviewAnswer>{selectedAnswers[index]}</PreviewAnswer>
          </PreviewQuestion>
        ))}
      </Score>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <NextButton onClick={() => setResult(true)}>NEXT</NextButton>
        <BackButton onClick={onBackButtonClick}>BACK</BackButton>
      </div>
    </>
  );
};

PreviewPage.propTypes = {
  correctAnswers: PropTypes.any,
  onBackButtonClick: PropTypes.any,
  totalQuestions: PropTypes.any
}
