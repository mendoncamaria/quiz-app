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
  questionList,
}) => {
  const { selectedAnswers, result, setResult } = useStore();

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
      <PreviewMessage>PREVIEW RESULTS BEFORE SUBMITTING</PreviewMessage>
      <Score>
        {questionList.map((question, index) => (
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
  currentQuestion: PropTypes.shape({
    map: PropTypes.func,
  }),
  onBackButtonClick: PropTypes.any,
  questionList: PropTypes.shape({
    map: PropTypes.func,
  }),
  totalQuestions: PropTypes.any,
};
