import React from 'react';
import Footer from '@/components/Footer';
import { Shield, Award, Target, Users, Book, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cyber-dark">
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
          <div className="absolute -left-20 top-1/3 w-72 h-72 bg-cyber-accent/10 rounded-full filter blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="section-heading mb-6">About Us</h1>
              <p className="text-xl text-gray-300 mb-8">
                Learn more about SEC Knowledge Forge, our mission, and the team behind the content.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
                <p className="text-gray-300 mb-4">
                  At SEC Knowledge Forge, we believe that cybersecurity knowledge should be accessible to everyone, 
                  not just technical experts. Our mission is to demystify cybersecurity concepts and empower individuals 
                  and organizations to protect themselves in an increasingly digital world.
                </p>
                <p className="text-gray-300 mb-4">
                  We create content that bridges the gap between technical complexity and practical application, 
                  making it easier for people at all skill levels to understand and implement effective security measures.
                </p>
                <p className="text-gray-300">
                  Whether you're a complete beginner looking to learn the basics or a seasoned professional seeking to expand 
                  your knowledge, SEC Knowledge Forge is designed to be your trusted resource for cybersecurity education.
                </p>
              </div>
              
              <div className="flex-1">
                <div className="bg-cyber-medium p-8 rounded-lg border border-cyber-light/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-accent/10 rounded-bl-full"></div>
                  <Shield className="h-16 w-16 text-cyber-accent mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Our Core Values</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-3 bg-cyber-accent/10 p-1 rounded-full mt-1">
                        <Award className="h-4 w-4 text-cyber-accent" />
                      </div>
                      <span className="text-gray-300">
                        <strong className="text-white">Accuracy</strong> — We ensure all content is factually correct and up-to-date
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 bg-cyber-accent/10 p-1 rounded-full mt-1">
                        <Users className="h-4 w-4 text-cyber-accent" />
                      </div>
                      <span className="text-gray-300">
                        <strong className="text-white">Accessibility</strong> — We make complex topics understandable for all skill levels
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 bg-cyber-accent/10 p-1 rounded-full mt-1">
                        <Target className="h-4 w-4 text-cyber-accent" />
                      </div>
                      <span className="text-gray-300">
                        <strong className="text-white">Practicality</strong> — We focus on actionable advice you can apply immediately
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-cyber-medium border-cyber-light/20 p-6">
                    <Book className="h-10 w-10 text-cyber-accent mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Educational Resources</h3>
                    <p className="text-gray-400">
                      Continue expanding our library of tutorials, guides, and learning materials.
                    </p>
                  </Card>
                  
                  <Card className="bg-cyber-medium border-cyber-light/20 p-6">
                    <Users className="h-10 w-10 text-cyber-accent mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Community Building</h3>
                    <p className="text-gray-400">
                      Foster a supportive community where security enthusiasts can learn and grow together.
                    </p>
                  </Card>
                  
                  <Card className="bg-cyber-medium border-cyber-light/20 p-6">
                    <Target className="h-10 w-10 text-cyber-accent mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Practical Training</h3>
                    <p className="text-gray-400">
                      Develop hands-on workshops and interactive learning experiences.
                    </p>
                  </Card>
                  
                  <Card className="bg-cyber-medium border-cyber-light/20 p-6">
                    <GraduationCap className="h-10 w-10 text-cyber-accent mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Career Development</h3>
                    <p className="text-gray-400">
                      Help individuals build skills needed for cybersecurity careers.
                    </p>
                  </Card>
                </div>
              </div>
              
              <div className="flex-1 order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4 text-white">Our Vision & Goals</h2>
                <p className="text-gray-300 mb-4">
                  We envision a future where strong cybersecurity practices are the norm, not the exception. 
                  Our goal is to create a world where individuals and organizations are well-equipped to defend 
                  against digital threats through education and awareness.
                </p>
                <p className="text-gray-300 mb-4">
                  In the coming years, we aim to expand our educational content, develop interactive learning 
                  experiences, and build a vibrant community of security-minded individuals who can learn from 
                  and support one another.
                </p>
                <p className="text-gray-300">
                  We're committed to staying at the forefront of cybersecurity trends and continuously updating 
                  our content to reflect the evolving threat landscape, ensuring our readers always have access 
                  to the most relevant and effective security information.
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

export default About;
