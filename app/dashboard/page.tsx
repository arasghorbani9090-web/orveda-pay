"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import {
  ArrowUpRight,
  Bell,
  Card,
  Check,
  Chart,
  Doc,
  Globe,
  Pulse,
  ShieldCheck,
  Transfer,
  Wallet,
} from "@/components/Icons";

const nav = [
  { Icon: Chart, label: "Overview", active: true },
  { Icon: Wallet, label: "Accounts" },
  { Icon: Transfer, label: "Payments" },
  { Icon: Globe, label: "Currencies" },
  { Icon: ShieldCheck, label: "Compliance" },
  { Icon: Card, label: "Cards" },
];

const balances = [
  { code: "USD", flag: "🇺🇸", amount: "1,284,920.40", pct: 80, trend: "+4.2%" },
  { code: "EUR", flag: "🇪🇺", amount: "842,310.18", pct: 58, trend: "+1.8%" },
  { code: "GBP", flag: "🇬🇧", amount: "318,540.00", pct: 30, trend: "+0.9%" },
  { code: "AED", flag: "🇦🇪", amount: "2,910,330.75", pct: 95, trend: "+2.4%" },
];

const transactions = [
  { name: "Meridian Trading Ltd", date: "Jun 5", type: "Incoming · SWIFT", amount: "+ $84,200.00", positive: true },
  { name: "Valtex Supplies GmbH", date: "Jun 4", type: "Outgoing · SEPA", amount: "− €21,500.00", positive: false },
  { name: "Aurora Logistics", date: "Jun 4", type: "Incoming · Local", amount: "+ £12,940.00", positive: true },
  { name: "Payroll — June", date: "Jun 3", type: "Outgoing · Batch", amount: "− $48,210.00", positive: false },
  { name: "Nimbus Software Inc", date: "Jun 2", type: "Incoming · SWIFT", amount: "+ $33,750.00", positive: true },
];

const bars = [40, 55, 48, 70, 62, 80, 72, 88, 76, 92, 84, 96];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-mist/60 pt-16">
      <div className="container-xl py-8 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[230px_1fr]">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-3xl border border-cloud bg-white p-4 shadow-soft">
              <div className="px-2 pb-4">
                <Logo />
              </div>
              <nav className="space-y-1">
                {nav.map(({ Icon, label, active }) => (
                  <button
                    key={label}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-navy-800 text-white"
                        : "text-navy-500 hover:bg-mist"
                    }`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                    {label}
                  </button>
                ))}
              </nav>
              <div className="mt-4 rounded-2xl bg-radial-navy p-4 text-white">
                <p className="text-xs text-navy-200">Compliance status</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-emerald-300">
                  <Check className="h-4 w-4" /> Verified
                </p>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="space-y-6">
            {/* Header row */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-navy-400">Welcome back,</p>
                <h1 className="font-display text-2xl font-bold text-navy-900">
                  Acme Trading FZ-LLC
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <button className="relative grid h-10 w-10 place-items-center rounded-full border border-cloud bg-white text-navy-600">
                  <Bell className="h-5 w-5" />
                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-500" />
                </button>
                <button className="btn-primary">New payment</button>
              </div>
            </div>

            {/* Top cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="card sm:col-span-2 overflow-hidden">
                <div className="bg-radial-navy p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-navy-200">
                        Total balance · 8 currencies
                      </p>
                      <p className="mt-1 font-display text-3xl font-extrabold">
                        $5,356,101.33
                      </p>
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                      <ArrowUpRight className="h-3.5 w-3.5" /> 6.1%
                    </span>
                  </div>
                  <div className="mt-5 flex items-end gap-1.5">
                    {bars.map((h, i) => (
                      <motion.span
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.04, duration: 0.5 }}
                        className="w-full rounded-t bg-gradient-to-t from-royal-500/40 to-emerald-400/80"
                        style={{ minHeight: 6, maxHeight: 90 }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <StatCard
                  Icon={Pulse}
                  label="Incoming (30d)"
                  value="$612,840"
                  trend="+12%"
                />
                <StatCard
                  Icon={Transfer}
                  label="Outgoing (30d)"
                  value="$418,220"
                  trend="−4%"
                  muted
                />
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
              {/* Transactions */}
              <div className="card p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="font-display text-base font-bold text-navy-900">
                    Recent transactions
                  </h2>
                  <button className="text-sm font-medium text-royal-600">
                    View all
                  </button>
                </div>
                <ul className="divide-y divide-cloud">
                  {transactions.map((t) => (
                    <li
                      key={t.name + t.date}
                      className="flex items-center justify-between gap-3 py-3"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span
                          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${
                            t.positive
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-navy-50 text-navy-500"
                          }`}
                        >
                          <Transfer className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-navy-800">
                            {t.name}
                          </p>
                          <p className="text-xs text-navy-400">
                            {t.type} · {t.date}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`shrink-0 text-sm font-semibold ${
                          t.positive ? "text-emerald-600" : "text-navy-700"
                        }`}
                      >
                        {t.amount}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                {/* Currency balances */}
                <div className="card p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Globe className="h-4.5 w-4.5 text-royal-500" />
                    <h2 className="font-display text-base font-bold text-navy-900">
                      Currency accounts
                    </h2>
                  </div>
                  <ul className="space-y-4">
                    {balances.map((b) => (
                      <li key={b.code}>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-2 text-sm font-medium text-navy-700">
                            <span aria-hidden>{b.flag}</span>
                            {b.code}
                          </span>
                          <span className="text-sm font-semibold text-navy-800">
                            {b.amount}
                          </span>
                        </div>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-cloud">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-royal-500 to-emerald-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${b.pct}%` }}
                            transition={{ duration: 0.7 }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compliance + documents */}
                <div className="card p-6">
                  <h2 className="font-display text-base font-bold text-navy-900">
                    Compliance & documents
                  </h2>
                  <div className="mt-4 space-y-2.5">
                    {[
                      { l: "KYC Verification", s: "Approved" },
                      { l: "KYB Verification", s: "Approved" },
                      { l: "AML Screening", s: "Clear" },
                      { l: "Proof of Address", s: "On file" },
                    ].map((row) => (
                      <div
                        key={row.l}
                        className="flex items-center justify-between rounded-xl bg-mist/70 px-3 py-2.5"
                      >
                        <span className="flex items-center gap-2 text-sm text-navy-700">
                          <Doc className="h-4 w-4 text-navy-400" />
                          {row.l}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                          <Check className="h-3.5 w-3.5" /> {row.s}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Currency exchange + notifications */}
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="card p-6">
                <h2 className="font-display text-base font-bold text-navy-900">
                  Currency exchange
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-cloud bg-mist/60 p-4">
                    <p className="text-xs text-navy-400">You convert</p>
                    <p className="mt-1 font-display text-xl font-bold text-navy-900">
                      🇺🇸 100,000 USD
                    </p>
                  </div>
                  <div className="rounded-2xl border border-cloud bg-mist/60 p-4">
                    <p className="text-xs text-navy-400">You receive</p>
                    <p className="mt-1 font-display text-xl font-bold text-navy-900">
                      🇪🇺 91,840 EUR
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-navy-400">
                  <span>Rate 0.9184 · locked for 30s</span>
                  <span className="font-medium text-emerald-600">
                    Mid-market + 0.4%
                  </span>
                </div>
                <button className="btn-primary mt-4 w-full">
                  Confirm exchange
                </button>
              </div>

              <div className="card p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Bell className="h-4.5 w-4.5 text-royal-500" />
                  <h2 className="font-display text-base font-bold text-navy-900">
                    Notifications
                  </h2>
                </div>
                <ul className="space-y-3">
                  {[
                    {
                      t: "Incoming SWIFT received",
                      d: "$84,200 from Meridian Trading Ltd",
                      time: "2h ago",
                      c: "emerald",
                    },
                    {
                      t: "Compliance review complete",
                      d: "Your KYB verification was approved",
                      time: "1d ago",
                      c: "royal",
                    },
                    {
                      t: "New beneficiary added",
                      d: "Valtex Supplies GmbH verified",
                      time: "2d ago",
                      c: "navy",
                    },
                  ].map((n) => (
                    <li key={n.t} className="flex gap-3">
                      <span
                        className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                          n.c === "emerald"
                            ? "bg-emerald-500"
                            : n.c === "royal"
                              ? "bg-royal-500"
                              : "bg-navy-300"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-medium text-navy-800">
                          {n.t}
                        </p>
                        <p className="text-xs text-navy-400">
                          {n.d} · {n.time}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-center text-xs text-navy-400">
              This is an illustrative dashboard preview. Account approval is
              subject to successful verification and due diligence review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  Icon,
  label,
  value,
  trend,
  muted,
}: {
  Icon: (p: { className?: string }) => JSX.Element;
  label: string;
  value: string;
  trend: string;
  muted?: boolean;
}) {
  return (
    <div className="card flex flex-col justify-between p-5">
      <div className="flex items-center justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-royal-50 text-royal-600">
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={`text-xs font-semibold ${
            muted ? "text-navy-400" : "text-emerald-600"
          }`}
        >
          {trend}
        </span>
      </div>
      <div className="mt-3">
        <p className="text-xs text-navy-400">{label}</p>
        <p className="font-display text-xl font-bold text-navy-900">{value}</p>
      </div>
    </div>
  );
}
