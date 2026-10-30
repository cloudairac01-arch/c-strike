export const EVENT = {
  name: "충북 정보보호 해커톤",
  year: "2026",
  title: "2026 충북 정보보호 해커톤",
  sloganWords: ["SOLVE.", "COMPETE.", "SURVIVE."],
  slogan: "지역의 미래를 지키는 실전형 사이버 보안 도전",
  org: "2026 충북 정보보호 해커톤",
  eyebrow: "청주대 앵커사업단, 한국인터넷진흥원, 충청북도 공동 주최",
  desc: "충북 소재 대학생과 지역 거주자·재직자가 팀을 이뤄 실력을 겨루는 정보보호 해커톤",
  descLines: ["충북 소재 대학생과 지역 거주자·재직자가 팀을 이뤄 실력을 겨루는", "정보보호 해커톤"],
  schedule: "2026.11.20(금) 16:30 – 11.21(토) 10:30 · 제이원호텔(오창)",
};

// 주최·주관·후원·운영 기관. logo는 public/logos/ 의 투명 배경 PNG 경로 — 파일이 없으면 기관명만 표시됩니다.
export const ORGS: { role: string; items: { name: string; logo?: string; logos?: string[]; tall?: boolean }[] }[] = [
  {
    role: "주최",
    items: [
      { name: "청주대 앵커사업단", logo: `${import.meta.env.BASE_URL}logos/cju-anchor-mark.png` },
      { name: "한국인터넷진흥원", logo: `${import.meta.env.BASE_URL}logos/kisa.png`, tall: true },
      { name: "충청북도", logo: `${import.meta.env.BASE_URL}logos/chungbuk.png` },
    ],
  },
  {
    role: "주관",
    items: [
      { name: "청주대 · 충북대 · 서원대 앵커사업단" },
      { name: "충북과학기술혁신원", logo: `${import.meta.env.BASE_URL}logos/cbist.png` },
      { name: "충북정보보호지원센터", logo: `${import.meta.env.BASE_URL}logos/kisa-cb-mark.png` },
    ],
  },
  { role: "후원", items: [{ name: "교육부", logo: `${import.meta.env.BASE_URL}logos/moe.png` }, { name: "충북앵커센터", logo: `${import.meta.env.BASE_URL}logos/cb-anchor-center.png` }] },
  { role: "운영", items: [{ name: "클라우드에어 주식회사", logo: `${import.meta.env.BASE_URL}logos/cloudair-mark.png` }] },
];

// 참가 신청 구글 폼 URL. 실제 폼이 만들어지면 이 값만 교체하면 사이트 전체에 반영됩니다.
export const GOOGLE_FORM_URL = "https://forms.gle/FHGsvbCSgmB5DXE96";

// 문의 접수 구글 폼 URL.
export const INQUIRY_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf8qc05_IUbofLqs08fH6x1ZPmf6UorJpwYxjsWrn2UCoSj4Q/viewform";

// 대회 타임라인 양 끝 — 등록·오프닝으로 시작해 시상식으로 끝납니다.
// 그 사이 전체 구간(19:00 ~ 익일 09:00, 규칙 안내 포함 14시간)은 경진 대회 구간입니다.
export const MATCH_FLOW = {
  before: { title: "등록 & 오프닝" },
  after: { title: "시상식 & 마무리" },
};

// 경진 대회 경과 시간 — 타임라인 위 시간(h) 눈금으로 표시. 총 14시간.
export const VULN_RELEASE_HOURS = [0, 4, 8, 12, 14];

export const PURPOSES = [
  { title: "실전 검증", desc: "실전형 공격·방어 역량 검증 · 밤샘 공방전 · 팀 협업" },
  { title: "인재 발굴", desc: "충북 지역 실무형 보안 인재 발굴 · 기업·기관 연계" },
  { title: "현장 교류", desc: "지·산·학·관 공동 운영 · 지역 보안 현직자 네트워킹" },
];

export const RULES = [
  { term: "방식", value: "Attack & Defense" },
  { term: "네트워크", value: "OpenVPN 전용 내부망 · 참가자망/운영망 분리" },
  { term: "소통 채널", value: "Discord · 티켓 시스템 연동" },
];

// 공략 대상 취약점 — 문제 출제 방향 확정 후 실제 항목으로 교체 (예: WEB / PWNABLE / 기타)
export const TARGETS = [
  { tag: "TBD", desc: "공략 대상 취약점은 문제 출제 방향 확정 후 공개됩니다" },
  { tag: "TBD", desc: "공략 대상 취약점은 문제 출제 방향 확정 후 공개됩니다" },
  { tag: "TBD", desc: "공략 대상 취약점은 문제 출제 방향 확정 후 공개됩니다" },
];

export const TARGETS_NOTE = {
  lead: "팀별 문제는 다르게, 난이도는 동일하게",
  rest: " — 공정성을 확보합니다.",
};

// 시상 내역 — amount: 상 이름, prize: 상품(확정 후 교체)
export const PRIZES = [
  { tier: "대상", amount: "과학기술정보통신부 장관상", prize: "상장 · 30만원 상당 상품권", winners: "1팀", highlight: true },
  { tier: "최우수상", amount: "충청북도 도지사상", prize: "상장 · 20만원 상당 상품권", winners: "1팀", highlight: false },
  { tier: "최우수상", amount: "한국인터넷진흥원 원장상", prize: "상장 · 10만원 상당 상품권", winners: "1팀", highlight: false },
  { tier: "우수상", amount: "충북과학기술혁신원 원장상", prize: "상장", winners: "1팀", highlight: false },
];

// 시상 내역 — 일반 부문
export const PRIZES_GENERAL = [
  { tier: "대상", amount: "충북과학기술혁신원장상", prize: "상패", winners: "1팀", highlight: true },
  { tier: "최우수상", amount: "충북과학기술혁신원장상", prize: "상패", winners: "1팀", highlight: false },
];

export const RESULTS_OVERVIEW = [
  { label: "일시", value: "2026.11.20(금) 16:30 – 11.21(토) 10:30" },
  { label: "장소", value: "제이원호텔(오창) 제이드홀 2층" },
];

export const SCHEDULE = [
  { date: "11.20(금)", time: "16:30 – 17:30", title: "등록", place: "제이드홀 2층", highlight: false },
  { date: "", time: "17:30 – 18:00", title: "오프닝", place: "제이드홀 2층", highlight: false },
  { date: "", time: "18:00 – 19:00", title: "석식", place: "제이원호텔", highlight: false },
  { date: "", time: "19:00 – 09:00", title: "경진 대회 (14시간)", place: "제이드홀 2층", highlight: true },
  { date: "11.21(토)", time: "09:00 – 10:00", title: "조식", place: "제이원호텔", highlight: false },
  { date: "", time: "10:00 – 10:30", title: "시상식 및 마무리", place: "제이드홀 2층", highlight: false },
];

export const AMENITIES = [
  "11.20(금) 석식 · 11.21(토) 조식 제공",
  "대회 중 간식 · 야식 제공",
  "참가자 전원 기념티 지급",
  "행사장 제이원호텔(오창) 제이드홀 2층",
];

export const JOIN_ITEMS = [
  { label: "참가 자격 · 팀 구성", value: "참가자가 직접 팀당 4인 이내로 팀을 구성해 팀 단위로 신청\n대학부: 충북 소재 대학 재학생·대학원생 / 일반부: 충북 지역 기업·공공기관 재직자", pending: false },
  { label: "참가비", value: "무료", pending: false },
  { label: "접수 방법", value: "구글 폼 작성 (팀장 대표 신청)", pending: false },
];

// 접수 일정 — 부문별 마감 및 확정 통보일
export const DEADLINES = [
  { division: "대학부", close: "11.8(일)", notify: "11.10(화)" },
  { division: "일반부", close: "11.13(금)", notify: "11.17(화)" },
];

// 대회 규정 — 조·항 형식. 세부 내용 변경 시 여기만 수정.
// 대회 규정 전문·요약은 src/data/rules.ts 참고
// 문의 게시판 예시 데이터 — 실제 접수 내용으로 교체하세요.
export const BOARD_POSTS = [
  { id: 5, title: "일반부는 충북 외 지역 거주자도 신청 가능한가요?", author: "김**", date: "2026.10.12", status: "답변완료" as const },
  { id: 4, title: "팀 구성 인원은 4명을 꼭 채워야 하나요?", author: "이**", date: "2026.10.10", status: "답변완료" as const },
  { id: 3, title: "대학부와 일반부를 섞어서 팀을 구성할 수 있나요?", author: "박**", date: "2026.10.09", status: "답변대기" as const },
  { id: 2, title: "다른 학교 학생과 연합팀 구성이 가능한가요?", author: "최**", date: "2026.10.08", status: "답변완료" as const },
  { id: 1, title: "제이원호텔 주차 가능 여부 문의", author: "정**", date: "2026.10.06", status: "답변대기" as const },
];
