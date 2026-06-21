"use client";

import { useState, useTransition } from "react";
import { Bot, ChevronRight, Send } from "lucide-react";

import type { ChatbotReply } from "@/types";

const suggestedPrompts = [
  "Which project should an employer look at first?",
  "Does Austin have backend experience?",
  "Which project best shows cloud knowledge?",
  "What kind of projects has Austin built?",
];

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
  references?: string[];
  suggestedQuestions?: string[];
};

export function ChatbotWidget() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Ask about Austin's strongest projects, backend experience, cloud work, education, or what an employer should review first.",
      references: ["Portfolio data", "Live GitHub projects", "CV-backed profile details"],
      suggestedQuestions: suggestedPrompts,
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

      const data = (await response.json()) as Partial<ChatbotReply>;

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.answer ?? "I could not answer that right now.",
          references: data.references ?? [],
          suggestedQuestions: data.suggestedQuestions ?? [],
        },
      ]);
    });
  }

  return (
    <div className="panel p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-300/15 bg-slate-800 text-slate-100">
          <Bot className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">
            Portfolio Assistant
          </p>
          <p className="text-sm text-slate-400">Answers based on CV and live project data</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {messages.map((message, index) => (
          <div key={`${message.role}-${index}`} className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            <div
              className={
                message.role === "assistant"
                  ? "text-sm leading-7 text-slate-200"
                  : "text-sm leading-7 font-medium text-white"
              }
            >
              {message.content}
            </div>

            {message.references?.length ? (
              <div className="mt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  References
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {message.references.map((reference) => (
                    <span
                      key={reference}
                      className="rounded-full border border-white/10 bg-slate-900 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {reference}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {message.role === "assistant" && message.suggestedQuestions?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {message.suggestedQuestions.slice(0, 3).map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => submitQuestion(prompt)}
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300 transition hover:border-slate-300/30 hover:text-white"
                  >
                    <ChevronRight className="h-3 w-3" />
                    {prompt}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        ))}

        {isPending ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-400">
            Thinking through the portfolio data...
          </div>
        ) : null}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {suggestedPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => submitQuestion(prompt)}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300 transition hover:border-slate-300/30 hover:text-white"
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
          placeholder="Ask about projects, backend experience, cloud work, or hiring fit"
          className="w-full rounded-full border border-white/10 bg-slate-950 px-5 py-3 text-sm text-white outline-none transition focus:border-slate-300/30"
        />
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
          aria-label="Send question"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
