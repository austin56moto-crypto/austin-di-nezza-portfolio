"use client";

import { useState, useTransition } from "react";
import { Bot, Send } from "lucide-react";

const suggestedPrompts = [
  "What kind of projects has Austin built?",
  "Does Austin have backend experience?",
  "Which project best shows cloud knowledge?",
  "Is Austin bilingual?",
];

export function ChatbotWidget() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Ask about Austin's projects, studies, cloud work, or backend experience. This assistant is powered by a portfolio knowledge base.",
    },
  ]);
  const [isPending, startTransition] = useTransition();

  function submitQuestion(nextQuestion: string) {
    if (!nextQuestion.trim()) {
      return;
    }

    setMessages((current) => [...current, { role: "user", content: nextQuestion }]);
    setQuestion("");

    startTransition(async () => {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: nextQuestion }),
      });

      const data = (await response.json()) as { answer?: string };

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.answer ?? "I could not answer that right now.",
        },
      ]);
    });
  }

  return (
    <div className="panel p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-100">
          <Bot className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Ask Austin AI
          </p>
          <p className="text-sm text-slate-300">Rule-based portfolio assistant</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={
              message.role === "assistant"
                ? "rounded-3xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-slate-200"
                : "rounded-3xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-50"
            }
          >
            {message.content}
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {suggestedPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => submitQuestion(prompt)}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
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
          placeholder="Ask about projects, skills, studies, or backend experience"
          className="w-full rounded-full border border-white/10 bg-slate-950 px-5 py-3 text-sm text-white outline-none transition focus:border-cyan-400/40"
        />
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-60"
          aria-label="Send question"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
