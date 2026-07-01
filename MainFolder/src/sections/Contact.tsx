import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Send } from 'lucide-react';
import { I3Mark } from '../components/Logo';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const BG     = '#060e1c';
const CARD   = '#0c1b2e';
const INPUT  = '#0a1829';
const BORDER = 'rgba(255,255,255,0.06)';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', institution: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section id="contact" className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden"
        style={{ backgroundColor: BG }}>

        {/* Ambient orbs */}
        <div className="ambient-orb absolute w-96 h-96 -bottom-20 -left-20 opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)' }} />
        <div className="ambient-orb-slow absolute w-72 h-72 top-0 right-10 opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(99,179,237,0.35) 0%, transparent 70%)' }} />

        <div className="max-w-6xl mx-auto relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease }}
          >
            <p className="text-[11px] font-medium text-blue-400 tracking-widest uppercase mb-4">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3 max-w-xl leading-[1.2]">
              Let's Build the Future Together
            </h2>
            <p className="text-[13px] text-slate-400 mb-12 max-w-md">
              Tell us about your school or university and we'll put together a proposal tailored to your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact info */}
            <motion.div
              className="lg:col-span-2 flex flex-col gap-3"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, ease }}
            >
              {/* Brand blurb */}
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-white mb-3">i3 Labs</h3>
                <p className="text-[13px] text-slate-400 leading-relaxed max-w-sm">
                  We operate as <span className="font-semibold text-blue-400">"i3 Labs — Innovations Unleashed"</span>, delivering comprehensive STEM, robotics, and AI programs to schools.
                </p>
              </div>

              {[
                { Icon: Phone,  label: 'Call Us',    value: '+91-9796570562'  },
                { Icon: Mail,   label: 'Email Us',   value: 'hello@i3labs.in' },
                { Icon: Globe,  label: 'Website',    value: 'www.i3labs.in'   },
                { Icon: MapPin, label: 'Our Office', value: 'Opposite Institute of Technology, Zakura Crossing, Srinagar, J&K.' },
              ].map(({ Icon, label, value }) => (
                <motion.div key={label}
                  className="flex items-start gap-3 rounded-2xl p-4 border card-glow"
                  style={{ backgroundColor: CARD, borderColor: BORDER }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <div className="w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.2)' }}>
                    <Icon size={14} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase mb-0.5">{label}</p>
                    <p className="text-[13px] font-medium text-white">{value}</p>
                  </div>
                </motion.div>
              ))}

              <div className="rounded-2xl p-5 border mt-1" style={{ backgroundColor: CARD, borderColor: BORDER }}>
                <p className="text-[11px] font-semibold text-slate-500 tracking-widest uppercase mb-3">Connect With Us</p>
                <div className="flex gap-2 flex-wrap">
                  {['LinkedIn', 'Instagram', 'YouTube', 'Twitter'].map(s => (
                    <span key={s} className="text-[11px] font-medium text-slate-300 border rounded-full px-3 py-1.5 hover:text-white transition-colors cursor-pointer"
                      style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: BORDER }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, ease }}
            >
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 rounded-2xl border"
                  style={{ backgroundColor: CARD, borderColor: BORDER }}>
                  <motion.div
                    className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4"
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  >
                    <Send size={18} className="text-white" />
                  </motion.div>
                  <h3 className="text-[15px] font-semibold text-white mb-2">Message sent!</h3>
                  <p className="text-[12.5px] text-slate-400 max-w-xs">
                    We'll be in touch within 24 hours to discuss your institution's STEM needs.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-400 mb-1.5">Your Name</label>
                      <input
                        name="name" value={form.name} onChange={handleChange} required
                        placeholder="Jane Doe"
                        className="w-full rounded-xl px-4 py-3 text-[13px] border text-white placeholder-slate-500 outline-none focus:ring-1 focus:ring-blue-400 transition"
                        style={{ backgroundColor: INPUT, borderColor: BORDER }}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-400 mb-1.5">Email Address</label>
                      <input
                        name="email" type="email" value={form.email} onChange={handleChange} required
                        placeholder="jane@school.edu"
                        className="w-full rounded-xl px-4 py-3 text-[13px] border text-white placeholder-slate-500 outline-none focus:ring-1 focus:ring-blue-400 transition"
                        style={{ backgroundColor: INPUT, borderColor: BORDER }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1.5">Institution Name</label>
                    <input
                      name="institution" value={form.institution} onChange={handleChange}
                      placeholder="Delhi Public School, Bangalore"
                      className="w-full rounded-xl px-4 py-3 text-[13px] border text-white placeholder-slate-500 outline-none focus:ring-1 focus:ring-blue-400 transition"
                      style={{ backgroundColor: INPUT, borderColor: BORDER }}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1.5">Message</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} rows={5} required
                      placeholder="Tell us about your institution, current STEM setup, and what you're looking to achieve..."
                      className="w-full rounded-xl px-4 py-3 text-[13px] border text-white placeholder-slate-500 outline-none focus:ring-1 focus:ring-blue-400 transition resize-none"
                      style={{ backgroundColor: INPUT, borderColor: BORDER }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="flex items-center justify-center gap-2 rounded-full py-3 px-8 text-[13px] font-medium text-white bg-blue-500 hover:bg-blue-400 transition-colors self-start"
                    whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Send Message
                    <Send size={13} />
                  </motion.button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-12 md:px-20 lg:px-28 py-10 border-t"
        style={{ backgroundColor: '#040a14', borderColor: BORDER }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <I3Mark size={22} className="text-slate-300" />
            <div>
              <p className="text-[12px] font-semibold text-slate-300 leading-none">i3 Labs</p>
              <p className="text-[8px] font-medium text-slate-500 tracking-wider uppercase leading-none mt-0.5">Innovations Unleashed</p>
            </div>
          </div>
          <p className="text-[11px] text-slate-500">© {new Date().getFullYear()} i3 Labs. All rights reserved.</p>
          <div className="flex gap-4">
            {['Privacy', 'Terms', 'Sitemap'].map(l => (
              <a key={l} href="#" className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors">{l}</a>
            ))}
          </div>
        </div>

        {/* Attribution */}
        <div className="max-w-6xl mx-auto mt-6 text-center">
          <p className="text-[11px] text-slate-500">
            Designed &amp; Developed by{' '}
            <a
              href="https://www.salikjavid.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-400 hover:text-blue-400 transition-colors underline-offset-2 hover:underline"
            >
              Salik Javid
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
