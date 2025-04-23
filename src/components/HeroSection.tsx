import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative pb-20 pt-12 md:pt-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
      
      {/* Glowing Accent */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyber-accent/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyber-accent/10 rounded-full filter blur-3xl animate-pulse-slow delay-700"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyber-accent to-blue-400 bg-clip-text text-transparent">
                Secure Your Digital Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Learn cybersecurity from beginner to expert with hands-on tutorials, tools, and resources.
            </p>
            <p className="text-gray-400 mb-8 md:text-lg">
              HackProof Learning provides everything you need to understand and implement effective cybersecurity practices. Join our community of security professionals and enthusiasts today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-cyber-accent hover:bg-cyber-accent/90 text-cyber-dark">
                <Link to="/blog">Start Learning</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10">
                <Link to="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 max-w-md">
            <div className="bg-cyber-medium p-6 rounded-lg border border-cyber-light/20 shadow-xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Featured Content</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-3 rounded-md hover:bg-cyber-light/10 transition-colors cursor-pointer">
                  <Shield className="h-6 w-6 text-cyber-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-white">5 Ways to Protect Your Data</h3>
                    <p className="text-gray-400 text-sm">Essential practices to keep your personal information secure</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-3 rounded-md hover:bg-cyber-light/10 transition-colors cursor-pointer">
                  <Lock className="h-6 w-6 text-cyber-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-white">Introduction to Encryption</h3>
                    <p className="text-gray-400 text-sm">Understanding the foundations of modern cryptography</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-3 rounded-md hover:bg-cyber-light/10 transition-colors cursor-pointer">
                  <Zap className="h-6 w-6 text-cyber-warning flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-white">Top 10 Cybersecurity Tools</h3>
                    <p className="text-gray-400 text-sm">Essential software for security professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
