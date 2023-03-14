const { createQuiz } = require('../server.js');



const mockQuiz = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false }
    ]
  }
];

const mockAnswer = "Paris";

describe("createQuiz", function() {
  beforeEach(function() {
    spyOn(window, "prompt").and.returnValue(mockAnswer);
  });

  it("should prompt the user for an answer for each quiz question", function() {
    createQuiz(mockQuiz);
    expect(window.prompt.calls.count()).toEqual(mockQuiz.length);
  });

  it("should calculate the user's score correctly", function() {
    
    createQuiz(mockQuiz);
    expect(window.alert).toHaveBeenCalledWith(`Your score: 1 out of ${mockQuiz.length}`);
  });
});