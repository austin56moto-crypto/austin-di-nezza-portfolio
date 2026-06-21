import { NextResponse } from "next/server";

import { getPortfolioProjects } from "@/lib/github";

export const dynamic = "force-dynamic";

export async function GET() {
  const projects = await getPortfolioProjects();
  return NextResponse.json(projects);
}
