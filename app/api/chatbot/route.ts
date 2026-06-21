import { NextResponse } from "next/server";
import { z } from "zod";

import { answerPortfolioQuestion } from "@/lib/chatbot";

const chatbotSchema = z.object({
  question: z.string().min(2),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = chatbotSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ answer: "Please send a fuller question." }, { status: 400 });
  }

  return NextResponse.json({
    answer: answerPortfolioQuestion(parsed.data.question),
  });
}
