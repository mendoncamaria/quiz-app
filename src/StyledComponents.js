import styled from 'styled-components';

export const QuizContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const Question = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

export const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const OptionItem = styled.li`
  margin: 10px 0;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }

  ${(props) =>
    props.selected &&
    `
    background-color: #28a745;
    color: #fff;
  `}
`;

export const NextButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #0011b3;
  }
`;

export const QuizCompletedMessage = styled.p`
  font-size: 18px;
  margin-top: 20px;
  color: #333;
`;

export const Score = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  color: #28a745; /* Green color for correct score */
`;
