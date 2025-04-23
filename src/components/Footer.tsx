import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Mail, Phone, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark border-t border-cyber-light/20 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-cyber-accent" />
              <span className="font-bold text-lg text-white">
                <span className="cyber-glow text-cyber-accent">Hack</span>Proof Learning
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted source for cybersecurity education, tutorials, and resources to help secure your digital presence.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-cyber-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-cyber-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-cyber-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyber-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-cyber-accent transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-cyber-accent transition-colors">Resources</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyber-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyber-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog?category=ethical-hacking" className="text-gray-400 hover:text-cyber-accent transition-colors">Ethical Hacking</Link>
              </li>
              <li>
                <Link to="/blog?category=tools" className="text-gray-400 hover:text-cyber-accent transition-colors">Cybersecurity Tools</Link>
              </li>
              <li>
                <Link to="/blog?category=tutorials" className="text-gray-400 hover:text-cyber-accent transition-colors">Tutorials</Link>
              </li>
              <li>
                <Link to="/blog?category=news" className="text-gray-400 hover:text-cyber-accent transition-colors">Cybersecurity News</Link>
              </li>
              <li>
                <Link to="/blog?category=privacy" className="text-gray-400 hover:text-cyber-accent transition-colors">Data Privacy Tips</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyber-accent" />
                <a href="mailto:info@secknowledgeforge.com" className="text-gray-400 hover:text-cyber-accent transition-colors">info@secknowledgeforge.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyber-accent" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-cyber-accent transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyber-light/20 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SEC Knowledge Forge. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-cyber-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-cyber-accent transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="text-gray-500 hover:text-cyber-accent transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
