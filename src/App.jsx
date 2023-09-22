import Quiz from './Quiz';
import './App.css';
import { QuizMainHeading } from './StyledComponents';

function App() {
  return (
    <div className="app">
      <QuizMainHeading>
        Quiz Application
      </QuizMainHeading>
      <Quiz />
    </div>
  );
}

export default App;
