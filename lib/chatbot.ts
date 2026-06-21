import knowledgeBase from "@/data/austin-knowledge-base.json";

type FaqEntry = {
  keywords: string[];
  answer: string;
};

const faqEntries = knowledgeBase.faq as FaqEntry[];

export function answerPortfolioQuestion(question: string) {
  const normalized = question.toLowerCase();

  for (const entry of faqEntries) {
    if (entry.keywords.some((keyword) => normalized.includes(keyword))) {
      return entry.answer;
    }
  }

  if (normalized.includes("contact")) {
    return knowledgeBase.contact.join(" | ");
  }

  return [
    "Austin focuses on practical AI, automation, dashboards, and backend-oriented projects.",
    "Try asking about backend experience, cloud projects, what he is studying, or which portfolio project best shows AI work.",
  ].join(" ");
}
