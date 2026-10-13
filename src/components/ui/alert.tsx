import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva("relative w-full rounded-[3px] border px-4 py-3.5 text-[14.5px] leading-relaxed", {
  variants: {
    variant: {
      default: "border-border bg-bg-surface text-text-secondary",
      defend: "border-defend/25 bg-defend/[0.05] text-text-secondary [&_.alert-title]:text-defend",
      attack: "border-attack/25 bg-attack/[0.05] text-text-secondary [&_.alert-title]:text-attack",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return <div role="alert" className={cn(alertVariants({ variant, className }))} {...props} />;
}

function AlertTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "alert-title mb-1 font-mono text-[12.5px] font-bold uppercase tracking-wide",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("text-text-secondary", className)} {...props} />;
}

export { Alert, AlertTitle, AlertDescription };
