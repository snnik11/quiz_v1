const questionBank = [
  {
    question: "Capital of Australia?",
    answers: ["Melbourne", "Sydney", "Canberra", "Brisbane"],
    correct: "Canberra",
    questionId: "1",
  },

  {
    question: "Australia's Google office is situated in which place?",
    answers: ["Sydney", "Brisbane", "Melbourne", "Perth"],
    correct: "Sydney",
    questionId: "2",
  },
  {
    question: "Australia is known for?",
    answers: ["Koala", "Polar bear", "Penguins", "Giraffe"],
    correct: "Koala",
    questionId: "3",
  },
  {
    question: "Where is the F1 race track situated in Australia?",
    answers: ["Sydney", "Brisbane", "Melbourne", "Perth"],
    correct: "Melbourne",
    questionId: "4",
  },
  {
    question: "The Great Barrier Reef is situated in which state?",
    answers: ["Victoria", "Queensland", "Western Australia", "New South Wales"],
    correct: "Queensland",
    questionId: "5",
  },
];

export default (n = 5) =>
  Promise.resolve(questionBank.sort(() => 0.5 - Math.random()).slice(0, n));
