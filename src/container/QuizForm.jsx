import useStore from '../data/store';
import {
  Question,
  OptionsList,
  OptionItem,
  NextButton,
  ButtonContainer,
  CurrentQuestion,
  CurrentQuestionDark,
} from '../styles/StyledComponents';

import PropTypes from 'prop-types';

function QuizForm({
  onAnswerClick,
  onButtonClick,
  currentQuestion,
  isStart,
  category,
}) {

  const {
    computerQuestions,
    currentQuestionIndex,
    selectedAnswer,
    selectedAnswers,
  } = useStore();

const selectCategory = () => {
    
}

  return (
    <>
      {isStart ? (
        <div>
          {category.map((item) => (
            <button key={item.id} onClick={selectCategory}>{item.categoryValue}</button>
          ))}
        </div>
      ) : (
        <>
          <CurrentQuestion>
            <CurrentQuestionDark>
              {currentQuestionIndex + 1 <= 9
                ? `0${currentQuestionIndex + 1}`
                : currentQuestionIndex + 1}
            </CurrentQuestionDark>
            /{computerQuestions.length}
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
              NEXT
            </NextButton>
          </ButtonContainer>
        </>
      )}
    </>
  );
}

QuizForm.propTypes = {
  category: PropTypes.any,
  currentQuestion: PropTypes.shape({
    options: PropTypes.shape({
      map: PropTypes.func,
    }),
    question: PropTypes.any,
  }),
  onAnswerClick: PropTypes.func,
  onButtonClick: PropTypes.any,
  isStart: PropTypes.any,
};

export default QuizForm;
