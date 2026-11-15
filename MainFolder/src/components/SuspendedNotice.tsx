import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, CreditCard, PauseCircle, ShieldCheck } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  { Icon: PauseCircle, title: 'Service paused', desc: 'Hosting and access have been temporarily suspended.' },
  { Icon: CreditCard, title: 'Dues pending', desc: 'There is an outstanding balance on this account.' },
  { Icon: ShieldCheck, title: 'Nothing is lost', desc: 'All content and data are safe and fully intact.' },
];

/** Full-screen notice shown while SITE_SUSPENDED is true (see src/suspension.ts). */
export function SuspendedNotice() {
  useEffect(() => {
    const prev = document.title;
    document.title = 'Website Temporarily Suspended';
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#050c18] font-sans text-slate-300">
      {/* Backdrop: grid + ambient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />
      <div aria-hidden className="ambient-orb left-[-10%] top-[-10%] h-[480px] w-[480px] bg-amber-500/25" />
      <div aria-hidden className="ambient-orb ambient-orb-slow bottom-[-15%] right-[-10%] h-[520px] w-[520px] bg-blue-600/25" />

      {/* Hazard stripe */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-2"
        style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #f59e0b 0 14px, #050c18 14px 28px)' }}
      />

      <div className="relative mx-auto flex min-h-dvh max-w-3xl flex-col items-center justify-center px-5 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease }}
          className="relative mb-10 grid h-24 w-24 place-items-center"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-amber-500/20 [animation-duration:2.4s]" />
          <span className="absolute inset-0 rounded-full border border-amber-400/40 bg-amber-500/10" />
          <PauseCircle className="relative h-11 w-11 text-amber-400" strokeWidth={1.5} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
          Service Notice
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="font-display text-[clamp(2.2rem,6vw,4rem)] font-bold leading-[1.05] tracking-tight text-white"
        >
          This website is
          <br />
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
            temporarily suspended
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.35 }}
          className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-400"
        >
          Access to this platform has been paused due to <strong className="font-semibold text-slate-200">outstanding payment dues</strong>.
          The website will be restored as soon as the pending balance is cleared.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.5 }}
          className="mt-12 grid w-full gap-3 sm:grid-cols-3"
        >
          {steps.map(({ Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 text-left backdrop-blur">
              <Icon className="h-5 w-5 text-amber-400" strokeWidth={1.7} />
              <p className="mt-3 font-display text-[15px] font-semibold text-white">{title}</p>
              <p className="mt-1 text-[13px] leading-relaxed text-slate-400">{desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-12 w-full rounded-2xl border border-blue-400/15 bg-blue-500/[0.06] px-6 py-5 text-[14px] leading-relaxed text-slate-400"
        >
          <p>
            <span className="font-semibold text-slate-200">Site owner?</span> Please clear the outstanding dues with your
            developer to restore the website immediately.
          </p>
          <p className="mt-2 inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-blue-300" />
            <span>
              <span className="font-semibold text-slate-200">Visitor?</span> We'll be back online soon. Thank you for your patience.
            </span>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
