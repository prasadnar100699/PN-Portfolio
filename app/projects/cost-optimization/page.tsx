import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Cost Optimization Tool | Prasad Narkhede Portfolio',
  description: 'Python script using Boto3 to analyze and automatically stop idle EC2 instances for cost savings.',
  keywords: 'Cloud Cost Optimization, AWS Boto3, Python Automation, EC2 Management, FinOps',
};

export default function CostOptimizationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-green-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white p-8 rounded-2xl mb-8 shadow-xl">
          <h1 className="text-4xl font-bold mb-4">Cloud Cost Optimization Tool</h1>
          <p className="text-xl opacity-90">
            Automated cost savings through intelligent resource management
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This project showcases a Python-based cost optimization tool that uses AWS Boto3 to analyze 
            resource utilization and automatically manage idle EC2 instances. The tool identifies 
            underutilized resources and implements cost-saving measures while maintaining operational requirements.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The solution includes automated reporting, policy-based resource management, 
            and integration with AWS Cost Explorer for comprehensive cost analysis and optimization.
          </p>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            🚧 Detailed case study coming soon! 🚧
          </p>
          <p className="text-gray-600">
            This page will include the complete Python automation script, cost analysis reports, 
            implementation strategies, and measurable cost savings achieved.
          </p>
        </div>
      </div>
    </div>
  );
}