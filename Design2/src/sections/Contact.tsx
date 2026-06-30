import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Logo = () => (
  <svg width="13" height="13" viewBox="0 0 256 256" fill="none">
    <path
      fill="rgb(84,84,84)"
      d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
    />
  </svg>
);

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
      <section id="contact" className="py-24 px-6 sm:px-12 md:px-20 lg:px-28" style={{ backgroundColor: '#f0f0ee' }}>
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease }}
          >
            <p className="text-[11px] font-medium text-blue-500 tracking-widest uppercase mb-4">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-3 max-w-xl leading-[1.2]">
              Start your institution's STEM journey.
            </h2>
            <p className="text-[13px] text-gray-400 mb-12 max-w-md">
              Tell us about your school or university and we'll put together a proposal tailored to your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact info */}
            <motion.div
              className="lg:col-span-2 flex flex-col gap-4"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, ease }}
            >
              {[
                { Icon: Mail,    label: 'Email',   value: 'hello@i3labs.in'     },
                { Icon: Phone,   label: 'Phone',   value: '+91 98765 43210'     },
                { Icon: MapPin,  label: 'Office',  value: 'Bangalore, India'    },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3 rounded-2xl p-4" style={{ backgroundColor: '#f0f0ee' }}>
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={14} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase mb-0.5">{label}</p>
                    <p className="text-[13px] font-medium text-gray-900">{value}</p>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl p-5 mt-2" style={{ backgroundColor: '#f0f0ee' }}>
                <p className="text-[11px] font-semibold text-gray-400 tracking-widest uppercase mb-3">Follow Us</p>
                <div className="flex gap-2 flex-wrap">
                  {['LinkedIn', 'Instagram', 'YouTube', 'Twitter'].map(s => (
                    <span key={s} className="text-[11px] font-medium text-gray-600 bg-white rounded-full px-3 py-1.5">{s}</span>
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
                <div className="h-full flex flex-col items-center justify-center text-center py-12 rounded-2xl" style={{ backgroundColor: '#f0f0ee' }}>
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                    <Send size={18} className="text-white" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-gray-900 mb-2">Message sent!</h3>
                  <p className="text-[12.5px] text-gray-500 max-w-xs">We'll be in touch within 24 hours to discuss your institution's STEM needs.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-medium text-gray-500 mb-1.5">Your Name</label>
                      <input
                        name="name" value={form.name} onChange={handleChange} required
                        placeholder="Jane Doe"
                        className="w-full rounded-xl px-4 py-3 text-[13px] bg-[#f0f0ee] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-gray-500 mb-1.5">Email Address</label>
                      <input
                        name="email" type="email" value={form.email} onChange={handleChange} required
                        placeholder="jane@school.edu"
                        className="w-full rounded-xl px-4 py-3 text-[13px] bg-[#f0f0ee] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400 transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-gray-500 mb-1.5">Institution Name</label>
                    <input
                      name="institution" value={form.institution} onChange={handleChange}
                      placeholder="Delhi Public School, Bangalore"
                      className="w-full rounded-xl px-4 py-3 text-[13px] bg-[#f0f0ee] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-gray-500 mb-1.5">Message</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} rows={5} required
                      placeholder="Tell us about your institution, current STEM setup, and what you're looking to achieve..."
                      className="w-full rounded-xl px-4 py-3 text-[13px] bg-[#f0f0ee] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 rounded-full py-3 px-8 text-[13px] font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors self-start"
                  >
                    Send Message
                    <Send size={13} />
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-12 md:px-20 lg:px-28 py-10 border-t border-gray-100" style={{ backgroundColor: '#f0f0ee' }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Logo />
            <div>
              <p className="text-[12px] font-semibold text-gray-800 leading-none">i3 Labs</p>
              <p className="text-[8px] font-medium text-gray-400 tracking-wider uppercase leading-none mt-[3px]">Innovations Unleashed</p>
            </div>
          </div>
          <p className="text-[11px] text-gray-400">© {new Date().getFullYear()} i3 Labs. All rights reserved.</p>
          <div className="flex gap-4">
            {['Privacy', 'Terms', 'Sitemap'].map(l => (
              <a key={l} href="#" className="text-[11px] text-gray-400 hover:text-gray-600 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
