import { learningLogCategories, learningNotes } from "@/data/learning";
import { JourneyContent } from "@/components/JourneyContent";

export const metadata = {
  title: "김지현 Journey | AI/Data Learning Log",
  description: "김지현의 AI/Data 학습 과정과 프로젝트 적용 기록입니다."
};

export default function JourneyPage() {
  return <JourneyContent categories={learningLogCategories} notes={learningNotes} />;
}
