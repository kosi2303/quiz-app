const quizData = {
    title: "General Knowledge"
};

const questions = [
    {
        text: "What is the capital of Nigeria?",
        type: "mc",
        answers: [
          { text: "New York City", correct: false },
          { text: "Philadelphia", correct: false },
          { text: "Abuja", correct: true },
          { text: "Lagos", correct: false }
        ]
    },
    {
        text: "What is the full meaning of CSS?",
        type: "mc",
        answers: [
          { text: "Course Style Sheet", correct: false },
          { text: "Cascading Style Sheet", correct: true },
          { text: "Custom Style Sheet", correct: false },
          { text: "Cascading System Sheet", correct: false }
        ]
    },
    {
        text: "HTTP stands for?",
        type: "mc",
        answers: [
          { text: "HyperText Transfer Protocol", correct: true },
          { text: "All of the above", correct: false },
          { text: "Hyper Transmission Transfer Process", correct: false },
          { text: "None of the above", correct: false }
        ]
    },
    {
        text: "The WHO headquarters is based where?",
        type: "mc",
        answers: [
          { text: "Morroco", correct: false },
          { text: "Switzerland", correct: true },
          { text: "Washington D.C.", correct: false },
          { text: "Germany", correct: false }
        ]
    },
    {
        text: "The Chemical Formular for water?",
        type: "mc",
        answers: [
          { text: "O2", correct: false },
          { text: "H2O", correct: true },
          { text: "C", correct: false },
          { text: "Co", correct: false }
        ]
    },
    {
        text: "Was Thomas Tuchel Sacked?",
        type: "mc",
        answers: [
          { text: "Yes", correct: true },
          { text: "No", correct: false }
  
        ]
    }
];

module.exports = { quizData, questions };