import { Metadata } from 'next';
import ClientIsolationClient from './ClientIsolationClient';

export const metadata: Metadata = {
  title: 'Multi-Client Account Isolation with AWS Organizations | Prasad Narkhede Portfolio',
  description: 'Multi-tenant AWS architecture using AWS Organizations for account-level isolation, security policies, and separate billing per client.',
  keywords: 'AWS Organizations, Account Isolation, IAM Policies, Cloud Security, Multi-Tenant Architecture, AWS Billing, SCPs, Cloud Compliance',
};

export default function ClientIsolationPage() {
  return <ClientIsolationClient />;
}