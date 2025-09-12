import { Metadata } from 'next';
import DevOpsTransformationClient from './DevOpsTransformationClient';

export const metadata: Metadata = {
  title: 'Company-Wide DevOps Transformation | Prasad Narkhede Portfolio',
  description: 'Implementation of GitLab CE and Mattermost EE to introduce DevOps culture, replacing manual deployments with automated CI/CD pipelines.',
  keywords: 'DevOps Transformation, GitLab Implementation, CI/CD Pipelines, Mattermost Setup, Team Collaboration Tools, Automated Deployments, AWS EC2 ASG, Dockerized CI/CD, S3 File Security, Infrastructure as Code, Cloud Automation, Self-Hosted DevOps',
};

export default function DevOpsTransformationPage() {
  return <DevOpsTransformationClient />;
}