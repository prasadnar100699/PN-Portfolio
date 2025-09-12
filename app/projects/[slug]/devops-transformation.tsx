import { Metadata } from 'next';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export const metadata: Metadata = {
  title: 'Company-Wide DevOps Transformation | Prasad Narkhede Portfolio',
  description: 'Implementation of GitLab CE and Mattermost EE to establish DevOps practices and automate deployments.',
  keywords: 'DevOps Transformation, CI/CD Pipelines, GitLab Implementation',
};

const projectContent = `# Company-Wide DevOps Transformation

## Project Overview
Introduced DevOps culture in an organization with no prior automation by implementing GitLab CE for version control and CI/CD, and Mattermost EE for team collaboration. This replaced manual deployments with automated pipelines, improving release efficiency by 70%.

## Key Components
- GitLab CE: Version control, CI/CD pipelines
- Mattermost EE: Team communication and collaboration
- Jenkins/Docker integration for automated builds and deployments

## Achievements
- Reduced release time by 70%
- Enabled team collaboration
- Introduced automated testing and deployment

## Code Example
\`\`\`yaml
# Example GitLab CI/CD pipeline
stages:
  - build
  - test
  - deploy

build:
  stage: build
  script:
    - docker build -t app:latest .
\`\`\`

## Lessons Learned
- Importance of change management in DevOps adoption
- Integration of tools for seamless workflow

Keywords: DevOps Transformation, CI/CD, GitLab, Mattermost, Automation`;

export default function DevOpsTransformationPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Company-Wide DevOps Transformation</h1>
        <p className="text-lg text-gray-600 mb-8">Implementation of GitLab CE and Mattermost EE to establish DevOps practices and automate deployments.</p>
        <MarkdownRenderer content={projectContent} />
      </div>
    </div>
  );
}