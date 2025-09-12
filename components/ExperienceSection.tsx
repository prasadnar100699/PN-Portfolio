'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp, Award, Zap } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      company: 'Tej IT Solutions',
      position: 'Cloud & DevOps Engineer',
      period: 'Feb 2025 - Present',
      location: 'Pune, India',
      type: 'Full-Time Role',
      achievements: [
        'Implemented GitLab CE for version control and CI/CD, introducing DevOps culture in an organization with no prior automation',
        'Migrated from manual releases to automated CI/CD pipelines using GitLab, Jenkins, and Docker, reducing release time by 70%',
        'Architected AWS infrastructure for client projects using EC2, ALB, Auto Scaling, RDS, ACM, and Route 53',
        'Implemented multi-client account isolation with AWS Organizations for secure account creation and billing separation',
        'Enforced IAM policies, Security Groups, and NACLs with CloudWatch for monitoring and cost optimization'
      ],
      keywords: 'Cloud Architecture, DevOps Transformation, CI/CD Automation, AWS Organizations, Cost Optimization, Security Policies',
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      company: 'Exlearn Technologies',
      position: 'Cloud & DevOps Intern',
      period: 'Oct 2024 - Dec 2024',
      location: 'Pune, India',
      type: 'Internship',
      achievements: [
        'Built Jenkins pipelines for automated deployments of containerized services on AWS EC2',
        'Configured Prometheus and Grafana for infrastructure monitoring and alerting',
        'Gained hands-on experience with Docker, Linux administration, and AWS core services'
      ],
      keywords: 'Jenkins Pipelines, Infrastructure Monitoring, Docker, Linux Administration, AWS Basics',
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