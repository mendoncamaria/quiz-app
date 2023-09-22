import styled from 'styled-components';

export const QuizContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const Question = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
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
  margin: 20px 0;
  color: #000;
  font-weight: bold;
  padding-top: 2rem;
`;

export const Score = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  color: #691249;
`;
