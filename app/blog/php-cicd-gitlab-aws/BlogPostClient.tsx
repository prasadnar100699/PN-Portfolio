'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Zap, AlertTriangle, Server, Users } from 'lucide-react';
import MarkdownRenderer from '@/components/MarkdownRenderer';

const sections = [
  { id: 'introduction', title: 'Introduction', icon: <Cloud className="w-5 h-5" /> },
  { id: 'challenges', title: 'Challenges Faced', icon: <AlertTriangle className="w-5 h-5" /> },
  { id: 'solutions', title: 'Solutions Implemented', icon: <Zap className="w-5 h-5" /> },
  { id: 'lessons', title: 'Lessons Learned', icon: <Users className="w-5 h-5" /> },
  { id: 'outcomes', title: 'Key Outcomes', icon: <Server className="w-5 h-5" /> },
  { id: 'tools', title: 'Tools & Services Used', icon: <Cloud className="w-5 h-5" /> },
];

const post = {
  title: 'Lessons Learned as the First DevOps Engineer in My Company',
  tags: ['DevOps', 'AWS', 'CI/CD', 'Cloud Architecture'],
  category: 'DevOps',
  content: `
# Lessons Learned as the First DevOps Engineer in My Company

## Introduction

When I started as a fresher Cloud & DevOps Engineer, I had no senior DevOps colleagues to guide me. I was the first and only DevOps resource in the company, tasked with managing AWS infrastructure, improving deployments, and solving critical issues.

This meant I had to wear multiple hats—infrastructure architect, security engineer, automation specialist, and at times, a firefighter during production incidents.

Here’s my journey: the challenges I faced, the solutions I implemented, and the lessons I learned while introducing DevOps practices from scratch.

## Challenges Faced

### 1. No Existing Infrastructure Standards

- There were no defined VPC structures, IAM policies, or backup strategies.
- Applications were deployed directly on EC2 without clear networking rules.
- No documentation for infrastructure or processes.

### 2. Security Risks

- IAM users had over-permissive access (AdministratorAccess everywhere).
- No Web Application Firewall (WAF) to protect web apps.
- Weak network segmentation → all workloads exposed to public internet.

### 3. Manual Deployments

- More than 30 PHP applications were deployed manually by developers.
- Code was uploaded directly to servers using FTP or SCP.
- No CI/CD pipelines → frequent human errors, downtime during deployments.

### 4. Cost Issues

- Infrastructure was overprovisioned (large EC2 instances running 24/7).
- No auto-scaling or reserved instances.
- Monthly AWS bills were unnecessarily high.

## Solutions Implemented

To tackle these issues, I gradually introduced modern DevOps practices and redesigned the company’s AWS environment.

### 1. Designed Multi-App AWS Architecture

Implemented a scalable architecture with:

- Auto Scaling Group (ASG) for web apps.
- Application Load Balancer (ALB) with path-based routing.
- Amazon RDS (MySQL, Multi-AZ) for reliability.
- Amazon EFS for shared code/configs.
- Amazon ElastiCache (Redis) for sessions & caching.

**Result** → Achieved 99.9% uptime and improved scalability.

### 2. Introduced GitLab CI/CD & Mattermost EE

- Deployed GitLab CE on AWS EC2 for centralized version control.
- Configured GitLab Runners for CI/CD pipelines.
- Integrated Mattermost Enterprise Edition for team collaboration.

**Result** → Fully automated deployments, improved developer communication.

### 3. Implemented Monitoring & Automation

- Built SSL certificate expiry monitoring using Lambda + SNS (no expired certs).
- Set up AWS Backup for RDS, EFS, and EC2 AMIs.
- Introduced CloudWatch dashboards & alerts for proactive monitoring.

### 4. Optimized Costs

- Migrated from GoDaddy DNS → AWS Route 53 (better integration with ACM & ALB).
- Right-sized EC2 instances and introduced ASG scaling policies.
- Achieved ~40% cost savings without impacting performance.

## Lessons Learned

Being the first DevOps engineer in a company taught me lessons beyond technology:

### 1. Ownership Matters

- With no seniors to escalate issues to, I had to take ownership of everything—from design to incident management.
- This built confidence and problem-solving skills early in my career.

### 2. Documentation is Key

- Writing ADR (Architecture Decision Records) and NFRs (Non-Functional Requirements) made my designs defendable and repeatable.
- Good documentation helped other teams understand decisions and follow standards.

### 3. Automation First Mindset

- Every manual process eventually became a bottleneck.
- From deployments to SSL monitoring → I automated everything possible.
- Automation reduced errors, saved time, and improved consistency.

### 4. Security Cannot Be an Afterthought

- Initially, IAM and networking were too open.
- By enforcing least privilege IAM, SG restrictions, and WAF rules, I built a secure baseline.

### 5. Communication with Developers is Critical

- DevOps is not just tools → it’s about collaboration.
- Introducing GitLab + Mattermost transformed how developers worked together.

## Key Outcomes

- ✅ Established company-wide DevOps culture from scratch.
- ✅ Achieved 99.9% uptime with robust AWS architecture.
- ✅ Reduced AWS costs by ~40% through right-sizing & auto-scaling.
- ✅ Eliminated expired SSL certs with serverless monitoring.
- ✅ Standardized deployments across 30+ apps using GitLab CI/CD.

## Tools & Services Used

- **AWS** → EC2, ASG, ALB, RDS, EFS, ElastiCache, Route 53, Lambda, SNS, CloudWatch, AWS Backup.
- **DevOps Tools** → GitLab CE, GitLab CI/CD, Mattermost EE, Docker.
- **Security** → IAM (least privilege), ACM TLS, WAF, SCPs in AWS Organizations.
  `,
};

export default function BlogPostClient() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sectionElements = sections.map((section) => ({
        id: section.id,
        offsetTop: document.getElementById(section.id)?.offsetTop || 0,
      }));

      const currentSection = sectionElements.reduce((prev, curr) => {
        return curr.offsetTop <= scrollPosition && curr.offsetTop > prev.offsetTop ? curr : prev;
      }, { id: 'introduction', offsetTop: 0 });

      setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-24 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-lg p-6 fixed md:sticky top-24 h-auto md:h-screen">
        <ScrollArea className="h-[calc(100vh-6rem)]">
          <nav>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    className={`flex items-center p-2 rounded-lg text-gray-700 hover:bg-blue-100 transition-colors ${
                      activeSection === section.id ? 'bg-blue-200 text-blue-900 font-semibold' : ''
                    }`}
                  >
                    {section.icon}
                    <span className="ml-3">{section.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollArea>
      </aside>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 mb-8 text-gray-600">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            {post.category}
          </span>
        </div>

        <MarkdownRenderer content={post.content} />

        {/* Tags */}
        <section id="tags" className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}