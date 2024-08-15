import PropTypes from 'prop-types';

import useStore from '../data/store';
import {
  Question,
  OptionsList,
  OptionItem,
  NextButton,
  ButtonContainer,
  CurrentQuestion,
  CurrentQuestionDark,
  OptionButton,
  ButtonGap,
} from '../styles/StyledComponents';
import { QuestionCategory } from '../data/quesnans';
import TEXT_CONSTANTS from '../data/textConstants';


function QuizForm({
  onAnswerClick,
  onButtonClick,
  currentQuestion,
  isStart,
  onCategorySelect,
  totalQuestions,
}) {
  const {
    currentQuestionIndex,
    selectedAnswer,
    selectedAnswers,
  } = useStore();

  return (
    <>
      {isStart ? (
        <div>
          <Question>{TEXT_CONSTANTS.HOME_HEADER}</Question>
          <ButtonGap>
            {QuestionCategory.map((item) => (
              <OptionButton
                key={item.id}
                onClick={() => onCategorySelect(item)}
              >
                {item.categoryValue}
              </OptionButton>
            ))}
          </ButtonGap>
        </div>
      ) : (
        <>
          <CurrentQuestion>
            <CurrentQuestionDark>
              {currentQuestionIndex + 1 <= 9
                ? `0${currentQuestionIndex + 1}`
                : currentQuestionIndex + 1}
            </CurrentQuestionDark>
            /{totalQuestions}
          </CurrentQuestion>
          <>
            <Question>{currentQuestion.question}</Question>
            <OptionsList>
              {currentQuestion.options.map((option) => (
                <OptionItem
                  key={option}
                  onClick={() => onAnswerClick(option)}
                  selected={
                    (selectedAnswers[currentQuestionIndex] ??
                      selectedAnswer) === option
                  }
                >
                  {option}
                </OptionItem>
              ))}
            </OptionsList>
          </>
          <ButtonContainer>
            <NextButton
              onClick={onButtonClick}
              disabled={
                !selectedAnswer && !selectedAnswers[currentQuestionIndex]
              }
            >
              {TEXT_CONSTANTS.NEXT}
            </NextButton>
          </ButtonContainer>
        </>
      )}
    </>
  );
}

QuizForm.propTypes = {
  currentQuestion: PropTypes.shape({
    options: PropTypes.array,
    question: PropTypes.any,
  }),
  isStart: PropTypes.bool,
  onAnswerClick: PropTypes.func,
  onButtonClick: PropTypes.any,
  onCategorySelect: PropTypes.func,
  totalQuestions: PropTypes.any,
};

export default QuizForm;
