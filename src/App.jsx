import Quiz from './container/Quiz';
import { Container, QuizMainHeading } from './styles/StyledComponents';

function App() {
  return (
    <Container>
      <QuizMainHeading>Quiz Application</QuizMainHeading>
      <Quiz />
    </Container>
  );
}

export default App;
