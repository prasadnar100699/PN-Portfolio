'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Zap, AlertTriangle, Server, Bell } from 'lucide-react';
import MarkdownRenderer from '@/components/MarkdownRenderer';

const sections = [
  { id: 'introduction', title: 'Introduction', icon: <Cloud className="w-5 h-5" /> },
  { id: 'problem', title: 'The Problem', icon: <AlertTriangle className="w-5 h-5" /> },
  { id: 'solution', title: 'The Solution', icon: <Zap className="w-5 h-5" /> },
  { id: 'results', title: 'Results', icon: <Server className="w-5 h-5" /> },
  { id: 'lessons', title: 'Lessons Learned', icon: <Zap className="w-5 h-5" /> },
  { id: 'tools', title: 'Tools & Services Used', icon: <Cloud className="w-5 h-5" /> },
  { id: 'architecture', title: 'Architecture Diagram', icon: <Bell className="w-5 h-5" /> },
];

const post = {
  title: 'How I Automated SSL Certificate Expiry Monitoring with AWS Lambda & SNS',
  date: '2024-01-08', // Kept in object but not rendered
  readTime: '12 min read', // Kept in object but not rendered
  tags: ['AWS Lambda', 'Serverless', 'Automation'],
  category: 'Automation',
  content: `
# How I Automated SSL Certificate Expiry Monitoring with AWS Lambda & SNS

## Introduction

SSL/TLS certificates are mission-critical for any production application. A single expired certificate can:

- Break HTTPS connections.
- Cause application downtime.
- Impact customer trust and business reputation.

In my early days managing AWS infrastructure, I realized SSL management was a blind spot in operations. Certificates were being renewed manually, and some staging certificates even expired without notice.

To eliminate this risk, I built a serverless SSL expiry monitoring system using AWS Lambda, EventBridge, and SNS. Since then, we have achieved zero expired certificates across multiple production and staging environments.

## The Problem

### Manual Certificate Tracking

- Teams maintained spreadsheets to track expiry dates.
- Developers often forgot to renew staging certs.
- High risk of production downtime.

### No Centralized Alert System

- ACM-issued certificates were monitored in the console only.
- Imported certificates (e.g., GoDaddy, DigiCert) were often overlooked.
- No email/SMS alerts before expiry.

### Need for Automation

- Required a serverless, low-maintenance solution.
- Must monitor all certificates (ACM + imported).
- Alerts should trigger well before expiry (15 days).

## The Solution

I implemented a serverless monitoring pipeline using AWS services:

### 1. AWS Lambda Function

- Written in Python 3.9.
- Uses boto3 to fetch:
  - All ACM certificates (issued via ACM).
  - All imported certificates.
- Parses NotAfter (expiry date).
- Compares expiry date with current date + 15 days.

👉 If a certificate is close to expiry, it generates an alert message.

**Sample Python Code Snippet**:

\`\`\`python
import boto3
import datetime
import os

acm_client = boto3.client('acm')
sns_client = boto3.client('sns')

def lambda_handler(event, context):
    certificates = acm_client.list_certificates(CertificateStatuses=['ISSUED'])
    for cert in certificates['CertificateSummaryList']:
        details = acm_client.describe_certificate(CertificateArn=cert['CertificateArn'])
        expiry = details['Certificate']['NotAfter']
        days_left = (expiry - datetime.datetime.utcnow()).days
        
        if days_left <= 15:
            message = f"SSL Certificate for {cert['DomainName']} expires in {days_left} days."
            sns_client.publish(
                TopicArn=os.environ['SNS_TOPIC_ARN'],
                Subject="SSL Certificate Expiry Alert",
                Message=message
            )
\`\`\`

### 2. EventBridge Scheduler

- Configured to trigger Lambda daily.
- Ensures certificates are checked automatically without human intervention.

### 3. SNS Notifications

- Configured an SNS Topic for alerts.
- Subscribed:
  - Ops email group.
  - Admin phone numbers (SMS alerts).
- Alerts are sent 15 days before expiry.

**Example Alert**:

⚠️ SSL Expiry Alert  
Certificate: api.company.com  
Expires in: 12 days  
Action Required: Renew immediately via ACM/Import.

### 4. Centralized Monitoring Dashboard

- Lambda logs sent to CloudWatch.
- Added CloudWatch Alarms for Lambda failures.
- Dashboard shows:
  - Certificates nearing expiry.
  - Lambda execution logs.
  - SNS notification delivery status.

## Results

After implementation, the impact was clear:

| Metric | Before | After |
|--------|--------|-------|
| Certificate Tracking | Manual spreadsheets | Fully automated with Lambda |
| Expired Certificates | Multiple staging certs expired unnoticed | Zero expired certs |
| Alerting | None | Email + SMS alerts, 15 days in advance |
| Coverage | ACM-only | ACM + Imported certs |
| Ops Effort | 3–4 hrs/month | Near zero |

## Lessons Learned

- Never rely on manual SSL checks → Automation eliminates human error.
- Always monitor both ACM & imported certs → Many teams forget imported ones.
- Multi-channel alerts matter → Email alone isn’t enough, SMS ensures visibility.
- Serverless is ideal for monitoring → No servers to maintain, costs are negligible.
- Add resilience → CloudWatch alarms for Lambda failure ensure no silent monitoring gaps.

## Tools & Services Used

- AWS Lambda (Python 3.9, boto3).
- Amazon SNS (Email + SMS alerts).
- Amazon EventBridge (Daily trigger).
- AWS CloudWatch (Logs & monitoring).
- AWS ACM (SSL certs).
- Imported Certificates (e.g., GoDaddy, DigiCert).

## Architecture Diagram

\`\`\`mermaid
graph TD
    A[EventBridge Scheduler] --> B[AWS Lambda Function]
    B -->|Check Expiry Dates| C[ACM Certificates + Imported Certs]
    B --> D[SNS Notifications]
    D --> E[Email Alerts]
    D --> F[SMS Alerts]
    B --> G[CloudWatch Logs + Alarms]
\`\`\`
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