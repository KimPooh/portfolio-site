import type { Metadata } from "next";
import { AppBuildCaseStudy } from "@/components/AppBuildCaseStudy";

const b = (kr: string, en: string) => ({ kr, en });

export const metadata: Metadata = {
  title: "StudyFlow AI 제작 과정 | 김지현 Portfolio",
  description: "학습 기록을 프로젝트와 면접 준비로 연결하는 StudyFlow AI의 문제 정의, 판단과 구현 과정을 정리했습니다."
};

export default function StudyFlowProcessPage() {
  return (
    <AppBuildCaseStudy
      theme="studyflow"
      eyebrow={b("STUDYFLOW AI · PRODUCT BUILD", "STUDYFLOW AI · PRODUCT BUILD")}
      title={b("StudyFlow AI 제작 과정", "Building StudyFlow AI")}
      summary={b("흩어진 학습 기록을 기술 키워드, 연결 프로젝트, 면접 질문과 포트폴리오 문장으로 다시 사용할 수 있게 만든 과정입니다.", "The process of turning scattered study notes into reusable technology keywords, linked projects, interview questions, and portfolio-ready sentences.")}
      demoHref="/studyflow-ai"
      repositoryHref="https://github.com/KimPooh/StudyFlow-AI"
      problem={b("수업, 과제, 프로젝트 메모가 서로 다른 곳에 쌓이면서 무엇을 배웠고 어디에 적용했는지 다시 설명하기 어려웠습니다. 제가 실제로 겪은 기록 관리 문제를 해결할 작은 제품이 필요했습니다.", "Class, assignment, and project notes accumulated in different places, making it hard to explain what I learned and where I applied it. I needed a small product to solve that record-management problem I had experienced myself.")}
      goal={b("사용자가 편하게 학습 내용을 적으면 기술 단서를 찾고, 관련 프로젝트와 연결하고, 다음에 답해볼 질문과 사용할 문장을 한 화면에서 확인하도록 만드는 것이 목표였습니다.", "The goal was to let users write learning notes naturally, identify technical clues, connect them to relevant projects, and see questions to answer next alongside useful sentences on one screen.")}
      steps={[
        { question: b("왜 일반 메모장이 아니라 별도 앱인가?", "Why a dedicated app instead of a regular notes app?"), reason: b("기록을 저장하는 것보다 다시 꺼내 포트폴리오와 면접 준비에 쓰는 과정이 더 불편했습니다.", "Retrieving notes for portfolio and interview preparation was harder than saving them."), decision: b("입력 이후 키워드·프로젝트·질문·문장으로 나누어 보여주는 전용 흐름을 만들었습니다.", "I created a dedicated flow that separates results into keywords, projects, questions, and sentences after input.") },
        { question: b("왜 API 없이도 작동하게 했나?", "Why make it work without an API?"), reason: b("외부 API 키나 인증 상태에 따라 핵심 기능을 확인하지 못하면 제품 시연이 불안정해집니다.", "A demo becomes unreliable if its key features depend on an external API key or authentication state."), decision: b("우선 로컬 분석 규칙으로 전체 흐름을 완성하고, 향후 AI API를 교체 가능한 확장 범위로 남겼습니다.", "I completed the full flow with local analysis rules first, leaving an AI API as a replaceable future extension.") },
        { question: b("왜 넓은 단어를 프로젝트로 단정하지 않나?", "Why not assign a broad term to a specific project?"), reason: b("API처럼 범위가 넓은 단어 하나만으로 특정 경험을 연결하면 실제보다 과장돼 보일 수 있습니다.", "Connecting a broad term such as API to a specific experience could overstate what was actually done."), decision: b("구체적인 기술과 맥락이 함께 있을 때만 프로젝트 후보를 제시하도록 판정 단계를 나눴습니다.", "Project candidates appear only when specific technologies and context occur together.") },
        { question: b("왜 한글 발음 입력을 지원하나?", "Why support Korean phonetic input?"), reason: b("실제 기록에서는 Python보다 파이썬, FastAPI보다 패스트API처럼 편한 표현을 사용합니다.", "Real notes often use convenient Korean phonetic expressions for technology names."), decision: b("영문 기술명, 한글 표기, 자주 쓰는 약어와 변형을 같은 키워드로 인식하도록 규칙을 확장했습니다.", "The rules recognize English names, Korean spellings, common abbreviations, and variants as the same keyword.") },
        { question: b("왜 처음 화면을 빈 입력으로 바꿨나?", "Why begin with an empty input?"), reason: b("예시 문장이 기본값으로 남으면 사용자가 자신의 기록이 분석된 것인지 혼동할 수 있었습니다.", "A default example can make users mistake it for an analysis of their own note."), decision: b("입력은 항상 빈 상태로 시작하고, 사용법은 짧은 튜토리얼과 선택 가능한 예시로 분리했습니다.", "Input now starts empty, with usage guidance separated into a short tutorial and optional examples.") }
      ]}
      flow={[b("실제 학습 기록 관리의 불편을 문제로 정의", "Defined the friction of managing real learning records"), b("입력·목적 선택·결과 확인으로 MVP 범위 설정", "Set the MVP scope around input, goal selection, and result review"), b("기술 키워드와 한글 표기 정규화 규칙 구현", "Implemented technology-keyword and Korean-spelling normalization rules"), b("프로젝트 연결과 과장 방지 판정 로직 분리", "Separated project matching from anti-overclaim decision rules"), b("무관한 질문·짧은 입력·혼합 입력 테스트", "Tested irrelevant questions, short inputs, and mixed-language input"), b("독립 실행 가능한 앱과 GitHub 저장소로 정리", "Packaged it as a standalone runnable app and GitHub repository")]}
      implemented={[b("한글과 영문 기술 키워드 인식", "Korean and English technology-keyword recognition"), b("학습 목적별 결과 구성", "Results organized by learning goal"), b("관련 프로젝트 후보 연결", "Relevant project candidate matching"), b("면접 질문과 포트폴리오 문장 생성", "Interview-question and portfolio-sentence generation"), b("무관한 입력과 불충분한 입력 분리", "Separation of irrelevant and insufficient input"), b("브라우저에서 바로 실행되는 독립 웹앱", "A standalone web app that runs directly in the browser")]}
      next={[b("OpenAI API를 서버리스 함수에 연결한 문맥 기반 답변", "Context-aware answers through an OpenAI API in a serverless function"), b("사용자별 학습 기록 데이터베이스", "A per-user learning-record database"), b("저장 문장 편집과 버전 관리", "Saved-sentence editing and version control"), b("반복 학습 주제와 성장 흐름 시각화", "Visualization of recurring topics and learning growth")]}
    />
  );
}
