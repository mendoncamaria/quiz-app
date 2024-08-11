import Quiz from './container/Quiz';
import { Container, QuizMainHeading } from './styles/StyledComponents';

function App() {
  return (
    <>
      <Container>
        <QuizMainHeading>Quiz Application</QuizMainHeading>
        <Quiz />
      </Container>
      <footer
        style={{
          backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
          padding: '1rem',
          // height: '2rem',
        }}
      >
        &copy; 2023 Maria Mendonca
      </footer>
    </>
  );
}

export default App;
