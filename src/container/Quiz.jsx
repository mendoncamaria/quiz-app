import { useState } from 'react';
import useStore from '../data/store';
import {
  QuizContainer,
  Question,
  OptionsList,
  OptionItem,
  NextButton,
  QuizCompletedMessage,
  Score,
} from '../styles/StyledComponents';

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

  const getRemarks = (questionLength, correctAns) => {
    if (correctAns === questionLength) {
      return 'Excellent';
    } else if (correctAns === 8 || correctAns === 9) {
      return 'Very Good';
    } else if (correctAns === 6 || correctAns === 7) {
      return 'Good';
    }
    return 'Better Luck Next Time';
  };

  const isQuizCompleted = currentQuestionIndex >= questions.length;

  return (
    <QuizContainer>
      {isQuizCompleted ? (
        <>
          <QuizCompletedMessage>RESULT</QuizCompletedMessage>
          <Score>Total Questions: {questions.length}</Score>
          <Score>Correct Answers: {correctAnswers}</Score>
          <Score>Wrong Answers: {questions.length - correctAnswers}</Score>
          <Score>Remarks: {getRemarks(questions.length, correctAnswers)}</Score>
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
