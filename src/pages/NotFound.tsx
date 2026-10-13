import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 font-mono text-[14px] font-semibold uppercase tracking-widest text-defend">404</p>
      <h1 className="mb-3 text-[30px] font-extrabold text-text-primary">페이지를 찾을 수 없습니다</h1>
      <p className="mb-8 text-[15px] text-text-secondary">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
      <Link
        to="/"
        className="rounded-[3px] bg-attack px-7 py-[15px] font-mono text-[15.5px] font-semibold text-white transition-all hover:bg-attack-dark"
      >
        홈으로 돌아가기
      </Link>
    </section>
  );
}
