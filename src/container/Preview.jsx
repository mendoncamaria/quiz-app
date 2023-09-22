import PropTypes from 'prop-types';
import { getRemarks } from '../helpers/utils';
import {
  BackButton,
  ButtonContainer,
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
      <ButtonContainer>
        <NextButton onClick={() => setResult(true)}>NEXT</NextButton>
        <BackButton onClick={onBackButtonClick}>BACK</BackButton>
      </ButtonContainer>
    </>
  );
};

PreviewPage.propTypes = {
  correctAnswers: PropTypes.any,
  onBackButtonClick: PropTypes.any,
  totalQuestions: PropTypes.any
}
