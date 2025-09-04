'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Shield, 
  Code, 
  Monitor, 
  GitBranch,
  Database,
  Settings,
  Lock,
  Zap
} from 'lucide-react';

export function AboutSection() {
  const skills = [
    {
      category: 'Cloud Platforms',
      icon: Cloud,
      items: ['AWS (EC2, S3, RDS, EFS, ElastiCache)', 'Route 53', 'Lambda', 'ACM', 'CloudWatch'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      category: 'DevOps & IaC',
      icon: GitBranch,
      items: ['Terraform', 'Ansible', 'Docker', 'GitHub Actions', 'GitLab CI/CD', 'Jenkins'],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      category: 'Containers & Orchestration',
      icon: Server,
      items: ['Docker Compose', 'Kubernetes (EKS basics)', 'Container Registry'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      category: 'Monitoring & Security',
      icon: Shield,
      items: ['CloudWatch', 'WAF', 'IAM', 'Fail2Ban', 'Nginx Hardening'],
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      category: 'Programming/Scripting',
      icon: Code,
      items: ['Python', 'Bash', 'PHP basics', 'Automation Scripts'],
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      category: 'Infrastructure',
      icon: Database,
      items: ['Auto Scaling', 'Load Balancers', 'VPC Design', 'Cost Optimization'],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I started as a fresher and grew into the <strong className="text-blue-600">first Cloud & DevOps Engineer</strong> at 
                Tej IT Solutions. With no seniors to guide me, I designed AWS infrastructures, automated deployments, 
                and optimized costs from scratch.
              </p>
              <p>
                Through hands-on experience with <strong>30+ production applications</strong>, I've mastered the art of 
                building scalable, secure, and cost-effective cloud solutions that drive business growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">DevOps Philosophy</h3>
            <div className="space-y-3">
              {[
                'Automate everything',
                'Design for reliability', 
                'Optimize costs',
                'Monitor continuously',
                'Secure by default'
              ].map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{principle}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 ${skill.bgColor} rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center mb-4">
                    <Icon className={`w-6 h-6 ${skill.color} mr-3`} />
                    <h4 className="text-lg font-semibold text-gray-900">{skill.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-gray-700 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}