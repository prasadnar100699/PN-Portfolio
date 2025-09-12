import { Metadata } from 'next';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export const metadata: Metadata = {
  title: 'Cloud Cost Optimization Tool | Prasad Narkhede Portfolio',
  description: 'Python-based tool for AWS cost management.',
  keywords: 'Cloud Cost Tool, AWS Optimization, Python Boto3',
};

const projectContent = `# Cloud Cost Optimization Tool

## Project Overview
Developed a Python script using Boto3 to identify idle EC2 instances based on metrics and automatically stop them to reduce costs.

## Features
- Analyze CPU utilization
- Check network activity
- Age-based filtering
- Dry-run mode
- Reporting to S3

## Code Example
\`\`\`python
import boto3

ec2 = boto3.client('ec2')

def stop_idle_instances():
    instances = ec2.describe_instances()
    for res in instances['Reservations']:
        for inst in res['Instances']:
            if inst['State']['Name'] == 'running':
                # Check metrics and stop if idle
                ec2.stop_instances(InstanceIds=[inst['InstanceId']])

stop_idle_instances()
\`\`\`

## Results
- Automated cost savings
- Custom thresholds
- Integration with CloudWatch

Keywords: AWS Cost Optimization, Boto3 Python, EC2 Automation, FinOps`;

export default function CostOptimizationPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cloud Cost Optimization Tool</h1>
        <p className="text-lg text-gray-600 mb-8">Python-based tool for AWS cost management.</p>
        <MarkdownRenderer content={projectContent} />
      </div>
    </div>
  );
}