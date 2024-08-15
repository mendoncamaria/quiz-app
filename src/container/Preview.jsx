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
import TEXT_CONSTANTS from '../data/textConstants';

export const PreviewPage = ({
  correctAnswers,
  totalQuestions,
  onBackButtonClick,
  questionList,
}) => {
  const { selectedAnswers, result, setResult } = useStore();

  // const remarksArray = [
  //   {
  //     title: TEXT_CONSTANTS.TOTAL_QUESTIONS,
  //     value: totalQuestions,
  //   },
  //   {
  //     title: TEXT_CONSTANTS.CORRECT_ANSWERS,
  //     value: correctAnswers,
  //   },
  //   {
  //     title: TEXT_CONSTANTS.WRONG_ANSWERS,
  //     value: totalQuestions - correctAnswers,
  //   },
  //   {
  //     title: TEXT_CONSTANTS.REMARKS,
  //     value: getRemarks(totalQuestions, correctAnswers),
  //   },
  // ];

  return result ? (
    <>
      <QuizCompletedMessage>
        {TEXT_CONSTANTS.RESULT_HEADER}{' '}
      </QuizCompletedMessage>
      {/* {remarksArray.map((item)=> (
        <Score key={item.title}>
          {item.title}{item.value}
      </Score>
      ))} */}
      <Score>
        {TEXT_CONSTANTS.TOTAL_QUESTIONS} {totalQuestions}
      </Score>
      <Score>
        {TEXT_CONSTANTS.CORRECT_ANSWERS} {correctAnswers}
      </Score>
      <Score>
        {TEXT_CONSTANTS.WRONG_ANSWERS} {totalQuestions - correctAnswers}
      </Score>
      <Score>
        {TEXT_CONSTANTS.REMARKS} {getRemarks(totalQuestions, correctAnswers)}
      </Score>
    </>
  ) : (
    <>
      <PreviewMessage>{TEXT_CONSTANTS.PREVIEW_HEADER}</PreviewMessage>
      <Score>
        {questionList.map((question, index) => (
          <PreviewQuestion key={question.id}>
            {question.question}: {'   '}
            <PreviewAnswer>{selectedAnswers[index]}</PreviewAnswer>
          </PreviewQuestion>
        ))}
      </Score>
      <ButtonContainer>
        <NextButton onClick={() => setResult(true)}>
          {TEXT_CONSTANTS.NEXT}
        </NextButton>
        <BackButton onClick={onBackButtonClick}>
          {TEXT_CONSTANTS.BACK}
        </BackButton>
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
