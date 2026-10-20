import { useId, useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const idPrefix = useId();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="animate-page-in flex h-full flex-col items-center justify-center gap-3 rounded-[3px] border border-border bg-bg-card px-6 py-14 text-center">
        <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full border border-defend/35 bg-defend/10 text-defend [animation:pop-in_0.4s_cubic-bezier(0.16,1,0.3,1)_both]">
          <Check className="h-6 w-6" strokeWidth={2.5} />
        </div>
        <h4 className="text-[19.5px] font-bold text-text-primary">문의가 등록되었습니다</h4>
        <p className="max-w-[320px] text-[16px] text-text-secondary">
          운영진 확인 후 답변이 등록되며, 위 문의 게시판에서 답변 상태를 확인하실 수 있습니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[14px] rounded-[3px] border border-border bg-bg-card p-6">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`${idPrefix}-title`}>
          제목 <span className="text-attack">*</span>
        </Label>
        <Input id={`${idPrefix}-title`} required placeholder="문의 제목을 입력해주세요" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${idPrefix}-name`}>
            작성자 <span className="text-attack">*</span>
          </Label>
          <Input id={`${idPrefix}-name`} required placeholder="이름/닉네임" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${idPrefix}-contact`}>
            연락처(이메일) <span className="text-attack">*</span>
          </Label>
          <Input id={`${idPrefix}-contact`} type="email" required placeholder="example@cju.ac.kr" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`${idPrefix}-body`}>
          내용 <span className="text-attack">*</span>
        </Label>
        <Textarea id={`${idPrefix}-body`} required rows={4} placeholder="문의하실 내용을 자세히 적어주세요." />
      </div>

      <label className="flex items-center gap-2.5 text-[15.5px] text-text-secondary" htmlFor={`${idPrefix}-consent`}>
        <Checkbox id={`${idPrefix}-consent`} required />
        개인정보 수집·이용에 동의합니다. <span className="text-attack">*</span>
      </label>

      <Button type="submit" size="lg" className="mt-1 active:scale-[0.98]">
        문의 등록하기
      </Button>
    </form>
  );
}
