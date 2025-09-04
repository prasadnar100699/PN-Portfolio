'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cloud, Server, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProjectsSection() {
  const projects = [
    {
      title: 'AWS Multi-App Architecture',
      description: 'Designed highly available cloud infrastructure for multiple client applications, ensuring scalability, reliability, and security with auto-scaling capabilities.',
      tags: ['AWS', 'Terraform', 'Docker', 'Redis', 'Route 53', 'CloudWatch'],
      icon: Cloud,
      gradient: 'from-blue-500 to-blue-700',
      features: [
        'Auto Scaling Groups with custom scaling policies',
        'Application Load Balancer with health checks',
        'RDS Multi-AZ for database high availability',
        'ElastiCache Redis for session management',
        'EFS for shared file storage across instances'
      ],
      keywords: 'AWS Architecture, High Availability, Cloud Automation, Infrastructure as Code, DevOps Case Study',
      github: '#',
      demo: '#',
      slug: 'aws-multi-app-architecture'
    },
    {
      title: 'SSL Certificate Expiry Monitor',
      description: 'Automated certificate expiry monitoring system with AWS Lambda, providing proactive notifications via email and SMS before certificates expire.',
      tags: ['Python', 'AWS Lambda', 'SNS', 'ACM', 'CloudWatch'],
      icon: Shield,
      gradient: 'from-green-500 to-green-700',
      features: [
        'Lambda function for automated certificate checking',
        'SNS integration for email and SMS alerts',
        'CloudWatch Events for scheduled monitoring',
        'Support for both ACM and imported certificates',
        'Custom dashboard for certificate status tracking'
      ],
      keywords: 'Serverless Monitoring, Certificate Management, AWS Lambda Project, Cloud Security Automation',
      github: '#',
      demo: '#',
      slug: 'ssl-certificate-monitor'
    },
    {
      title: 'EC2 Auto Start/Stop System',
      description: 'Cost optimization solution using EventBridge and Lambda to automatically start/stop EC2 instances based on business hours, reducing operational costs.',
      tags: ['AWS Lambda', 'EventBridge', 'SNS', 'EC2', 'Cost Optimization'],
      icon: Zap,
      gradient: 'from-orange-500 to-red-600',
      features: [
        'Scheduled EC2 instance management',
        'Business hours automation logic',
        'SNS notifications for instance status changes',
        'Cost tracking and reporting integration',
        'Support for multiple instance tags and filters'
      ],
      keywords: 'AWS Automation, EC2 Scheduling, Cost Optimization, EventBridge, Infrastructure Cost Management',
      github: '#',
      demo: '#',
      slug: 'ec2-auto-scheduling'
    },
    {
      title: 'Mattermost Security Enhancement',
      description: 'Implemented comprehensive security measures for internal communication platform using Nginx reverse proxy and IP-based access control.',
      tags: ['Linux', 'Nginx', 'Fail2Ban', 'Security Groups', 'SSL/TLS'],
      icon: Server,
      gradient: 'from-purple-500 to-purple-700',
      features: [
        'Nginx reverse proxy configuration',
        'IP whitelist-based access control',
        'Fail2Ban integration for intrusion prevention',
        'SSL/TLS certificate management',
        'Security headers and hardening measures'
      ],
      keywords: 'Cloud Security, Nginx Reverse Proxy, Secure File Access, DevOps Security Project, Linux Hardening',
      github: '#',
      demo: '#',
      slug: 'mattermost-security'
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