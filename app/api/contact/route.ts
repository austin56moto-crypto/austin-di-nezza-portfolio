import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  reason: z.string().min(2),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please complete all required fields with valid information." },
      { status: 400 },
    );
  }

  console.log("Portfolio contact form submission", parsed.data);

  return NextResponse.json({
    message: "Message received. Austin can follow up through the provided contact details.",
  });
}
