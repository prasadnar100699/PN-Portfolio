import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Prasad Narkhede - AWS & DevOps Portfolio',
  description: 'Showcase of real-world cloud infrastructure projects, AWS architectures, and DevOps automation solutions.',
  keywords: 'AWS Projects, DevOps Portfolio, Cloud Infrastructure, Terraform Projects, CI/CD Pipelines',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
        <p className="text-lg text-gray-600 mb-8">
          Real-world cloud infrastructure and DevOps automation projects with detailed case studies.
        </p>
        
        <div className="grid gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600">Detailed project case studies are being added. Navigate from the main page to view available projects!</p>
          </div>
        </div>
      </div>
    </div>
  );
}