const questionBank = [
  {
    question: "Capital of Australia?",
    answers: ["Melbourne", "Sydney", "Canberra", "Brisbane"],
    correct: "Canberra",
    questionId: "1",
  },

  {
    question: "Australia's Google office is situated in which place",
    answers: ["Sydney", "Brisbane", "Melbourne", "Perth"],
    correct: "Sydney",
  },
  {
    question: "Australia's Google office is situated in which place",
    answers: ["Sydney", "Brisbane", "Melbourne", "Perth"],
    correct: "Sydney",
  },
  {
    question: "Australia's Google office is situated in which place",
    answers: ["Sydney", "Brisbane", "Melbourne", "Perth"],
    correct: "Sydney",
  },
  {
    question: "Australia's Google office is situated in which place",
    answers: ["Sydney", "Brisbane", "Melbourne", "Perth"],
    correct: "Sydney",
  },
];

export default (n = 5) =>
  Promise.resolve(questionBank.sort(() => 0.5 - Math.random()).slice(0, n));
