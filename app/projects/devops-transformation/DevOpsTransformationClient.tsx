'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cloud,
  Database,
  Lock,
  Server,
  Zap,
  GitBranch,
  Monitor,
  Shield,
  Menu,
  X,
  Send,
  Rocket,
  CheckCircle,
  Layers,
  Network,
  Cpu,
  MessageCircle,
} from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog';
import { useForm } from '@formspree/react';
import MermaidChart from '@/components/MarkdownRenderer';

const sections = [
  { id: 'overview', title: 'Overview', icon: <Cloud className="w-4 h-4" /> },
  { id: 'objectives', title: 'Objectives', icon: <Zap className="w-4 h-4" /> },
  { id: 'architecture', title: 'Architecture', icon: <Server className="w-4 h-4" /> },
  { id: 'outcomes', title: 'Outcomes', icon: <CheckCircle className="w-4 h-4" /> },
  { id: 'services', title: 'Tools', icon: <Layers className="w-4 h-4" /> },
];

export default function DevOpsTransformationClient() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [formState, submitForm] = useForm('xeqkjwzv'); // Replace with your actual Formspree ID

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sectionElements = sections.map((section) => ({
        id: section.id,
        offsetTop: document.getElementById(section.id)?.offsetTop || 0,
      }));

      const currentSection = sectionElements.reduce((prev, curr) => {
        return curr.offsetTop <= scrollPosition && curr.offsetTop > prev.offsetTop ? curr : prev;
      }, { id: 'overview', offsetTop: 0 });

      setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mermaidCode = `
graph TD
    A[Developers] -->|Code Push| B[GitLab CE on EC2 ASG]
    B -->|CI/CD Pipeline| C[GitLab Runner + Jenkins]
    C -->|Docker Deployments| D[Staging/Prod Apps]
    A -->|Collaboration| E[Mattermost EE on EC2 ASG]
    E -->|File Uploads| F[S3 Bucket<br>Restricted to Office IPs]
    B -->|DB Access| G[Database EC2<br>Postgres/MySQL]
    E -->|DB Access| G
    H[Route 53 + ACM TLS] --> B
    H --> E
    I[CloudWatch Monitoring] --> B
    I --> E
    I --> G
  `;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Company-Wide DevOps Transformation</h1>
          <p className="text-lg mb-6">From manual deployments to automated CI/CD excellence</p>
          <a
            href="https://github.com/your-repo" // Replace with your GitHub repo
            className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-2xl font-medium hover:bg-gray-100 transition"
          >
            View Code
            <GitBranch className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Sidebar (Desktop Sticky, Mobile Drawer) */}
        <Dialog open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <DialogTrigger className="md:hidden mb-4">
            <Menu className="w-6 h-6 text-blue-900" />
          </DialogTrigger>
          <DialogContent className="md:hidden bg-white p-4 rounded-2xl max-w-[90%]">
            <button onClick={() => setIsSidebarOpen(false)} className="mb-4">
              <X className="w-6 h-6 text-blue-900" />
            </button>
            <nav>
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <Link
                      href={`#${section.id}`}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`flex items-center p-1.5 rounded-lg text-gray-700 hover:bg-blue-100 transition-colors text-sm ${
                        activeSection === section.id ? 'bg-blue-200 text-blue-900 font-semibold' : ''
                      }`}
                    >
                      {section.icon}
                      <span className="ml-2">{section.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </DialogContent>
          <aside className="hidden md:block w-64 bg-white shadow-lg p-4 sticky top-24 h-[calc(100vh-6rem)]">
            <ScrollArea className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100">
              <nav>
                <ul className="space-y-1">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <Link
                        href={`#${section.id}`}
                        className={`flex items-center p-1.5 rounded-lg text-gray-700 hover:bg-blue-100 transition-colors text-sm ${
                          activeSection === section.id ? 'bg-blue-200 text-blue-900 font-semibold' : ''
                        }`}
                      >
                        {section.icon}
                        <span className="ml-2">{section.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </ScrollArea>
          </aside>
        </Dialog>

        {/* Main Content */}
        <main className="flex-1 md:ml-8">
          {/* Overview */}
          <section id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Overview</h2>
            <p className="text-gray-700">
              This project represents a company-wide DevOps transformation at Tej IT Solutions, where I introduced
              GitLab Community Edition (CE) for version control and CI/CD pipelines, and Mattermost Enterprise Edition
              (EE) for team collaboration. The goal was to replace manual deployments and fragmented communication with
              a modern, automated, and secure DevOps ecosystem.
            </p>
            <p className="text-gray-700 mt-2">
              Both platforms were self-hosted on AWS EC2 instances with Auto Scaling Groups for resilience, integrated
              with a dedicated database EC2 instance and Amazon S3 for secure file storage. This transformation enabled
              automation, collaboration, and security across the organization.
            </p>
          </section>

          {/* Objectives */}
          <section id="objectives" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Business & Technical Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Centralized Collaboration', desc: 'Introduce Mattermost EE for team chat and DevOps discussions.', icon: <MessageCircle className="w-5 h-5 text-blue-600" /> },
                { title: 'Version Control & CI/CD', desc: 'Deploy GitLab CE for code hosting and automated pipelines.', icon: <GitBranch className="w-5 h-5 text-blue-600" /> },
                { title: 'Automation First', desc: 'Replace manual deployments with CI/CD via GitLab Runners & Jenkins.', icon: <Zap className="w-5 h-5 text-blue-600" /> },
                { title: 'Resilience & Reliability', desc: 'Host GitLab & Mattermost on EC2 ASG.', icon: <CheckCircle className="w-5 h-5 text-blue-600" /> },
                { title: 'Data Security', desc: 'Store static uploads in S3, restricted to office IPs.', icon: <Lock className="w-5 h-5 text-blue-600" /> },
                { title: 'Scalability', desc: 'Ensure platform grows with teams and projects.', icon: <Rocket className="w-5 h-5 text-blue-600" /> },
                { title: 'Cost Efficiency', desc: '~40% savings with EC2 ASG and right-sizing.', icon: <Database className="w-5 h-5 text-blue-600" /> },
              ].map((obj, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white shadow-lg rounded-2xl">
                    <CardHeader>
                      <CardTitle className="flex items-center text-blue-900">
                        {obj.icon}
                        <span className="ml-2">{obj.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{obj.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Non-Functional Requirements */}
          <section id="nfrs" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Non-Functional Requirements (NFRs)</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Quality Attribute</TableHead>
                  <TableHead>Requirement</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { attr: 'Availability', req: '99.9% uptime with ASG redundancy', icon: <CheckCircle className="w-4 h-4 text-blue-600" /> },
                  { attr: 'Security', req: 'S3 restricted to office IPs, TLS everywhere, IAM least privilege', icon: <Lock className="w-4 h-4 text-blue-600" /> },
                  { attr: 'Reliability', req: 'ASG replaces failed GitLab/Mattermost EC2 automatically', icon: <Shield className="w-4 h-4 text-blue-600" /> },
                  { attr: 'Performance', req: 'GitLab CI/CD pipelines complete < 5 mins average', icon: <Zap className="w-4 h-4 text-blue-600" /> },
                  { attr: 'Scalability', req: 'Add nodes to ASG for GitLab runners/Mattermost users', icon: <Rocket className="w-4 h-4 text-blue-600" /> },
                  { attr: 'Compliance', req: 'Data encrypted (RDS volumes, S3 SSE, HTTPS in transit)', icon: <Shield className="w-4 h-4 text-blue-600" /> },
                ].map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="flex items-center">
                      {row.icon}
                      <span className="ml-2">{row.attr}</span>
                    </TableCell>
                    <TableCell>{row.req}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </section>

          {/* Architecture */}
          <section id="architecture" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Architecture</h2>
            <div className="space-y-4 mb-6">
              {[
                {
                  title: 'Infrastructure Setup',
                  content: 'VPC with public/private subnets, NAT Gateway, Security Groups. EC2 ASG hosts GitLab CE and Mattermost EE with Docker for simplified deployments.',
                  icon: <Cpu className="w-5 h-5 text-blue-600" />,
                },
                {
                  title: 'Application Layer',
                  content: 'GitLab CE for repository management, CI/CD pipelines, and Docker-based runners. Mattermost EE for centralized collaboration, integrated with GitLab for notifications.',
                  icon: <Layers className="w-5 h-5 text-blue-600" />,
                },
                {
                  title: 'CI/CD Automation',
                  content: 'GitLab Pipelines for Build, Test, Deploy workflows. Jenkins for legacy projects. Dockerized apps pushed to GitLab Container Registry for auto-deployments.',
                  icon: <GitBranch className="w-5 h-5 text-blue-600" />,
                },
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className="bg-white shadow-lg rounded-2xl cursor-pointer"
                    onClick={() => setExpandedCard(expandedCard === card.title ? null : card.title)}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-blue-900">
                        <div className="flex items-center">
                          {card.icon}
                          <span className="ml-2">{card.title}</span>
                        </div>
                        <span>{expandedCard === card.title ? '−' : '+'}</span>
                      </CardTitle>
                    </CardHeader>
                    <AnimatePresence>
                      {expandedCard === card.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardContent>
                            <p className="text-gray-700">{card.content}</p>
                          </CardContent>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))}
            </div>
            <MermaidChart content={mermaidCode} />
          </section>

          {/* Architecture Decision Records */}
          <section id="adr" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Architecture Decision Records (ADR)</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Decision</TableHead>
                  <TableHead>Alternatives</TableHead>
                  <TableHead>Justification</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    decision: 'EC2 ASG for GitLab & Mattermost',
                    alternatives: 'ECS, EKS, Third-party SaaS',
                    justification: 'Cost-effective, supports Docker, easier to manage than EKS for small team',
                  },
                  {
                    decision: 'Dedicated EC2 for Database',
                    alternatives: 'RDS, Aurora',
                    justification: 'Lower cost for small-scale DB, full control over Postgres/MySQL config',
                  },
                  {
                    decision: 'S3 for Mattermost Uploads',
                    alternatives: 'EFS, Local storage',
                    justification: 'Scalable, secure with IP restrictions, cost-efficient for static files',
                  },
                  {
                    decision: 'GitLab CE for CI/CD',
                    alternatives: 'GitHub Actions, Jenkins-only',
                    justification: 'Integrated with version control, free, supports Docker runners',
                  },
                  {
                    decision: 'Mattermost EE for Collaboration',
                    alternatives: 'Slack, MS Teams',
                    justification: 'Self-hosted, GitLab integration, cost-effective for enterprise features',
                  },
                  {
                    decision: 'WAF with Office IP Restrictions',
                    alternatives: 'No WAF, VPN-only access',
                    justification: 'Prevents external leaks, simpler than VPN for office-based access',
                  },
                ].map((row, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? 'bg-blue-50' : ''}>
                    <TableCell>{row.decision}</TableCell>
                    <TableCell>{row.alternatives}</TableCell>
                    <TableCell>{row.justification}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </section>

          {/* Implementation Plan */}
          <section id="implementation" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Implementation Plan</h2>
            <div className="relative pl-6">
              <div className="absolute left-2 top-0 h-full w-0.5 bg-blue-200"></div>
              {[
                'Set up VPC, subnets, NAT Gateway',
                'Configure IAM roles, Security Groups, ACM',
                'Deploy EC2 ASG for GitLab CE & Mattermost EE',
                'Set up dedicated EC2 for Postgres/MySQL',
                'Configure S3 with IP-restricted bucket policy',
                'Set up Route 53 DNS for gitlab.company.com, chat.company.com',
                'Implement GitLab CI/CD pipelines & Jenkins integration',
                'Configure Mattermost with GitLab notifications',
                'Set up CloudWatch monitoring & alarms',
                'Test and roll out to teams',
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center mb-4"
                >
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                  <p className="text-gray-700">{step}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Key Outcomes */}
          <section id="outcomes" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Key Outcomes</h2>
            <ul className="space-y-2">
              {[
                'Introduced DevOps culture with Git-based version control and CI/CD.',
                'Centralized collaboration via Mattermost, replacing emails/WhatsApp.',
                '80% of projects moved to automated pipelines.',
                'Enhanced security with S3 IP restrictions, preventing data leaks.',
                'Achieved zero downtime with EC2 ASG and database tier.',
              ].map((outcome, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-gray-700"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  {outcome}
                </motion.li>
              ))}
            </ul>
          </section>

          {/* AWS Services & DevOps Tools */}
          <section id="services" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">AWS Services & DevOps Tools Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'EC2 (App + DB Tier, ASG)', icon: <Server className="w-4 h-4 text-blue-600" /> },
                { title: 'S3 (File Uploads)', icon: <Database className="w-4 h-4 text-blue-600" /> },
                { title: 'Route 53 (DNS)', icon: <Cloud className="w-4 h-4 text-blue-600" /> },
                { title: 'ACM (TLS Certificates)', icon: <Lock className="w-4 h-4 text-blue-600" /> },
                { title: 'CloudWatch (Monitoring)', icon: <Monitor className="w-4 h-4 text-blue-600" /> },
                { title: 'IAM (Access Control)', icon: <Lock className="w-4 h-4 text-blue-600" /> },
                { title: 'VPC (Networking)', icon: <Network className="w-4 h-4 text-blue-600" /> },
                { title: 'GitLab CE (CI/CD)', icon: <GitBranch className="w-4 h-4 text-blue-600" /> },
                { title: 'GitLab Runners (Docker)', icon: <GitBranch className="w-4 h-4 text-blue-600" /> },
                { title: 'Mattermost EE', icon: <MessageCircle className="w-4 h-4 text-blue-600" /> },
                { title: 'Jenkins (Legacy CI/CD)', icon: <GitBranch className="w-4 h-4 text-blue-600" /> },
                { title: 'Docker (Containerization)', icon: <Layers className="w-4 h-4 text-blue-600" /> },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white shadow-lg rounded-2xl">
                    <CardHeader>
                      <CardTitle className="flex items-center text-blue-900 text-sm">
                        {service.icon}
                        <span className="ml-2">{service.title}</span>
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Sticky CTA Button */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogTrigger className="fixed bottom-6 right-6">
          <button className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
            <MessageCircle className="w-6 h-6" />
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-md p-6 bg-white rounded-2xl">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Let’s Work Together!</h2>
          <form onSubmit={submitForm} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={formState.submitting}
              className="px-4 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition"
            >
              <Send className="w-4 h-4 inline mr-2" />
              Send Message
            </button>
            {formState.succeeded && (
              <p className="text-green-600">Message sent successfully!</p>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}