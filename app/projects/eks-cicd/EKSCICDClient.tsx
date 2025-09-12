'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Code } from '@/components/ui/code';
import { Zap, GitBranch, Server, Shield, Monitor, Cloud, Database, Container } from 'lucide-react';
import MermaidChart from '@/components/MarkdownRenderer';

const sections = [
  { id: 'overview', title: 'Project Overview', icon: <Zap className="w-5 h-5" /> },
  { id: 'objectives', title: 'Business & Technical Objectives', icon: <GitBranch className="w-5 h-5" /> },
  { id: 'architecture', title: 'Architecture Design', icon: <Server className="w-5 h-5" /> },
  { id: 'nfrs', title: 'Non-Functional Requirements', icon: <Shield className="w-5 h-5" /> },
  { id: 'outcomes', title: 'Key Outcomes', icon: <Monitor className="w-5 h-5" /> },
  { id: 'tools', title: 'Tools & Services', icon: <Database className="w-5 h-5" /> },
  { id: 'diagram', title: 'Architecture Diagram', icon: <Cloud className="w-5 h-5" /> },
  { id: 'code', title: 'Code Examples', icon: <Container className="w-5 h-5" /> },
  { id: 'keywords', title: 'SEO Keywords', icon: <Zap className="w-5 h-5" /> },
];

export default function EKSCICDClient() {
  const [activeSection, setActiveSection] = useState('overview');

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
    A[Developer Push Code] --> B[GitHub Actions CI/CD]
    B -->|Build Docker Image| C[Amazon ECR]
    B -->|Deploy with Helm| D[EKS Cluster]
    D --> E[ALB Ingress Controller + ACM TLS]
    D --> F[Pods / Microservices]
    F --> G[CloudWatch + Prometheus/Grafana Monitoring]
    
    subgraph "EKS Cluster"
        H[Worker Nodes - EC2/Fargate]
        I[Auto Scaling Groups]
        J[IAM Roles for Service Accounts]
    end
    
    D --> H
    D --> I
    D --> J
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white/80 backdrop-blur-sm shadow-xl p-6 fixed md:sticky top-24 h-auto md:h-screen border-r border-green-100">
        <ScrollArea className="h-[calc(100vh-6rem)]">
          <nav>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    className={`flex items-center p-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-green-100 hover:to-blue-100 transition-all duration-300 ${
                      activeSection === section.id ? 'bg-gradient-to-r from-green-200 to-blue-200 text-green-900 font-semibold shadow-md' : ''
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
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl mb-8 shadow-xl">
          <h1 className="text-4xl font-bold mb-4">CI/CD Pipeline for Kubernetes on EKS</h1>
          <p className="text-xl opacity-90">
            Modern containerized microservices deployment with GitHub Actions, Docker, and Helm
          </p>
        </div>

        {/* Project Overview */}
        <section id="overview" className="mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-green-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-green-900 flex items-center">
                <Zap className="w-6 h-6 mr-3" />
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                This project demonstrates a modern CI/CD pipeline for deploying containerized microservices on Amazon Elastic Kubernetes Service (EKS).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Using GitHub Actions, Docker, and Helm, I automated the entire pipeline — from code commit to production deployment — 
                ensuring fast, repeatable, and reliable software delivery.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Business & Technical Objectives */}
        <section id="objectives" className="mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-900 flex items-center">
                <GitBranch className="w-6 h-6 mr-3" />
                Business & Technical Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Automation', desc: 'Fully automated build, test, and deploy pipeline' },
                  { title: 'Scalability', desc: 'Deploy workloads on Kubernetes (EKS) with auto-scaling' },
                  { title: 'Standardization', desc: 'Manage deployments using Helm charts for consistency' },
                  { title: 'Observability', desc: 'Ensure logs, metrics, and health checks are integrated' },
                  { title: 'Developer Velocity', desc: 'Enable developers to ship code faster with GitHub Actions' },
                  { title: 'Security', desc: 'Implement IAM IRSA and secure container practices' }
                ].map((objective, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-100">
                    <h4 className="font-semibold text-green-900 mb-2">{objective.title}</h4>
                    <p className="text-gray-700 text-sm">{objective.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Architecture Design */}
        <section id="architecture" className="mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-purple-900 flex items-center">
                <Server className="w-6 h-6 mr-3" />
                Architecture Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">1. Code & Build Stage</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Source code hosted in GitHub Repository</li>
                    <li>GitHub Actions Workflow triggered on push/merge</li>
                    <li>Build Docker images → pushed to Amazon ECR (Elastic Container Registry)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">2. Deployment Stage</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Helm Charts used for Kubernetes manifests (standardized deployments)</li>
                    <li>GitHub Actions workflow deploys updated Helm release to EKS cluster</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">3. Kubernetes Cluster (EKS)</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>EKS cluster deployed across multiple AZs for high availability</li>
                    <li>Worker nodes (EC2 or Fargate) auto-scaled based on workload</li>
                    <li>Ingress Controller (ALB Ingress) handles routing & SSL termination</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">4. Monitoring & Security</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>CloudWatch & Prometheus/Grafana for logs & metrics</li>
                    <li>IAM Roles for Service Accounts (IRSA) for least-privilege pod permissions</li>
                    <li>Secrets stored in AWS Secrets Manager</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Non-Functional Requirements */}
        <section id="nfrs" className="mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-orange-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-orange-900 flex items-center">
                <Shield className="w-6 h-6 mr-3" />
                Non-Functional Requirements (NFRs)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Quality Attribute</TableHead>
                    <TableHead className="font-semibold">Requirement</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Automation</TableCell>
                    <TableCell>Zero manual intervention for builds & deployments</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Performance</TableCell>
                    <TableCell>Build + deploy cycle &lt; 10 minutes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Availability</TableCell>
                    <TableCell>EKS across multiple AZs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Security</TableCell>
                    <TableCell>IAM least privilege with IRSA; TLS via ACM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Scalability</TableCell>
                    <TableCell>Kubernetes HPA auto-scales pods</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Key Outcomes */}
        <section id="outcomes" className="mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-green-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-green-900 flex items-center">
                <Monitor className="w-6 h-6 mr-3" />
                Key Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  '✅ End-to-end CI/CD pipeline automated with GitHub Actions',
                  '✅ Standardized deployments with Helm → no manual YAML errors',
                  '✅ Faster releases → code to production in under 10 mins',
                  '✅ Scalable architecture → microservices scale automatically with traffic',
                  '✅ Improved security → IAM IRSA for pod-level security, TLS everywhere',
                  '✅ Enhanced observability → comprehensive monitoring and logging'
                ].map((outcome, index) => (
                  <div key={index} className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-800 font-medium">{outcome}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tools & Services */}
        <section id="tools" className="mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-900 flex items-center">
                <Database className="w-6 h-6 mr-3" />
                Tools & Services Used
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { category: 'AWS Services', items: ['EKS', 'ECR', 'IAM IRSA', 'Route 53', 'CloudWatch', 'Secrets Manager'] },
                  { category: 'DevOps Tools', items: ['GitHub Actions', 'Docker', 'Helm', 'Prometheus', 'Grafana', 'kubectl'] },
                  { category: 'Kubernetes', items: ['Deployments', 'Services', 'Ingress', 'HPA', 'ConfigMaps', 'Secrets'] }
                ].map((category, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">{category.category}</h4>
                    <ul className="space-y-1">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Architecture Diagram */}
        <section id="diagram" className="mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-purple-900 flex items-center">
                <Cloud className="w-6 h-6 mr-3" />
                Architecture Diagram
              </CardTitle>
            </CardHeader>
            <CardContent>
              <MermaidChart content={mermaidCode} />
            </CardContent>
          </Card>
        </section>

        {/* Code Examples */}
        <section id="code" className="mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <Container className="w-6 h-6 mr-3" />
                Code Examples
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">GitHub Actions Workflow</h4>
                  <Code language="yaml">
                    {`name: Deploy to EKS
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Build and push Docker image
      run: |
        docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$GITHUB_SHA .
        docker push $ECR_REGISTRY/$ECR_REPOSITORY:$GITHUB_SHA
    
    - name: Deploy to EKS
      run: |
        helm upgrade --install myapp ./helm-chart \\
          --set image.tag=$GITHUB_SHA`}
                  </Code>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Helm Values</h4>
                  <Code language="yaml">
                    {`replicaCount: 3

image:
  repository: 123456789.dkr.ecr.us-west-2.amazonaws.com/myapp
  tag: latest
  pullPolicy: IfNotPresent

service:
  type: ClusterIP
  port: 80

ingress:
  enabled: true
  className: "alb"
  annotations:
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip

autoscaling:
  enabled: true
  minReplicas: 2
  maxReplicas: 10
  targetCPUUtilizationPercentage: 70`}
                  </Code>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* SEO Keywords */}
        <section id="keywords" className="mb-12">
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center">
                <Zap className="w-6 h-6 mr-3" />
                SEO Keywords
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 leading-relaxed">
                CI/CD Kubernetes, EKS Pipeline, Docker Containerization, Helm Deployment, GitHub Actions, 
                DevOps Automation, Cloud-Native Deployments, Infrastructure as Code, Microservices Architecture, 
                Container Orchestration, AWS EKS, Kubernetes CI/CD, GitOps, Container Registry
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}