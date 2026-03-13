import React, { useMemo, useState } from "react";

const POINTS = [100, 200, 300, 500];
const COLS = [
  { key: "c1", title: "Category A" },
  { key: "c2", title: "Category B" },
  { key: "c3", title: "Category C" },
  { key: "c4", title: "Category D" },
];

function cx(...xs) {
  return xs.filter(Boolean).join(" ");
}

function CheckIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function XIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

function Modal({ open, title, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl rounded-[2rem] bg-white text-slate-800 shadow-[0_20px_80px_rgba(0,0,0,0.35)] border-4 border-white/60">
          <div className="flex items-start justify-between gap-3 border-b border-slate-200 p-5">
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Question
              </div>
              <div className="text-lg font-extrabold leading-tight">{title}</div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-xl p-2 bg-slate-100 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
              aria-label="Close"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="p-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Props:
 * - theme: object from THEMES[themeKey]
 * - questions: array length 16
 * - onBack: function
 */
export default function TriviaApp({ theme, questions, onBack }) {
  const safeQuestions = useMemo(() => questions ?? [], [questions]);

  const [completed, setCompleted] = useState(() => new Set());
  const [activeIdx, setActiveIdx] = useState(null);
  const [revealAnswer, setRevealAnswer] = useState(false);

  const openTile = (idx) => {
    if (completed.has(idx)) return;
    setActiveIdx(idx);
    setRevealAnswer(false);
  };

  const closeTile = () => {
    if (activeIdx !== null) {
      setCompleted((prev) => new Set(prev).add(activeIdx));
    }
    setActiveIdx(null);
    setRevealAnswer(false);
  };

  const resetBoard = () => {
    setCompleted(new Set());
    setActiveIdx(null);
    setRevealAnswer(false);
  };

  const activeQuestion = activeIdx !== null ? safeQuestions[activeIdx] : null;

  return (
    <div className="min-h-screen w-full bg-[#fff0f3] text-white overflow-x-hidden">
      {/* top header */}
      <header className="w-full bg-[#ea638c]">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-bold text-white/80">STEM Trivia</div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
                {theme.label} Trivia Board
              </h1>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onBack}
                className="rounded-full bg-white px-5 py-2 text-sm font-extrabold text-[#ea7c64] shadow-md transition hover:scale-[1.03] hover:bg-white/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
              >
                ← Go Back
              </button>

              <button
                type="button"
                onClick={resetBoard}
                className="rounded-full bg-white/20 px-5 py-2 text-sm font-extrabold text-white shadow-md transition hover:scale-[1.03] hover:bg-white/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
              >
                Reset Board
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* mascot + info */}
        <div className="mb-6 flex flex-col gap-4 rounded-[2rem] bg-white text-black px-6 py-5 shadow-lg sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="text-5xl animate-bounce">🤖</div>
            <div>
              <p className="text-xl font-extrabold">Let’s play {theme.label}!</p>
              <p className="text-black/90">
                Tap a card to open a question and earn points.
              </p>
            </div>
          </div>

          <div className="rounded-full bg-white/25 px-4 py-2 text-sm font-bold text-white">
            Completed: {completed.size} / 16
          </div>
        </div>

        {/* board */}
        <div className="rounded-[2rem] bg-[#2bb7f5] p-3 shadow-[0_18px_65px_rgba(0,0,0,0.2)]">
          <div className="grid grid-cols-4 gap-3">
            {/* headers */}
            {COLS.map((col) => (
              <div
                key={col.key}
                className="rounded-[1.25rem] bg-white/20 px-3 py-4 text-center text-sm font-extrabold leading-tight sm:text-base md:text-lg"
              >
                {col.title}
              </div>
            ))}

            {/* tiles */}
            {POINTS.map((p, row) =>
              COLS.map((col, colIdx) => {
                const idx = row * 4 + colIdx;
                const done = completed.has(idx);

                return (
                  <button
                    key={`${col.key}-${p}`}
                    type="button"
                    onClick={() => openTile(idx)}
                    disabled={done}
                    className={cx(
                      "relative flex h-20 items-center justify-center rounded-[1.5rem] border-4 border-white/40",
                      "bg-white/15 text-white shadow-md transition duration-200",
                      "hover:scale-[1.03] hover:bg-white/25",
                      "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50",
                      "sm:h-24 md:h-28",
                      "text-3xl font-extrabold sm:text-4xl md:text-5xl",
                      done && "cursor-not-allowed opacity-70"
                    )}
                  >
                    <span>{p}</span>

                    {done && (
                      <span className="absolute right-2 top-2 grid h-9 w-9 place-items-center rounded-full bg-[#96e072]">
                        <CheckIcon className="h-5 w-5 text-white" />
                      </span>
                    )}
                  </button>
                );
              })
            )}
          </div>
        </div>

        <div className="mt-4 text-center text-sm font-semibold text-white">
          Choose a tile to open a question. Press Done to mark it complete.
        </div>
      </main>

      {/* modal */}
      <Modal
        open={activeIdx !== null}
        title={
          activeIdx !== null
            ? `${theme.label} • ${POINTS[Math.floor(activeIdx / 4)]} points`
            : ""
        }
        onClose={closeTile}
      >
        {activeQuestion ? (
  <div>
    <div className="mb-4 flex items-center gap-3">
      <div className="text-4xl animate-bounce">⭐</div>
      <div className="text-base font-extrabold text-sky-600 sm:text-lg">
        {activeQuestion.question}
      </div>
    </div>

    <div className="grid gap-3">
      {activeQuestion.choices.map((c, i) => (
        <button
          key={i}
          type="button"
          className="rounded-[1.25rem] border-2 border-slate-200 bg-slate-50 px-4 py-3 text-left transition hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
        >
          <div className="text-xs font-bold uppercase tracking-wide text-slate-400">
            Choice {i + 1}
          </div>
          <div className="font-semibold text-slate-800">{c}</div>
        </button>
      ))}
    </div>

    <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <button
        type="button"
        onClick={() => setRevealAnswer((v) => !v)}
        className="rounded-full bg-sky-500 px-4 py-2 text-sm font-extrabold text-white transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
      >
        {revealAnswer ? "Hide Answer" : "Show Answer"}
      </button>

      <button
        type="button"
        onClick={closeTile}
        className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-extrabold text-white transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
      >
        Done
      </button>
    </div>

    {revealAnswer && (
      <div className="mt-4 rounded-[1.5rem] border-2 border-amber-200 bg-amber-50 p-4">
        <div className="text-xs font-bold uppercase tracking-wide text-amber-500">
          Answer
        </div>
        <div className="mt-1 font-extrabold text-slate-800">
          {activeQuestion.answer}
        </div>
      </div>
    )}
    </div>
        ) : (
        <div className="text-slate-600">No question found for this tile.</div>
        )}
      </Modal>
    </div>
  );
}