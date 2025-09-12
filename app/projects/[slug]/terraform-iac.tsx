import { Metadata } from 'next';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export const metadata: Metadata = {
  title: 'Infrastructure as Code with Terraform | Prasad Narkhede Portfolio',
  description: 'Automated AWS resource provisioning using Terraform.',
  keywords: 'Terraform IaC, AWS Automation, Infrastructure Provisioning',
};

const projectContent = `# Infrastructure as Code with Terraform

## Project Overview
Developed Terraform modules to automate the provisioning of AWS infrastructure including VPC, EC2 instances, RDS databases, and Application Load Balancers.

## Key Features
- Modular design for reusability
- State management with S3 backend
- Variable-driven configurations
- Provider versioning
- Output management

## Code Example
\`\`\`hcl
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "main-vpc"
  }
}

resource "aws_subnet" "public" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
}
\`\`\`

## Best Practices
- Use workspaces for environments
- Implement remote state
- Apply linting with tflint

Keywords: Terraform, IaC, AWS Automation, Cloud Provisioning`;

export default function TerraformIaCPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Infrastructure as Code with Terraform</h1>
        <p className="text-lg text-gray-600 mb-8">Automated AWS resource provisioning using Terraform.</p>
        <MarkdownRenderer content={projectContent} />
      </div>
    </div>
  );
}