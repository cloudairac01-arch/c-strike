import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AMENITIES,
  EVENT,
  INQUIRY_FORM_URL,
  JOIN_ITEMS,
  PRIZES,
  PURPOSES,
  RESULTS_OVERVIEW,
  RULES,
  SCHEDULE,
  TARGETS,
} from "../data/content";
import { Card, SectionSub, SectionTitle, Eyebrow } from "../components/ui";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import MatchFlow from "../components/MatchFlow";
import HeroVisual from "../components/HeroVisual";
import TerminalLog from "../components/TerminalLog";
import TitleIcon from "../components/TitleIcon";
import IconTarget from "../components/icons/IconTarget";
import IconTalent from "../components/icons/IconTalent";
import IconBuilding from "../components/icons/IconBuilding";
import IconSwords from "../components/icons/IconSwords";
import IconNetwork from "../components/icons/IconNetwork";
import IconTeam from "../components/icons/IconTeam";
import IconWeb from "../components/icons/IconWeb";
import IconLock from "../components/icons/IconLock";
import IconEtc from "../components/icons/IconEtc";
import IconPrize from "../components/icons/IconPrize";
import IconPodium from "../components/icons/IconPodium";
import IconChat from "../components/icons/IconChat";
import IconCoffee from "../components/icons/IconCoffee";

const RULE_ICONS = [IconSwords, IconNetwork, IconTeam, IconPodium, IconChat];
const PURPOSE_ICONS = [IconTarget, IconTalent, IconBuilding];
const TARGET_ICONS = [IconWeb, IconLock, IconEtc];

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }, [hash]);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <header className="scanline relative overflow-hidden border-b border-border pb-16 pt-[128px] sm:pb-24 sm:pt-[160px]">
        <div
          className="pointer-events-none absolute -left-32 -top-40 h-[420px] w-[420px] rounded-full opacity-[0.16] blur-[110px]"
          style={{ background: "var(--color-attack)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 top-0 h-[380px] w-[380px] rounded-full opacity-[0.14] blur-[110px]"
          style={{ background: "var(--color-defend)" }}
          aria-hidden="true"
        />
        <HeroVisual />
        <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 gap-14 px-6 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div className="hero-stagger">
            <p className="mb-5 font-mono text-[14px] font-semibold uppercase tracking-[0.16em] text-defend">
              {EVENT.eyebrow}
            </p>

            <div className="mb-6 flex items-center gap-4 sm:gap-5">
              <TitleIcon />
              <h1 className="font-display text-[clamp(30px,4.6vw,58px)] font-bold leading-[1.05] text-text-primary">
                <span className="glitch whitespace-nowrap" data-text={EVENT.name}>{EVENT.name}</span>
                <br />
                <span className="glitch text-attack" data-text={EVENT.year}>{EVENT.year}</span>
              </h1>
            </div>

            <div className="mb-7 flex flex-wrap gap-4 font-mono text-[17.5px] font-bold tracking-[0.06em]">
              <span className="text-attack">{EVENT.slogan[0]}</span>
              <span className="text-defend">{EVENT.slogan[1]}</span>
              <span className="text-text-primary">{EVENT.slogan[2]}</span>
            </div>

            <p className="mb-10 max-w-[480px] text-[19px] leading-relaxed text-text-secondary">{EVENT.desc}</p>

            <div className="flex flex-wrap items-center gap-5">
              <Button asChild size="lg">
                <Link to="/apply" className="group">
                  지금 신청하기
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Button>
              <span className="font-mono text-[14.5px] text-text-secondary">{EVENT.schedule}</span>
            </div>
          </div>

          <TerminalLog />
        </div>
      </header>

      {/* ---------- ABOUT ---------- */}
      <section id="about" className="scroll-mt-[68px] border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <Eyebrow>대회 소개</Eyebrow>
          <SectionTitle>해커톤이 만드는 것</SectionTitle>
          <SectionSub>
            일반적인 CTF 문제풀이 방식을 넘어선 <b className="text-text-primary">실전형 공격·방어(Attack-Defense)</b> 대회
          </SectionSub>

          <div className="reveal stagger-children mb-16 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            {PURPOSES.map((p, i) => {
              const Icon = PURPOSE_ICONS[i];
              return (
                <div key={p.title} className="hud flex flex-col gap-3 rounded-[3px] border border-border bg-bg-card px-5 py-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-defend/30 bg-defend/10 text-defend">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[17px] font-bold text-text-primary">{p.title}</span>
                  </div>
                  <p className="text-[14.5px] leading-[1.6] text-text-secondary">{p.desc}</p>
                </div>
              );
            })}
          </div>

          <h3 className="reveal mb-2 text-[21.5px] font-bold text-text-primary">어떻게 진행되나요?</h3>
          <p className="reveal mb-6 text-[15.5px] text-text-secondary">
            14:00 동아리 행사·특강, 16:30 등록과 오프닝, 저녁 식사 후 19:20부터 다음 날 09:20까지 14시간 동안 경진 대회가 진행됩니다.
          </p>
          <div className="mb-16">
            <MatchFlow />
          </div>

          <h3 className="reveal mb-5 text-[19.5px] font-bold text-text-primary">세부 운영 정보</h3>
          <div className="hud reveal stagger-children mb-16 flex flex-col divide-y divide-border rounded-[3px] border border-border bg-bg-card">
            {RULES.map((r, i) => {
              const Icon = RULE_ICONS[i];
              return (
                <div key={r.term} className="flex items-start gap-4 px-5 py-5 sm:items-center sm:gap-6 sm:px-7">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-defend/30 bg-defend/10 text-defend">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-1 sm:items-baseline sm:gap-8">
                    <span className="w-full shrink-0 text-[19px] font-extrabold text-defend sm:w-[132px]">
                      {r.term}
                    </span>
                    <p className="text-[15px] leading-relaxed text-text-secondary">{r.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="reveal mb-5 text-[19.5px] font-bold text-text-primary">공략해야 할 취약점</h3>
          <div className="grid grid-cols-1 gap-10">
            <div className="reveal stagger-children flex flex-col gap-3">
              {TARGETS.map((t, i) => {
                const Icon = TARGET_ICONS[i];
                return (
                  <div key={`${t.tag}-${i}`} className="flex flex-1 items-center gap-3.5 rounded-[3px] border border-border bg-bg-card px-5 py-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-attack/30 bg-attack/10 text-attack">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <div className="flex flex-1 flex-wrap items-baseline gap-x-3 gap-y-0.5">
                      <span className="font-mono text-[13px] font-bold text-attack">{t.tag}</span>
                      <p className="text-[15px] leading-relaxed text-text-primary">{t.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hud hud-attack reveal mt-16 rounded-[3px] border border-attack/25 bg-bg-card p-9 sm:p-14">
            <div className="mb-9 flex items-center gap-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center">
                <IconPrize className="h-16 w-16" />
              </span>
              <h3 className="font-display text-[32px] font-bold text-text-primary">시상 내역</h3>
            </div>
            <h4 className="mb-3 font-mono text-[13px] font-bold uppercase tracking-wide text-defend">대학 부문</h4>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-[13px] py-4">구분</TableHead>
                  <TableHead className="text-[13px] py-4">상 · 상품</TableHead>
                  <TableHead className="text-right text-[13px] py-4 sm:text-left">수상 팀</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="reveal stagger-children">
                {PRIZES.map((p, i) => (
                  <TableRow key={`${p.tier}-${i}`} className={p.highlight ? "bg-gradient-to-r from-attack/10 to-transparent" : ""}>
                    <TableCell className={`font-display py-6 font-semibold ${p.highlight ? "text-[20px] text-attack" : "text-[18px] text-text-primary"}`}>
                      {p.tier}
                    </TableCell>
                    <TableCell className={`py-6 font-mono font-bold ${p.highlight ? "text-[26px] text-attack" : "text-[21px] text-text-primary"}`}>
                      {p.amount}
                      <span className="mt-1 block font-sans text-[14px] font-medium text-text-secondary">{p.prize}</span>
                    </TableCell>
                    <TableCell className="py-6 text-right text-[16px] text-text-secondary sm:text-left">{p.winners}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="mt-6 border-t border-dashed border-border pt-4 text-[14px] text-text-muted">
              ※ 시상 규모와 부상은 주최·후원 기관의 사정에 따라 변경될 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- RESULTS ---------- */}
      <section id="results" className="scroll-mt-[68px] border-b border-border bg-bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <Eyebrow>대회 개요</Eyebrow>
          <SectionTitle>일정과 프로그램</SectionTitle>
          <div className="mb-12" />

          <div className="reveal stagger-children mb-12 grid grid-cols-1 overflow-hidden rounded-[3px] border border-border sm:grid-cols-2 lg:grid-cols-4">
            {RESULTS_OVERVIEW.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col gap-2 border-border bg-bg-card p-5 ${
                  i !== RESULTS_OVERVIEW.length - 1 ? "sm:border-r" : ""
                } border-b sm:border-b-0`}
              >
                <span className="font-mono text-[12.5px] font-bold uppercase tracking-wide text-defend">{item.label}</span>
                <span className="text-[16.5px] font-medium leading-snug text-text-primary">{item.value}</span>
              </div>
            ))}
          </div>

          <h3 className="reveal mb-5 text-[19.5px] font-bold text-text-primary">일정</h3>
          <div className="hud reveal mb-12 rounded-[3px] border border-border bg-bg-card p-6 sm:p-8">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[84px] px-0">날짜</TableHead>
                  <TableHead>시간</TableHead>
                  <TableHead className="text-right sm:text-left">내용</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="reveal stagger-children">
                {SCHEDULE.map((row, i) => (
                  <TableRow
                    key={`${row.time}-${i}`}
                    className={row.highlight ? "bg-gradient-to-r from-attack/10 to-transparent" : ""}
                  >
                    <TableCell className={`px-0 font-mono font-bold ${row.highlight ? "text-[17.5px] text-attack" : "text-text-secondary"}`}>
                      {row.date}
                    </TableCell>
                    <TableCell className={`font-mono ${row.highlight ? "font-bold text-attack" : "text-text-secondary"}`}>{row.time}</TableCell>
                    <TableCell className={`text-right font-semibold sm:text-left ${row.highlight ? "text-attack" : "text-text-primary"}`}>
                      {row.title}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="mt-[18px] border-t border-dashed border-border pt-4 text-[14px] text-text-muted">
              ※ 프로그램과 시간은 운영 상황에 따라 변경될 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <Card>
              <div className="mb-[18px] flex h-10 w-10 items-center justify-center rounded-[3px] border border-attack/30 bg-attack/10 text-attack">
                <IconCoffee className="h-5 w-5" />
              </div>
              <h3 className="mb-2.5 text-[19.5px] font-bold text-text-primary">참가자 지원</h3>
              <ul className="flex flex-col gap-1.5">
                {AMENITIES.map((a) => (
                  <li key={a} className="flex gap-1.5 text-[16px] text-text-primary">
                    <span className="font-bold text-defend">›</span>
                    {a}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ---------- JOIN ---------- */}
      <section id="join" className="scroll-mt-[68px] border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <Eyebrow>참가 안내</Eyebrow>
          <SectionTitle>참가 신청 전 확인할 것</SectionTitle>
          <SectionSub>신청 기한은 확정되는 대로 공개합니다.</SectionSub>

          <div className="hud reveal rounded-[3px] border border-border bg-bg-card p-6 sm:p-8">
            <div className="reveal stagger-children mb-7 flex flex-col divide-y divide-border">
              {JOIN_ITEMS.map((item) => (
                <div key={item.label} className="flex flex-col gap-2 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:gap-8">
                  <span className="w-full shrink-0 font-mono text-[13px] font-bold uppercase tracking-wide text-defend sm:w-[168px]">
                    {item.label}
                  </span>
                  {item.pending ? (
                    <Badge variant="muted" className="w-fit text-text-secondary">
                      {item.value}
                    </Badge>
                  ) : (
                    <span className="whitespace-pre-line text-[16.5px] font-semibold leading-relaxed text-text-primary">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
            <Separator className="mb-6" />
            <div className="flex flex-wrap items-center justify-between gap-5">
              <p className="max-w-[640px] text-[15.5px] text-text-secondary">
                신청은 <b className="text-text-primary">구글 폼</b>으로 팀 단위 접수합니다. 팀명·부문·팀원 정보를 준비해주세요.
              </p>
              <Button asChild size="lg">
                <Link to="/apply" className="group">
                  지금 신청하기
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="scroll-mt-[68px] bg-bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <Eyebrow>문의하기</Eyebrow>
          <SectionTitle>문의하기</SectionTitle>
          <SectionSub>참가 자격, 팀 구성, 대회 운영 관련 문의는 구글 폼을 작성해주세요.</SectionSub>

          <div className="hud reveal rounded-[3px] border border-border bg-bg-card p-7 sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div>
                <h3 className="mb-2 text-[19.5px] font-bold text-text-primary">문의 남기기</h3>
                <p className="max-w-[640px] text-[15.5px] text-text-secondary">
                  구글 폼에 문의 내용을 남겨주시면 운영진이 확인 후 답변드립니다.
                </p>
              </div>
              <Button asChild size="lg">
                <a href={INQUIRY_FORM_URL} target="_blank" rel="noreferrer" className="group">
                  구글 폼으로 문의하기
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
