import styled from 'styled-components';

export const QuizContainer = styled.div`
  max-width: 60%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 650px) {
    max-width: 80%;
  }
  @media screen and (min-width: 1400px) {
    max-width: 40%;
  }
`;

export const Question = styled.h2`
  font-size: 24px;
  margin: 0;
  color: #59094a;
  text-align: center;
`;

export const OptionsList = styled.ol`
  list-style-type: none;
  padding: 0;
`;

export const OptionItem = styled.li`
  margin: 10px 0;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #eee7ed;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    border: 1px solid #ac118a;
  }

  ${(props) =>
    props.selected &&
    `
    background-color: #f5def2;
    border: 1px solid #ac118a;
    color: #630454;
  `}
`;

export const NextButton = styled.button`
  background-image: linear-gradient(to right, #9d176c, #a77da4);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  transition: background-color 0.3s ease-in-out;

  &:disabled {
    background-image: linear-gradient(to right, #eee7ed, #eee7ed);
    color: #ffeeee;
  }
`;

export const QuizCompletedMessage = styled.p`
  font-size: 40px;
  text-align: center;
  margin: 20px 0;
  color: #9d176c;
  font-weight: bold;
`;

export const QuizMainHeading = styled.p`
  font-size: 40px;
  text-align: center;
  margin: 0;
  color: #000;
  font-weight: bold;
  padding: 2rem 0;
`;

export const Score = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  color: #691249;
`;

export const Container = styled.div`
  background-image: linear-gradient(to right, #e2229c, #dfb9dc);
  height: calc(100vh - 3.1rem);
`;

export const PreviewQuestion = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 0;
  color: #691249;
`;

export const PreviewAnswer = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-top: 0;
  color: #691249;
`;

export const BackButton = styled.button`
  color: #9d176c;
  border: 1px solid #9d176c;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  transition: background-color 0.3s ease-in-out;
`;

export const PreviewMessage = styled.p`
  font-size: 35px;
  text-align: center;
  margin: 20px 0;
  color: #9d176c;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const CurrentQuestion = styled.p`
  font-size: 30px;
  color: #ddbdd5;
  margin: 0;
`;

export const CurrentQuestionDark = styled.span`
  font-size: 50px;
  color: #9d176c;
`;

export const Footer = styled.footer`
  background-color: black;
  color: white;
  text-align: center;
  padding: 1rem;
`;
