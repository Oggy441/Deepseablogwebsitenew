import { motion } from "motion/react";
import { X, ArrowLeft } from "lucide-react";

interface IndividualBlogEntryProps {
  author: string;
  title: string;
  date: string;
  content: string;
  onClose: () => void;
  onBack: () => void;
}

export function IndividualBlogEntry({
  author,
  title,
  date,
  content,
  onClose,
  onBack,
}: IndividualBlogEntryProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] bg-gradient-to-b from-[rgb(11,47,88)] to-[rgb(5,10,20)] overflow-y-auto"
    >
      {/* Navigation Buttons */}
      <div className="fixed top-6 left-6 right-6 z-[90] flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-3 bg-black/30 hover:bg-black/50 rounded-full border border-cyan-400/30 transition-colors"
          aria-label="Back to blog entries"
        >
          <ArrowLeft className="w-6 h-6 text-cyan-300" />
        </button>
        <button
          onClick={onClose}
          className="p-3 bg-black/30 hover:bg-black/50 rounded-full border border-cyan-400/30 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-cyan-300" />
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm">
              {author}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl text-white mb-3">
            {title}
          </h1>
          <p className="text-sm text-blue-200/60">{date}</p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert max-w-none"
        >
          <div className="text-lg text-blue-100/90 leading-relaxed whitespace-pre-line">
            {content}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-cyan-400/20"
        >
          <button
            onClick={onBack}
            className="text-cyan-300 hover:text-cyan-200 flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all entries
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
