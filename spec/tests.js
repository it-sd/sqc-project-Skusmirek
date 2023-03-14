const { createQuiz } = require('.../');


// Define a mock quiz with one question and answer
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

// Define a mock answer for the mock quiz
const mockAnswer = "Paris";

describe("createQuiz", function() {
  beforeEach(function() {
    // Set up the mock prompt function to return the mock answer
    spyOn(window, "prompt").and.returnValue(mockAnswer);
  });

  it("should prompt the user for an answer for each quiz question", function() {
    // Call the createQuiz function with the mock quiz
    createQuiz(mockQuiz);

    // Expect the prompt function to have been called once for each quiz question
    expect(window.prompt.calls.count()).toEqual(mockQuiz.length);
  });

  it("should calculate the user's score correctly", function() {
    // Call the createQuiz function with the mock quiz
    createQuiz(mockQuiz);

    // Expect the user's score to be 1 (since the mock answer is correct)
    expect(window.alert).toHaveBeenCalledWith(`Your score: 1 out of ${mockQuiz.length}`);
  });
});