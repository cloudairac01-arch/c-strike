import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AMENITIES,
  DEADLINES,
  EVENT,
  PRIZES_GENERAL,
  INQUIRY_FORM_URL,
  ORGS,
  JOIN_ITEMS,
  PRIZES,
  PURPOSES,
  RESULTS_OVERVIEW,
  RULES,
  SCHEDULE,
} from "../data/content";
import { Card, SectionSub, SectionTitle, Eyebrow } from "../components/ui";
import { Badge } from "@/components/ui/badge";
import { RULEBOOK } from "../data/rules";
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
import IconPrize from "../components/icons/IconPrize";
import IconChat from "../components/icons/IconChat";
import IconCoffee from "../components/icons/IconCoffee";

const RULE_ICONS = [IconSwords, IconNetwork, IconChat];
const PURPOSE_ICONS = [IconTarget, IconTalent, IconBuilding];

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
            <div className="mb-6 flex items-center gap-4 sm:gap-5">
              <TitleIcon />
              <h1 className="font-display text-[clamp(30px,4.6vw,58px)] font-bold leading-[1.05] text-text-primary">
                <span className="glitch text-attack" data-text={EVENT.year}>{EVENT.year}</span>
                <br />
                <span className="glitch whitespace-nowrap" data-text={EVENT.name}>{EVENT.name}</span>
              </h1>
            </div>

            <div className="mb-7 flex flex-wrap gap-4 font-mono text-[18.5px] font-bold tracking-[0.06em]">
              <span className="text-attack">{EVENT.sloganWords[0]}</span>
              <span className="text-defend">{EVENT.sloganWords[1]}</span>
              <span className="text-text-primary">{EVENT.sloganWords[2]}</span>
            </div>

            <p className="mb-10 text-[21px] font-semibold leading-relaxed text-text-primary">{EVENT.slogan}</p>

            <div className="flex flex-wrap items-center gap-5">
              <Button asChild size="lg">
                <Link to="/apply" className="group">
                  지금 신청하기
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Button>
              <span className="font-mono text-[15.5px] text-text-secondary">{EVENT.schedule}</span>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6">
              {ORGS.map((g) => (
                <div key={g.role} className="grid grid-cols-[52px_1fr] items-start gap-x-3">
                  <span className="pt-[3px] font-mono text-[14px] font-bold tracking-[0.1em] text-defend">{g.role}</span>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    {g.items.map((o) => (
                      <span key={`${g.role}-${o.name}`} className="inline-flex items-center gap-2 text-[15.5px] font-semibold text-text-primary">
                        {o.logo && <img src={o.logo} alt="" className="h-[24px] w-auto" />}
                        {o.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

          <TerminalLog />
        </div>
      </header>

      {/* ---------- ABOUT ---------- */}
      <section id="about" className="scroll-mt-[68px] border-b border-border bg-bg-surface py-16 sm:py-20">
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
                    <span className="text-[18px] font-bold text-text-primary">{p.title}</span>
                  </div>
                  <p className="text-[15.5px] leading-[1.6] text-text-secondary">{p.desc}</p>
                </div>
              );
            })}
          </div>

          <h3 className="reveal mb-2 text-[22.5px] font-bold text-text-primary">어떻게 진행되나요?</h3>
          <p className="reveal mb-6 text-[16.5px] text-text-secondary">
            14:00 동아리 행사·특강, 16:30 등록과 오프닝, 저녁 식사 후 19:20부터 다음 날 09:20까지 14시간 동안 경진 대회가 진행됩니다.
          </p>
          <div className="mb-16">
            <MatchFlow />
          </div>

          <h3 className="reveal mb-5 text-[20.5px] font-bold text-text-primary">세부 운영 정보</h3>
          <div className="hud reveal stagger-children mb-16 flex flex-col divide-y divide-border rounded-[3px] border border-border bg-bg-card">
            {RULES.map((r, i) => {
              const Icon = RULE_ICONS[i];
              return (
                <div key={r.term} className="flex items-start gap-4 px-5 py-5 sm:items-center sm:gap-6 sm:px-7">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-defend/30 bg-defend/10 text-defend">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-1 sm:items-baseline sm:gap-8">
                    <span className="w-full shrink-0 text-[20px] font-extrabold text-defend sm:w-[132px]">
                      {r.term}
                    </span>
                    <p className="text-[16px] leading-relaxed text-text-secondary">{r.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hud hud-attack reveal rounded-[3px] border border-attack/25 bg-bg-card p-9 sm:p-14">
            <div className="mb-9 flex items-center gap-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center">
                <IconPrize className="h-16 w-16" />
              </span>
              <h3 className="font-display text-[33px] font-bold text-text-primary">시상</h3>
            </div>
            <h4 className="mb-3 font-mono text-[16px] font-bold uppercase tracking-wide text-defend">대학 부문</h4>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-[15.5px] py-4">구분</TableHead>
                  <TableHead className="text-[15.5px] py-4">상 · 부상</TableHead>
                  <TableHead className="text-right text-[15.5px] py-4 sm:text-left">수상 팀</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="reveal stagger-children">
                {PRIZES.map((p, i) => (
                  <TableRow key={`${p.tier}-${i}`} className={p.highlight ? "bg-gradient-to-r from-attack/10 to-transparent" : ""}>
                    <TableCell className={`font-display py-6 font-semibold ${p.highlight ? "text-[21px] text-attack" : "text-[19px] text-text-primary"}`}>
                      {p.tier}
                    </TableCell>
                    <TableCell className={`py-6 font-mono font-bold ${p.highlight ? "text-[27px] text-attack" : "text-[22px] text-text-primary"}`}>
                      {p.amount}
                      <span className="mt-1 block font-sans text-[15px] font-medium leading-5 text-text-secondary">{p.prize}</span>
                    </TableCell>
                    <TableCell className="py-6 text-right text-[17px] text-text-secondary sm:text-left">{p.winners}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <h4 className="mb-3 mt-12 font-mono text-[16px] font-bold uppercase tracking-wide text-defend">일반 부문</h4>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-[15.5px] py-4">구분</TableHead>
                  <TableHead className="text-[15.5px] py-4">상 · 부상</TableHead>
                  <TableHead className="text-right text-[15.5px] py-4 sm:text-left">수상 팀</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="reveal stagger-children">
                {PRIZES_GENERAL.map((p, i) => (
                  <TableRow key={`${p.tier}-${i}`} className={p.highlight ? "bg-gradient-to-r from-attack/10 to-transparent" : ""}>
                    <TableCell className={`font-display py-6 font-semibold ${p.highlight ? "text-[21px] text-attack" : "text-[19px] text-text-primary"}`}>
                      {p.tier}
                    </TableCell>
                    <TableCell className={`py-6 font-mono font-bold ${p.highlight ? "text-[27px] text-attack" : "text-[22px] text-text-primary"}`}>
                      {p.amount}
                      <span className="mt-1 block font-sans text-[15px] font-medium leading-5 text-text-secondary">{p.prize}</span>
                    </TableCell>
                    <TableCell className="py-6 text-right text-[17px] text-text-secondary sm:text-left">{p.winners}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="mt-6 border-t border-dashed border-border pt-4 text-[15px] text-text-muted">
              ※ 시상 규모와 부상은 주최·후원 기관의 사정에 따라 변경될 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- RESULTS ---------- */}
      <section id="results" className="scroll-mt-[68px] border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <Eyebrow>대회 개요</Eyebrow>
          <SectionTitle>일정과 프로그램</SectionTitle>
          <SectionSub>{EVENT.desc}입니다.</SectionSub>

          <div className="hud reveal mb-12 rounded-[3px] border border-border bg-bg-card p-6 sm:p-8">
            <div className="reveal stagger-children flex flex-col divide-y divide-border">
              {RESULTS_OVERVIEW.map((item) => (
                <div key={item.label} className="flex flex-col gap-2 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:gap-8">
                  <span className="w-full shrink-0 font-mono text-[16px] font-bold uppercase tracking-wide text-defend sm:w-[210px]">
                    {item.label}
                  </span>
                  <span className="text-[17.5px] font-semibold leading-relaxed text-text-primary">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <h3 className="reveal mb-5 text-[20.5px] font-bold text-text-primary">일정</h3>
          <div className="hud reveal mb-12 rounded-[3px] border border-border bg-bg-card p-6 sm:p-8">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[18%] text-center">날짜</TableHead>
                  <TableHead className="w-[32%] text-center">시간</TableHead>
                  <TableHead className="text-center">내용</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="reveal stagger-children">
                {SCHEDULE.map((row, i) => (
                  <TableRow
                    key={`${row.time}-${i}`}
                    className={row.highlight ? "bg-gradient-to-r from-attack/10 to-transparent" : ""}
                  >
                    <TableCell className={`text-center font-mono font-bold ${row.highlight ? "text-[18.5px] text-attack" : "text-text-secondary"}`}>
                      {row.date}
                    </TableCell>
                    <TableCell className={`text-center font-mono ${row.highlight ? "font-bold text-attack" : "text-text-secondary"}`}>{row.time}</TableCell>
                    <TableCell className={`text-center font-semibold ${row.highlight ? "text-attack" : "text-text-primary"}`}>
                      {row.title}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="border-t border-dashed border-border pt-4 text-[15px] text-text-muted">
              ※ 프로그램과 시간은 운영 상황에 따라 변경될 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <Card>
              <div className="mb-[18px] flex h-10 w-10 items-center justify-center rounded-[3px] border border-attack/30 bg-attack/10 text-attack">
                <IconCoffee className="h-5 w-5" />
              </div>
              <h3 className="mb-2.5 text-[20.5px] font-bold text-text-primary">참가자 지원</h3>
              <ul className="flex flex-col gap-1.5">
                {AMENITIES.map((a) => (
                  <li key={a} className="flex gap-1.5 text-[17px] text-text-primary">
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
      <section id="join" className="scroll-mt-[68px] border-b border-border bg-bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <Eyebrow>참가 안내</Eyebrow>
          <SectionTitle>참가 신청 전 확인할 것</SectionTitle>
          <SectionSub>팀당 4인 이내로 팀을 구성한 뒤 팀장이 대표로 신청합니다.</SectionSub>


          <div className="hud reveal rounded-[3px] border border-border bg-bg-card p-6 sm:p-8">
            <div className="reveal stagger-children mb-7 flex flex-col divide-y divide-border">
              <div className="flex flex-col gap-2 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:gap-8">
                <span className="w-full shrink-0 font-mono text-[16px] font-bold uppercase tracking-wide text-defend sm:w-[210px]">
                  접수 일정
                </span>
                <span className="flex flex-col gap-1 text-[17.5px] font-semibold leading-relaxed text-text-primary">
                  {DEADLINES.map((d) => (
                    <span key={d.division}>
                      {d.division}: <span className="text-attack">{d.close}</span> 접수 마감 →{" "}
                      <span className="text-defend">{d.notify}</span> 확정 통보
                    </span>
                  ))}
                </span>
              </div>
              {JOIN_ITEMS.map((item) => (
                <div key={item.label} className="flex flex-col gap-2 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:gap-8">
                  <span className="w-full shrink-0 font-mono text-[16px] font-bold uppercase tracking-wide text-defend sm:w-[210px]">
                    {item.label}
                  </span>
                  {item.pending ? (
                    <Badge variant="muted" className="w-fit text-text-secondary">
                      {item.value}
                    </Badge>
                  ) : (
                    <span className="whitespace-pre-line text-[17.5px] font-semibold leading-relaxed text-text-primary">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
            <Separator className="mb-6" />
            <div className="flex flex-wrap items-center justify-between gap-5">
              <p className="max-w-[640px] text-[16.5px] text-text-secondary">
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

      {/* ---------- RULES ---------- */}
      <section id="rules" className="scroll-mt-[68px] border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <Eyebrow>대회 규정</Eyebrow>
          <SectionTitle>대회 규정</SectionTitle>
          <p className="reveal mb-12 text-[19.5px] leading-relaxed text-text-secondary">
            참가 신청과 동시에 대회 규정에 동의한 것으로 간주합니다. 참가 자격, 경기 방식, AI 도구 활용, 부정행위와 제재 등 전체 조항은 규정집에서 확인해 주세요.
          </p>

          <div className="hud reveal rounded-[3px] border border-border bg-bg-card p-7 sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div>
                <h3 className="mb-2 text-[20.5px] font-bold text-text-primary">{RULEBOOK.title}</h3>
                <p className="max-w-[640px] text-[16.5px] text-text-secondary">
                  총 {RULEBOOK.chapters.length}장 {RULEBOOK.chapters.reduce((n, c) => n + c.articles.length, 0)}조 · 시행 {RULEBOOK.effective}
                </p>
              </div>
              <Button asChild size="lg" className="group">
                <Link to="/rules">
                  대회 규정집 보러가기
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
                <h3 className="mb-2 text-[20.5px] font-bold text-text-primary">문의 남기기</h3>
                <p className="max-w-[640px] text-[16.5px] text-text-secondary">
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
