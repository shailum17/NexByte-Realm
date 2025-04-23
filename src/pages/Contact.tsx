import React from 'react';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cyber-dark">
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
          <div className="absolute -left-20 top-1/3 w-72 h-72 bg-cyber-accent/10 rounded-full filter blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="section-heading mb-6">Contact Us</h1>
              <p className="text-xl text-gray-300 mb-8">
                Have questions or suggestions? We'd love to hear from you. Get in touch with our team.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <div className="bg-cyber-medium p-8 rounded-lg border border-cyber-light/20">
                  <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>
              </div>
              
              <div className="lg:w-1/3">
                <div className="bg-cyber-medium p-8 rounded-lg border border-cyber-light/20 mb-8 h-fit">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-cyber-accent mr-4 mt-1" />
                      <div>
                        <h3 className="text-white font-medium mb-1">Email</h3>
                        <a href="mailto:info@secknowledgeforge.com" className="text-gray-300 hover:text-cyber-accent transition-colors">
                          info@secknowledgeforge.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-cyber-accent mr-4 mt-1" />
                      <div>
                        <h3 className="text-white font-medium mb-1">Phone</h3>
                        <a href="tel:+1234567890" className="text-gray-300 hover:text-cyber-accent transition-colors">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-cyber-accent mr-4 mt-1" />
                      <div>
                        <h3 className="text-white font-medium mb-1">Location</h3>
                        <p className="text-gray-300">
                          Cyber Security Tower, 123 Digital Street<br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-cyber-medium p-8 rounded-lg border border-cyber-light/20">
                  <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
                  <div className="space-y-6">
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center group"
                    >
                      <Twitter className="h-6 w-6 text-cyber-accent mr-4" />
                      <span className="text-gray-300 group-hover:text-cyber-accent transition-colors">
                        @SECKnowledgeForge
                      </span>
                    </a>
                    
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center group"
                    >
                      <Linkedin className="h-6 w-6 text-cyber-accent mr-4" />
                      <span className="text-gray-300 group-hover:text-cyber-accent transition-colors">
                        SEC Knowledge Forge
                      </span>
                    </a>
                    
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center group"
                    >
                      <Instagram className="h-6 w-6 text-cyber-accent mr-4" />
                      <span className="text-gray-300 group-hover:text-cyber-accent transition-colors">
                        @secknowledgeforge
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-cyber-medium/50">
          <div className="container mx-auto px-4">
            <h2 className="section-heading text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-cyber-dark p-6 rounded-lg border border-cyber-light/20">
                <h3 className="text-xl font-semibold text-white mb-2">How quickly can I expect a response?</h3>
                <p className="text-gray-300">
                  We strive to respond to all inquiries within 24-48 business hours. For urgent matters, 
                  please indicate this in the subject line of your message.
                </p>
              </div>
              
              <div className="bg-cyber-dark p-6 rounded-lg border border-cyber-light/20">
                <h3 className="text-xl font-semibold text-white mb-2">Do you offer consulting services?</h3>
                <p className="text-gray-300">
                  Yes, our team provides cybersecurity consulting services for businesses of all sizes. 
                  Please contact us with details about your needs, and we'll provide more information.
                </p>
              </div>
              
              <div className="bg-cyber-dark p-6 rounded-lg border border-cyber-light/20">
                <h3 className="text-xl font-semibold text-white mb-2">Can I request a specific topic for your blog?</h3>
                <p className="text-gray-300">
                  Absolutely! We welcome topic suggestions from our readers. Fill out the contact form with 
                  your idea, and our content team will consider it for future articles.
                </p>
              </div>
              
              <div className="bg-cyber-dark p-6 rounded-lg border border-cyber-light/20">
                <h3 className="text-xl font-semibold text-white mb-2">How can I report a security vulnerability?</h3>
                <p className="text-gray-300">
                  If you've discovered a security vulnerability on our website or in any of our resources, 
                  please email us at security@secknowledgeforge.com with details. We take all security 
                  reports seriously and will respond promptly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
