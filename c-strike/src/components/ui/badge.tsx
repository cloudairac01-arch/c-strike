import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-[2px] border px-2.5 py-1 font-mono text-[13.5px] font-semibold tracking-wide",
  {
    variants: {
      variant: {
        attack: "border-attack/30 bg-attack/10 text-attack",
        defend: "border-defend/30 bg-defend/10 text-defend",
        muted: "border-border-strong bg-bg-surface-alt text-text-muted",
      },
    },
    defaultVariants: {
      variant: "defend",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
