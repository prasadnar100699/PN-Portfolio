import { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

export const metadata: Metadata = {
  title: 'Fixing AWS EFS Latency | Prasad Narkhede Blog',
  description: 'Deep dive into AWS EFS performance issues and why ElastiCache and S3 provide superior solutions for session management and file uploads in production environments.',
  keywords: 'EFS Performance, AWS ElastiCache, Cloud Optimization, S3 vs EFS, Session Management, AWS Cost Savings, Cloud Monitoring',
};

export default function BlogPostPage() {
  return <BlogPostClient />;
}