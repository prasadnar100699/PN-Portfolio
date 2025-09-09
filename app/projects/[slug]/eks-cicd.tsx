import { Metadata } from 'next';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export const metadata: Metadata = {
  title: 'CI/CD Pipeline for Kubernetes on EKS | Prasad Narkhede Portfolio',
  description: 'Automated deployment pipeline for microservices on EKS.',
  keywords: 'CI/CD EKS, Kubernetes Deployment, Docker Helm',
};

const projectContent = `# CI/CD Pipeline for Kubernetes on EKS

## Project Overview
Built a complete CI/CD pipeline using GitHub Actions to build Docker images, push to ECR, and deploy to Amazon EKS using Helm charts.

## Pipeline Stages
- Build and test
- Containerization with Docker
- Push to ECR
- Helm deployment to EKS
- Rollback capabilities

## Code Example
\`\`\`yaml
# GitHub Actions Workflow
name: Deploy to EKS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build Docker
        run: docker build -t app .
\`\`\`

## Integration
- AWS CLI for EKS access
- Helm for package management
- Kubectl for deployments

Keywords: EKS CI/CD, Kubernetes Pipeline, GitHub Actions, Helm`;

export default function EKSCICDPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">CI/CD Pipeline for Kubernetes on EKS</h1>
        <p className="text-lg text-gray-600 mb-8">Automated deployment pipeline for microservices on EKS.</p>
        <MarkdownRenderer content={projectContent} />
      </div>
    </div>
  );
}