import { motion } from 'framer-motion';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const BG     = '#050c18';
const CARD   = '#0c1b2e';
const AVATAR = '#0f2038';
const BORDER = 'rgba(255,255,255,0.06)';

const leadership = [
  { name: 'Dr. Afshan',  role: 'Director',                       initials: 'DA' },
  { name: 'Er. Yousman', role: 'Chief Technology Officer (CTO)', initials: 'EY' },
  { name: 'Er. Farhat',  role: 'Chief Operating Officer (COO)',  initials: 'EF' },
];

const management = [
  { name: 'Er. Abaan',  role: 'Tech Operations Manager', initials: 'EA' },
  { name: 'Er. Moazam', role: 'R&D Manager',             initials: 'EM' },
  { name: 'Er. Toiba',  role: 'Project Engineer',        initials: 'ET' },
];

const trainers = [
  { name: 'Er. Sabura', role: 'Lead Trainer',        initials: 'ES' },
  { name: 'Er. Irtiqa', role: 'Lead Trainer',        initials: 'EI' },
  { name: 'Er. Rabiya', role: 'STEM Solutions Lead', initials: 'ER' },
  { name: 'Er. Tabin',  role: 'STEM Solutions Lead', initials: 'ET' },
  { name: 'Er. Azraw',  role: 'STEM Trainer',        initials: 'EA' },
];

function Avatar({ initials, size = 'md' }: { initials: string; size?: 'sm' | 'md' | 'lg' }) {
  const cls = { sm: 'w-10 h-10 text-[12px]', md: 'w-12 h-12 text-[13px]', lg: 'w-14 h-14 text-[14px]' }[size];
  return (
    <div className={`${cls} rounded-full flex items-center justify-center font-semibold text-blue-400 shrink-0 border`}
      style={{ backgroundColor: AVATAR, borderColor: 'rgba(59,130,246,0.2)' }}>
      {initials}
    </div>
  );
}

function PersonCard({ name, role, initials, size = 'md' }: { name: string; role: string; initials: string; size?: 'sm' | 'md' | 'lg' }) {
  return (
    <motion.div
      className="rounded-2xl p-4 flex flex-col items-center text-center border card-glow gap-3"
      style={{ backgroundColor: CARD, borderColor: BORDER }}
      whileHover={{ y: -5, transition: { duration: 0.22, ease: 'easeOut' } }}
    >
      <Avatar initials={initials} size={size} />
      <div>
        <p className="text-[13px] font-semibold text-white leading-snug">{name}</p>
        <p className="text-[11px] text-slate-400 mt-0.5">{role}</p>
      </div>
    </motion.div>
  );
}

export function Team() {
  return (
    <section id="team" className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden"
      style={{ backgroundColor: BG }}>

      {/* Ambient orb */}
      <div className="ambient-orb absolute w-96 h-96 -top-16 right-0 opacity-12 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
        >
          <p className="text-[11px] font-medium text-blue-400 tracking-widest uppercase mb-4">Our Team</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-12 max-w-xl leading-[1.2]">
            The Minds Behind i3 Labs
          </h2>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, ease }}
          className="mb-10"
        >
          <p className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase mb-4">Core Leadership</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {leadership.map((p, i) => (
              <motion.div key={p.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease, delay: i * 0.08 }}>
                <PersonCard {...p} size="lg" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="mb-10"
        >
          <p className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase mb-4">Engineering & Management</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {management.map((p, i) => (
              <motion.div key={p.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease, delay: i * 0.07 }}>
                <PersonCard {...p} size="md" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trainers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, ease, delay: 0.2 }}
        >
          <p className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase mb-4">Trainers & Mentors</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {trainers.map((p, i) => (
              <motion.div key={p.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease, delay: i * 0.06 }}>
                <PersonCard {...p} size="sm" />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
