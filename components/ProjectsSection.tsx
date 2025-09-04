'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"; // assuming shadcn/ui buttons

export function ProjectsSection() {
  const projects = [
    {
      title: 'AWS Multi-App Architecture with Auto Scaling & High Availability',
      description:
        'Comprehensive cloud infrastructure design for hosting multiple client applications with enterprise-grade reliability, security, and performance.',
      documentLink: 'https://docs.example.com/aws-architecture',
      githubLink: 'https://github.com/yourusername/aws-architecture',
    },
    {
      title: 'CI/CD Pipeline with GitHub Actions & Terraform',
      description:
        'Automated infrastructure provisioning and deployment pipeline for scalable, reliable cloud services.',
      documentLink: 'https://docs.example.com/cicd-pipeline',
      githubLink: 'https://github.com/yourusername/cicd-pipeline',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real-world cloud infrastructure and DevOps automation projects with
            detailed case studies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 flex-grow">{project.description}</p>
              <div className="mt-6 flex space-x-4">
                <Button
                  asChild
                  variant="default"
                  className="rounded-xl shadow-md"
                >
                  <a href={project.documentLink} target="_blank" rel="noopener noreferrer">
                    Documentation
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl shadow-md"
                >
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub Repo
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
