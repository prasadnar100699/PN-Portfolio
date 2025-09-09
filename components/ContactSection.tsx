'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, Send, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mvgqyevv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert('Thank you for your message! I\'ll get back to you soon.');
      } else {
        setSubmitStatus('error');
        alert('There was an error submitting your message. Please try again later.');
      }
    } catch (error) {
      setSubmitStatus('error');
      alert('There was an error submitting your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'narkhedeprasad8@gmail.com',
      href: 'mailto:narkhedeprasad8@gmail.com',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/prasadnarkhede',
      href: 'https://linkedin.com/in/prasad-narkhede-b14688164',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/prasadnarkhede',
      href: 'https://github.com/prasadnar100699',
      color: 'text-gray-800',
      bgColor: 'bg-gray-50'
    },
    {
      icon: FileText,
      label: 'Resume',
      value: 'Download PDF',
      href: '/resume/Prasad_Narkhede_AWSCloud.pdf',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your next cloud infrastructure project? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="text-gray-700 font-medium">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                  placeholder="Project discussion, consultation, etc."
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell me about your project requirements, timeline, and goals..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
                disabled={isSubmitting}
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, consulting projects, or sharing insights
              about cloud infrastructure and DevOps best practices. Reach me in Pune, Maharashtra, India, or via phone at +91 8007804952.
            </p>

            <div className="space-y-6">
              {contactLinks.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center p-4 ${contact.bgColor} rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 group`}
                  >
                    <Icon className={`w-6 h-6 ${contact.color} mr-4 group-hover:scale-110 transition-transform`} />
                    <div>
                      <h4 className="font-semibold text-gray-900">{contact.label}</h4>
                      <p className={`text-sm ${contact.color}`}>{contact.value}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-white"
            >
              <h4 className="font-bold mb-2">Available for:</h4>
              <ul className="space-y-1 text-sm">
                <li>• AWS Cloud Architecture Design</li>
                <li>• DevOps Consulting & Implementation</li>
                <li>• Infrastructure Cost Optimization</li>
                <li>• CI/CD Pipeline Development</li>
                <li>• Cloud Migration Projects</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}