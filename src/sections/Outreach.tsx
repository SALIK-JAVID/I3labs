import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Lightbox } from '../components/Lightbox';
import { ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=800',
    caption: 'Hands-on Robotics and Coding Workshop with Middle School Students.',
    category: 'Workshop'
  },
  {
    url: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800',
    caption: 'Virtual Reality (VR) immersive technology demonstration and exposure.',
    category: 'VR Demo'
  },
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    caption: 'Completed installation of the advanced IoT Innovation lab setup.',
    category: 'Lab Setup'
  },
  {
    url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
    caption: 'Student group receiving Excellence Award at the National STEM Expo.',
    category: 'Awards'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
    caption: 'Students assembling and tuning autonomous DIY quadcopter drone kits.',
    category: 'Buildathon'
  },
  {
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    caption: 'Showcasing AI and Smart City prototypes at local science exhibition.',
    category: 'Exhibitions'
  }
];

export const Outreach: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <Section id="outreach" bgType="navy" className="relative">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-orange mb-3 font-heading">
          Our Footprints
        </h2>
        <p className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
          Outreach & Events
        </p>
        <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((image, idx) => (
          <motion.div
            key={idx}
            className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#112437]/40 p-2 cursor-pointer shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            onClick={() => handleOpenLightbox(idx)}
          >
            {/* Aspect Ratio Box */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src={image.url} 
                alt={image.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <div className="p-3 bg-brand-orange text-white rounded-full mb-3 scale-75 group-hover:scale-100 transition-transform duration-300 glow-orange">
                  <ZoomIn size={20} />
                </div>
                <span className="text-[10px] tracking-wider font-extrabold font-heading text-brand-orange uppercase mb-1">
                  {image.category}
                </span>
                <p className="text-white text-xs leading-relaxed font-body">
                  {image.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex !== null}
        onClose={handleCloseLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </Section>
  );
};
