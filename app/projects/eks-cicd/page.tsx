import { Metadata } from 'next';
import EKSCICDClient from './EKSCICDClient';

export const metadata: Metadata = {
  title: 'CI/CD Pipeline for Kubernetes on EKS | Prasad Narkhede Portfolio',
  description: 'Modern CI/CD pipeline for deploying containerized microservices on Amazon EKS using GitHub Actions, Docker, and Helm.',
  keywords: 'CI/CD Kubernetes, EKS Pipeline, Docker Containerization, Helm Deployment, GitHub Actions, DevOps Automation',
};

export default function EKSCICDPage() {
  return <EKSCICDClient />;
}