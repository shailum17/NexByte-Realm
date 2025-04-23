
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  imageUrl: string;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.id}`}>
      <div className={cn(
        "group overflow-hidden rounded-lg border border-cyber-light/20 bg-cyber-medium transition-all duration-300",
        "hover:border-cyber-accent/50 hover:shadow-md hover:shadow-cyber-accent/10",
        featured && "md:flex"
      )}>
        <div className={cn(
          "aspect-video overflow-hidden",
          featured && "md:w-2/5"
        )}>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className={cn(
          "p-6",
          featured && "md:w-3/5"
        )}>
          <div className="mb-3 flex items-center gap-4">
            <Badge variant="outline" className="bg-cyber-accent/10 text-cyber-accent border-cyber-accent/30">
              {post.category}
            </Badge>
          </div>
          
          <h3 className={cn(
            "mb-2 font-bold text-white group-hover:text-cyber-accent transition-colors",
            featured ? "text-2xl" : "text-xl"
          )}>
            {post.title}
          </h3>
          
          <p className="mb-4 text-gray-300">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4">
            <div className="flex items-center">
              <User className="mr-1 h-4 w-4" />
              <span>{post.author}</span>
            </div>
            
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              <span>{post.date}</span>
            </div>
            
            <div className="flex items-center">
              <Tag className="mr-1 h-4 w-4" />
              <span>{post.tags.slice(0, 2).join(', ')}{post.tags.length > 2 ? '...' : ''}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
