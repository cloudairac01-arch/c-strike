import SubpageHero from "../components/SubpageHero";
import { GOOGLE_FORM_URL } from "../data/content";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CHECKLIST = ["팀명", "부문 (대학부 / 일반부)", "팀장 이름 · 연락처 · 이메일", "팀원 이름 (팀장 포함 4인 이내)", "팀원별 소속 (학교 / 기관)", "팀원별 티셔츠 사이즈"];

export default function Apply() {
  const formReady = GOOGLE_FORM_URL.length > 0;

  return (
    <>
      <SubpageHero
        title="참가 신청"
        desc="2026 충북 정보보호 해커톤 참가 신청서입니다. 참가자가 직접 팀당 4인 이내로 팀을 구성해 팀 단위로 신청합니다. 접수 마감: 대학부 11.8(일) · 일반부 11.13(금)"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[560px] px-6 sm:px-8">
          <div className="hud rounded-[3px] border border-border bg-bg-card p-7 sm:p-9">
            <h3 className="mb-3 text-[22.5px] font-bold text-text-primary">신청은 구글 폼으로 팀 단위 접수합니다</h3>
            <p className="mb-6 text-[17px] leading-relaxed text-text-secondary">
              팀장 1명이 대표로 신청하며, 개인정보는 저희 사이트가 아닌 구글 폼을 통해 안전하게 수집됩니다. 아래 정보를
              미리 준비해두시면 빠르게 작성하실 수 있어요.
            </p>

            <ul className="mb-7 flex flex-wrap gap-2">
              {CHECKLIST.map((item) => (
                <li key={item}>
                  <Badge variant="muted" className="px-3 py-1.5 text-[15px] normal-case text-text-secondary">
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>

            {formReady ? (
              <Button asChild size="lg" className="group w-full">
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
                  구글 폼으로 신청하기
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </Button>
            ) : (
              <Alert className="text-center">
                <AlertTitle className="text-text-secondary">신청 폼 준비 중입니다</AlertTitle>
                <AlertDescription className="text-[15px] text-text-muted">
                  모집이 시작되면 이 자리에 구글 폼 링크가 열립니다.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
