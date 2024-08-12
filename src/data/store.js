import { create } from 'zustand';

const useStore = create((set) => ({
  computerQuestions: [
    {
      id: 1,
      question: 'Using Microsoft word we can simply ___',
      options: [
        'Paste picture',
        'Type',
        'Format a text',
        'All the above functions',
      ],
      correctAnswer: 'All the above functions',
    },
    {
      id: 2,
      question: 'The Binary Coded Decimal (BCD) uses',
      options: ['6 bits', '8 bits', '16 bits', '32 bits'],
      correctAnswer: '6 bits',
    },
    {
      id: 3,
      question: 'Which of the following is billionth of a second?',
      options: ['Microsecond', 'Nanosecond', 'Terabyte', 'Gigabyte'],
      correctAnswer: 'Nanosecond',
    },
    {
      id: 4,
      question: 'The two kinds of main memory are',
      options: [
        'CDs and DVDs',
        'RAM and ROM',
        'Primary and secondary',
        'Direct and sequential',
      ],
      correctAnswer: 'RAM and ROM',
    },
    {
      id: 5,
      question: 'RAM is also called as',
      options: [
        'Virtual memory',
        'Volatile memory',
        'Non volatile memory',
        'Cache memory',
      ],
      correctAnswer: 'Volatile memory',
    },
    {
      id: 6,
      question: 'Internal hard disk is',
      options: ['Removable but not fixed', 'Removable', 'Not fixed', 'Fixed'],
      correctAnswer: 'Fixed',
    },
    {
      id: 7,
      question: 'The main memory of computer is also called as',
      options: [
        'Hard-disk',
        'Internal memory',
        'Primary storage',
        'Secondary storage',
      ],
      correctAnswer: 'Primary storage',
    },
    {
      id: 8,
      question: 'How much data can be stored in a CD?',
      options: ['300 MB', '400 MB', '670 MB', '700 MB'],
      correctAnswer: '700 MB',
    },
    {
      id: 9,
      question: 'CD-ROM stands for',
      options: [
        'Compactable Disc Read Only Memory',
        'Compact Data Read Only Memory',
        'Compact Disc Read Only Memory',
        'Compactable Read Only Memory',
      ],
      correctAnswer: 'Compact Disc Read Only Memory',
    },
    {
      id: 10,
      question: '_____ has the shortest access times.',
      options: [
        'Virtual Memory',
        'Secondary Memory',
        'Cache Memory',
        'All of the above',
      ],
      correctAnswer: 'Cache Memory',
    },
  ],

  animalQuestions: [
    {
      id: 1,
      question: 'Which animal is known as the king of the jungle?',
      options: [
        'Lion',
        'Tiger',
        'Elephant',
        'Monkey',
      ],
      correctAnswer: 'Lion',
    },
    {
      id: 2,
      question: 'What do birds use to fly?',
      options: ['Legs', 'Wings', 'Tail', 'Ears'],
      correctAnswer: 'Wings',
    },
    {
      id: 3,
      question: 'Which animal has the longest neck?',
      options: ['Camel', 'Elephant', 'Zebra', 'Giraffe'],
      correctAnswer: 'Giraffe',
    },
    {
      id: 4,
      question: 'The two kinds of main memory are',
      options: [
        'CDs and DVDs',
        'RAM and ROM',
        'Primary and secondary',
        'Direct and sequential',
      ],
      correctAnswer: 'RAM and ROM',
    },
    {
      id: 5,
      question: 'RAM is also called as',
      options: [
        'Virtual memory',
        'Volatile memory',
        'Non volatile memory',
        'Cache memory',
      ],
      correctAnswer: 'Volatile memory',
    },
    {
      id: 6,
      question: 'Internal hard disk is',
      options: ['Removable but not fixed', 'Removable', 'Not fixed', 'Fixed'],
      correctAnswer: 'Fixed',
    },
    {
      id: 7,
      question: 'The main memory of computer is also called as',
      options: [
        'Hard-disk',
        'Internal memory',
        'Primary storage',
        'Secondary storage',
      ],
      correctAnswer: 'Primary storage',
    },
    {
      id: 8,
      question: 'How much data can be stored in a CD?',
      options: ['300 MB', '400 MB', '670 MB', '700 MB'],
      correctAnswer: '700 MB',
    },
    {
      id: 9,
      question: 'CD-ROM stands for',
      options: [
        'Compactable Disc Read Only Memory',
        'Compact Data Read Only Memory',
        'Compact Disc Read Only Memory',
        'Compactable Read Only Memory',
      ],
      correctAnswer: 'Compact Disc Read Only Memory',
    },
    {
      id: 10,
      question: '_____ has the shortest access times.',
      options: [
        'Virtual Memory',
        'Secondary Memory',
        'Cache Memory',
        'All of the above',
      ],
      correctAnswer: 'Cache Memory',
    },
  ],

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

  selectedCategory: null,
  setSelectedCategory: (category) => set(() => ({ category })),
}));

export default useStore;
