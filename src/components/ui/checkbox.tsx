import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-[4px] border border-border-strong bg-bg-surface transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-defend/20 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-defend data-[state=checked]:bg-defend",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-bg-base">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
