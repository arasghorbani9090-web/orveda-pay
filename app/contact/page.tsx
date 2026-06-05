"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Motion";
import { ArrowRight, Check, Mail, Phone, Pin, Scale, Pulse, Users } from "@/components/Icons";

const channels = [
  {
    Icon: Mail,
    title: "Email Support",
    detail: "support@orvedapay.com",
    sub: "General help, Mon–Fri",
  },
  {
    Icon: Users,
    title: "Business Support",
    detail: "business@orvedapay.com",
    sub: "Account & onboarding",
  },
  {
    Icon: Scale,
    title: "Compliance Department",
    detail: "compliance@orvedapay.com",
    sub: "KYC, KYB & AML queries",
  },
  {
    Icon: Pulse,
    title: "Sales Team",
    detail: "sales@orvedapay.com",
    sub: "Enterprise & API",
  },
];

const departments = ["General", "Sales", "Business Support", "Compliance"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="relative overflow-hidden bg-radial-navy pt-28 pb-20 text-white sm:pt-32 lg:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:44px_44px] opacity-40"
        />
        <div className="container-xl relative max-w-2xl">
          <Reveal>
            <span className="eyebrow border-white/15 bg-white/10 text-royal-100">
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Let&apos;s talk about your global payments
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg text-navy-200">
              Reach the right team — from sales and onboarding to compliance.
              We typically respond within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Channels */}
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-900">
                Get in touch
              </h2>
              <p className="mt-2 text-navy-500">
                Choose the team that fits your enquiry.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {channels.map(({ Icon, title, detail, sub }) => (
                <Reveal key={title} className="card p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-royal-50 text-royal-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-navy-900">{title}</h3>
                  <p className="mt-1 text-sm font-medium text-royal-600">
                    {detail}
                  </p>
                  <p className="text-xs text-navy-400">{sub}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="card mt-6 flex items-start gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-navy-900">Call us</h3>
                <p className="text-sm text-navy-500">+1 (800) 555-0142</p>
                <p className="text-xs text-navy-400">Mon–Fri, 9:00–18:00 GMT</p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal y={30}>
            <div className="card p-7 sm:p-8">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                    <Check className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">
                    Message received
                  </h3>
                  <p className="mt-2 max-w-sm text-navy-500">
                    Thank you for reaching out to Orveda Pay. Our team will get
                    back to you within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary mt-6"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-display text-2xl font-bold text-navy-900">
                    Send a message
                  </h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" name="name" placeholder="Jane Doe" />
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Company" name="company" placeholder="Acme Inc." />
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-navy-700">
                        Department
                      </label>
                      <select
                        name="department"
                        className="w-full rounded-xl border border-cloud bg-white px-4 py-3 text-sm text-navy-800 focus:border-royal-400 focus:outline-none focus:ring-2 focus:ring-royal-500/30"
                      >
                        {departments.map((d) => (
                          <option key={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us how we can help…"
                      className="w-full rounded-xl border border-cloud bg-white px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 focus:border-royal-400 focus:outline-none focus:ring-2 focus:ring-royal-500/30"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send message <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-navy-400">
                    By submitting, you agree to our processing of your details in
                    line with our Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="section-pad pt-0">
        <div className="container-xl">
          <Reveal className="overflow-hidden rounded-3xl border border-cloud shadow-card">
            <div className="grid lg:grid-cols-[1fr_1.6fr]">
              <div className="bg-radial-navy p-8 text-white">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
                  <Pin className="h-6 w-6 text-emerald-300" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold">
                  Global headquarters
                </h3>
                <address className="mt-3 not-italic text-navy-200">
                  One Financial Plaza, Level 28
                  <br />
                  Dubai International Financial Centre
                  <br />
                  Dubai, United Arab Emirates
                </address>
                <div className="mt-6 space-y-2 text-sm text-navy-200">
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> hello@orvedapay.com
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> +1 (800) 555-0142
                  </p>
                </div>
              </div>
              <div className="relative min-h-[320px] bg-mist">
                <iframe
                  title="Orveda Pay headquarters map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=55.26%2C25.18%2C55.31%2C25.22&layer=mapnik"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-cloud bg-white px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 focus:border-royal-400 focus:outline-none focus:ring-2 focus:ring-royal-500/30"
      />
    </div>
  );
}
