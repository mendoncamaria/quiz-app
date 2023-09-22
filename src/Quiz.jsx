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

  const getRemarks = (questionLength, correctAns) => {
    if (correctAns === questionLength) {
      return 'Excellent'
    } else if(correctAns === 8 || correctAns === 9){
      return 'Very good'
    } else if(correctAns === 6 || correctAns === 7){
      return 'Good'
    }
    return 'Could be better'
  };

  return currentQuestionIndex < questions.length ? (
    <QuizContainer>
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
      <NextButton onClick={handleNextButtonClick} disabled={!selectedAnswer}>
        Next
      </NextButton>
    </QuizContainer>
  ) : (
    <QuizContainer>
      <QuizCompletedMessage>RESULT</QuizCompletedMessage>
      <Score>Total Questions: {questions.length}</Score>
      <Score>Correct Answers: {correctAnswers}</Score>
      <Score>Wrong Answers: {questions.length - correctAnswers}</Score>
      <Score>Remarks: {getRemarks(questions.length, correctAnswers)}</Score>
    </QuizContainer>
  );
};

export default Quiz;
