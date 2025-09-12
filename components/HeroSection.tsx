'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Cloud, Server, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Prasad Narkhede
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 mb-6"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-700">
                Cloud & DevOps Engineer
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">AWS</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Infrastructure Automation</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">CI/CD</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              I specialize in designing, automating, and scaling secure{' '}
              <span className="text-blue-600 font-semibold">AWS cloud architectures</span>. 
              From CI/CD pipelines to infrastructure cost optimization, I build solutions that are{' '}
              <span className="text-orange-600 font-semibold">reliable, efficient, and production-ready</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white group"
              >
                View Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => window.open('/resume/Prasad_Narkhede_AWSCloud.pdf', '_blank')}
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 text-sm text-gray-500 text-center lg:text-left"
            >
              <p>
                <strong>Keywords:</strong> AWS Cloud Engineer • DevOps Engineer • Terraform • 
                Docker • CI/CD pipelines • Kubernetes • Cloud Automation • Infrastructure as Code
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Animated Background */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl opacity-20"
              />

              {/* Floating Icons */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-8 left-8 p-4 bg-white rounded-2xl shadow-lg"
              >
                <Cloud className="w-8 h-8 text-blue-600" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
                className="absolute top-20 right-12 p-4 bg-white rounded-2xl shadow-lg"
              >
                <Server className="w-8 h-8 text-orange-600" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2
                }}
                className="absolute bottom-16 left-16 p-4 bg-white rounded-2xl shadow-lg"
              >
                <Zap className="w-8 h-8 text-yellow-500" />
              </motion.div>

              {/* Central Focus */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200"
                >
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">AWS</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Infrastructure</h3>
                  <p className="text-gray-600">Automation Expert</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}