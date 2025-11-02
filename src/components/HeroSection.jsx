import { ArrowRight, Shield, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-100">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-sky-100 blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:flex lg:items-center lg:gap-12">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-sm text-stone-700 shadow-sm backdrop-blur">
            <Shield className="h-4 w-4 text-emerald-600" />
            <span>Strategic design for mental health professionals</span>
          </div>

          <h1 className="font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
            Strategic web design for therapists that builds trust and attracts your ideal client
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-700">
            Feel confident sending clients to your website. We design calm, professional, and
            welcoming online spaces so you can focus on healing—while your site does the qualifying.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <div className="flex items-center gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-4 py-3 font-medium text-stone-800 shadow-sm transition hover:bg-stone-50"
              >
                View Our Portfolio
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-4 py-3 font-medium text-stone-800 shadow-sm transition hover:bg-stone-50"
              >
                Shop Templates
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-stone-600">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-emerald-500 text-emerald-500" />
              <span>Trusted by 100+ therapists and wellness teams</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Trustpilot_logo_2022.svg"
                alt="Trustpilot"
                className="h-4 opacity-80"
              />
              <span>5.0 average reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/61/GoodFirms_logo.png"
                alt="GoodFirms"
                className="h-4 opacity-80"
              />
              <span>Featured on GoodFirms</span>
            </div>
          </div>
        </div>

        <div className="mt-14 grid flex-1 grid-cols-2 gap-4 sm:mt-16">
          <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
            <div className="h-36 w-full rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100" />
            <div className="mt-3 h-2 w-2/3 rounded bg-stone-200" />
            <div className="mt-2 h-2 w-1/2 rounded bg-stone-200" />
          </div>
          <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
            <div className="h-36 w-full rounded-lg bg-gradient-to-br from-sky-50 to-sky-100" />
            <div className="mt-3 h-2 w-2/3 rounded bg-stone-200" />
            <div className="mt-2 h-2 w-1/2 rounded bg-stone-200" />
          </div>
          <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
            <div className="h-36 w-full rounded-lg bg-gradient-to-br from-stone-50 to-stone-200" />
            <div className="mt-3 h-2 w-2/3 rounded bg-stone-200" />
            <div className="mt-2 h-2 w-1/2 rounded bg-stone-200" />
          </div>
          <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
            <div className="h-36 w-full rounded-lg bg-gradient-to-br from-amber-50 to-rose-100" />
            <div className="mt-3 h-2 w-2/3 rounded bg-stone-200" />
            <div className="mt-2 h-2 w-1/2 rounded bg-stone-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
