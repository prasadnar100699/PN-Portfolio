'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp, Award, Users, Zap } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      company: 'Tej IT Solutions',
      position: 'Cloud & DevOps Engineer',
      period: '2023 - Present',
      location: 'Remote',
      type: 'Current Role',
      achievements: [
        'Migrated 30+ PHP & Node.js applications from third-party vendor to AWS cloud infrastructure',
        'Designed multi-app architecture with EC2, Auto Scaling, ALB, EFS, RDS, and ElastiCache for high availability',
        'Achieved 40% AWS cost savings through reserved instances, auto scaling policies, and CPU credits monitoring',
        'Built comprehensive CI/CD pipelines for PHP applications using GitLab & GitHub Actions',
        'Automated SSL certificate renewal and EC2 scheduling with AWS Lambda & EventBridge',
        'Implemented infrastructure as code using Terraform for consistent, repeatable deployments'
      ],
      keywords: 'Cloud Migration, AWS Solutions Architect, Infrastructure Optimization, Dockerization, Serverless Automation, Cost Management (FinOps)',
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      company: 'Exlearn Technologies',
      position: 'Cloud Intern',
      period: '2022 - 2023',
      location: 'Hybrid',
      type: 'Internship',
      achievements: [
        'Assisted in Terraform-based Infrastructure as Code deployments for multiple environments',
        'Worked on automated backup strategies and S3 lifecycle policies for cost optimization',
        'Gained hands-on experience in Linux server hardening and continuous monitoring setup',
        'Collaborated on container orchestration projects using Docker and basic Kubernetes concepts'
      ],
      keywords: 'Infrastructure as Code, Cloud Learning, Terraform Basics, Linux Administration, Cloud Security',
      icon: Award,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-orange-500 to-blue-600"></div>

          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline Node */}
                <div className={`absolute top-6 ${
                  index % 2 === 0 ? 'md:-right-4' : 'md:-left-4'
                } left-2 md:left-auto w-8 h-8 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center z-10`}>
                  <Icon className="w-4 h-4 text-blue-600" />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`${exp.bgColor} p-8 rounded-2xl shadow-lg border border-gray-200 ml-8 md:ml-0 hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex flex-col md:items-start mb-4">
                    <span className={`inline-block px-3 py-1 ${exp.color} bg-white rounded-full text-sm font-medium mb-3`}>
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <h4 className="text-lg font-semibold text-gray-700 mt-1">{exp.company}</h4>
                    
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                        className="text-gray-700 flex items-start"
                      >
                        <Zap className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-4 p-4 bg-white/70 rounded-xl">
                    <p className="text-xs text-gray-600">
                      <strong>Keywords:</strong> {exp.keywords}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}