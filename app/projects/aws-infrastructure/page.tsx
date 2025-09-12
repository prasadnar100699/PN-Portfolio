import { Metadata } from 'next';
import AWSInfrastructureClient from './AWSInfrastructureClient';

export const metadata: Metadata = {
  title: 'Multi-Tier AWS Infrastructure | Prasad Narkhede Portfolio',
  description: 'Scalable and highly available AWS cloud architecture for multiple client applications.',
  keywords: 'AWS Multi-App Architecture, Cloud Infrastructure, High Availability, Terraform, DevOps',
};

export default function AWSInfrastructurePage() {
  return <AWSInfrastructureClient />;
}