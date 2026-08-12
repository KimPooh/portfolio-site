import { NextResponse } from "next/server";
import { getPortfolioAnswer, type PortfolioLanguage } from "@/lib/portfolioChat";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { language?: unknown; question?: unknown; history?: unknown };
    const question = typeof body.question === "string" ? body.question : "";
    const language: PortfolioLanguage = body.language === "en" ? "en" : "kr";
    const history = Array.isArray(body.history)
      ? body.history
          .slice(-6)
          .map((item) => (typeof item === "object" && item && "text" in item && typeof item.text === "string" ? item.text : ""))
          .filter(Boolean)
          .join(" ")
      : "";

    return NextResponse.json({
      answer: getPortfolioAnswer(question, language, history),
      engine: "serverless-local"
    });
  } catch {
    return NextResponse.json(
      {
        answer: "질문을 처리하는 중 문제가 생겼습니다. 잠시 후 다시 입력해주세요.",
        engine: "serverless-local"
      },
      { status: 400 }
    );
  }
}
