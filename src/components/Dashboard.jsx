import React, { useState } from "react";
import TriviaApp from "./TriviaApp";
import { THEMES, THEME_KEYS } from "../constants/themes";

// ICONS
import {
  Calculator,
  Gem,
  Rocket,
  CloudSun,
  HeartPulse,
  PawPrint,
  Zap,
  Code2,
  Wrench,
  Mountain,
  Sparkles,
  Shapes,
  BookOpen,
  Pencil,
  Trophy,
} from "lucide-react";

// QUESTIONS
import { ROCK_QUESTIONS } from "../constants/rock";
import { SPACE_QUESTIONS } from "../constants/space";
import { WEATHER_QUESTIONS } from "../constants/weather";
import { HUMAN_BODY_QUESTIONS } from "../constants/humanbody";
import { ANIMAL_QUESTIONS } from "../constants/animals";
import { MATH_K_QUESTIONS } from "../constants/math/mathKindergarten";
import { MATH_GRADE1_QUESTIONS } from "../constants/math/mathGrade1";
import { MATH_GRADE2_QUESTIONS } from "../constants/math/mathGrade2";
import { MATH_GRADE3_QUESTIONS } from "../constants/math/mathGrade3";
import { MATH_GRADE4_QUESTIONS } from "../constants/math/mathGrade4";
import { MATH_GRADE5_QUESTIONS } from "../constants/math/mathGrade5";

const QUESTION_MAP = {
  rocks: ROCK_QUESTIONS,
  space: SPACE_QUESTIONS,
  weather: WEATHER_QUESTIONS,
  humanBody: HUMAN_BODY_QUESTIONS,
  animals: ANIMAL_QUESTIONS,
  electricity: [],
  coding: [],
  engineering: [],
  volcano: [],
};

const MATH_LEVELS = [
  { key: "kindergarten", label: "Kindergarten", emoji: "🧸" },
  { key: "grade1", label: "1st Grade", emoji: "🌟" },
  { key: "grade2", label: "2nd Grade", emoji: "📘" },
  { key: "grade3", label: "3rd Grade", emoji: "✏️" },
  { key: "grade4", label: "4th Grade", emoji: "🚀" },
  { key: "grade5", label: "5th Grade", emoji: "🏆" },
];

const MATH_QUESTIONS_BY_GRADE = {
  kindergarten: MATH_K_QUESTIONS,
  grade1: MATH_GRADE1_QUESTIONS,
  grade2: MATH_GRADE2_QUESTIONS,
  grade3: MATH_GRADE3_QUESTIONS,
  grade4: MATH_GRADE4_QUESTIONS,
  grade5: MATH_GRADE5_QUESTIONS,
};

const CATEGORY_META = {
  math: {
    icon: Calculator,
    bg: "bg-pink-400 hover:bg-pink-300",
    badge: "🧮",
  },
  rocks: {
    icon: Gem,
    bg: "bg-emerald-400 hover:bg-emerald-300",
    badge: "🪨",
  },
  space: {
    icon: Rocket,
    bg: "bg-violet-400 hover:bg-violet-300",
    badge: "🚀",
  },
  weather: {
    icon: CloudSun,
    bg: "bg-sky-400 hover:bg-sky-300",
    badge: "⛅",
  },
  humanBody: {
    icon: HeartPulse,
    bg: "bg-rose-400 hover:bg-rose-300",
    badge: "🫀",
  },
  animals: {
    icon: PawPrint,
    bg: "bg-amber-400 hover:bg-amber-300",
    badge: "🐾",
  },
  electricity: {
    icon: Zap,
    bg: "bg-yellow-400 hover:bg-yellow-300",
    badge: "⚡",
  },
  coding: {
    icon: Code2,
    bg: "bg-cyan-400 hover:bg-cyan-300",
    badge: "💻",
  },
  engineering: {
    icon: Wrench,
    bg: "bg-orange-400 hover:bg-orange-300",
    badge: "🛠️",
  },
  volcano: {
    icon: Mountain,
    bg: "bg-red-400 hover:bg-red-300",
    badge: "🌋",
  },
};

const MATH_LEVEL_META = {
  kindergarten: {
    icon: Shapes,
    bg: "bg-pink-400 hover:bg-pink-300",
    badge: "🧸",
  },
  grade1: {
    icon: Sparkles,
    bg: "bg-yellow-400 hover:bg-yellow-300",
    badge: "🌟",
  },
  grade2: {
    icon: BookOpen,
    bg: "bg-sky-400 hover:bg-sky-300",
    badge: "📘",
  },
  grade3: {
    icon: Pencil,
    bg: "bg-emerald-400 hover:bg-emerald-300",
    badge: "✏️",
  },
  grade4: {
    icon: Rocket,
    bg: "bg-violet-400 hover:bg-violet-300",
    badge: "🚀",
  },
  grade5: {
    icon: Trophy,
    bg: "bg-orange-400 hover:bg-orange-300",
    badge: "🏆",
  },
};

export default function Dashboard() {
  const [selectedKey, setSelectedKey] = useState(null);
  const [selectedMathGrade, setSelectedMathGrade] = useState(null);

  const goBackHome = () => {
    setSelectedKey(null);
    setSelectedMathGrade(null);
  };

  if (selectedKey && selectedKey !== "math") {
    return (
      <TriviaApp
        theme={THEMES[selectedKey]}
        questions={QUESTION_MAP[selectedKey] ?? []}
        onBack={goBackHome}
      />
    );
  }

  if (selectedKey === "math" && selectedMathGrade) {
    return (
      <TriviaApp
        theme={{
          ...THEMES.math,
          label: `Math - ${
            MATH_LEVELS.find((level) => level.key === selectedMathGrade)?.label
          }`,
        }}
        questions={MATH_QUESTIONS_BY_GRADE[selectedMathGrade] ?? []}
        onBack={() => setSelectedMathGrade(null)}
      />
    );
  }

  if (selectedKey === "math" && !selectedMathGrade) {
    return (
      <div className="w-full min-h-screen bg-[#fff0f3] text-white overflow-x-hidden">
        <header className="w-full bg-[#ea638c]">
          <div className="mx-auto max-w-6xl px-6 py-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
              Choose Math Grade Level
            </h1>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            {/* left side */}
            <section>
              <div className="mb-6 flex items-center gap-4 rounded-[2rem] bg-[#990033] px-5 py-4">
                <div className="text-5xl animate-bounce">🤖</div>
                <div>
                  <p className="flex items-center gap-2 text-xl font-extrabold">
                    Pick your math level! <Sparkles className="h-5 w-5" />
                  </p>
                  <p className="text-sm text-white/90 sm:text-base">
                    Choose a grade before starting the math trivia board.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {MATH_LEVELS.map((level) => {
                  const meta = MATH_LEVEL_META[level.key];
                  const Icon = meta?.icon ?? Sparkles;

                  return (
                    <button
                      key={level.key}
                      type="button"
                      onClick={() => setSelectedMathGrade(level.key)}
                      className={`rounded-[1.5rem] ${meta?.bg ?? "bg-pink-400 hover:bg-pink-300"} p-5 text-left shadow-lg transition duration-200 hover:-translate-y-1 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50`}
                    >
                      <div className="flex items-center justify-between">
                        {/* <span className="text-3xl">{meta?.badge ?? level.emoji}</span> */}
                        <Icon className="h-7 w-7 text-white/90" />
                      </div>

                      <div className="mt-4">
                        <h2 className="text-lg font-extrabold sm:text-xl">
                          {level.label}
                        </h2>
                        {/* <p className="mt-1 text-sm text-white/90">
                          Start math trivia for this level
                        </p> */}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={goBackHome}
                  className="rounded-full bg-white px-5 py-2 text-sm font-extrabold text-[#ea7c64] shadow-md transition hover:scale-[1.03] hover:bg-white/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
                >
                  ← Back to Categories
                </button>
              </div>
            </section>

            {/* right side info card */}
            <aside className="rounded-[2rem] bg-[#be3e82] px-8 py-8 shadow-lg">
              <h2 className="text-2xl font-extrabold">Math Levels</h2>

              <div className="mt-5 space-y-4 text-base leading-relaxed text-white/95 sm:text-lg">
                <p>
                  <span className="mr-2 font-bold">1.</span>
                  Choose the grade level that matches the student.
                </p>
                <p>
                  <span className="mr-2 font-bold">2.</span>
                  Each level can have its own math questions.
                </p>
                <p>
                  <span className="mr-2 font-bold">3.</span>
                  Tap a card to open that grade’s trivia board.
                </p>
                <p>
                  <span className="mr-2 font-bold">4.</span>
                  Use the back button to return here anytime.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#fff0f3] text-white overflow-x-hidden">
      <header className="w-full bg-[#ea638c]">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
            WIC ACTIVITY: STEM TRIVIA GAME
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          {/* left side */}
          <section>
            <div className="mb-6 flex items-center gap-4 rounded-[2rem] bg-[#990033] px-5 py-4 shadow-md">
              <div className="text-5xl animate-bounce">🤖</div>
              <div>
                <p className="flex items-center gap-2 text-xl font-extrabold">
                  Hi, Explorer! <Sparkles className="h-5 w-5" />
                </p>
                <p className="text-sm text-white/90 sm:text-base">
                  Pick a fun STEM mission to begin.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 max-w-2xl sm:grid-cols-3">
              {THEME_KEYS.map((key) => {
                const theme = THEMES[key];
                const meta = CATEGORY_META[key];
                const Icon = meta?.icon ?? Sparkles;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedKey(key)}
                    className={`rounded-[1.5rem] ${meta?.bg ?? "bg-emerald-400 hover:bg-emerald-300"} p-5 text-left shadow-lg transition duration-200 hover:-translate-y-1 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50`}
                  >
                    <div className="flex items-center justify-between">
                      {/* <span className="text-3xl">{meta?.badge ?? "⭐"}</span> */}
                      <Icon className="h-7 w-7 text-white/90" />
                    </div>

                    <div className="mt-4">
                      <h2 className="text-lg font-extrabold sm:text-xl">
                        {theme.label}
                      </h2>
                      
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* right side rules */}
          <aside className="min-h-[360px] rounded-[2rem] bg-[#be3e82] px-8 py-8 shadow-lg">
            <h2 className="text-2xl font-extrabold">Game Rules</h2>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-white/95 sm:text-lg">
              <p>
                <span className="mr-2 font-bold">1.</span>
                Choose a STEM category to start.
              </p>
              <p>
                <span className="mr-2 font-bold">2.</span>
                Math lets you pick a grade level first.
              </p>
              <p>
                <span className="mr-2 font-bold">3.</span>
                Each board has 16 question tiles.
              </p>
              <p>
                <span className="mr-2 font-bold">4.</span>
                Use Show Answer when needed.
              </p>
              <p>
                <span className="mr-2 font-bold">5.</span>
                Completed tiles will show a check mark.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}