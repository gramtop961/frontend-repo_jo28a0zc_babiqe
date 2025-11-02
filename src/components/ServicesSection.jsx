import { Rocket, Shield, Package } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, items }) => (
  <div className="flex h-full flex-col rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mt-4 font-serif text-2xl text-stone-900">{title}</h3>
    <p className="mt-2 text-stone-700">{description}</p>
    <ul className="mt-4 space-y-2 text-stone-700">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <div className="mt-auto pt-6">
      <a href="#contact" className="text-emerald-700 hover:underline">Learn more</a>
    </div>
  </div>
);

export default function ServicesSection() {
  return (
    <section id="services" className="bg-stone-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-sm text-stone-700">How we can help</span>
          <h2 className="mt-4 font-serif text-3xl text-stone-900 sm:text-4xl">Services tailored for therapists and wellness teams</h2>
          <p className="mt-3 text-stone-700">From bespoke brand experiences to fast-turnaround launches, we meet you where you are and build with strategy.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={Shield}
            title="Custom Design"
            description="A fully bespoke website and brand system crafted around your specialty, audience, and goals."
            items={["Brand & strategy intensive","Information architecture","HIPAA-friendly integrations","Conversion-focused copy guidance"]}
          />
          <ServiceCard
            icon={Rocket}
            title="Website in a Week"
            description="A focused engagement to launch a polished, professional site fast—without cutting strategic corners."
            items={["Kickoff + content checklist","Done-with-you design sprint","Launch + handover training","30 days of support"]}
          />
          <ServiceCard
            icon={Package}
            title="Templates"
            description="Beautiful, accessible templates designed for private practices and group clinics."
            items={["Easy customization","Clean, calming aesthetics","SEO-ready structure","Client intake pathways"]}
          />
        </div>
      </div>
    </section>
  );
}
