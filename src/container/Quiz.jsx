import { useRef, useState } from 'react';
import useStore from '../data/store';
import { QuizContainer } from '../styles/StyledComponents';
import { PreviewPage } from './Preview';
import QuizForm from './QuizForm';
import { Animal, Cinema, Computer, Fashion, Food } from '../data/quesnans';

const Quiz = () => {
  const {
    currentQuestionIndex,
    selectedAnswer,
    nextQuestion,
    selectAnswer,
    setCurrentQuestionIndex,
  } = useStore();

  const category = [
    {
      id: 1,
      categoryValue: 'Computer',
      options: Computer,
    },
    {
      id: 2,
      categoryValue: 'Animals',
      options: Animal,
    },
    {
      id: 3,
      categoryValue: 'Fashion',
      options: Fashion,
    },
    {
      id: 4,
      categoryValue: 'Food',
      options: Food,
    },
    {
      id: 5,
      categoryValue: 'Cinema',
      options: Cinema,
    },
  ];
  const getCurrentQuestionSet = useRef('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false); // Initialize to false
  const [isStart, setIsStart] = useState(true); // Initialize to false
  const currentQuestion = getCurrentQuestionSet.current[currentQuestionIndex];

  const handleAnswerClick = (answer) => {
    selectAnswer(answer);
  };

  const handleNextButtonClick = () => {
    if (currentQuestion && currentQuestion.correctAnswer === selectedAnswer) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    // if (currentQuestionIndex + 1 === Computer.length) {
    if (currentQuestionIndex + 1 === 10) {
      setShowQuestions(true);
    } else {
      nextQuestion();
    }
  };

  const handlePreviewButtonClick = () => {
    setShowQuestions(false); //* Set showQuestions to true when preview button is clicked
    setCurrentQuestionIndex(0);
  };

  const getSelectedCategory = (selectedCategory) => {
    // Access and process the selected category object here
    console.log('Selected category:', selectedCategory);
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
          category={category}
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
