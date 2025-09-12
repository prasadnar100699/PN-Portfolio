import { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

export const metadata: Metadata = {
  title: 'SSL Certificate Expiry Monitoring | Prasad Narkhede Blog',
  description: 'Step-by-step guide to building a serverless SSL certificate monitoring system that prevents unexpected certificate expirations in production environments.',
  keywords: 'AWS Lambda Project, Serverless Automation, Cloud Monitoring, SSL Certificate Management, ACM, AWS SNS Alerts, EventBridge',
};

export default function BlogPostPage() {
  return <BlogPostClient />;
}