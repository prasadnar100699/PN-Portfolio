import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Prasad Narkhede - Cloud & DevOps Articles',
  description: 'Technical blog featuring AWS tutorials, DevOps best practices, infrastructure automation guides, and cloud architecture insights.',
  keywords: 'AWS Tutorials, DevOps Blog, Cloud Architecture, Terraform Guides, CI/CD Best Practices',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-lg text-gray-600 mb-8">
          Technical articles and insights from my journey as a Cloud & DevOps Engineer.
        </p>
        
        <div className="grid gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Recent Articles</h2>
            <p className="text-gray-600">Blog posts are being added. Check back soon for detailed tutorials on AWS, DevOps, and cloud architecture!</p>
          </div>
        </div>
      </div>
    </div>
  );
}