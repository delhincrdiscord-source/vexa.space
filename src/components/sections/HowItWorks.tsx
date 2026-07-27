"use client";

import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Add to Discord",
    description: "Click the invite button and authorize Vexa to your server. Takes less than 10 seconds.",
  },
  {
    number: "02",
    title: "Join a Voice Channel",
    description: "Join any voice channel where you want music to play. Vexa will detect it automatically.",
  },
  {
    number: "03",
    title: "Play Music",
    description: "Use /play to search for any song, paste a link, or load an entire playlist. That's it.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-24 bg-[#16161d]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          badge="How It Works"
          title="Up and running in 30 seconds"
          description="No complex setup. No configuration files. Just add and play."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-px bg-white/[0.06]" />
              )}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1c1c26] border border-white/[0.06] mb-4">
                <span className="text-lg font-bold text-[#7c5cff]">{step.number}</span>
              </div>
              <h3 className="text-[16px] font-semibold text-white mb-1.5">
                {step.title}
              </h3>
              <p className="text-[13px] text-[#5e6578] leading-relaxed max-w-[280px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { HowItWorks };
