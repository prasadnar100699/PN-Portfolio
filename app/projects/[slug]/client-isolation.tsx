import { Metadata } from 'next';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export const metadata: Metadata = {
  title: 'Multi-Client Account Isolation | Prasad Narkhede Portfolio',
  description: 'Secure multi-tenant architecture using AWS Organizations and IAM.',
  keywords: 'AWS Organizations, Account Isolation, IAM Policies',
};

const projectContent = `# Multi-Client Account Isolation

## Project Overview
Implemented AWS Organizations to create isolated accounts for multiple clients, enforcing security policies and maintaining separate billing while ensuring compliance and least privilege access.

## Key Components
- AWS Organizations for account management
- IAM policies for access control
- Service Control Policies (SCPs)
- Consolidated billing
- Security best practices

## Implementation Details
- Created organizational units (OUs) for different clients
- Applied SCPs to restrict actions
- Set up IAM roles for cross-account access
- Configured billing alerts per account

## Code Example
\`\`\`json
// Example IAM Policy
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:Describe*"
      ],
      "Resource": "*"
    }
  ]
}
\`\`\`

## Benefits
- Improved security isolation
- Simplified billing management
- Scalable multi-tenant setup

Keywords: AWS Organizations, Multi-Tenant, IAM, Cloud Security`;

export default function ClientIsolationPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Multi-Client Account Isolation</h1>
        <p className="text-lg text-gray-600 mb-8">Secure multi-tenant architecture using AWS Organizations and IAM.</p>
        <MarkdownRenderer content={projectContent} />
      </div>
    </div>
  );
}