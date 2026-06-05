"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import {
  ArrowRight,
  Check,
  Eye,
  Lock,
  ShieldCheck,
} from "@/components/Icons";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);
  const [demoNote, setDemoNote] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDemoNote("");
    const next: { email?: string; password?: string } = {};
    if (!email.trim()) next.email = "Email is required.";
    else if (!emailRegex.test(email.trim()))
      next.email = "Enter a valid email address.";
    if (!password) next.password = "Password is required.";
    else if (password.length < 6)
      next.password = "Password must be at least 6 characters.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setLoading(true);
    setTimeout(() => router.push("/dashboard"), 900);
  };

  const handleSocial = (provider: string) => {
    setDemoNote(`${provider} sign-in is a demo on this mockup.`);
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden overflow-hidden bg-radial-navy p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:44px_44px] opacity-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"
        />
        <div className="relative">
          <Logo variant="light" />
        </div>
        <div className="relative">
          <h2 className="font-display text-3xl font-extrabold leading-tight">
            Global financial infrastructure for modern businesses
          </h2>
          <ul className="mt-8 space-y-4">
            {[
              "Hold and receive 8 major currencies",
              "Send international payments via SWIFT",
              "Bank-grade security & compliance",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-navy-100">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-500/20 text-emerald-300">
                  <Check className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="relative flex items-center gap-2 text-xs text-navy-300">
          <ShieldCheck className="h-4 w-4" /> Protected by institutional-grade
          security controls.
        </p>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center px-5 py-12 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden">
            <Logo />
          </div>

          <h1 className="mt-8 font-display text-3xl font-extrabold tracking-tight text-navy-900 lg:mt-0">
            Welcome back
          </h1>
          <p className="mt-2 text-navy-500">
            Sign in to your Orveda Pay business account.
          </p>

          {/* Social */}
          <div className="mt-8 space-y-3">
            <button
              type="button"
              onClick={() => handleSocial("Google")}
              className="flex w-full items-center justify-center gap-3 rounded-full border border-cloud bg-white px-5 py-3 text-sm font-semibold text-navy-800 transition-colors hover:bg-mist"
            >
              <GoogleIcon /> Continue with Google
            </button>
            <button
              type="button"
              onClick={() => handleSocial("Apple")}
              className="flex w-full items-center justify-center gap-3 rounded-full border border-navy-800 bg-navy-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-900"
            >
              <AppleIcon /> Continue with Apple
            </button>
          </div>

          {demoNote && (
            <p className="mt-3 rounded-lg bg-royal-50 px-3 py-2 text-xs font-medium text-royal-700">
              {demoNote}
            </p>
          )}

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <span className="h-px flex-1 bg-cloud" />
            <span className="text-xs font-medium uppercase tracking-wider text-navy-400">
              or sign in with email
            </span>
            <span className="h-px flex-1 bg-cloud" />
          </div>

          {/* Email / password */}
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-navy-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((p) => ({ ...p, email: undefined }));
                }}
                placeholder="you@company.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-rose-400 focus:border-rose-400 focus:ring-rose-500/25"
                    : "border-cloud focus:border-royal-400 focus:ring-royal-500/30"
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs font-medium text-rose-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-navy-700">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setDemoNote("Password reset is a demo on this mockup.")}
                  className="text-xs font-medium text-royal-600 hover:text-royal-700"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
                <input
                  id="password"
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((p) => ({ ...p, password: undefined }));
                  }}
                  placeholder="Enter your password"
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? "password-error" : undefined}
                  className={`w-full rounded-xl border bg-white py-3 pl-10 pr-11 text-sm text-navy-800 placeholder:text-navy-300 focus:outline-none focus:ring-2 ${
                    errors.password
                      ? "border-rose-400 focus:border-rose-400 focus:ring-rose-500/25"
                      : "border-cloud focus:border-royal-400 focus:ring-royal-500/30"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  aria-label={showPw ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 hover:text-navy-700"
                >
                  <Eye className="h-4.5 w-4.5" />
                </button>
              </div>
              {errors.password && (
                <p id="password-error" className="mt-1.5 text-xs font-medium text-rose-500">
                  {errors.password}
                </p>
              )}
            </div>

            <label className="flex items-center gap-2 text-sm text-navy-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-cloud text-royal-500 focus:ring-royal-500/30"
              />
              Keep me signed in
            </label>

            <button type="submit" disabled={loading} className="btn-primary w-full">
              {loading ? "Signing in…" : "Sign in"}
              {!loading && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-navy-500">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-semibold text-royal-600 hover:text-royal-700">
              Open a business account
            </Link>
          </p>

          <p className="mt-6 text-center text-xs text-navy-400">
            This is an illustrative sign-in for a product mockup. No real
            authentication is performed.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.71-1.57 2.68-3.89 2.68-6.62Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.85.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.97 10.72a5.41 5.41 0 0 1 0-3.44V4.95H.96a9 9 0 0 0 0 8.1l3.01-2.33Z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.5.46 3.44 1.35l2.58-2.58A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58Z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor" aria-hidden>
      <path d="M13.3 9.55c-.02-1.9 1.55-2.81 1.62-2.85-.88-1.29-2.26-1.47-2.75-1.49-1.17-.12-2.28.69-2.87.69-.59 0-1.5-.67-2.47-.65-1.27.02-2.44.74-3.09 1.87-1.32 2.29-.34 5.68.95 7.54.63.91 1.38 1.93 2.36 1.9.95-.04 1.31-.61 2.45-.61 1.14 0 1.46.61 2.46.59 1.02-.02 1.66-.93 2.28-1.85.72-1.06 1.02-2.08 1.03-2.14-.02-.01-1.97-.76-1.99-3.01ZM11.43 3.9c.52-.63.87-1.51.78-2.39-.75.03-1.66.5-2.2 1.13-.48.55-.9 1.45-.79 2.3.84.07 1.69-.42 2.21-1.04Z" />
    </svg>
  );
}
