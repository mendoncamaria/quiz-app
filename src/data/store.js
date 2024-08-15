import { create } from 'zustand';

const useStore = create((set) => ({

  currentQuestionIndex: 0,
  setCurrentQuestionIndex: (currentQuestionIndex) =>
    set(() => ({ currentQuestionIndex })),

  selectedAnswer: null,
  selectedAnswers: Array.from({ length: 10 }, () => null), // Initialize with null values for 10 questions

  nextQuestion: () =>
    set((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1,
      selectedAnswer: null,
    })),

  selectAnswer: (answer) =>
    set((state) => {
      const updatedSelectedAnswers = [...state.selectedAnswers];
      updatedSelectedAnswers[state.currentQuestionIndex] = answer;
      return {
        selectedAnswer: answer,
        selectedAnswers: updatedSelectedAnswers,
      };
    }),

  result: false,
  setResult: (result) => set(() => ({ result })),
  
  correctAnswers: 0,
  setCorrectAnswers: (result) => set(() => ({ result })),
}));

export default useStore;
