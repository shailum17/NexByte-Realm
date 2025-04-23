import React, { useState } from 'react';
import Footer from '@/components/Footer';
import ResourceCard, { Resource } from '@/components/ResourceCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

// Sample resources data
const sampleResources: Resource[] = [
  {
    id: '1',
    title: 'Kali Linux',
    description: 'An open-source, Debian-based Linux distribution designed for digital forensics and penetration testing.',
    type: 'tool',
    link: 'https://www.kali.org/',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
  },
  {
    id: '2',
    title: 'Wireshark',
    description: 'A free and open-source network protocol analyzer used for network troubleshooting and analysis.',
    type: 'tool',
    link: 'https://www.wireshark.org/',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31'
  },
  {
    id: '3',
    title: 'Nmap',
    description: 'A free and open-source network scanner used to discover hosts and services on a computer network.',
    type: 'tool',
    link: 'https://nmap.org/',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8'
  },
  {
    id: '4',
    title: 'Metasploit Framework',
    description: 'An open-source framework for developing, testing, and executing exploits against remote targets.',
    type: 'tool',
    link: 'https://www.metasploit.com/',
    imageUrl: 'https://images.unsplash.com/photo-1567301861931-2c857ffe9e12'
  },
  {
    id: '5',
    title: 'Beginner\'s Guide to Cybersecurity',
    description: 'A comprehensive introduction to the basics of cybersecurity for complete beginners.',
    type: 'guide',
    downloadUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87'
  },
  {
    id: '6',
    title: 'Network Security Checklist',
    description: 'A practical checklist to help secure your network against common vulnerabilities.',
    type: 'guide',
    downloadUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1551808525-51a94da548ce'
  },
  {
    id: '7',
    title: 'Secure Coding Practices',
    description: 'Best practices for writing secure code and preventing common vulnerabilities.',
    type: 'guide',
    downloadUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'
  },
  {
    id: '8',
    title: 'The Art of Password Management',
    description: 'Learn how to create, store, and manage strong passwords to protect your accounts.',
    type: 'ebook',
    downloadUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe'
  },
  {
    id: '9',
    title: 'Cybersecurity for Small Businesses',
    description: 'A comprehensive guide to implementing effective security measures in small business environments.',
    type: 'ebook',
    downloadUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf'
  }
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Filter resources based on search and tab
  const filteredResources = sampleResources.filter(resource => {
    const matchesSearch = !searchTerm || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === 'all' || resource.type === activeTab;
    
    return matchesSearch && matchesTab;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled via state, so nothing additional needed here
  };

  return (
    <div className="flex flex-col min-h-screen bg-cyber-dark">
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
          <div className="absolute -left-20 top-1/3 w-72 h-72 bg-cyber-accent/10 rounded-full filter blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="section-heading mb-6">Resources</h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover tools, guides, and ebooks to enhance your cybersecurity knowledge and skills.
              </p>
              
              {/* Search */}
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSearch} className="flex gap-2 mb-8">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="text" 
                      placeholder="Search resources..." 
                      className="pl-10 bg-cyber-medium border-cyber-light focus:border-cyber-accent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="bg-cyber-accent text-cyber-dark hover:bg-cyber-accent/90">
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Resources Section */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <div className="flex justify-center">
                <TabsList className="bg-cyber-medium">
                  <TabsTrigger value="all" className="data-[state=active]:bg-cyber-accent data-[state=active]:text-cyber-dark">
                    All Resources
                  </TabsTrigger>
                  <TabsTrigger value="tool" className="data-[state=active]:bg-cyber-accent data-[state=active]:text-cyber-dark">
                    Tools
                  </TabsTrigger>
                  <TabsTrigger value="guide" className="data-[state=active]:bg-cyber-accent data-[state=active]:text-cyber-dark">
                    Guides
                  </TabsTrigger>
                  <TabsTrigger value="ebook" className="data-[state=active]:bg-cyber-accent data-[state=active]:text-cyber-dark">
                    E-Books
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-6">
                {filteredResources.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredResources.map(resource => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-2xl font-semibold text-white mb-4">No Resources Found</h3>
                    <p className="text-gray-400 mb-6">
                      No resources match your current search criteria.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10"
                      onClick={() => setSearchTerm('')}
                    >
                      Clear Search
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="tool" className="mt-6">
                {filteredResources.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredResources.map(resource => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-2xl font-semibold text-white mb-4">No Tools Found</h3>
                    <p className="text-gray-400 mb-6">
                      No tools match your current search criteria.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10"
                      onClick={() => setSearchTerm('')}
                    >
                      Clear Search
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="guide" className="mt-6">
                {filteredResources.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredResources.map(resource => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-2xl font-semibold text-white mb-4">No Guides Found</h3>
                    <p className="text-gray-400 mb-6">
                      No guides match your current search criteria.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10"
                      onClick={() => setSearchTerm('')}
                    >
                      Clear Search
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="ebook" className="mt-6">
                {filteredResources.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredResources.map(resource => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-2xl font-semibold text-white mb-4">No E-Books Found</h3>
                    <p className="text-gray-400 mb-6">
                      No e-books match your current search criteria.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10"
                      onClick={() => setSearchTerm('')}
                    >
                      Clear Search
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
