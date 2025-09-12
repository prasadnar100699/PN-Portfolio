'use client';
import React from 'react';
import { motion, Variants, Transition } from 'framer-motion';
import { ArrowRight, Download, Cloud, Server, Zap, GitBranch, Box, Anchor, HardDrive } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Define transition separately to avoid TypeScript issues
  const floatTransition: Transition = {
    duration: 3,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  };

  // Animation variants for floating icons
  const iconVariants: Variants = {
    float: {
      y: [0, -10, 0],
      transition: floatTransition,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Icons */}
        <motion.div
          className="absolute left-10 top-20"
          variants={iconVariants}
          animate="float"
        >
          <Cloud className="w-12 h-12 text-blue-400 opacity-50" />
        </motion.div>
        <motion.div
          className="absolute right-20 top-40"
          variants={iconVariants}
          animate="float"
          transition={{ delay: 0.5 }}
        >
          <Server className="w-12 h-12 text-green-400 opacity-50" />
        </motion.div>
        <motion.div
          className="absolute left-40 bottom-20"
          variants={iconVariants}
          animate="float"
          transition={{ delay: 1 }}
        >
          <Zap className="w-12 h-12 text-yellow-400 opacity-50" />
        </motion.div>
        <motion.div
          className="absolute right-40 top-60"
          variants={iconVariants}
          animate="float"
          transition={{ delay: 1.5 }}
        >
          <GitBranch className="w-12 h-12 text-red-400 opacity-50" />
        </motion.div>
        <motion.div
          className="absolute left-60 top-80"
          variants={iconVariants}
          animate="float"
          transition={{ delay: 2 }}
        >
          <Box className="w-12 h-12 text-blue-500 opacity-50" />
        </motion.div>
        <motion.div
          className="absolute right-60 bottom-40"
          variants={iconVariants}
          animate="float"
          transition={{ delay: 2.5 }}
        >
          <Anchor className="w-12 h-12 text-teal-400 opacity-50" />
        </motion.div>
        <motion.div
          className="absolute left-20 bottom-60"
          variants={iconVariants}
          animate="float"
          transition={{ delay: 3 }}
        >
          <HardDrive className="w-12 h-12 text-purple-400 opacity-50" />
        </motion.div>
      </div>
      {/* Central Focus */}
      <div className="text-center z-10 px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Prasad Narkhede
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cloud & DevOps Engineer
        </motion.p>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I design, automate, and scale secure{' '}
          <span className="text-orange-500">AWS cloud architectures</span>. From CI/CD pipelines to infrastructure cost optimization, I build solutions that are{' '}
          <span className="text-orange-500">reliable, efficient, and production-ready</span>. I enjoy turning manual ops into automated pipelines and improving system observability.
        </motion.p>
        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-orange-500 text-white hover:bg-orange-600"
          >
            View Projects <ArrowRight className="ml-2" />
          </Button>
          <Button
            onClick={() => window.open('/resume/Prasad_Narkhede_AWSCloud.pdf', '_blank')}
            size="lg"
            variant="outline"
            className="border-orange-500 text-orange-600 hover:bg-orange-50"
          >
            Download Resume <Download className="ml-2" />
          </Button>
        </motion.div>
        <motion.p
          className="text-sm mt-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <strong></strong> AWS Cloud Engineer • DevOps Engineer • Infrastructure as Code • Terraform • Docker • CI/CD pipelines • Kubernetes (EKS) • Cloud Automation • Monitoring & Observability • Cost Optimization • Serverless • Python • Bash • Fresher Cloud Engineer
        </motion.p>
      </div>
      {/* Central Focus Text */}
      <motion.div
        className="absolute bottom-10 text-center w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* Mixed variations, confident but not over-claimed */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          AWS Cloud Infrastructure & DevOps Engineer
        </h2>
        <div className="mt-4 text-sm md:text-base text-gray-300 flex justify-center gap-4 flex-wrap">
          <span className="px-3 py-1 bg-white/5 rounded">Cloud Infrastructure</span>
          <span className="px-3 py-1 bg-white/5 rounded">Automation</span>
          <span className="px-3 py-1 bg-white/5 rounded">CI/CD</span>
          <span className="px-3 py-1 bg-white/5 rounded">Infrastructure as Code</span>
          <span className="px-3 py-1 bg-white/5 rounded">DevOps</span>
        </div>
      </motion.div>
    </section>
  );
}