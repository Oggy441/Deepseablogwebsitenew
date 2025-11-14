import { motion } from 'motion/react';
import { X, Calendar, User, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { blogPostsContent } from '../data/blogPostsContent';
import { useEffect } from 'react';

interface BlogPostDetailProps {
  post: {
    title: string;
    excerpt: string;
    image: string;
    author: string;
    roll: string;
    date: string;
  };
  onClose: () => void;
}

export function BlogPostDetail({ post, onClose }: BlogPostDetailProps) {
  const content = blogPostsContent[post.title];
  
  // Scroll to top when detail opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] overflow-y-auto bg-gradient-to-b from-slate-900 to-blue-950"
    >
      {/* Close button */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        onClick={onClose}
        className="fixed top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 text-white transition-all"
      >
        <X className="w-6 h-6" />
      </motion.button>

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        onClick={onClose}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 text-white transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="hidden md:inline">Back</span>
      </motion.button>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] md:h-[70vh] overflow-hidden"
      >
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl text-white mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-blue-100/90 mb-6 max-w-3xl">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-6 text-blue-200/80">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 py-16">
        {content.sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-12"
          >
            {section.heading && (
              <h2 className="text-3xl md:text-4xl text-white mb-6">
                {section.heading}
              </h2>
            )}
            
            {section.paragraphs.map((paragraph, pIndex) => (
              <motion.p
                key={pIndex}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + pIndex * 0.05 }}
                className="text-lg text-blue-100/90 mb-6 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            {section.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="my-10 rounded-2xl overflow-hidden"
              >
                <ImageWithFallback
                  src={section.image}
                  alt={section.imageCaption || ''}
                  className="w-full h-auto"
                />
                {section.imageCaption && (
                  <p className="text-sm text-blue-200/60 mt-3 text-center italic">
                    {section.imageCaption}
                  </p>
                )}
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Decorative wave divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent my-16"
        />

        {/* Author bio section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <div className="flex items-center gap-2 mb-3">
            <User className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl text-white">About the Author</h3>
          </div>
          <p className="text-blue-100/80">
            {post.author} roll no: {post.roll} is student of CCET this project is made under guidence of Gopal Singh sir the faculty of Professional communication.
          </p>
        </motion.div>
      </div>

      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}