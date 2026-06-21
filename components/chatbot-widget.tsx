"use client";

import { useState, useTransition } from "react";
import { MessageSquare, Send } from "lucide-react";

import type { ChatbotReply } from "@/types";

const suggestedPrompts = [
  "Which project should an employer look at first?",
  "Does Austin have backend experience?",
  "What work is most relevant for internships?",
];

export function ChatbotWidget() {
  const [question, setQuestion] = useState("");
  const [lastQuestion, setLastQuestion] = useState<string | null>(null);
  const [answer, setAnswer] = useState(
    "Ask about Austin's strongest project, backend experience, education, or what an employer should review first.",
  );
  const [isPending, startTransition] = useTransition();

  function submitQuestion(nextQuestion: string) {
    if (!nextQuestion.trim()) {
      return;
    }

    setLastQuestion(nextQuestion);
    setQuestion("");

    startTransition(async () => {
      try {
        const response = await fetch("/api/chatbot", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: nextQuestion }),
        });

        if (!response.ok) {
          throw new Error("Chatbot request failed");
        }

        const data = (await response.json()) as Partial<ChatbotReply>;
        setAnswer(data.answer ?? "I could not answer that right now.");
      } catch {
        setAnswer("I could not answer that right now. Please try a different question.");
      }
    });
  }

  return (
    <div className="panel p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-slate-100">
          <MessageSquare className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Portfolio Q&amp;A</p>
          <p className="text-sm text-slate-400">Short answers about projects, skills, and hiring fit.</p>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
        {lastQuestion ? (
          <div className="mb-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Question</p>
            <p className="mt-2 text-sm font-medium text-white">{lastQuestion}</p>
          </div>
        ) : null}
        <p className="text-sm leading-7 text-slate-200">
          {isPending ? "Checking Austin's CV and live GitHub projects..." : answer}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {suggestedPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => submitQuestion(prompt)}
            className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            {prompt}
          </button>
        ))}
      </div>

      <form
        className="mt-5 flex gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          submitQuestion(question);
        }}
      >
        <input
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Ask about projects, backend work, or what to review first"
          className="w-full rounded-full border border-white/10 bg-slate-950 px-5 py-3 text-sm text-white outline-none transition focus:border-slate-300/30"
        />
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-4 text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          aria-label="Send question"
        >
          <Send className="h-4 w-4" />
          <span className="text-sm font-medium">Ask</span>
        </button>
      </form>
    </div>
  );
}
