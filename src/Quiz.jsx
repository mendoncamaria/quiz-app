import { useState } from 'react';
import useStore from './store';
import {
  QuizContainer,
  Question,
  OptionsList,
  OptionItem,
  NextButton,
  QuizCompletedMessage,
  Score,
} from './StyledComponents';

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

  return currentQuestionIndex < questions.length ? (
    <QuizContainer>
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
      <NextButton onClick={handleNextButtonClick} disabled={!selectedAnswer}>
        Next
      </NextButton>
    </QuizContainer>
  ) : (
    <QuizContainer>
      <QuizCompletedMessage>Quiz completed!</QuizCompletedMessage>
      <Score>
        Your Score: {correctAnswers}/{questions.length}
      </Score>
    </QuizContainer>
  );
};

export default Quiz;
