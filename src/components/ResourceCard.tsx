
import React from 'react';
import { ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'tool' | 'guide' | 'ebook';
  link?: string;
  downloadUrl?: string;
  imageUrl: string;
}

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <Card className="bg-cyber-medium border-cyber-light/20 hover:border-cyber-accent/50 transition-all duration-300 h-full flex flex-col card-hover overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img
          src={resource.imageUrl}
          alt={resource.title}
          className="h-full w-full object-cover"
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-white">{resource.title}</CardTitle>
          <span className="inline-flex items-center rounded-full bg-cyber-accent/10 px-2 py-1 text-xs font-medium text-cyber-accent">
            {resource.type === 'tool' ? 'Tool' : resource.type === 'guide' ? 'Guide' : 'E-Book'}
          </span>
        </div>
        <CardDescription className="text-gray-400">
          {resource.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow"></CardContent>
      
      <CardFooter className="pt-0 gap-3">
        {resource.link && (
          <Button variant="outline" className="flex-1 border-cyber-accent/30 text-cyber-accent hover:bg-cyber-accent/10" asChild>
            <a href={resource.link} target="_blank" rel="noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit
            </a>
          </Button>
        )}
        
        {resource.downloadUrl && (
          <Button className="flex-1 bg-cyber-accent text-cyber-dark hover:bg-cyber-accent/90" asChild>
            <a href={resource.downloadUrl} download>
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
