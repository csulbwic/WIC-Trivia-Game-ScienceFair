// 16 placeholder questions for Math (replace later)
export const MATH_GRADE2_QUESTIONS = Array.from({ length: 16 }, (_, i) => ({
  id: `math-${i}`,
  prompt: `Math question ${i + 1} (placeholder)`,
  choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
  answerIndex: 0,
  explanation: "",
}));