
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Shield, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resources', path: '/resources' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchValue);
    // Implement search functionality
  };

  return (
    <nav className="sticky top-0 z-50 bg-cyber-dark/95 backdrop-blur-sm border-b border-cyber-light/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-cyber-accent" />
            <span className="font-bold text-xl text-white">
              <span className="cyber-glow text-cyber-accent">Hack</span>Proof Learning
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-cyber-accent transition-colors duration-200 flex items-center gap-2"
              >
                {link.name === 'Quiz' && <FileText className="h-4 w-4" />}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop search */}
          <div className="hidden md:block">
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search..."
                  className="pl-8 bg-cyber-medium border-cyber-light focus:border-cyber-accent w-64"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
              <Button type="submit" variant="ghost" size="sm" className="ml-2 text-cyber-accent hover:bg-cyber-medium">
                Search
              </Button>
            </form>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden rounded-full p-3 text-gray-300 hover:text-cyber-accent focus:outline-none focus:ring-2 focus:ring-cyber-accent transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed z-50 left-0 top-0 w-full h-full bg-cyber-dark/95 backdrop-blur-sm transition-all duration-300 ease-in-out flex md:hidden",
          isMenuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
        )}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col w-full h-full">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-cyber-light/20 bg-cyber-dark/95">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
              <Shield className="h-8 w-8 text-cyber-accent" />
              <span className="font-bold text-xl text-white">
                <span className="cyber-glow text-cyber-accent">Hack</span>Proof
              </span>
            </Link>
            <button
              onClick={toggleMenu}
              className="rounded-full p-3 text-gray-300 hover:text-cyber-accent focus:outline-none focus:ring-2 focus:ring-cyber-accent"
              aria-label="Close menu"
            >
              <X className="h-7 w-7" />
            </button>
          </div>
          {/* Mobile menu scrollable content */}
          <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-6">
            <form onSubmit={handleSearch} className="flex items-center gap-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search..."
                  className="pl-8 bg-cyber-medium border-cyber-light focus:border-cyber-accent w-full"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  aria-label="Search"
                />
              </div>
              <Button 
                type="submit"
                variant="ghost"
                size="sm"
                className="text-cyber-accent hover:bg-cyber-medium"
              >
                Search
              </Button>
            </form>
            <div className="flex flex-col gap-2 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="w-full text-lg font-medium text-gray-200 hover:text-cyber-accent py-4 px-3 rounded-lg hover:bg-cyber-medium/70 transition-all flex items-center gap-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name === 'Quiz' && <FileText className="h-5 w-5" />}
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
