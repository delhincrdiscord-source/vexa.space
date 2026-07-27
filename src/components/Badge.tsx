"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "brand" | "outline";
  className?: string;
}

function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold rounded-full tracking-wider uppercase",
        {
          "bg-white/[0.04] text-[#5e6578]": variant === "default",
          "bg-[#7c5cff]/10 text-[#7c5cff]": variant === "brand",
          "border border-white/[0.08] text-[#5e6578]": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}

export { Badge };
