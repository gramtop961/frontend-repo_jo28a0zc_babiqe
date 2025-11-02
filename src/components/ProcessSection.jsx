import { Calendar, Users, FileText, CheckCircle } from "lucide-react";

const Step = ({ icon: Icon, title, description, step }) => (
  <div className="relative rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
    <div className="absolute -top-3 -left-3 rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-semibold text-white">{step}</div>
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="mt-3 font-serif text-xl text-stone-900">{title}</h3>
    <p className="mt-2 text-stone-700">{description}</p>
  </div>
);

export default function ProcessSection() {
  return (
    <section className="bg-stone-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-sm text-stone-700">How it works</span>
          <h2 className="mt-4 font-serif text-3xl text-stone-900 sm:text-4xl">A calm, clear process from hello to launch</h2>
          <p className="mt-3 text-stone-700">We guide you step-by-step so the project feels focused and manageable.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Step
            step="1"
            icon={Calendar}
            title="Discovery Call"
            description="We learn about your practice, goals, and audience—and recommend the right path forward."
          />
          <Step
            step="2"
            icon={Users}
            title="Content & Strategy"
            description="We map your services and client journeys, then align messaging and structure for clarity."
          />
          <Step
            step="3"
            icon={FileText}
            title="Design & Build"
            description="We translate strategy into a calm, modern design and implement HIPAA-friendly workflows."
          />
          <Step
            step="4"
            icon={CheckCircle}
            title="Launch + Support"
            description="We publish, QA, and provide a handover with training and 30 days of support."
          />
        </div>
      </div>
    </section>
  );
}
