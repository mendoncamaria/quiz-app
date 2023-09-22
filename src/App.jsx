import Quiz from './container/Quiz';
import './styles/App.css';
import { QuizMainHeading } from './styles/StyledComponents';

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
