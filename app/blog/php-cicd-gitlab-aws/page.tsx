import { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

export const metadata: Metadata = {
  title: 'CI/CD for PHP Applications with GitLab & AWS | Prasad Narkhede Blog',
  description: 'Complete guide to implementing robust CI/CD pipelines for multiple PHP applications using GitLab CI and AWS services for automated testing and deployment.',
  keywords: 'DevOps Automation, Continuous Integration, Continuous Deployment, AWS GitLab Pipeline, PHP CI/CD',
};

export default function BlogPostPage() {
  return <BlogPostClient />;
}