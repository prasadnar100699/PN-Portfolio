import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Prasad Narkhede - Cloud & DevOps Articles',
  description: 'Technical blog featuring AWS tutorials, DevOps best practices, infrastructure automation guides, and cloud architecture insights.',
  keywords: 'AWS Tutorials, DevOps Blog, Cloud Architecture, Terraform Guides, CI/CD Best Practices',
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'How I Automated SSL Certificate Expiry Monitoring with AWS Lambda & SNS',
      excerpt: 'Step-by-step guide to building a serverless SSL certificate monitoring system that prevents unexpected certificate expirations in production environments.',
      tags: ['AWS Lambda', 'Serverless', 'Automation'],
      keywords: 'AWS Lambda Project, Serverless Automation, Cloud Monitoring, SSL Certificate Management',
      slug: 'ssl-certificate-monitoring',
      category: 'Automation'
    },
    {
      title: 'Fixing AWS EFS Latency: Why ElastiCache & S3 are Better for Sessions & Uploads',
      excerpt: 'Deep dive into AWS EFS performance issues and why ElastiCache and S3 provide superior solutions for session management and file uploads in production environments.',
      tags: ['EFS Performance', 'AWS ElastiCache', 'Cloud Optimization'],
      keywords: 'EFS Performance, AWS ElastiCache, Cloud Optimization, S3 vs EFS, Session Management',
      slug: 'aws-efs-latency-solutions',
      category: 'Cloud Architecture'
    },
    {
      title: 'Lessons Learned as the First DevOps Engineer in My Company',
      excerpt: 'My journey from fresher to lead DevOps engineer, including challenges faced, solutions implemented, and career growth tips for aspiring cloud professionals.',
      tags: ['Career', 'DevOps Journey', 'Leadership'],
      keywords: 'DevOps Career, Cloud Journey, Freshers in DevOps, AWS Projects for Beginners, DevOps Leadership',
      slug: 'first-devops-engineer-lessons',
      category: 'Career'
    },
    {
      title: 'CI/CD for 30+ PHP Applications with GitLab & AWS',
      excerpt: 'Complete guide to implementing robust CI/CD pipelines for multiple PHP applications using GitLab CI and AWS services for automated testing and deployment.',
      tags: ['CI/CD', 'GitLab', 'PHP', 'AWS'],
      keywords: 'DevOps Automation, Continuous Integration, Continuous Deployment, AWS GitLab Pipeline, PHP CI/CD',
      slug: 'php-cicd-gitlab-aws',
      category: 'DevOps'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technical Blog</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and lessons learned from real-world cloud infrastructure projects and DevOps implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
                >
                  Read Article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}