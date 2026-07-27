"use client";

import { type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps<C extends ElementType = "button"> {
  as?: C;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
}

function Button<C extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps<C> & Omit<React.ComponentPropsWithoutRef<C>, keyof ButtonProps<C>>) {
  const Component = as || "button";
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer select-none whitespace-nowrap",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c5cff]",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
        {
          "bg-[#7c5cff] text-white hover:bg-[#6a4be0] active:bg-[#5a3fd0] shadow-lg shadow-[#7c5cff]/20 hover:shadow-[#7c5cff]/30":
            variant === "primary",
          "bg-white/[0.04] text-white border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.14] active:bg-white/[0.06]":
            variant === "secondary",
          "text-[#9ba3b5] hover:text-white hover:bg-white/[0.04] active:bg-white/[0.06]":
            variant === "ghost",
          "text-[#9ba3b5] border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.04] active:bg-white/[0.06]":
            variant === "outline",
        },
        {
          "text-[13px] h-8 px-3.5": size === "sm",
          "text-[13px] h-10 px-4": size === "md",
          "text-[14px] h-11 px-5": size === "lg",
        },
        className
      )}
      {...(props as React.ComponentPropsWithoutRef<C>)}
    >
      {children}
    </Component>
  );
}

Button.displayName = "Button";

export { Button, type ButtonProps };
