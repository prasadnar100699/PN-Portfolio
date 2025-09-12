'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cloud,
  Lock,
  Monitor,
  GitBranch,
  Menu,
  X,
  Send,
  Rocket,
  CheckCircle,
  Users,
  DollarSign,
  Shield,
  Database,
  MessageCircle,
} from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog';
import { useForm } from '@formspree/react';
import MermaidChart from '@/components/MarkdownRenderer';

const sections = [
  { id: 'overview', title: 'Overview', icon: <Cloud className="w-4 h-4" /> },
  { id: 'objectives', title: 'Objectives', icon: <Rocket className="w-4 h-4" /> },
  { id: 'architecture', title: 'Architecture', icon: <GitBranch className="w-4 h-4" /> },
  { id: 'outcomes', title: 'Outcomes', icon: <CheckCircle className="w-4 h-4" /> },
  { id: 'services', title: 'Tools', icon: <Database className="w-4 h-4" /> },
];

export default function ClientIsolationClient() {
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
    A[Management Account<br>Consolidated Billing & Governance] --> B[AWS Organizations]
    B --> C[Client-A OU]
    B --> D[Client-B OU]
    B --> E[Client-C OU]
    C --> F[Client-A AWS Account]
    D --> G[Client-B AWS Account]
    E --> H[Client-C AWS Account]
    subgraph Security
        I[IAM Identity Center<br>SSO]
        J[Service Control Policies<br>SCPs]
        K[CloudTrail + Config<br>Centralized Logging]
    end
    subgraph Billing
        L[Cost Explorer]
        M[Budgets & Alerts]
        N[Per-Client Reporting]
    end
    A --> I
    A --> J
    A --> K
    A --> L
    A --> M
    A --> N
  `;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Multi-Client Account Isolation</h1>
          <p className="text-lg mb-6">Secure, scalable multi-tenant AWS architecture with Organizations</p>
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
              As a Cloud & DevOps Engineer at Tej IT Solutions, I designed a multi-tenant AWS architecture using AWS
              Organizations to provide account-level isolation for each client, enforce security policies, and enable
              separate billing. This addressed the challenge of managing multiple client environments under a single
              umbrella, ensuring data isolation, strong security boundaries, and clear cost allocation.
            </p>
          </section>

          {/* Objectives */}
          <section id="objectives" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Business & Technical Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Account Isolation', desc: 'Separate AWS accounts per client for strict security boundaries.', icon: <Users className="w-5 h-5 text-blue-600" /> },
                { title: 'Security Policies', desc: 'Enforce SCPs to restrict risky services across accounts.', icon: <Lock className="w-5 h-5 text-blue-600" /> },
                { title: 'Billing Transparency', desc: 'Consolidated billing with per-client cost tracking.', icon: <DollarSign className="w-5 h-5 text-blue-600" /> },
                { title: 'IAM Governance', desc: 'AWS SSO for centralized, role-based access control.', icon: <Shield className="w-5 h-5 text-blue-600" /> },
                { title: 'Scalability', desc: 'Automated provisioning of new client accounts via Control Tower.', icon: <Rocket className="w-5 h-5 text-blue-600" /> },
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
                  { attr: 'Security', req: 'SCPs prevent risky operations across accounts', icon: <Lock className="w-4 h-4 text-blue-600" /> },
                  { attr: 'Isolation', req: 'Separate accounts per client; no cross-data access', icon: <Shield className="w-4 h-4 text-blue-600" /> },
                  { attr: 'Billing', req: 'Per-client cost reporting via consolidated billing', icon: <DollarSign className="w-4 h-4 text-blue-600" /> },
                  { attr: 'Compliance', req: 'Centralized logging with CloudTrail and Config', icon: <Monitor className="w-4 h-4 text-blue-600" /> },
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
                  title: 'AWS Organizations Setup',
                  content: 'Management account for consolidated billing and governance. Organizational Units (OUs) for Client-A, Client-B, Client-C, each with a separate AWS account.',
                  icon: <Cloud className="w-5 h-5 text-blue-600" />,
                },
                {
                  title: 'IAM & Security',
                  content: 'AWS IAM Identity Center (SSO) for single login. SCPs to deny disabling CloudTrail, GuardDuty, and unapproved instance types.',
                  icon: <Lock className="w-5 h-5 text-blue-600" />,
                },
                {
                  title: 'Billing & Monitoring',
                  content: 'Consolidated billing with Cost Explorer and Budgets for per-client tracking. Centralized CloudTrail and Config for compliance.',
                  icon: <DollarSign className="w-5 h-5 text-blue-600" />,
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
                    decision: 'AWS Organizations for Multi-Tenancy',
                    alternatives: 'Single AWS Account, VPC Peering',
                    justification: 'Organizations provide native account isolation and governance.',
                  },
                  {
                    decision: 'IAM Identity Center (SSO)',
                    alternatives: 'IAM Users, Third-party SSO',
                    justification: 'Centralized access control, AWS-native, simplifies multi-account management.',
                  },
                  {
                    decision: 'SCPs for Security Policies',
                    alternatives: 'IAM Policies, Manual Governance',
                    justification: 'SCPs enforce org-wide restrictions, reducing human error.',
                  },
                  {
                    decision: 'Consolidated Billing',
                    alternatives: 'Separate Billing per Account',
                    justification: 'Simplifies payment while allowing per-client cost tracking.',
                  },
                  {
                    decision: 'Control Tower for Account Provisioning',
                    alternatives: 'Manual Account Creation, CLI Scripts',
                    justification: 'Automates account setup with pre-configured governance.',
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
                'Set up AWS Organizations and Management Account',
                'Create OUs for Client-A, Client-B, Client-C',
                'Provision client AWS accounts via Control Tower',
                'Configure IAM Identity Center (SSO)',
                'Apply SCPs to restrict CloudTrail, GuardDuty, instance types',
                'Set up consolidated billing with Cost Explorer and Budgets',
                'Centralize CloudTrail and Config logging',
                'Test account isolation and compliance',
                'Roll out to clients',
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
                '100% account-level isolation with no shared resources.',
                'Improved security posture with org-wide SCPs.',
                'Billing transparency via per-client budgets and alerts.',
                'Scalable model with Control Tower for new accounts.',
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

          {/* AWS Services & Tools */}
          <section id="services" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">AWS Services & Tools Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'AWS Organizations', icon: <Cloud className="w-4 h-4 text-blue-600" /> },
                { title: 'IAM Identity Center (SSO)', icon: <Lock className="w-4 h-4 text-blue-600" /> },
                { title: 'Service Control Policies (SCPs)', icon: <Shield className="w-4 h-4 text-blue-600" /> },
                { title: 'CloudTrail', icon: <Monitor className="w-4 h-4 text-blue-600" /> },
                { title: 'AWS Config', icon: <Monitor className="w-4 h-4 text-blue-600" /> },
                { title: 'Cost Explorer', icon: <DollarSign className="w-4 h-4 text-blue-600" /> },
                { title: 'Budgets', icon: <DollarSign className="w-4 h-4 text-blue-600" /> },
                { title: 'Consolidated Billing', icon: <DollarSign className="w-4 h-4 text-blue-600" /> },
                { title: 'GuardDuty', icon: <Shield className="w-4 h-4 text-blue-600" /> },
                { title: 'IAM Policies', icon: <Lock className="w-4 h-4 text-blue-600" /> },
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