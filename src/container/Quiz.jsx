import { useRef, useState } from 'react';

import useStore from '../data/store';
import { QuizContainer } from '../styles/StyledComponents';

import { PreviewPage } from './Preview';
import QuizForm from './QuizForm';

const Quiz = () => {
  const {
    currentQuestionIndex,
    selectedAnswer,
    nextQuestion,
    selectAnswer,
    setCurrentQuestionIndex,
  } = useStore();

  const getCurrentQuestionSet = useRef('');

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);
  const [isStart, setIsStart] = useState(true);

  const currentQuestion = getCurrentQuestionSet.current[currentQuestionIndex];

  const handleAnswerClick = (answer) => selectAnswer(answer);

  const handleNextButtonClick = () => {
    if (currentQuestion && currentQuestion.correctAnswer === selectedAnswer) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    if (currentQuestionIndex + 1 === 10) {
      setShowQuestions(true);
    } else {
      nextQuestion();
    }
  };

  const handlePreviewButtonClick = () => {
    setShowQuestions(false);
    setCurrentQuestionIndex(0);
  };

  const getSelectedCategory = (selectedCategory) => {
    getCurrentQuestionSet.current = selectedCategory.options;
    setIsStart(false);
  };

  return (
    <QuizContainer>
      {showQuestions ? (
        <PreviewPage
          correctAnswers={correctAnswers}
          totalQuestions={getCurrentQuestionSet.current.length}
          onBackButtonClick={handlePreviewButtonClick}
          currentQuestion={currentQuestion}
          questionList={getCurrentQuestionSet.current}
        />
      ) : (
        <QuizForm
          isStart={isStart}
          onCategorySelect={getSelectedCategory}
          onAnswerClick={(option) => handleAnswerClick(option)}
          onButtonClick={handleNextButtonClick}
          currentQuestion={currentQuestion}
          totalQuestions={getCurrentQuestionSet.current.length}
        />
      )}
    </QuizContainer>
  );
};

export default Quiz;
