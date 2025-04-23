
import React from 'react';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Server, Book, Code, User } from 'lucide-react';
import BlogCard, { BlogPost } from '@/components/BlogCard';

// Sample blog posts data
const featuredPosts: BlogPost[] = [
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
  }
];

// Helper: Add 'animate-fade-in' to every major section for scroll-in appearance
const animateClass = "animate-fade-in";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cyber-dark relative">
      {/* Removed Custom Cursor Overlay */}

      <main className="flex-1">
        <HeroSection />

        {/* Why Choose Us Section */}
        <section className={`py-16 bg-cyber-medium/50 ${animateClass}`}>
          <div className="container mx-auto px-4">
            <h2 className="section-heading text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-cyber-dark border-cyber-light/20 card-hover">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-cyber-accent/10 p-3 mb-4">
                      <Shield className="h-8 w-8 text-cyber-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Expert Knowledge</h3>
                    <p className="text-gray-400">
                      Content created by cybersecurity professionals with years of industry experience.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-cyber-dark border-cyber-light/20 card-hover">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-cyber-accent/10 p-3 mb-4">
                      <Book className="h-8 w-8 text-cyber-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Beginner Friendly</h3>
                    <p className="text-gray-400">
                      Complex security concepts explained in clear, accessible language for all skill levels.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-cyber-dark border-cyber-light/20 card-hover">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-cyber-accent/10 p-3 mb-4">
                      <Code className="h-8 w-8 text-cyber-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Practical Tutorials</h3>
                    <p className="text-gray-400">
                      Hands-on examples and step-by-step guides you can immediately apply.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Featured Blog Posts */}
        <section className={`py-16 ${animateClass}`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="section-heading">Featured Articles</h2>
              <Button asChild variant="outline" className="border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10">
                <Link to="/blog">View All Posts</Link>
              </Button>
            </div>
            <div className="space-y-8">
              <BlogCard post={featuredPosts[0]} featured={true} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <BlogCard post={featuredPosts[1]} />
                <BlogCard post={featuredPosts[2]} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Topics Section */}
        <section className={`py-16 bg-cyber-medium/50 ${animateClass}`}>
          <div className="container mx-auto px-4">
            <h2 className="section-heading text-center mb-12">Topics We Cover</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-cyber-dark p-6 rounded-lg border border-cyber-light/20 card-hover">
                <Lock className="h-10 w-10 text-cyber-accent mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Encryption & Privacy</h3>
                <p className="text-gray-400 mb-4">
                  Learn about modern encryption techniques, privacy tools, and how to protect your sensitive data.
                </p>
                <Link to="/blog?category=privacy" className="text-cyber-accent hover:underline">
                  Explore Privacy Topics →
                </Link>
              </div>
              
              <div className="bg-cyber-dark p-6 rounded-lg border border-cyber-light/20 card-hover">
                <Server className="h-10 w-10 text-cyber-accent mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Network Security</h3>
                <p className="text-gray-400 mb-4">
                  Discover how to secure networks, prevent intrusions, and protect against common network vulnerabilities.
                </p>
                <Link to="/blog?category=network" className="text-cyber-accent hover:underline">
                  Explore Network Security →
                </Link>
              </div>
              
              <div className="bg-cyber-dark p-6 rounded-lg border border-cyber-light/20 card-hover">
                <Code className="h-10 w-10 text-cyber-accent mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Secure Coding</h3>
                <p className="text-gray-400 mb-4">
                  Master the principles of writing secure code and building applications with security in mind.
                </p>
                <Link to="/blog?category=coding" className="text-cyber-accent hover:underline">
                  Explore Secure Coding →
                </Link>
              </div>
              
              <div className="bg-cyber-dark p-6 rounded-lg border border-cyber-light/20 card-hover">
                <User className="h-10 w-10 text-cyber-accent mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Social Engineering</h3>
                <p className="text-gray-400 mb-4">
                  Understand how attackers exploit human psychology and how to defend against social engineering tactics.
                </p>
                <Link to="/blog?category=social-engineering" className="text-cyber-accent hover:underline">
                  Explore Social Engineering →
                </Link>
              </div>
              
              <div className="bg-cyber-dark p-6 rounded-lg border border-cyber-light/20 card-hover">
                <Shield className="h-10 w-10 text-cyber-accent mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Security Basics</h3>
                <p className="text-gray-400 mb-4">
                  Get started with the fundamental concepts and best practices in cybersecurity.
                </p>
                <Link to="/blog?category=basics" className="text-cyber-accent hover:underline">
                  Explore Security Basics →
                </Link>
              </div>
              
              <div className="bg-cyber-dark p-6 rounded-lg border border-cyber-light/20 card-hover">
                <Book className="h-10 w-10 text-cyber-accent mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Cyber Awareness</h3>
                <p className="text-gray-400 mb-4">
                  Learn how to identify threats and build a security-focused mindset in your daily digital life.
                </p>
                <Link to="/blog?category=awareness" className="text-cyber-accent hover:underline">
                  Explore Cyber Awareness →
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className={`py-20 relative overflow-hidden ${animateClass}`}>
          <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
          <div className="absolute -left-20 top-1/3 w-72 h-72 bg-cyber-accent/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -right-20 bottom-1/3 w-72 h-72 bg-cyber-accent/10 rounded-full filter blur-3xl"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-heading mb-6">Ready to Strengthen Your Cybersecurity Knowledge?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your journey to becoming more secure online with our comprehensive resources and expert guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-cyber-accent hover:bg-cyber-accent/90 text-cyber-dark">
                  <Link to="/blog">Browse Articles</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

