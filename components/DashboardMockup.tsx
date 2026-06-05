"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bolt, Check, Globe, Pulse } from "./Icons";

const balances = [
  { code: "USD", flag: "🇺🇸", amount: "1,284,920.40", trend: "+4.2%" },
  { code: "EUR", flag: "🇪🇺", amount: "842,310.18", trend: "+1.8%" },
  { code: "GBP", flag: "🇬🇧", amount: "318,540.00", trend: "+0.9%" },
  { code: "AED", flag: "🇦🇪", amount: "2,910,330.75", trend: "+2.4%" },
];

const activity = [
  { name: "Meridian Trading Ltd", type: "Incoming · SWIFT", amount: "+ $84,200", positive: true },
  { name: "Supplier Payout — Valtex", type: "Outgoing · SEPA", amount: "− €21,500", positive: false },
  { name: "Aurora Logistics", type: "Incoming · Local", amount: "+ £12,940", positive: true },
];

const bars = [38, 52, 44, 68, 60, 82, 74, 90];

export function DashboardMockup() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl border border-white/15 bg-white shadow-float"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-cloud bg-mist/60 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-navy-500 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            app.orvedapay.com
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
            <Check className="h-3.5 w-3.5" /> Verified
          </div>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-2">
          {/* Total balance card */}
          <div className="sm:col-span-2 rounded-2xl bg-radial-navy p-5 text-white">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-navy-200">
                  Total balance · 8 currencies
                </p>
                <p className="mt-1 font-display text-3xl font-extrabold tracking-tight">
                  $5,356,101.33
                </p>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                <ArrowUpRight className="h-3.5 w-3.5" /> 6.1%
              </span>
            </div>
            <div className="mt-4 flex items-end gap-1.5">
              {bars.map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.6 }}
                  className="w-full rounded-t bg-gradient-to-t from-royal-500/40 to-emerald-400/80"
                  style={{ minHeight: 6 }}
                />
              ))}
            </div>
          </div>

          {/* Currency balances */}
          <div className="rounded-2xl border border-cloud p-4">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-navy-500">
              <Globe className="h-4 w-4 text-royal-500" /> Currency balances
            </div>
            <ul className="space-y-2.5">
              {balances.map((b) => (
                <li key={b.code} className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm font-medium text-navy-700">
                    <span aria-hidden>{b.flag}</span>
                    {b.code}
                  </span>
                  <span className="text-right">
                    <span className="block text-sm font-semibold text-navy-800">
                      {b.amount}
                    </span>
                    <span className="text-[11px] font-medium text-emerald-600">
                      {b.trend}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Activity */}
          <div className="rounded-2xl border border-cloud p-4">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-navy-500">
              <Pulse className="h-4 w-4 text-royal-500" /> Payment activity
            </div>
            <ul className="space-y-2.5">
              {activity.map((a) => (
                <li key={a.name} className="flex items-center justify-between gap-2">
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-navy-700">
                      {a.name}
                    </span>
                    <span className="text-[11px] text-navy-400">{a.type}</span>
                  </span>
                  <span
                    className={`shrink-0 text-sm font-semibold ${
                      a.positive ? "text-emerald-600" : "text-navy-500"
                    }`}
                  >
                    {a.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute -left-4 top-24 hidden rounded-2xl border border-cloud bg-white px-4 py-3 shadow-card sm:flex sm:items-center sm:gap-3"
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
          <Bolt className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs text-navy-400">SWIFT settled</span>
          <span className="block text-sm font-semibold text-navy-800">
            in 14 minutes
          </span>
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute -right-3 bottom-10 hidden rounded-2xl border border-cloud bg-white px-4 py-3 shadow-card md:flex md:items-center md:gap-3"
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-royal-50 text-royal-600">
          <Check className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs text-navy-400">Compliance</span>
          <span className="block text-sm font-semibold text-navy-800">
            KYB approved
          </span>
        </span>
      </motion.div>
    </div>
  );
}
