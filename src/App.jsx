import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ProcessSection from "./components/ProcessSection";
import { ArrowRight } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-emerald-600" />
          <span className="font-serif text-xl text-stone-900">Therapia</span>
        </a>
        <nav className="hidden items-center gap-8 text-stone-700 md:flex">
          <a href="#services" className="hover:text-stone-900">Services</a>
          <a href="#portfolio" className="hover:text-stone-900">Portfolio</a>
          <a href="#process" className="hover:text-stone-900">Process</a>
          <a href="#contact" className="hover:text-stone-900">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700"
        >
          Book a Consultation
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-white to-stone-50 py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -right-20 -top-10 h-56 w-56 rounded-full bg-emerald-100 blur-3xl opacity-60" />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2">
        <div>
          <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-sm text-stone-700">Work together</span>
          <h2 className="mt-4 font-serif text-3xl text-stone-900 sm:text-4xl">Get a free consultation</h2>
          <p className="mt-3 text-stone-700">
            Tell us about your practice and goals. We’ll review, make recommendations, and map the best next step—custom design, a sprint week, or a template.
          </p>
          <ul className="mt-6 space-y-2 text-stone-700">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500"></span> No pressure, no jargon—just clear guidance.</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Typical response within 1 business day.</li>
          </ul>
        </div>

        <form className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-stone-800">First name</label>
              <input type="text" className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Alex" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-800">Last name</label>
              <input type="text" className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Rivera" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-stone-800">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" placeholder="you@practice.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-stone-800">Practice website (optional)</label>
              <input type="url" className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" placeholder="https://" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-stone-800">What are you hoping to achieve?</label>
              <textarea className="mt-1 h-28 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Tell us about your practice, services, and goals" />
            </div>
          </div>
          <button type="submit" className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-4 py-2.5 font-medium text-white shadow-sm transition hover:bg-emerald-700">Send request</button>
          <p className="mt-3 text-center text-xs text-stone-500">We’ll reply within 1 business day. No spam, ever.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-md bg-emerald-600" />
          <p className="text-stone-600">© {new Date().getFullYear()} Therapia. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6 text-stone-700">
          <a href="#services" className="hover:text-stone-900">Services</a>
          <a href="#portfolio" className="hover:text-stone-900">Portfolio</a>
          <a href="#process" className="hover:text-stone-900">Process</a>
          <a href="#contact" className="hover:text-stone-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <div id="process">
          <ProcessSection />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
