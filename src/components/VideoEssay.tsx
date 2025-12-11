import { motion } from "motion/react";
import { X, Play } from "lucide-react";

interface VideoEssayProps {
  onClose: () => void;
}

export function VideoEssay({ onClose }: VideoEssayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-b from-[rgb(11,47,88)] to-[rgb(5,10,20)] z-[70] overflow-y-auto"
    >
      {/* Close Button */}
      <div className="fixed top-6 right-6 z-[80]">
        <button
          onClick={onClose}
          className="p-3 bg-black/30 hover:bg-black/50 rounded-full border border-cyan-400/30 transition-colors"
          aria-label="Close video essay"
        >
          <X className="w-6 h-6 text-cyan-300" />
        </button>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Video Essay: James Cameron's Dive into the Mariana Trench
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto mb-12">
            A cinematic 3–4 minute explanation of James Cameron's historic descent into the Mariana Trench, combining storytelling and scientific detail.
          </p>
        </motion.div>

        {/* Video Placeholder with 16:9 aspect ratio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative w-full max-w-5xl mx-auto mb-10"
          style={{ paddingBottom: '56.25%' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl border border-cyan-400/30 overflow-hidden flex items-center justify-center group cursor-pointer hover:border-cyan-400/60 transition-colors">
            {/* Circular Play Button */}
            <div className="relative z-10">
              <div className="w-28 h-28 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all shadow-2xl shadow-cyan-400/30 group-hover:shadow-cyan-400/50">
                <Play className="w-12 h-12 text-slate-900 ml-1" fill="currentColor" />
              </div>
            </div>
            
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </motion.div>

        {/* Watch Video Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="https://drive.google.com/file/d/1pLI2y8UWgY9-7bbQUmNXVDl4dJitPozf/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border-2 border-cyan-400/60 rounded-full text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 transition-all text-lg"
          >
            Watch Video
          </a>
          <p className="text-sm text-blue-200/50">
            Hosted on Google Drive — opens in new tab
          </p>
        </motion.div>

        {/* Additional Context Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl text-white mb-6">
              About This Journey
            </h2>
            <div className="space-y-4 text-blue-100/80 text-lg leading-relaxed">
              <p>
                On March 26, 2012, filmmaker and explorer James Cameron became the first person to complete a solo dive to the deepest known point in Earth's oceans — the Challenger Deep in the Mariana Trench, reaching a depth of 10,908 meters (35,787 feet).
              </p>
              <p>
                This video essay explores the engineering marvel of the DEEPSEA CHALLENGER submersible, the extreme conditions Cameron faced, and the scientific discoveries made during this historic expedition into one of Earth's last unexplored frontiers.
              </p>
              <p>
                The dive lasted approximately 2 hours and 36 minutes to reach the bottom, where Cameron spent nearly three hours collecting samples and footage before beginning the ascent.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
