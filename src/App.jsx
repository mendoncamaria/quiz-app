import Quiz from './container/Quiz';
import { Container, Footer, QuizMainHeading } from './styles/StyledComponents';

function App() {
  return (
    <>
      <Container>
        <QuizMainHeading>Quiz Application</QuizMainHeading>
        <Quiz />
      </Container>
      <Footer>&copy; 2023 Maria Mendonca</Footer>
    </>
  );
}

export default App;
