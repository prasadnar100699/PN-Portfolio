import { Metadata } from 'next';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Prasad Narkhede - AWS & DevOps Engineer',
  description: 'Portfolio of Prasad Narkhede, showcasing AWS cloud infrastructure and DevOps projects.',
  keywords: 'AWS, DevOps, Cloud Infrastructure, Terraform, CI/CD',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}