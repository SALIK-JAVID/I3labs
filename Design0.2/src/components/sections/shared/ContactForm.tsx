"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { interests, validateContact, type ContactInput } from "@/lib/contact";
import { EASE, cn } from "@/lib/utils";

type Errors = Partial<Record<keyof ContactInput, string>>;

const empty: ContactInput = { name: "", email: "", phone: "", institution: "", interest: "", message: "" };

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="label mb-2 block">{label}</label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1.5 text-[13px] text-or-ink"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputCls = (err?: string) =>
  cn(
    "w-full rounded-xl border bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink-4 transition-colors focus:bg-sheet focus:outline-none",
    err ? "border-or" : "border-line focus:border-ink",
  );

export function ContactForm() {
  const [data, setData] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  const set = (k: keyof ContactInput) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validateContact(data);
    setErrors(v);
    if (Object.keys(v).length) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        if (json.errors) setErrors(json.errors);
        setStatus("failed");
        return;
      }
      setStatus("sent");
      setData(empty);
    } catch {
      setStatus("failed");
    }
  };

  const a11y = (k: keyof ContactInput) => ({
    id: k,
    "aria-invalid": Boolean(errors[k]),
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  return (
    <div className="card relative overflow-hidden p-6 sm:p-10">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE.out }}
            className="flex min-h-[480px] flex-col items-center justify-center text-center"
          >
            <motion.span
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
              className="grid size-20 place-items-center rounded-full bg-or text-white"
            >
              <CheckCircle2 className="size-10" strokeWidth={1.6} />
            </motion.span>
            <h3 className="mt-8 text-3xl font-semibold">Message sent!</h3>
            <p className="mt-3 max-w-sm text-ink-2">Thanks for reaching out. A STEM consultant will get back to you within one working day.</p>
            <button type="button" onClick={() => setStatus("idle")} className="mt-8 text-[14px] font-medium text-or-ink underline-offset-4 hover:underline">
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" exit={{ opacity: 0, y: -10 }} onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Full name *" error={errors.name}>
              <input {...a11y("name")} value={data.name} onChange={set("name")} placeholder="Jane Doe" autoComplete="name" className={inputCls(errors.name)} />
            </Field>
            <Field id="email" label="Email address *" error={errors.email}>
              <input {...a11y("email")} type="email" value={data.email} onChange={set("email")} placeholder="jane@school.edu" autoComplete="email" className={inputCls(errors.email)} />
            </Field>
            <Field id="phone" label="Phone" error={errors.phone}>
              <input {...a11y("phone")} type="tel" value={data.phone} onChange={set("phone")} placeholder="+91 98765 43210" autoComplete="tel" className={inputCls(errors.phone)} />
            </Field>
            <Field id="institution" label="Institution *" error={errors.institution}>
              <input {...a11y("institution")} value={data.institution} onChange={set("institution")} placeholder="Delhi Public School, Srinagar" autoComplete="organization" className={inputCls(errors.institution)} />
            </Field>
            <div className="sm:col-span-2">
              <Field id="interest" label="I'm interested in *" error={errors.interest}>
                <div role="radiogroup" aria-label="Interest" className="flex flex-wrap gap-2">
                  {interests.map((it) => (
                    <button
                      key={it}
                      type="button"
                      role="radio"
                      aria-checked={data.interest === it}
                      onClick={() => {
                        setData((d) => ({ ...d, interest: it }));
                        setErrors((er) => ({ ...er, interest: undefined }));
                      }}
                      className={cn(
                        "rounded-full border px-4 py-2 text-[14px] transition-all",
                        data.interest === it ? "border-or bg-or text-white" : "border-line bg-paper text-ink-2 hover:border-ink",
                      )}
                    >
                      {it}
                    </button>
                  ))}
                </div>
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field id="message" label="Message *" error={errors.message}>
                <textarea
                  {...a11y("message")}
                  rows={5}
                  value={data.message}
                  onChange={set("message")}
                  placeholder="Tell us about your institution, current STEM setup and what you'd like to achieve…"
                  className={cn(inputCls(errors.message), "resize-none")}
                />
              </Field>
            </div>
            <div className="flex flex-col-reverse items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[13px] text-ink-3">
                {status === "failed" ? <span className="text-or-ink">Something went wrong — please try again.</span> : "We reply within one working day."}
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-or pl-6 pr-1.5 text-[15px] font-medium text-white shadow-[var(--shadow-glow)] transition-colors hover:bg-[#e46a14] disabled:opacity-70"
              >
                {status === "sending" ? "Sending…" : "Send message"}
                <span className="grid size-9 place-items-center rounded-full bg-white/20 transition-transform duration-500 group-hover:rotate-45">
                  {status === "sending" ? <Loader2 className="size-4 animate-spin" /> : <ArrowUpRight className="size-4" />}
                </span>
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
