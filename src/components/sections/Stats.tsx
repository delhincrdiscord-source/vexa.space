"use client";

const stats = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#7c5cff]">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    value: "50,000+",
    label: "Servers",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#7c5cff]">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: "2,000,000+",
    label: "Users",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#7c5cff]">
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
    value: "45+",
    label: "Commands",
  },
];

function Stats() {
  return (
    <section className="relative bg-[#16161d] py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#7c5cff]/10 flex items-center justify-center shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-[22px] sm:text-[26px] font-bold text-white tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="text-[13px] text-[#5e6578] font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Stats };
