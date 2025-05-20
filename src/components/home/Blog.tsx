import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: 'collaboration' | 'event' | 'release' | 'news';
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Limited Edition Collaboration with Street Artist KAWS',
    excerpt: 'Introducing our exclusive collection with renowned artist KAWS, featuring unique designs that blend urban aesthetics with contemporary art.',
    date: 'May 19, 2025',
    image: '/collectibles-sneakers.jpg',
    category: 'collaboration'
  },
  {
    id: '2',
    title: 'Sneaker Culture Popup Event This Weekend',
    excerpt: 'Join us for a special weekend popup event celebrating sneaker culture with live customizations, rare drops, and guest appearances.',
    date: 'May 21, 2025',
    image: '/productshowcase-sneakers.jpg',
    category: 'event'
  },
  {
    id: '3',
    title: 'New Summer Collection Just Dropped',
    excerpt: 'Our latest summer streetwear collection is now available online and in stores. Featuring lightweight fabrics and bold designs.',
    date: 'May 17, 2025',
    image: '/modkicks-original.jpg',
    category: 'release'
  }
];

const CategoryBadge: React.FC<{ category: BlogPost['category'] }> = ({ category }) => {
  const categoryStyles = {
    collaboration: 'bg-purple-900/30 text-purple-300',
    event: 'bg-blue-900/30 text-blue-300',
    release: 'bg-green-900/30 text-green-300',
    news: 'bg-gray-800/30 text-gray-300'
  };

  const categoryNames = {
    collaboration: 'Collaboration',
    event: 'Event',
    release: 'New Release',
    news: 'News'
  };

  return (
    <span className={cn(
      'text-xs font-medium px-2.5 py-0.5 rounded-full',
      categoryStyles[category]
    )}>
      {categoryNames[category]}
    </span>
  );
};

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-8 bg-black/95 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-white">Latest Updates</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay connected with the latest collaborations, events, and releases from our streetwear community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-zinc-900/80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-zinc-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <CategoryBadge category={post.category} />
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                <motion.button
                  className="flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            className="inline-flex items-center px-6 py-3 border border-zinc-700 rounded-md font-medium text-white bg-zinc-900 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-black transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Posts <ArrowRight size={16} className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
