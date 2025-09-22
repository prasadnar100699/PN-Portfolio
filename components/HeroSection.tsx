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

  // Define transition for floating icons
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 sm:py-16 md:py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Icons - Hidden on smaller screens, adjusted positions */}
        <motion.div
          className="hidden sm:block absolute left-4 sm:left-6 md:left-10 top-16 sm:top-20"
          variants={iconVariants}
          animate="float"
        >
          <Cloud className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400 opacity-50" />
        </motion.div>
        <motion.div
          className="hidden sm:block absolute right-4 sm:right-6 md:right-20 top-32 sm:top-40"
          variants={iconVariants}
          animate="float"
          transition={{ delay: 0.5 }}
        >
          <Server className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-400 opacity-50" />
        </motion.div>
        <motion.div
          className="hidden md:block absolute left-8 md:left-40 bottom-16 md:bottom-20"
          variants={iconVariants}
          animate="float"
          transition={{ delay: 1 }}
        >
          <Zap className="w-8 h-8 md:w-12 md:h-12 text-yellow-400 opacity-50" />
        </motion.div>
        <motion.div
          className="hidden md:block absolute right-8 md:right-40 top-48 md:top-60"
          variants={iconVariants}
          animate="float"
          transition={{ delay: 1.5 }}
        >
          <GitBranch className="w-8 h-8 md:w-12 md:h-12 text-red-400 opacity-50" />
        </motion.div>
        <motion.div
          className="hidden lg:block absolute left-12 lg:left-60 top-64 lg:top-80"
          variants={iconVariants}
          animate="float"
          transition={{ delay: 2 }}
        >
          <Box className="w-8 h-8 lg:w-12 lg:h-12 text-blue-500 opacity-50" />
        </motion.div>
        <motion.div
          className="hidden lg:block absolute right-12 lg:right-60 bottom-32 lg:bottom-40"
          variants={iconVariants}
          animate="float"
          transition={{ delay: 2.5 }}
        >
          <Anchor className="w-8 h-8 lg:w-12 lg:h-12 text-teal-400 opacity-50" />
        </motion.div>
        <motion.div
          className="hidden sm:block absolute left-4 sm:left-20 bottom-48 sm:bottom-60"
          variants={iconVariants}
          animate="float"
          transition={{ delay: 3 }}
        >
          <HardDrive className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-purple-400 opacity-50" />
        </motion.div>
      </div>
      {/* Central Focus */}
      <div className="text-center z-10 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Prasad Narkhede
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-6 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cloud & DevOps Engineer
        </motion.p>
        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I design, automate, and scale secure{' '}
          <span className="text-orange-500 font-semibold">AWS cloud architectures</span>. From CI/CD pipelines to infrastructure cost optimization, I build solutions that are{' '}
          <span className="text-orange-500 font-semibold">reliable, efficient, and production-ready</span>. I enjoy turning manual ops into automated pipelines and improving system observability.
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
            className="bg-orange-500 text-white hover:bg-orange-600 text-base sm:text-lg px-6 sm:px-8"
          >
            View Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            onClick={() => window.open('/resume/Prasad_Narkhede_AWSCloud.pdf', '_blank')}
            size="lg"
            variant="outline"
            className="border-orange-500 text-orange-600 hover:bg-orange-50 text-base sm:text-lg px-6 sm:px-8"
          >
            Download Resume <Download className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
        <motion.p
          className="text-sm sm:text-base md:text-lg mt-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          AWS Cloud Engineer • DevOps Engineer • Infrastructure as Code • Terraform • Docker • CI/CD pipelines • Kubernetes (EKS) • Cloud Automation • Monitoring & Observability • Cost Optimization • Serverless • Python • Bash • Fresher Cloud Engineer
        </motion.p>
      </div>
      {/* Central Focus Text */}
      <motion.div
        className="absolute bottom-8 sm:bottom-10 text-center w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="mt-4 text-xs sm:text-sm md:text-base text-gray-300 flex justify-center gap-2 sm:gap-4 flex-wrap">
          <span className="px-2 sm:px-3 py-1 bg-white/5 rounded">Cloud Infrastructure</span>
          <span className="px-2 sm:px-3 py-1 bg-white/5 rounded">Automation</span>
          <span className="px-2 sm:px-3 py-1 bg-white/5 rounded">CI/CD</span>
          <span className="px-2 sm:px-3 py-1 bg-white/5 rounded">Infrastructure as Code</span>
          <span className="px-2 sm:px-3 py-1 bg-white/5 rounded">DevOps</span>
        </div>
      </motion.div>
    </section>
  );
}