import { motion } from "motion/react";
import { X } from "lucide-react";

interface BlogEntriesPageProps {
  onClose: () => void;
  onSelectEntry: (author: string) => void;
}

const teamMembers = [
  { name: "Kulraj Singh", id: "kulraj" },
  { name: "Ojas", id: "ojas" },
  { name: "Rehan Ansari", id: "rehan" },
  { name: "Neeraj", id: "neeraj" },
  { name: "Manan Sharma", id: "manan" },
];

export function BlogEntriesPage({ onClose, onSelectEntry }: BlogEntriesPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] bg-gradient-to-b from-[rgb(11,47,88)] to-[rgb(5,10,20)] overflow-y-auto"
    >
      {/* Close Button */}
      <div className="fixed top-6 right-6 z-[80]">
        <button
          onClick={onClose}
          className="p-3 bg-black/30 hover:bg-black/50 rounded-full border border-cyan-400/30 transition-colors"
          aria-label="Close blog entries"
        >
          <X className="w-6 h-6 text-cyan-300" />
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl text-white mb-16 text-center"
        >
          Blog Entries — Tidal Titans
        </motion.h1>

        {/* Team Members List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6 max-w-2xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.button
              key={member.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              onClick={() => onSelectEntry(member.name)}
              className="w-full text-left px-8 py-6 bg-white/5 border border-cyan-400/20 rounded-xl hover:border-cyan-400/50 hover:bg-white/10 transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl text-cyan-300 group-hover:text-cyan-200 transition-colors group-hover:translate-x-2 transform duration-300">
                  {member.name}
                </span>
                <span className="text-cyan-400/50 group-hover:text-cyan-300 transition-colors">
                  →
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}