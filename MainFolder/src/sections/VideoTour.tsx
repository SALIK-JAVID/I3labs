import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RefreshCw, Radio } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const BG     = '#060e1c';
const CARD   = '#0c1b2e';
const BORDER = 'rgba(255,255,255,0.06)';

const videos = [
  {
    title: 'Lab Environments Showcase',
    desc: 'Take a virtual walk inside our school-integrated AI, Robotics, and IoT classrooms.',
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4',
    thumbnail: '/stem_lab_collab.png'
  },
  {
    title: 'Student Innovation Showcase',
    desc: 'Witness real-world prototypes built by school students under the 3IPP framework.',
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4',
    thumbnail: '/stem_competition_activity.png'
  }
];

export function VideoTour() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.log('Play interrupted:', err));
    }
  };

  const handleVideoSelect = (idx: number) => {
    setActiveIdx(idx);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  return (
    <section id="video-tour" className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden" style={{ backgroundColor: BG }}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-[11px] font-medium text-blue-400 tracking-widest uppercase mb-4">Visual Tour</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3 max-w-2xl leading-[1.2]">
            See the future of education in motion.
          </h2>
          <p className="text-[13px] text-slate-500 mb-12 max-w-xl">
            Watch our state-of-the-art labs and student prototypes in action.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Main Video Player Card */}
          <motion.div 
            className="lg:col-span-2 rounded-3xl overflow-hidden border relative flex flex-col justify-center min-h-[300px] sm:min-h-[400px]"
            style={{ backgroundColor: CARD, borderColor: BORDER }}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
          >
            <video
              ref={videoRef}
              src={videos[activeIdx].url}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
              playsInline
              loop
            />
            {/* Custom Overlay */}
            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 pointer-events-none flex items-center justify-center ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
              <div 
                className="w-16 h-16 rounded-full bg-blue-500 hover:bg-blue-400 text-white flex items-center justify-center pointer-events-auto cursor-pointer shadow-lg transform hover:scale-105 transition-all"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause size={24} className="ml-0" /> : <Play size={24} className="ml-1" />}
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/80 to-transparent pointer-events-none flex flex-col justify-end">
              <span className="text-[10px] font-semibold text-blue-400 tracking-widest uppercase flex items-center gap-1.5 mb-1">
                <Radio size={10} className="animate-pulse" /> Live Demonstration
              </span>
              <h3 className="text-[15px] font-semibold text-white">{videos[activeIdx].title}</h3>
            </div>
          </motion.div>

          {/* Video List / Playlist */}
          <div className="flex flex-col gap-4">
            {videos.map((vid, idx) => {
              const isActive = idx === activeIdx;
              return (
                <motion.div
                  key={vid.title}
                  onClick={() => handleVideoSelect(idx)}
                  className="rounded-2xl p-5 border cursor-pointer flex flex-col justify-between hover:bg-white/5 transition-all duration-200"
                  style={{ 
                    backgroundColor: isActive ? 'rgba(96, 165, 250, 0.05)' : CARD, 
                    borderColor: isActive ? 'rgba(96, 165, 250, 0.3)' : BORDER 
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: idx * 0.1 }}
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-20 h-16 rounded-lg overflow-hidden border shrink-0 relative" style={{ borderColor: BORDER }}>
                      <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                        <Play size={12} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className={`text-[13px] font-semibold transition-colors ${isActive ? 'text-blue-400' : 'text-white'}`}>
                        {vid.title}
                      </h4>
                      <p className="text-[11.5px] text-slate-400 leading-normal mt-1.5 line-clamp-2">
                        {vid.desc}
                      </p>
                    </div>
                  </div>
                  {isActive && (
                    <div className="mt-4 flex items-center gap-1.5 text-[10px] font-semibold text-blue-400 tracking-wider uppercase">
                      <RefreshCw size={9} className="animate-spin" /> Playing Now
                    </div>
                  )}
                </motion.div>
              );
            })}
            
            {/* CTA/Details Card */}
            <motion.div
              className="rounded-2xl p-5 bg-gradient-to-br from-[#0a1628] to-[#0f2957] border flex flex-col justify-between flex-1"
              style={{ borderColor: 'rgba(96,165,250,0.15)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.2 }}
            >
              <div>
                <h4 className="text-[12.5px] font-semibold text-white mb-1.5">Request a live virtual demo</h4>
                <p className="text-[11.5px] text-blue-200 leading-relaxed">
                  We can schedule an interactive video call showcasing a live feed from one of our running partner labs.
                </p>
              </div>
              <a 
                href="#contact" 
                className="mt-4 inline-flex items-center justify-center rounded-full py-2.5 text-[11.5px] font-medium text-white bg-blue-500 hover:bg-blue-400 transition-colors"
              >
                Schedule Demo →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
