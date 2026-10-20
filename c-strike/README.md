# 2026 충북 정보보호 해커톤

2026 충북 정보보호 해커톤 공식 웹사이트.

SOLVE. COMPETE. SURVIVE. — 충북 소재 대학생과 지역 재직자가 겨루는 정보보호 해커톤.

## 스택

- [Vite](https://vite.dev/) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

## 구조

```
src/
  components/
    sections/     # 홈 페이지 섹션 (Hero, About, Results, Join, Contact)
    Navbar.tsx
    Footer.tsx
    Layout.tsx
    SubpageHero.tsx
    ui.tsx        # 공용 UI 아톰 (Eyebrow, SectionTitle, Tag, Card ...)
  pages/           # 라우트 단위 페이지 (Home, Apply, Board, Write, NotFound)
  data/content.ts  # 대회 콘텐츠 (문구, 통계, 순위표 등)
  hooks/useReveal.ts
```

## 개발

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 타입 체크 + 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
npm run lint      # oxlint
```
