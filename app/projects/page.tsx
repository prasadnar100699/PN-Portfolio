import { Metadata } from 'next';
import Link from 'next/link';
import { Cloud, Server, Shield, Zap, GitBranch, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects | Prasad Narkhede - AWS & DevOps Portfolio',
  description: 'Showcase of real-world cloud infrastructure projects, AWS architectures, and DevOps automation solutions.',
  keywords: 'AWS Projects, DevOps Portfolio, Cloud Infrastructure, Terraform Projects, CI/CD Pipelines',
};

const projects = [
  {
    title: 'Company-Wide DevOps Transformation',
    description: 'Implemented GitLab CE and Mattermost EE to introduce DevOps culture, replacing manual deployments with automated CI/CD pipelines.',
    slug: 'devops-transformation',
    icon: GitBranch,
  },
  {
    title: 'Multi-Tier AWS Infrastructure',
    description: 'Deployed scalable and highly available architecture for client applications using EC2, RDS, ALB, ASG, and Route 53.',
    slug: 'aws-infrastructure',
    icon: Cloud,
  },
  {
    title: 'Multi-Client Account Isolation',
    description: 'Implemented AWS Organizations for isolated client accounts with security policies and separate billing.',
    slug: 'client-isolation',
    icon: Shield,
  },
  {
    title: 'Infrastructure as Code with Terraform',
    description: 'Automated provisioning of AWS resources including VPC, EC2, RDS, and ALB using Terraform modules.',
    slug: 'terraform-iac',
    icon: Server,
  },
  {
    title: 'CI/CD Pipeline for Kubernetes on EKS',
    description: 'Built CI/CD pipeline to deploy containerized microservices to Amazon EKS using GitHub Actions, Docker, and Helm.',
    slug: 'eks-cicd',
    icon: Zap,
  },
  {
    title: 'Cloud Cost Optimization Tool',
    description: 'Developed Python script using Boto3 to analyze and automatically stop idle EC2 instances for cost savings.',
    slug: 'cost-optimization',
    icon: DollarSign,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
        <p className="text-lg text-gray-600 mb-8">
          Real-world cloud infrastructure and DevOps automation projects with detailed case studies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Link
                key={index}
                href={`/projects/${project.slug}`}
                className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900">{project.title}</h2>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}