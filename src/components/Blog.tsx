import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    collaboration: 'bg-purple-100 text-purple-800',
    event: 'bg-blue-100 text-blue-800',
    release: 'bg-green-100 text-green-800',
    news: 'bg-gray-100 text-gray-800'
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
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">Latest Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay connected with the latest collaborations, events, and releases from our streetwear community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <CategoryBadge category={post.category} />
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <button className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                  Read More <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            View All Posts <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
