'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BlogSection() {
  const blogPosts = [
    {
      title: 'Fixing AWS EFS Latency: Why ElastiCache & S3 are Better for Sessions & Uploads',
      excerpt: 'Deep dive into AWS EFS performance issues and why ElastiCache and S3 provide superior solutions for session management and file uploads in production environments.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['EFS Performance', 'AWS ElastiCache', 'Cloud Optimization'],
      keywords: 'EFS Performance, AWS ElastiCache, Cloud Optimization, S3 vs EFS, Session Management',
      slug: 'aws-efs-latency-solutions',
      category: 'Cloud Architecture'
    },
    {
      title: 'How I Automated SSL Certificate Expiry Monitoring with AWS Lambda & SNS',
      excerpt: 'Step-by-step guide to building a serverless SSL certificate monitoring system that prevents unexpected certificate expirations in production.',
      date: '2024-01-08',
      readTime: '12 min read',
      tags: ['AWS Lambda', 'Serverless', 'Automation'],
      keywords: 'AWS Lambda Project, Serverless Automation, Cloud Monitoring, SSL Certificate Management',
      slug: 'ssl-certificate-monitoring',
      category: 'Automation'
    },
    {
      title: 'Lessons Learned as the First DevOps Engineer in My Company',
      excerpt: 'My journey from fresher to lead DevOps engineer, including challenges faced, solutions implemented, and career growth tips for aspiring cloud professionals.',
      date: '2023-12-20',
      readTime: '10 min read',
      tags: ['Career', 'DevOps Journey', 'Leadership'],
      keywords: 'DevOps Career, Cloud Journey, Freshers in DevOps, AWS Projects for Beginners, DevOps Leadership',
      slug: 'first-devops-engineer-lessons',
      category: 'Career'
    },
    {
      title: 'CI/CD for 30+ PHP Applications with GitLab & AWS',
      excerpt: 'Complete guide to implementing robust CI/CD pipelines for multiple PHP applications using GitLab CI and AWS services for automated testing and deployment.',
      date: '2023-12-10',
      readTime: '15 min read',
      tags: ['CI/CD', 'GitLab', 'PHP', 'AWS'],
      keywords: 'DevOps Automation, Continuous Integration, Continuous Deployment, AWS GitLab Pipeline, PHP CI/CD',
      slug: 'php-cicd-gitlab-aws',
      category: 'DevOps'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and lessons learned from real-world cloud infrastructure projects and DevOps implementations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md flex items-center"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white group"
                  onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600">
                    <strong>Keywords:</strong> {post.keywords}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
        </motion.div>
      </div>
    </section>
  );
}