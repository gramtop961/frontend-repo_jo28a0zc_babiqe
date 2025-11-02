export default function PortfolioSection() {
  const projects = [
    {
      name: "Harbor Therapy Group",
      tag: "Group Practice",
      challenge: "Multiple specialties under one roof needed clear navigation and accessible content.",
      solution: "Calm visual system, specialty filters, and warm photography to humanize the brand.",
      result: "35% increase in qualified inquiries within 60 days.",
      gradient: "from-emerald-50 to-emerald-100",
    },
    {
      name: "Quiet Coast Counseling",
      tag: "Private Practice",
      challenge: "Solo practitioner needed a trustworthy presence to move off Psychology Today.",
      solution: "Positioning, copy support, and an inviting services flow with prominent CTAs.",
      result: "Booked out 2 months after launch.",
      gradient: "from-sky-50 to-sky-100",
    },
    {
      name: "Whole Path Wellness",
      tag: "Wellness Center",
      challenge: "Outdated site and poor mobile UX led to drop-offs during intake.",
      solution: "Mobile-first structure, streamlined intake, and HIPAA-friendly form workflow.",
      result: "Bounce rate down 28%; more completed intakes.",
      gradient: "from-stone-50 to-stone-200",
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-sm text-stone-700">Selected work</span>
          <h2 className="mt-4 font-serif text-3xl text-stone-900 sm:text-4xl">Websites that feel safe, modern, and effective</h2>
          <p className="mt-3 text-stone-700">Each project blends empathy with strategy: clear messaging, accessible design, and pathways that convert.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.name} className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition hover:shadow-md">
              <div className={`h-44 w-full bg-gradient-to-br ${p.gradient}`} />
              <div className="p-5">
                <div className="flex items-center justify-between text-sm text-stone-600">
                  <span className="rounded-full bg-stone-100 px-2 py-0.5">{p.tag}</span>
                </div>
                <h3 className="mt-2 font-serif text-xl text-stone-900">{p.name}</h3>
                <div className="mt-3 space-y-2 text-sm text-stone-700">
                  <p><span className="font-medium text-stone-900">Challenge:</span> {p.challenge}</p>
                  <p><span className="font-medium text-stone-900">Solution:</span> {p.solution}</p>
                  <p><span className="font-medium text-stone-900">Result:</span> {p.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-5 py-3 font-medium text-stone-800 shadow-sm transition hover:bg-stone-50">Request a walkthrough</a>
        </div>
      </div>
    </section>
  );
}
