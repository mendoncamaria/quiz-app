import { useState } from 'react';
import useStore from '../data/store';
import { QuizContainer } from '../styles/StyledComponents';
import { PreviewPage } from './Preview';
import QuizForm from './QuizForm';

const Quiz = () => {
  const {
    computerQuestions,
    // animalQuestions,
    currentQuestionIndex,
    selectedAnswer,
    nextQuestion,
    selectAnswer,
    setCurrentQuestionIndex,
  } = useStore();
// 
  // const category = [
  //   {
  //     id: 1,
  //     categoryValue: 'Computer',
  //     options: computerQuestions,
  //   },
  //   {
  //     id: 2,
  //     categoryValue: 'Animals',
  //     options: animalQuestions,
  //   },
  // ];

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false); // Initialize to false
  const currentQuestion = computerQuestions[currentQuestionIndex];

  const handleAnswerClick = (answer) => {
    selectAnswer(answer);
  };

  const handleNextButtonClick = () => {
    if (currentQuestion && currentQuestion.correctAnswer === selectedAnswer) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    if (currentQuestionIndex + 1 === computerQuestions.length) {
      // If all questions are answered, show the preview
      setShowQuestions(true);
    } else {
      nextQuestion();
    }
  };

  const handlePreviewButtonClick = () => {
    setShowQuestions(false); //* Set showQuestions to true when preview button is clicked
    setCurrentQuestionIndex(0);
  };

  return (
    <QuizContainer>
      {showQuestions ? (
        <PreviewPage
          correctAnswers={correctAnswers}
          totalQuestions={computerQuestions.length}
          onBackButtonClick={handlePreviewButtonClick}
        />
      ) : (
        <QuizForm
          isStart
          // category={category}
          onAnswerClick={(option) => handleAnswerClick(option)}
          onButtonClick={handleNextButtonClick}
          currentQuestion={currentQuestion}
        />
      )}
    </QuizContainer>
  );
};

export default Quiz;
