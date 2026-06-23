import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { url: string; caption: string }[];
  currentIndex: number | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, isOpen, onClose, onNext, onPrev }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {isOpen && currentIndex !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-black/95 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 z-50 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Left navigation */}
          <button
            onClick={onPrev}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/15 transition-colors duration-200 z-50 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Right navigation */}
          <button
            onClick={onNext}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/15 transition-colors duration-200 z-50 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          {/* Image Display */}
          <div className="relative max-w-4xl w-full max-h-[75vh] flex flex-col items-center justify-center">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].url}
              alt={images[currentIndex].caption}
              className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-2xl border border-white/10"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            
            <motion.div
              key={`caption-${currentIndex}`}
              className="mt-4 text-center max-w-[80%]"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.05 }}
            >
              <p className="text-white text-md sm:text-lg font-semibold font-heading">
                {images[currentIndex].caption}
              </p>
              <span className="text-slate-400 text-xs sm:text-sm mt-1 block">
                {currentIndex + 1} / {images.length}
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
