import { motion } from 'motion/react';
import { Calendar, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPostProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  delay?: number;
  featured?: boolean;
  onClick?: () => void;
}

export function BlogPost({ title, excerpt, image, author, date, delay = 0, featured = false, onClick }: BlogPostProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className={`bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300 ${
        featured ? 'border-cyan-400/20' : ''
      }`}>
        <div className="relative overflow-hidden h-56 md:h-64">
          <motion.div
            className="w-full h-full"
          >
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {featured && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/80 backdrop-blur-sm rounded-full">
              <span className="text-xs text-white">Featured</span>
            </div>
          )}
        </div>
        
        <div className="p-5 md:p-6">
          <h2 className="text-white mb-2 group-hover:text-cyan-300 transition-colors text-2xl md:text-3xl">
            {title}
          </h2>
          
          <p className="text-blue-100/80 mb-3 text-sm md:text-base">
            {excerpt}
          </p>
          
          <div className="flex items-center gap-6 text-sm text-blue-200/60">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}