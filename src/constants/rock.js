// 16 placeholder questions for Rocks (replace later)
export const ROCKS_QUESTIONS = Array.from({ length: 16 }, (_, i) => ({
  id: `rocks-${i}`,
  prompt: `Rocks question ${i + 1} (placeholder)`,
  choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
  answerIndex: 0,
  explanation: "",
}));