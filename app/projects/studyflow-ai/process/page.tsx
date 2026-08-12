import type { Metadata } from "next";
import { AppBuildCaseStudy } from "@/components/AppBuildCaseStudy";

export const metadata: Metadata = {
  title: "StudyFlow AI 제작 과정 | 김지현 Portfolio",
  description: "학습 기록을 프로젝트와 면접 준비로 연결하는 StudyFlow AI의 문제 정의, 판단과 구현 과정을 정리했습니다."
};

export default function StudyFlowProcessPage() {
  return (
    <AppBuildCaseStudy
      theme="studyflow"
      eyebrow="STUDYFLOW AI · PRODUCT BUILD"
      title="StudyFlow AI 제작 과정"
      summary="흩어진 학습 기록을 기술 키워드, 연결 프로젝트, 면접 질문과 포트폴리오 문장으로 다시 사용할 수 있게 만든 과정입니다."
      demoHref="/studyflow-ai"
      repositoryHref="https://github.com/KimPooh/StudyFlow-AI"
      problem="수업, 과제, 프로젝트 메모가 서로 다른 곳에 쌓이면서 무엇을 배웠고 어디에 적용했는지 다시 설명하기 어려웠습니다. 제가 실제로 겪은 기록 관리 문제를 해결할 작은 제품이 필요했습니다."
      goal="사용자가 편하게 학습 내용을 적으면 기술 단서를 찾고, 관련 프로젝트와 연결하고, 다음에 답해볼 질문과 사용할 문장을 한 화면에서 확인하도록 만드는 것이 목표였습니다."
      steps={[
        { question: "왜 일반 메모장이 아니라 별도 앱인가?", reason: "기록을 저장하는 것보다 다시 꺼내 포트폴리오와 면접 준비에 쓰는 과정이 더 불편했습니다.", decision: "입력 이후 키워드·프로젝트·질문·문장으로 나누어 보여주는 전용 흐름을 만들었습니다." },
        { question: "왜 API 없이도 작동하게 했나?", reason: "외부 API 키나 인증 상태에 따라 핵심 기능을 확인하지 못하면 제품 시연이 불안정해집니다.", decision: "우선 로컬 분석 규칙으로 전체 흐름을 완성하고, 향후 AI API를 교체 가능한 확장 범위로 남겼습니다." },
        { question: "왜 넓은 단어를 프로젝트로 단정하지 않나?", reason: "API처럼 범위가 넓은 단어 하나만으로 특정 경험을 연결하면 실제보다 과장돼 보일 수 있습니다.", decision: "구체적인 기술과 맥락이 함께 있을 때만 프로젝트 후보를 제시하도록 판정 단계를 나눴습니다." },
        { question: "왜 한글 발음 입력을 지원하나?", reason: "실제 기록에서는 Python보다 파이썬, FastAPI보다 패스트API처럼 편한 표현을 사용합니다.", decision: "영문 기술명, 한글 표기, 자주 쓰는 약어와 변형을 같은 키워드로 인식하도록 규칙을 확장했습니다." },
        { question: "왜 처음 화면을 빈 입력으로 바꿨나?", reason: "예시 문장이 기본값으로 남으면 사용자가 자신의 기록이 분석된 것인지 혼동할 수 있었습니다.", decision: "입력은 항상 빈 상태로 시작하고, 사용법은 짧은 튜토리얼과 선택 가능한 예시로 분리했습니다." }
      ]}
      flow={["실제 학습 기록 관리의 불편을 문제로 정의", "입력·목적 선택·결과 확인으로 MVP 범위 설정", "기술 키워드와 한글 표기 정규화 규칙 구현", "프로젝트 연결과 과장 방지 판정 로직 분리", "무관한 질문·짧은 입력·혼합 입력 테스트", "독립 실행 가능한 앱과 GitHub 저장소로 정리"]}
      implemented={["한글과 영문 기술 키워드 인식", "학습 목적별 결과 구성", "관련 프로젝트 후보 연결", "면접 질문과 포트폴리오 문장 생성", "무관한 입력과 불충분한 입력 분리", "브라우저에서 바로 실행되는 독립 웹앱"]}
      next={["OpenAI API를 서버리스 함수에 연결한 문맥 기반 답변", "사용자별 학습 기록 데이터베이스", "저장 문장 편집과 버전 관리", "반복 학습 주제와 성장 흐름 시각화"]}
    />
  );
}
