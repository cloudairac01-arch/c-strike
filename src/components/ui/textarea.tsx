import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-[100px] w-full resize-y rounded-[3px] border border-border bg-bg-surface px-3.5 py-3 text-[16px] text-text-primary transition-colors placeholder:text-text-muted focus-visible:border-defend focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-defend/10 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
