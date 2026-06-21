"use client";

import { useState, useTransition } from "react";

const reasons = [
  "Job opportunity",
  "Internship",
  "Freelance project",
  "Collaboration",
  "Other",
];

const initialState = {
  name: "",
  email: "",
  company: "",
  reason: reasons[0],
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [result, setResult] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="panel p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setResult("");

        startTransition(async () => {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          });

          const data = (await response.json()) as { message?: string; error?: string };

          if (!response.ok) {
            setResult(data.error ?? "Something went wrong.");
            return;
          }

          setResult(data.message ?? "Message received.");
          setForm(initialState);
        });
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-[var(--foreground)]">
          <span>Name</span>
          <input
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="w-full rounded-[1.25rem] border border-[var(--line)] bg-[var(--background)] px-4 py-3 outline-none transition focus:border-[rgba(217,191,119,0.4)]"
            required
          />
        </label>
        <label className="space-y-2 text-sm text-[var(--foreground)]">
          <span>Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="w-full rounded-[1.25rem] border border-[var(--line)] bg-[var(--background)] px-4 py-3 outline-none transition focus:border-[rgba(217,191,119,0.4)]"
            required
          />
        </label>
        <label className="space-y-2 text-sm text-[var(--foreground)]">
          <span>Company</span>
          <input
            value={form.company}
            onChange={(event) => setForm({ ...form, company: event.target.value })}
            className="w-full rounded-[1.25rem] border border-[var(--line)] bg-[var(--background)] px-4 py-3 outline-none transition focus:border-[rgba(217,191,119,0.4)]"
          />
        </label>
        <label className="space-y-2 text-sm text-[var(--foreground)]">
          <span>Reason</span>
          <select
            value={form.reason}
            onChange={(event) => setForm({ ...form, reason: event.target.value })}
            className="w-full rounded-[1.25rem] border border-[var(--line)] bg-[var(--background)] px-4 py-3 outline-none transition focus:border-[rgba(217,191,119,0.4)]"
          >
            {reasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-4 block space-y-2 text-sm text-[var(--foreground)]">
        <span>Message</span>
        <textarea
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          rows={6}
          className="w-full rounded-[1.5rem] border border-[var(--line)] bg-[var(--background)] px-4 py-3 outline-none transition focus:border-[rgba(217,191,119,0.4)]"
          required
        />
      </label>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-7 text-[var(--muted)]">
          Version one validates and logs messages locally through the backend route.
        </p>
        <button
          type="submit"
          disabled={isPending}
          className="accent-button disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Sending..." : "Send message"}
        </button>
      </div>
      {result ? (
        <p className="mt-4 rounded-[1.25rem] border border-[rgba(217,191,119,0.22)] bg-[rgba(217,191,119,0.08)] px-4 py-3 text-sm text-[var(--foreground)]">
          {result}
        </p>
      ) : null}
    </form>
  );
}
