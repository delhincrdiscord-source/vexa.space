"use client";

import Link from "next/link";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { PREMIUM_TIERS } from "@/lib/config";
import { cn } from "@/lib/utils";

function Premium() {
  return (
    <section id="premium" className="relative py-20 sm:py-24 bg-[#16161d]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          badge="Premium"
          title="Choose your experience"
          description="Start free, upgrade when you need more."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {PREMIUM_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col p-6 rounded-2xl border transition-all",
                tier.highlighted
                  ? "bg-gradient-to-b from-[#7c5cff]/[0.08] to-[#1c1c26] border-[#7c5cff]/25"
                  : "bg-[#1c1c26] border-white/[0.06] hover:border-white/[0.1]"
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-block px-3 py-0.5 text-[11px] font-bold text-white bg-[#7c5cff] rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-4">
                <span className="text-[11px] font-semibold text-[#5e6578] uppercase tracking-wider">
                  {tier.tag}
                </span>
                <h3 className="mt-1 text-[18px] font-bold text-white">{tier.name}</h3>
              </div>

              <p className="text-[13px] text-[#5e6578] leading-relaxed mb-5">
                {tier.description}
              </p>

              <ul className="space-y-2.5 mb-6 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg className="mt-0.5 shrink-0 w-4 h-4 text-[#7c5cff]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[13px] text-[#9ba3b5]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlighted ? "primary" : "secondary"}
                size="md"
                className={cn("w-full", tier.highlighted && "bg-[#7c5cff] hover:bg-[#6a4be0]")}
                as={Link}
                href={tier.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tier.tag === "Free" ? "Add to Discord" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Premium };
