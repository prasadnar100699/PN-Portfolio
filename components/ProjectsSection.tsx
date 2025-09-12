'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cloud, Server, Shield, Zap, GitBranch, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Company-Wide DevOps Transformation',
      description: 'Implemented GitLab CE and Mattermost EE to introduce DevOps culture, replacing manual deployments with automated CI/CD pipelines.',
      tags: ['GitLab', 'Mattermost', 'CI/CD', 'Jenkins', 'Docker'],
      icon: GitBranch,
      gradient: 'from-purple-500 to-purple-700',
      features: [
        'Version control and CI/CD implementation',
        'Team collaboration tools setup',
        'Automated deployment pipelines'
      ],
      keywords: 'DevOps Transformation, CI/CD Pipelines, GitLab Implementation, Team Collaboration, Automation',
      github: 'https://github.com/prasadnar100699/edureka-devops-git',
      demo: '#',
      slug: 'devops-transformation'
    },
    {
      title: 'Multi-Tier AWS Infrastructure',
      description: 'Deployed scalable and highly available architecture for client applications using EC2, RDS, ALB, ASG, and Route 53.',
      tags: ['AWS', 'EC2', 'RDS', 'ALB', 'ASG', 'Route 53'],
      icon: Cloud,
      gradient: 'from-blue-500 to-blue-700',
      features: [
        'Multi-AZ high availability',
        'Auto scaling groups',
        'Load balancing with health checks'
      ],
      keywords: 'AWS Architecture, High Availability, Scalable Infrastructure, Cloud Deployment, Multi-Tier Setup',
      github: '#',
      demo: '#',
      slug: 'aws-infrastructure'
    },
    {
      title: 'Multi-Client Account Isolation',
      description: 'Implemented AWS Organizations for isolated client accounts with security policies and separate billing.',
      tags: ['AWS Organizations', 'IAM', 'Security', 'Billing'],
      icon: Shield,
      gradient: 'from-green-500 to-green-700',
      features: [
        'Account isolation',
        'Policy enforcement',
        'Separate billing'
      ],
      keywords: 'AWS Organizations, Account Isolation, IAM Policies, Cloud Security, Multi-Tenant Architecture',
      github: 'https://github.com/prasadnar100699/aws-client-billing-management',
      demo: '#',
      slug: 'client-isolation'
    },
    {
      title: 'Infrastructure as Code with Terraform',
      description: 'Automated provisioning of AWS resources including VPC, EC2, RDS, and ALB using Terraform modules.',
      tags: ['Terraform', 'AWS', 'IaC', 'VPC', 'EC2'],
      icon: Server,
      gradient: 'from-orange-500 to-red-600',
      features: [
        'Modular Terraform code',
        'Automated resource provisioning',
        'Consistent deployments'
      ],
      keywords: 'Infrastructure as Code, Terraform AWS, Cloud Automation, Resource Provisioning, DevOps',
      github: '#',
      demo: '#',
      slug: 'terraform-iac'
    },
    {
      title: 'CI/CD Pipeline for Kubernetes on EKS',
      description: 'Built CI/CD pipeline to deploy containerized microservices to Amazon EKS using GitHub Actions, Docker, and Helm.',
      tags: ['GitHub Actions', 'Docker', 'EKS', 'Helm', 'Kubernetes'],
      icon: Zap,
      gradient: 'from-indigo-500 to-indigo-700',
      features: [
        'Automated builds and deployments',
        'Container orchestration',
        'Helm chart management'
      ],
      keywords: 'CI/CD Kubernetes, EKS Pipeline, Docker Containerization, Helm Deployment, GitHub Actions',
      github: '#',
      demo: '#',
      slug: 'eks-cicd'
    },
    {
      title: 'Cloud Cost Optimization Tool',
      description: 'Developed Python script using Boto3 to analyze and automatically stop idle EC2 instances for cost savings.',
      tags: ['Python', 'Boto3', 'AWS', 'EC2', 'Cost Optimization'],
      icon: DollarSign,
      gradient: 'from-teal-500 to-teal-700',
      features: [
        'Idle resource detection',
        'Automated instance management',
        'Cost analysis reporting'
      ],
      keywords: 'Cloud Cost Optimization, AWS Boto3, Python Automation, EC2 Management, FinOps',
      github: 'https://github.com/prasadnar100699/aws-billing-management-system',
      demo: '#',
      slug: 'cost-optimization'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real-world cloud infrastructure projects showcasing AWS expertise, automation capabilities, 
            and production-ready solutions that drive business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-xl mr-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                      onClick={() => window.open(`/projects/${project.slug}`, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-gray-300 hover:bg-gray-50"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>

                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600">
                      <strong>SEO Keywords:</strong> {project.keywords}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}