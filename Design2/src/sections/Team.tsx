import { motion } from 'framer-motion';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const leadership = [
  { name: 'Rajesh Kumar',   role: 'Founder & CEO',          initials: 'RK' },
  { name: 'Priya Sharma',   role: 'Chief Academic Officer',  initials: 'PS' },
  { name: 'Anand Verma',    role: 'Chief Technology Officer', initials: 'AV' },
];

const management = [
  { name: 'Kavita Nair',    role: 'Head of Curriculum',      initials: 'KN' },
  { name: 'Rohan Mehta',    role: 'Head of Partnerships',    initials: 'RM' },
  { name: 'Sonal Gupta',    role: 'Head of Training',        initials: 'SG' },
  { name: 'Vikram Joshi',   role: 'Head of R&D',             initials: 'VJ' },
];

const trainers = [
  { name: 'Arjun Das',      role: 'Robotics Lead Trainer',   initials: 'AD' },
  { name: 'Sneha Rao',      role: 'AI & Coding Trainer',     initials: 'SR' },
  { name: 'Mohit Singh',    role: 'IoT & Electronics Trainer', initials: 'MS' },
  { name: 'Divya Patel',    role: 'Innovation Mentor',       initials: 'DP' },
  { name: 'Rahul Bose',     role: 'Competition Coach',       initials: 'RB' },
];

function Avatar({ initials, size = 'md' }: { initials: string; size?: 'sm' | 'md' | 'lg' }) {
  const cls = {
    sm: 'w-10 h-10 text-[12px]',
    md: 'w-12 h-12 text-[13px]',
    lg: 'w-14 h-14 text-[14px]',
  }[size];
  return (
    <div className={`${cls} rounded-full flex items-center justify-center font-semibold text-blue-600 shrink-0`}
      style={{ backgroundColor: '#EFF6FF' }}>
      {initials}
    </div>
  );
}

function PersonCard({ name, role, initials, size = 'md' }: { name: string; role: string; initials: string; size?: 'sm' | 'md' | 'lg' }) {
  return (
    <div className="rounded-2xl p-4 flex flex-col items-center text-center bg-white gap-3">
      <Avatar initials={initials} size={size} />
      <div>
        <p className="text-[13px] font-semibold text-gray-900 leading-snug">{name}</p>
        <p className="text-[11px] text-gray-400 mt-0.5">{role}</p>
      </div>
    </div>
  );
}

export function Team() {
  return (
    <section id="team" className="py-24 px-6 sm:px-12 md:px-20 lg:px-28" style={{ backgroundColor: '#f0f0ee' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
        >
          <p className="text-[11px] font-medium text-blue-500 tracking-widest uppercase mb-4">Our Team</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-12 max-w-xl leading-[1.2]">
            The people behind the innovation.
          </h2>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, ease }}
          className="mb-10"
        >
          <p className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase mb-4">Leadership</p>
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
          <p className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase mb-4">Management</p>
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
          <p className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase mb-4">Trainers & Mentors</p>
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
