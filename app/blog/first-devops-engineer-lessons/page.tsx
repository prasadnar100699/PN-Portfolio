import { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

export const metadata: Metadata = {
  title: 'Lessons Learned as the First DevOps Engineer | Prasad Narkhede Blog',
  description: 'Insights from my journey as the first DevOps engineer, building AWS infrastructure and CI/CD pipelines from scratch without senior guidance.',
  keywords: 'DevOps Career, Cloud Journey, Freshers in DevOps, AWS Projects for Beginners, DevOps Leadership, GitLab CI/CD, Mattermost, Cloud Security, AWS Architecture, Infrastructure Automation',
};

export default function BlogPostPage() {
  return <BlogPostClient />;
}