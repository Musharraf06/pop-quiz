const set2 = [
  {
    question: "what is 5 times 9 ?",
    answers: ["45", "43", "atleast 40", "less than 40"],
    correct: "atlest 40",
    questionId: "099099",
  },
  {
    question: "What company developed the vocaloid Hatsune Miku?",
    answers: ["Crypton Future Media", "Sega", "Sony", "Yamaha Corporation"],
    correct: "Crypton Future Media",
    questionId: "4630606",
  },
  {
    question:
      "Which country, not including Japan, has the most people of japanese decent?",
    answers: ["Brazil", "China", "South Korea", "United States of America"],
    correct: "Brazil",
    questionId: "4795960",
  },
  {
    question: "Which candy is NOT made by Mars?",
    answers: ["Almond Joy", "M&M's", "Twix", "Snickers"],
    correct: "Almond Joy",
    questionId: "4811162",
  },
  {
    question: "In which fast food chain can you order a Jamocha Shake?",
    answers: ["Arby's", "McDonald's", "Burger King", "Wendy's"],
    correct: "Arby's",
    questionId: "4982981",
  },
];

export default (n = 5) =>
  Promise.resolve(set2.sort(() => 0.5 - Math.random()).slice(0, n));