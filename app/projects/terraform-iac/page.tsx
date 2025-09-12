import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Infrastructure as Code with Terraform | Prasad Narkhede Portfolio',
  description: 'Automated provisioning of AWS resources including VPC, EC2, RDS, and ALB using Terraform modules.',
  keywords: 'Infrastructure as Code, Terraform AWS, Cloud Automation, Resource Provisioning, DevOps',
};

export default function TerraformIaCPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-2xl mb-8 shadow-xl">
          <h1 className="text-4xl font-bold mb-4">Infrastructure as Code with Terraform</h1>
          <p className="text-xl opacity-90">
            Automated AWS resource provisioning and management
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This project demonstrates the implementation of Infrastructure as Code (IaC) using Terraform 
            to automate the provisioning and management of AWS resources. The solution includes modular 
            Terraform code for VPC, EC2, RDS, ALB, and other AWS services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By implementing IaC, we achieved consistent, repeatable, and version-controlled infrastructure 
            deployments across multiple environments and client accounts.
          </p>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            🚧 Detailed case study coming soon! 🚧
          </p>
          <p className="text-gray-600">
            This page will include comprehensive Terraform modules, best practices, 
            implementation strategies, and real-world examples.
          </p>
        </div>
      </div>
    </div>
  );
}