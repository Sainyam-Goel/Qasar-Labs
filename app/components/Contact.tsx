'use client';

import AnimatedSection from './AnimatedSection';

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
        <AnimatedSection direction="left">
          <h2 className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">
            Start a Conversation
          </h2>
          <p className="mt-3 max-w-xl text-slate-600">
            Whether you&apos;re sourcing components, exploring partnership, or evaluating investment &mdash;
            we&apos;d like to hear from you.
          </p>
          <div className="mt-8 space-y-3 text-slate-600">
            <div>&#9993; hello@qasarlabs.com</div>
            <div>Mon&ndash;Fri &middot; 09:00&ndash;18:00 IST</div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={200}>
          <form
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-slate-600">Name</label>
                <input
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-slate-600">Company</label>
                <input
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring-2"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring-2"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-sm text-slate-600">I am a&hellip;</label>
                <select className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring-2">
                  <option>Customer / OEM</option>
                  <option>Investor</option>
                  <option>Partner / Distributor</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-slate-600">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring-2"
                  placeholder="Tell us about your requirements or interest&hellip;"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-navy px-4 py-2.5 font-medium text-white hover:bg-navy-dark transition-colors"
            >
              Send Inquiry
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
