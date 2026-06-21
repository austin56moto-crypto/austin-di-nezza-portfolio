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
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white/[0.03] text-[var(--foreground)]">
          <MessageSquare className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--foreground)]">Portfolio Q&amp;A</p>
          <p className="text-sm text-[var(--muted)]">Short answers about projects, skills, and hiring fit.</p>
        </div>
      </div>

      <div className="mt-6 rounded-[1.5rem] border border-[var(--line)] bg-[var(--background)]/60 p-5">
        {lastQuestion ? (
          <div className="mb-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Question</p>
            <p className="mt-2 text-sm font-medium text-[var(--foreground)]">{lastQuestion}</p>
          </div>
        ) : null}
        <p className="text-sm leading-8 text-[var(--muted)]">
          {isPending ? "Checking Austin's CV and live GitHub projects..." : answer}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {suggestedPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => submitQuestion(prompt)}
            className="rounded-full border border-[var(--line)] bg-white/[0.03] px-3 py-2 text-xs uppercase tracking-[0.12em] text-[var(--muted)] transition hover:bg-white/[0.08] hover:text-[var(--foreground)]"
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
          className="w-full rounded-full border border-[var(--line)] bg-[var(--background)] px-5 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[rgba(217,191,119,0.4)]"
        />
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 text-[var(--foreground)] transition hover:bg-[var(--surface-strong)] disabled:cursor-not-allowed disabled:opacity-60"
          aria-label="Send question"
        >
          <Send className="h-4 w-4" />
          <span className="text-sm font-medium">Ask</span>
        </button>
      </form>
    </div>
  );
}
