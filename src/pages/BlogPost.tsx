
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, User, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Same sample data structure as Blog.tsx (duplicated for demo; ideally should be centralized)
const samplePosts = [
  {
    id: '1',
    title: '5 Essential Cybersecurity Practices Everyone Should Follow',
    excerpt: 'Learn the fundamental security practices that can protect you from most common cyber threats and keep your data safe.',
    author: 'Alex Johnson',
    date: 'April 18, 2025',
    category: 'Security Basics',
    tags: ['beginners', 'security', 'best practices'],
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    content: `
Cybersecurity is a crucial concern for everyone today, whether you're an individual user or part of a large organization. Here are five practices you should follow:
1. **Use Strong, Unique Passwords:** Avoid using the same password across multiple services and make sure your passwords are long and complex.
2. **Enable Two-Factor Authentication:** Always enable two-factor authentication (2FA) where possible for an extra layer of protection.
3. **Keep Your Software Updated:** Outdated software can be vulnerable to attacks. Update your operating system and applications regularly.
4. **Be Wary of Suspicious Emails and Links:** Phishing remains a top threat. Never click on links or download attachments from unknown sources.
5. **Use Secure Networks:** Avoid using public Wi-Fi for sensitive transactions and always use a trusted VPN when possible.

By following these simple steps, you can significantly decrease your risk of common cyber threats.`
  },
  {
    id: '2',
    title: 'Understanding SQL Injection Attacks and Prevention',
    excerpt: 'A comprehensive guide to one of the most common web application vulnerabilities and how developers can prevent them.',
    author: 'Maya Patel',
    date: 'April 15, 2025',
    category: 'Web Security',
    tags: ['sql injection', 'web security', 'prevention'],
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    content: `
SQL Injection is a type of attack that allows attackers to execute malicious SQL statements in your application's database.
**Common Symptoms:**
- Unexpected data returned from queries
- Unauthorized access to user data

**Prevention Tactics:**
- Always use parameterized queries and prepared statements
- Never concatenate user input directly into SQL
- Employ web application firewalls

Learning to recognize and block these attacks is essential for every developer.` 
  },
  {
    id: '3',
    title: 'How to Set Up a Secure Home Network',
    excerpt: 'Protect your personal devices with this step-by-step guide to creating a secure home networking environment.',
    author: 'David Chen',
    date: 'April 10, 2025',
    category: 'Network Security',
    tags: ['home network', 'wifi security', 'router setup'],
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    content: `
Setting up a secure home network is a must for protecting your devices:
- **Change Default Router Credentials:** Use strong, unique passwords for your router's admin interface.
- **Enable WPA3 Encryption:** If available, choose WPA3 for wireless security.
- **Update Firmware Regularly:** Ensure your router firmware is up to date to patch vulnerabilities.
- **Disable WPS:** Wi-Fi Protected Setup (WPS) can be insecure; turn it off.
Implement these tips for a safer home digital environment.`
  },
  {
    id: '4',
    title: 'The Rise of Ransomware: What You Need to Know',
    excerpt: 'An in-depth look at ransomware attacks, their evolution, and strategies to protect your organization.',
    author: 'Sarah Williams',
    date: 'April 5, 2025',
    category: 'Threat Analysis',
    tags: ['ransomware', 'threats', 'prevention'],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    content: `
Ransomware attacks have surged in recent years:
- **What is Ransomware?** Malicious software encrypts your data and demands payment for decryption.
- **How to Prevent:** Keep regular backups, educate users, and restrict admin access.
- **What To Do If Infected:** Disconnect immediately, report the attack, and seek professional assistance. Never pay the ransom!
Awareness and preparedness are your strongest defenses.`
  },
  {
    id: '5',
    title: 'Introduction to Penetration Testing',
    excerpt: 'Learn the basics of ethical hacking and how penetration testing helps identify security vulnerabilities.',
    author: 'James Rodriguez',
    date: 'April 1, 2025',
    category: 'Ethical Hacking',
    tags: ['pentesting', 'ethical hacking', 'security testing'],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    content: `
Penetration testing (pentesting) simulates attacks on your systems to uncover vulnerabilities:
- **Phases:** Planning, Reconnaissance, Exploitation, Reporting.
- **Benefits:** Finds security weaknesses before attackers do.
- **Who Should Pentest:** Every organization serious about security!
Always hire ethical and certified professionals for testing.`
  },
  {
    id: '6',
    title: 'Securing Your Cloud Infrastructure',
    excerpt: 'Best practices and tools for maintaining security in AWS, Azure, and Google Cloud environments.',
    author: 'Emily Parker',
    date: 'March 28, 2025',
    category: 'Cloud Security',
    tags: ['cloud', 'aws', 'azure', 'gcp'],
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    content: `
Cloud infrastructure brings new security challenges:
- **Least Privilege Principle:** Only give users the permissions they need.
- **Enable Logging and Alerts:** Monitor all access and usage.
- **Data Encryption:** Encrypt data at rest and in transit.
- **Vendor Security Tools:** Use native tools like AWS GuardDuty, Azure Security Center, and Google Security Command Center.
Keep learning as cloud platforms are constantly evolving.`
  },
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = samplePosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-cyber-dark">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-cyber-accent mb-4">404: Post Not Found</h1>
            <p className="mb-8 text-gray-400">This blog post does not exist or may have been removed.</p>
            <Button onClick={() => navigate('/blog')} className="bg-cyber-accent text-cyber-dark">
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-cyber-dark">
      <Navbar />
      <main className="flex-1">
        <section className="relative py-8 bg-cyber-medium">
          <div className="container mx-auto px-4 max-w-3xl">
            <Button variant="ghost" className="mb-6" asChild>
              <Link to="/blog">&larr; Back to Blog</Link>
            </Button>
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
            />

            <div className="mb-2 flex items-center gap-4">
              <Badge variant="outline" className="bg-cyber-accent/10 text-cyber-accent border-cyber-accent/30">
                {post.category}
              </Badge>
              <div className="flex items-center gap-2 text-gray-400">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white mt-3 mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center mb-6 gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} className="capitalize bg-cyber-dark text-cyber-accent border-cyber-accent/40">
                  {tag}
                </Badge>
              ))}
            </div>

            <article className="prose prose-invert max-w-none py-4">
              {/* Use dangerouslySetInnerHTML for the markdowny demo content */}
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }} />
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
