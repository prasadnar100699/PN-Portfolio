'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Code } from '@/components/ui/code';
import { Cloud, Zap, AlertTriangle, Server } from 'lucide-react';
import MarkdownRenderer from '@/components/MarkdownRenderer';

const sections = [
  { id: 'introduction', title: 'Introduction', icon: <Cloud className="w-5 h-5" /> },
  { id: 'problem', title: 'The Problem', icon: <AlertTriangle className="w-5 h-5" /> },
  { id: 'solution', title: 'The Solution', icon: <Zap className="w-5 h-5" /> },
  { id: 'results', title: 'Results', icon: <Server className="w-5 h-5" /> },
  { id: 'lessons', title: 'Lessons Learned', icon: <Zap className="w-5 h-5" /> },
];

const post = {
  title: 'Fixing AWS EFS Latency – Why ElastiCache & S3 are Better for Sessions & Uploads',
  date: '2024-01-15', // Kept in object but not rendered
  readTime: '8–10 min', // Kept in object but not rendered
  tags: ['EFS Performance', 'AWS ElastiCache', 'Cloud Optimization'],
  category: 'Cloud Architecture',
  content: `
# Fixing AWS EFS Latency – Why ElastiCache & S3 are Better for Sessions & Uploads

## Introduction

Amazon EFS (Elastic File System) is one of the most popular AWS services when it comes to sharing application code and configurations across multiple EC2 instances or Auto Scaling Groups. It's simple, scalable, and integrates natively with Linux workloads.

However, during my work as a Cloud & DevOps Engineer, I discovered that not all workloads are suitable for EFS. While it works great for shared read-heavy workloads like application code or static configs, performance can degrade significantly when used for:

- PHP/Python session storage
- Cache directories
- Frequent user uploads (images, PDFs, media files)

In this blog, I’ll share the problem I faced with EFS latency, the solutions I implemented using Redis and S3, and the impact on application performance.

## The Problem

### 1. High Latency for Sessions

Our PHP applications were configured to store user sessions in EFS for consistency across multiple nodes in an Auto Scaling Group (ASG).

- Every login, logout, or API call required frequent read/writes to session files.
- EFS introduces network-level latency (typically 10–20 ms per operation).
- Compared to local disk (~1 ms), this slowed down overall response time.

**Result**: Applications became noticeably slower during peak usage when hundreds of users were writing sessions simultaneously.

### 2. Cache Misuse

Some applications were configured to use EFS for caching temporary files.

- PHP cache/ directories and framework temp files were written to EFS.
- High-frequency small I/O operations created an I/O bottleneck.
- EFS burst credits drained faster, reducing throughput even further.

**Result**: Applications suffered sudden latency spikes, especially when caches were frequently cleared and rebuilt.

### 3. User Uploads on EFS

All user-generated uploads (images, PDFs, videos) were initially stored directly in EFS.

- Uploads created continuous write traffic.
- Multiple users uploading files at the same time caused performance degradation.
- Latency increased for other apps sharing the same EFS mount.

**Result**: Not only did uploads slow down, but session management and app responses also suffered because they were competing for the same EFS performance pool.

## The Solution

After analyzing CloudWatch metrics (EFS BurstCreditBalance, EC2 I/O Wait), I implemented a layered storage strategy.

### 1. Sessions → Redis (Amazon ElastiCache)

Instead of storing sessions on EFS, I migrated them to Amazon ElastiCache for Redis.

Updated PHP configuration:

\`\`\`ini
session.save_handler = redis
session.save_path = "tcp://redis-endpoint:6379"
\`\`\`

- Redis is in-memory → sub-millisecond access times.
- Highly scalable and fault-tolerant with replication & automatic failover.

**Impact**: Session response time dropped from 20–30 ms (EFS) to <1 ms (Redis).

### 2. Uploads → Amazon S3

All file uploads and media storage were shifted from EFS to Amazon S3.

- Applications now upload directly to an S3 bucket (mattermost-upload-tejgroup).
- S3 provides virtually unlimited storage with 11 9’s durability.
- Implemented Lifecycle Policies:
  - Keep files in Standard storage for 30 days.
  - Move to Glacier Deep Archive for cost efficiency after 30 days.

**Impact**: Uploads no longer slowed down the apps. Users experienced faster media handling while costs reduced over time.

### 3. Restricting EFS Usage

EFS was limited to only application code and configuration files, mounted at /var/apps.

- ASG nodes mount /apps/web.
- Fixed EC2 (Docker host) mounts /apps/docker.
- No session files, no uploads, no cache directories.

**Impact**: EFS burst credits remained stable, and throughput became predictable.

## Results

After implementing Redis and S3 alongside EFS:

| Metric | Before (EFS for all) | After (Redis + S3 + EFS split) |
|--------|----------------------|-------------------------------|
| Session Latency | 20–30 ms | < 1 ms |
| Upload Latency | 2–5 sec (large files) | < 1 sec (parallelized) |
| App Response Time | ~300 ms | ~120 ms |
| EFS Burst Credits | Frequently drained | Stable, >90% maintained |

**Key Benefits**:

- 🚀 2.5x faster response times for session-heavy apps.
- 📉 No more random latency spikes caused by uploads.
- 💰 Lower costs with S3 lifecycle rules + Redis reserved nodes.
- 🔒 Separation of concerns: EFS (code/configs), Redis (sessions), S3 (uploads).

## Lessons Learned

- EFS is not a universal storage solution → it’s great for code/configs but poor for sessions and high I/O workloads.
- Choose the right storage service for the right use case → Redis for sessions, S3 for uploads, EFS for shared code.
- CloudWatch monitoring is critical → observing BurstCreditBalance and I/O latency helped identify the root cause.
- Small architecture changes = big impact → a simple storage strategy change cut latency by 60%.
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