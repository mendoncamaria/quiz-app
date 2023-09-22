import { useState } from 'react';
import useStore from '../data/store';
import {
  QuizContainer,
  Question,
  OptionsList,
  OptionItem,
  NextButton,
} from '../styles/StyledComponents';
import { PreviewPage } from './Preview';

const Quiz = () => {
  const {
    questions,
    currentQuestionIndex,
    selectedAnswer,
    nextQuestion,
    selectAnswer,
  } = useStore();

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (answer) => {
    selectAnswer(answer);
  };

  const handleNextButtonClick = () => {
    if (currentQuestion.correctAnswer === selectedAnswer) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }
    nextQuestion();
  };

  const isQuizCompleted = currentQuestionIndex >= questions.length;

  return (
    <QuizContainer>
      {isQuizCompleted ? (
        <>
          <PreviewPage
            correctAnswers={correctAnswers}
            totalQuestions={questions.length}
          />
        </>
      ) : (
        <>
          <p>
            {currentQuestionIndex + 1}/{questions.length}
          </p>
          <Question>{currentQuestion.question}</Question>
          <OptionsList>
            {currentQuestion.options.map((option) => (
              <OptionItem
                key={option}
                onClick={() => handleAnswerClick(option)}
                selected={selectedAnswer === option}
              >
                {option}
              </OptionItem>
            ))}
          </OptionsList>
          <NextButton
            onClick={handleNextButtonClick}
            disabled={!selectedAnswer}
          >
            Next
          </NextButton>
        </>
      )}
    </QuizContainer>
  );
};

export default Quiz;
