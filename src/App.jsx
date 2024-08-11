import Quiz from './container/Quiz';
import {
  Container,
  Footer,
  FooterLink,
  QuizMainHeading,
} from './styles/StyledComponents';

function App() {
  return (
    <>
      <Container>
        <QuizMainHeading>Quiz Application</QuizMainHeading>
        <Quiz />
      </Container>
      <Footer>
        &copy; 2023{' '}
        <FooterLink
          href="https://maria-mendonca.vercel.app/"
          target="_self"
        >
          Maria Mendonca
        </FooterLink>
      </Footer>
    </>
  );
}

export default App;
