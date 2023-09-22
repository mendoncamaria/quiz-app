import { useState } from 'react';
import useStore from '../data/store';
import {
  QuizContainer,
  Question,
  OptionsList,
  OptionItem,
  NextButton,
  ButtonContainer,
  CurrentQuestion,
  CurrentQuestionDark,
} from '../styles/StyledComponents';
import { PreviewPage } from './Preview';

const Quiz = () => {
  const {
    questions,
    currentQuestionIndex,
    selectedAnswer,
    nextQuestion,
    selectAnswer,
    setCurrentQuestionIndex,
    selectedAnswers,
  } = useStore();

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false); // Initialize to false
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (answer) => {
    selectAnswer(answer);
  };

  const handleNextButtonClick = () => {
    if (currentQuestion && currentQuestion.correctAnswer === selectedAnswer) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    if (currentQuestionIndex + 1 === questions.length) {
      // If all questions are answered, show the preview
      setShowQuestions(true);
    } else {
      nextQuestion();
    }
  };

  // const isQuizCompleted = currentQuestionIndex >= questions.length;

  const handlePreviewButtonClick = () => {
    setShowQuestions(false); // Set showQuestions to true when preview button is clicked
    setCurrentQuestionIndex(0);
  };

  return (
    <QuizContainer>
      {showQuestions ? (
        <>
          <PreviewPage
            correctAnswers={correctAnswers}
            totalQuestions={questions.length}
            onBackButtonClick={handlePreviewButtonClick}
          />
        </>
      ) : (
        <>
          <CurrentQuestion>
            <CurrentQuestionDark>
              {currentQuestionIndex + 1 <= 9
                ? `0${currentQuestionIndex + 1}`
                : currentQuestionIndex + 1}
            </CurrentQuestionDark>
            /{questions.length}
          </CurrentQuestion>
          <>
            <Question>{currentQuestion.question}</Question>
            <OptionsList>
              {currentQuestion.options.map((option) => (
                <OptionItem
                  key={option}
                  onClick={() => handleAnswerClick(option)}
                  selected={
                    selectedAnswers[currentQuestionIndex] === option ??
                    selectedAnswer === option
                  }
                >
                  {option}
                </OptionItem>
              ))}
            </OptionsList>
          </>
          <ButtonContainer>
            <NextButton
              onClick={handleNextButtonClick}
              disabled={
                !selectedAnswer && !selectedAnswers[currentQuestionIndex]
              }
            >
              NEXT
            </NextButton>
          </ButtonContainer>
        </>
      )}
    </QuizContainer>
  );
};

export default Quiz;
