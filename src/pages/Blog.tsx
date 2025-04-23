import React, { useState } from 'react';
import Footer from '@/components/Footer';
import BlogCard, { BlogPost } from '@/components/BlogCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Essential Cybersecurity Practices Everyone Should Follow',
    excerpt: 'Learn the fundamental security practices that can protect you from most common cyber threats and keep your data safe.',
    author: 'Alex Johnson',
    date: 'April 18, 2025',
    category: 'Security Basics',
    tags: ['beginners', 'security', 'best practices'],
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
  },
  {
    id: '2',
    title: 'Understanding SQL Injection Attacks and Prevention',
    excerpt: 'A comprehensive guide to one of the most common web application vulnerabilities and how developers can prevent them.',
    author: 'Maya Patel',
    date: 'April 15, 2025',
    category: 'Web Security',
    tags: ['sql injection', 'web security', 'prevention'],
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
  },
  {
    id: '3',
    title: 'How to Set Up a Secure Home Network',
    excerpt: 'Protect your personal devices with this step-by-step guide to creating a secure home networking environment.',
    author: 'David Chen',
    date: 'April 10, 2025',
    category: 'Network Security',
    tags: ['home network', 'wifi security', 'router setup'],
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
  },
  {
    id: '4',
    title: 'The Rise of Ransomware: What You Need to Know',
    excerpt: 'An in-depth look at ransomware attacks, their evolution, and strategies to protect your organization.',
    author: 'Sarah Williams',
    date: 'April 5, 2025',
    category: 'Threat Analysis',
    tags: ['ransomware', 'threats', 'prevention'],
    imageUrl: 'https://images.unsplash.com/photo-1518749280684-dccba630e2f6'
  },
  {
    id: '5',
    title: 'Introduction to Penetration Testing',
    excerpt: 'Learn the basics of ethical hacking and how penetration testing helps identify security vulnerabilities.',
    author: 'James Rodriguez',
    date: 'April 1, 2025',
    category: 'Ethical Hacking',
    tags: ['pentesting', 'ethical hacking', 'security testing'],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
  },
  {
    id: '6',
    title: 'Securing Your Cloud Infrastructure',
    excerpt: 'Best practices and tools for maintaining security in AWS, Azure, and Google Cloud environments.',
    author: 'Emily Parker',
    date: 'March 28, 2025',
    category: 'Cloud Security',
    tags: ['cloud', 'aws', 'azure', 'gcp'],
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1'
  }
];

const categories = [...new Set(samplePosts.map(post => post.category))];
const allTags = [...new Set(samplePosts.flatMap(post => post.tags))];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredPosts = samplePosts.filter(post => {
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => post.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesTags;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-cyber-dark">
      
      <main className="flex-1">
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
          <div className="absolute -left-20 top-1/3 w-72 h-72 bg-cyber-accent/10 rounded-full filter blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="section-heading mb-6">Cybersecurity Blog</h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover the latest insights, tutorials, and news from the world of cybersecurity.
              </p>
              
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSearch} className="flex gap-2 mb-8">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="text" 
                      placeholder="Search articles..." 
                      className="pl-10 bg-cyber-medium border-cyber-light focus:border-cyber-accent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="bg-cyber-accent text-cyber-dark hover:bg-cyber-accent/90">
                    Search
                  </Button>
                </form>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full sm:w-[200px] bg-cyber-medium border-cyber-light focus:border-cyber-accent">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent className="bg-cyber-medium border-cyber-light">
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="border-cyber-light text-gray-300">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter by Tags
                        {selectedTags.length > 0 && (
                          <span className="ml-2 bg-cyber-accent text-cyber-dark text-xs rounded-full px-2 py-0.5">
                            {selectedTags.length}
                          </span>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-cyber-medium border-cyber-light">
                      {allTags.map(tag => (
                        <DropdownMenuCheckboxItem
                          key={tag}
                          checked={selectedTags.includes(tag)}
                          onCheckedChange={() => handleTagToggle(tag)}
                          className="capitalize"
                        >
                          {tag}
                        </DropdownMenuCheckboxItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  {selectedTags.length > 0 && (
                    <Button 
                      variant="ghost" 
                      className="text-cyber-accent hover:bg-cyber-accent/10"
                      onClick={() => setSelectedTags([])}
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="pb-16">
          <div className="container mx-auto px-4">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold text-white mb-4">No Articles Found</h3>
                <p className="text-gray-400 mb-6">
                  No articles match your current search criteria.
                </p>
                <Button 
                  variant="outline" 
                  className="border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedTags([]);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
