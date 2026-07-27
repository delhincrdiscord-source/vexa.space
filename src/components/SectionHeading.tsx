import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold rounded-full bg-[#7c5cff]/10 text-[#7c5cff] tracking-wider uppercase">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-[28px] sm:text-[34px] font-bold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] text-[#5e6578] leading-relaxed max-w-lg mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

export { SectionHeading };
