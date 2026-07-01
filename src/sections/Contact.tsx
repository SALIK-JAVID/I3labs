import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Phone, Mail, MapPin, Globe, Send, CheckCircle2, Linkedin, Twitter, Facebook, Youtube, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.';
    }
    if (!formData.institution.trim()) newErrors.institution = 'Institution name is required.';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate server request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', institution: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error on type
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Programs', href: '#3ipp' },
    { name: 'Why Us', href: '#why-us' }
  ];

  return (
    <Section id="contact" bgType="dark" className="!pb-0">
      
      {/* Contact Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-orange mb-3 font-heading">
          Get In Touch
        </h2>
        <p className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
          Let's Build the Future Together
        </p>
        <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto mb-20 font-body">
        
        {/* Left: Contact Info */}
        <motion.div 
          className="lg:col-span-5 flex flex-col justify-between"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-8">
            <h3 className="text-xl md:text-2xl font-bold font-heading text-white">
              i3 Labs
            </h3>
            <p className="text-slate-350 text-xs sm:text-sm leading-relaxed max-w-sm">
              We operate as <span className="text-brand-orange font-bold font-heading">"i3 Labs — Innovations Unleashed"</span>, delivering comprehensive STEM, robotics, and AI programs to schools.
            </p>

            <div className="space-y-5">
              {/* Phone */}
              <a 
                href="tel:+919796570562" 
                className="flex items-center gap-4 group text-slate-300 hover:text-brand-orange transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-navy border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone size={18} className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-450 uppercase font-semibold font-heading">Call Us</p>
                  <p className="text-sm font-bold">+91-9796570562</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:hello@i3labs.in" 
                className="flex items-center gap-4 group text-slate-300 hover:text-brand-orange transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-navy border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail size={18} className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-450 uppercase font-semibold font-heading">Email Us</p>
                  <p className="text-sm font-bold">hello@i3labs.in</p>
                </div>
              </a>

              {/* Web */}
              <a 
                href="https://www.i3labs.in" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group text-slate-300 hover:text-brand-orange transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-navy border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Globe size={18} className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-455 uppercase font-semibold font-heading">Website</p>
                  <p className="text-sm font-bold">www.i3labs.in</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-brand-navy border border-white/5 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-450 uppercase font-semibold font-heading">Our Office</p>
                  <p className="text-xs font-semibold leading-relaxed">
                    Opposite Institute of Technology, Zakura Crossing, Srinagar, J&K.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10">
            <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-4 font-heading">
              Connect With Us
            </h4>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Youtube, href: '#' },
                { Icon: Instagram, href: '#' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-9 h-9 rounded-xl bg-[#112437]/50 hover:bg-brand-orange border border-white/5 hover:border-transparent flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  <social.Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 bg-[#112437]/25 relative min-h-[460px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="text-xs font-semibold text-slate-300 block mb-1.5 font-heading">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-[#0b1622]/80 border ${errors.name ? 'border-red-400' : 'border-white/10'} focus:border-brand-orange rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-[10px] text-red-400 mt-1 block">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="text-xs font-semibold text-slate-300 block mb-1.5 font-heading">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-[#0b1622]/80 border ${errors.email ? 'border-red-400' : 'border-white/10'} focus:border-brand-orange rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-[10px] text-red-400 mt-1 block">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Institution */}
                  <div>
                    <label htmlFor="institution" className="text-xs font-semibold text-slate-300 block mb-1.5 font-heading">Institution / School Name</label>
                    <input 
                      type="text" 
                      id="institution"
                      name="institution" 
                      value={formData.institution}
                      onChange={handleChange}
                      className={`w-full bg-[#0b1622]/80 border ${errors.institution ? 'border-red-400' : 'border-white/10'} focus:border-brand-orange rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                      placeholder="e.g. Green Valley School"
                    />
                    {errors.institution && <span className="text-[10px] text-red-400 mt-1 block">{errors.institution}</span>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="text-xs font-semibold text-slate-300 block mb-1.5 font-heading">Message / Requirements</label>
                    <textarea 
                      id="message"
                      name="message" 
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-[#0b1622]/80 border ${errors.message ? 'border-red-400' : 'border-white/10'} focus:border-brand-orange rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-0 transition-colors resize-none`}
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                    {errors.message && <span className="text-[10px] text-red-400 mt-1 block">{errors.message}</span>}
                  </div>

                  {/* Submit button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-brand-orange text-white text-sm font-bold font-heading rounded-xl hover:bg-brand-orangeLight transition-all duration-200 shadow-md glow-orange disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Submit Partnership Request</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  className="flex flex-col items-center text-center p-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-550/20 flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2">Request Received!</h3>
                  <p className="text-slate-400 text-sm max-w-sm mb-6">
                    Thank you for reaching out. A representative from i3 Labs will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-[#112437] hover:bg-white/5 border border-white/10 text-white rounded-xl text-xs font-bold font-heading transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 md:py-16 mt-20 bg-brand-darkBg text-slate-400 relative z-10 text-xs sm:text-sm font-body">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand details */}
          <div className="space-y-4 col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold font-heading text-white">
                i3 <span className="text-brand-orange">Labs</span>
              </span>
            </div>
            <p className="text-slate-450 text-xs max-w-sm leading-relaxed">
              Nurturing Future Builders. We deliver an end-to-end, MSME-registered STEM innovation ecosystem (labs, trainers, certifications, and patents) for educational institutions since 2010.
            </p>
            <p className="text-[11px] text-slate-500">
              Founder: i3 Labs — Innovations Unleashed
            </p>
          </div>

          {/* Col 2: Navigation links */}
          <div>
            <h4 className="text-white font-bold font-heading text-xs uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal & Regulatory */}
          <div>
            <h4 className="text-white font-bold font-heading text-xs uppercase tracking-wider mb-4">
              Alignment & Accreditations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-450">
              <li>CBSE / ICSE STEM Syllabus</li>
              <li>NEP 2020 Compliant</li>
              <li>MSME Registration No. Available</li>
              <li>Startup India Registered Enterprise</li>
            </ul>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} i3 Labs. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Attribution */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6 text-center">
          <p className="text-[11px] text-slate-500">
            Designed &amp; Developed by{' '}
            <a
              href="https://www.salikjavid.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-400 hover:text-brand-orange transition-colors underline-offset-2 hover:underline"
            >
              Salik Javid
            </a>
          </p>
        </div>
      </footer>

    </Section>
  );
};
