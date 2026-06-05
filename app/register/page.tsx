"use client";

import {
  useCallback,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
} from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";
import {
  ArrowRight,
  Check,
  Doc,
  Lock,
  ShieldCheck,
  Upload,
} from "@/components/Icons";

type StepId = "company" | "director" | "contact" | "documents" | "review";

const steps: { id: StepId; label: string }[] = [
  { id: "company", label: "Company" },
  { id: "director", label: "Director" },
  { id: "contact", label: "Contact" },
  { id: "documents", label: "Documents" },
  { id: "review", label: "Review" },
];

const requiredDocs = [
  "Passport Copy",
  "National ID",
  "Company License",
  "Incorporation Documents",
  "Proof of Address",
];

const ACCEPTED = [".pdf", ".png", ".jpg", ".jpeg"];
const MAX_MB = 10;

type UploadedFile = {
  id: string;
  name: string;
  size: number;
  progress: number;
  error?: string;
};

export default function RegisterPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [saved, setSaved] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const step = steps[stepIndex];
  const progress = Math.round(((stepIndex + 1) / steps.length) * 100);

  const goNext = () =>
    setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  const goBack = () => setStepIndex((i) => Math.max(i - 1, 0));

  const addFiles = useCallback((list: FileList | null) => {
    if (!list) return;
    const next: UploadedFile[] = [];
    Array.from(list).forEach((file) => {
      const ext = "." + file.name.split(".").pop()?.toLowerCase();
      const id = `${file.name}-${file.size}-${file.lastModified}`;
      let error: string | undefined;
      if (!ACCEPTED.includes(ext)) error = "Unsupported file type";
      else if (file.size > MAX_MB * 1024 * 1024)
        error = `File exceeds ${MAX_MB}MB`;
      next.push({
        id,
        name: file.name,
        size: file.size,
        progress: error ? 0 : 5,
        error,
      });
    });

    setFiles((prev) => {
      const merged = [...prev];
      next.forEach((f) => {
        if (!merged.some((m) => m.id === f.id)) merged.push(f);
      });
      return merged;
    });

    // Simulate secure encrypted upload progress
    next
      .filter((f) => !f.error)
      .forEach((f) => {
        const tick = () => {
          setFiles((prev) =>
            prev.map((p) => {
              if (p.id !== f.id || p.error) return p;
              const inc = Math.min(100, p.progress + 18);
              return { ...p, progress: inc };
            })
          );
        };
        let count = 0;
        const interval = setInterval(() => {
          tick();
          count += 1;
          if (count >= 6) clearInterval(interval);
        }, 220);
      });
  }, []);

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    addFiles(e.dataTransfer.files);
  };

  const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
    addFiles(e.target.files);
    e.target.value = "";
  };

  const removeFile = (id: string) =>
    setFiles((prev) => prev.filter((f) => f.id !== id));

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="min-h-screen bg-mist/50">
      {/* Local header */}
      <div className="border-b border-cloud bg-white">
        <div className="container-xl flex h-16 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-3 text-sm text-navy-500">
            <button
              onClick={() => {
                setSaved(true);
                setTimeout(() => setSaved(false), 2200);
              }}
              className="hidden items-center gap-1.5 rounded-full border border-cloud px-3.5 py-2 font-medium text-navy-600 hover:bg-mist sm:inline-flex"
            >
              {saved ? (
                <>
                  <Check className="h-4 w-4 text-emerald-500" /> Saved
                </>
              ) : (
                "Save & continue later"
              )}
            </button>
            <Link href="/dashboard" className="font-medium text-royal-600">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      <div className="container-xl grid gap-10 py-12 lg:grid-cols-[300px_1fr] lg:py-16">
        {/* Sidebar */}
        <aside>
          <div className="sticky top-24">
            <span className="eyebrow">Business Onboarding</span>
            <h1 className="mt-4 font-display text-2xl font-bold text-navy-900">
              Open your business account
            </h1>
            <p className="mt-2 text-sm text-navy-500">
              Complete the steps below. Your information is encrypted and handled
              under our compliance procedures.
            </p>

            <div className="mt-7 space-y-1">
              {steps.map((s, i) => {
                const state =
                  i < stepIndex ? "done" : i === stepIndex ? "active" : "todo";
                return (
                  <button
                    key={s.id}
                    onClick={() => i <= stepIndex && setStepIndex(i)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                      state === "active"
                        ? "bg-white font-semibold text-navy-900 shadow-soft"
                        : "text-navy-500 hover:bg-white/60"
                    }`}
                  >
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${
                        state === "done"
                          ? "bg-emerald-500 text-white"
                          : state === "active"
                            ? "bg-royal-500 text-white"
                            : "bg-cloud text-navy-400"
                      }`}
                    >
                      {state === "done" ? <Check className="h-4 w-4" /> : i + 1}
                    </span>
                    {s.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-cloud bg-white p-4">
              <div className="flex items-center justify-between text-xs font-medium text-navy-500">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-cloud">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-royal-500 to-emerald-500"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-navy-400">
                <Lock className="h-3.5 w-3.5" /> Bank-grade encryption
              </p>
            </div>
          </div>
        </aside>

        {/* Form panel */}
        <div className="card p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={completed ? "done" : step.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
            >
              {completed ? (
                <Success />
              ) : (
                <>
                  {step.id === "company" && <CompanyStep />}
                  {step.id === "director" && <DirectorStep />}
                  {step.id === "contact" && <ContactStep />}
                  {step.id === "documents" && (
                    <DocumentsStep
                      files={files}
                      dragOver={dragOver}
                      setDragOver={setDragOver}
                      onDrop={onDrop}
                      onSelect={onSelect}
                      inputRef={inputRef}
                      removeFile={removeFile}
                      formatSize={formatSize}
                    />
                  )}
                  {step.id === "review" && <ReviewStep files={files} />}
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {!completed && (
            <div className="mt-8 flex items-center justify-between border-t border-cloud pt-6">
              <button
                onClick={goBack}
                disabled={stepIndex === 0}
                className="btn-ghost disabled:opacity-40"
              >
                Back
              </button>
              {step.id === "review" ? (
                <button
                  onClick={() => setCompleted(true)}
                  className="btn-emerald"
                >
                  Submit application <Check className="h-4 w-4" />
                </button>
              ) : (
                <button onClick={goNext} className="btn-primary">
                  Continue <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Steps ---------- */

function StepHeading({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mb-6">
      <h2 className="font-display text-xl font-bold text-navy-900">{title}</h2>
      <p className="mt-1 text-sm text-navy-500">{desc}</p>
    </div>
  );
}

function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-cloud bg-white px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 focus:border-royal-400 focus:outline-none focus:ring-2 focus:ring-royal-500/30"
      />
    </div>
  );
}

function CompanyStep() {
  return (
    <>
      <StepHeading
        title="Company information"
        desc="Tell us about your registered business entity."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Company name" placeholder="Acme Trading FZ-LLC" />
        <Input label="Registration number" placeholder="e.g. 1234567" />
        <Input label="Country of incorporation" placeholder="United Arab Emirates" />
        <Input label="Business activity" placeholder="Wholesale & trade" />
        <div className="sm:col-span-2">
          <Input label="Company website" placeholder="https://company.com" />
        </div>
      </div>
    </>
  );
}

function DirectorStep() {
  return (
    <>
      <StepHeading
        title="Director information"
        desc="Details of the primary director or authorised signatory."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Full name" placeholder="Jane Alexandra Doe" />
        <Input label="Nationality" placeholder="British" />
        <Input label="Date of birth" type="date" />
        <Input label="Passport number" placeholder="P1234567" />
      </div>
    </>
  );
}

function ContactStep() {
  return (
    <>
      <StepHeading
        title="Contact information"
        desc="How we can reach the business during onboarding."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Email" type="email" placeholder="jane@company.com" />
        <Input label="Phone" type="tel" placeholder="+971 50 000 0000" />
        <div className="sm:col-span-2">
          <Input
            label="Registered address"
            placeholder="Street, City, Country, Postal code"
          />
        </div>
      </div>
    </>
  );
}

function DocumentsStep({
  files,
  dragOver,
  setDragOver,
  onDrop,
  onSelect,
  inputRef,
  removeFile,
  formatSize,
}: {
  files: UploadedFile[];
  dragOver: boolean;
  setDragOver: (v: boolean) => void;
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
  onSelect: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  removeFile: (id: string) => void;
  formatSize: (b: number) => string;
}) {
  return (
    <>
      <StepHeading
        title="Document upload"
        desc="Upload clear copies of the required documents. Files are encrypted on upload."
      />

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && inputRef.current?.click()
        }
        className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-colors ${
          dragOver
            ? "border-royal-400 bg-royal-50"
            : "border-cloud bg-mist/60 hover:border-royal-300"
        }`}
      >
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-royal-600 shadow-soft">
          <Upload className="h-6 w-6" />
        </span>
        <p className="mt-4 font-semibold text-navy-800">
          Drag &amp; drop files here
        </p>
        <p className="mt-1 text-sm text-navy-500">
          or <span className="font-medium text-royal-600">browse</span> — PDF,
          PNG, JPG up to {MAX_MB}MB
        </p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={ACCEPTED.join(",")}
          onChange={onSelect}
          className="hidden"
        />
      </div>

      {/* Required checklist */}
      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        {requiredDocs.map((d) => (
          <span
            key={d}
            className="flex items-center gap-2 rounded-xl border border-cloud bg-white px-3 py-2.5 text-sm text-navy-700"
          >
            <Doc className="h-4 w-4 text-royal-500" /> {d}
          </span>
        ))}
      </div>

      {/* Uploaded files */}
      {files.length > 0 && (
        <ul className="mt-6 space-y-3">
          {files.map((f) => (
            <li
              key={f.id}
              className="flex items-center gap-4 rounded-xl border border-cloud bg-white p-3.5"
            >
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${
                  f.error
                    ? "bg-rose-50 text-rose-500"
                    : f.progress >= 100
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-royal-50 text-royal-600"
                }`}
              >
                {f.error ? (
                  "!"
                ) : f.progress >= 100 ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <Doc className="h-5 w-5" />
                )}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-medium text-navy-800">
                    {f.name}
                  </p>
                  <button
                    onClick={() => removeFile(f.id)}
                    className="text-xs font-medium text-navy-400 hover:text-rose-500"
                  >
                    Remove
                  </button>
                </div>
                {f.error ? (
                  <p className="text-xs text-rose-500">{f.error}</p>
                ) : (
                  <>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-cloud">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-royal-500 to-emerald-500"
                        animate={{ width: `${f.progress}%` }}
                        transition={{ duration: 0.25 }}
                      />
                    </div>
                    <p className="mt-1 text-xs text-navy-400">
                      {formatSize(f.size)} ·{" "}
                      {f.progress >= 100
                        ? "Encrypted & uploaded"
                        : `Uploading ${f.progress}%`}
                    </p>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-5 flex items-center gap-2 text-xs text-navy-400">
        <Lock className="h-3.5 w-3.5" /> All documents are transmitted over an
        encrypted connection and stored securely.
      </p>
    </>
  );
}

function ReviewStep({ files }: { files: UploadedFile[] }) {
  return (
    <>
      <StepHeading
        title="Review & submit"
        desc="Confirm your details before submitting for compliance review."
      />
      <div className="space-y-4">
        {[
          { t: "Company information", v: "Provided" },
          { t: "Director information", v: "Provided" },
          { t: "Contact information", v: "Provided" },
          {
            t: "Documents",
            v: `${files.filter((f) => !f.error).length} uploaded`,
          },
        ].map((row) => (
          <div
            key={row.t}
            className="flex items-center justify-between rounded-xl border border-cloud bg-mist/50 px-4 py-3.5"
          >
            <span className="text-sm font-medium text-navy-800">{row.t}</span>
            <span className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
              <Check className="h-4 w-4" /> {row.v}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl bg-navy-50 p-4 text-xs leading-relaxed text-navy-600">
        By submitting, you confirm the information provided is accurate. Account
        approval is subject to successful verification and due diligence review
        under our compliance procedures.
      </div>
    </>
  );
}

function Success() {
  return (
    <div className="flex min-h-[460px] flex-col items-center justify-center text-center">
      <motion.span
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 16 }}
        className="grid h-20 w-20 place-items-center rounded-full bg-emerald-50 text-emerald-600"
      >
        <ShieldCheck className="h-10 w-10" />
      </motion.span>
      <h2 className="mt-6 font-display text-2xl font-bold text-navy-900">
        Application submitted
      </h2>
      <p className="mt-2 max-w-md text-navy-500">
        Thank you. Your application is now with our compliance team for KYC, KYB
        and AML review. We&apos;ll be in touch within 1–2 business days with the
        next steps.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/dashboard" className="btn-primary">
          Go to dashboard <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/" className="btn-secondary">
          Back to home
        </Link>
      </div>
    </div>
  );
}
