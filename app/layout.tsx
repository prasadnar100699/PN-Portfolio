import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prasad Narkhede - Cloud & DevOps Engineer | AWS Solutions Architect',
  description: 'Cloud & DevOps Engineer specializing in AWS infrastructure, Terraform automation, CI/CD pipelines, and cloud cost optimization. Expert in Docker, Kubernetes, and Infrastructure as Code.',
  keywords: 'AWS Cloud Engineer, DevOps Engineer, Terraform, Docker, CI/CD, Kubernetes, Infrastructure as Code, Cloud Automation, AWS Solutions Architect',
  authors: [{ name: 'Prasad Narkhede' }],
  openGraph: {
    title: 'Prasad Narkhede - Cloud & DevOps Engineer',
    description: 'Specialized in AWS cloud architectures, infrastructure automation, and DevOps best practices',
    url: 'https://prasadnarkhede.dev',
    siteName: 'Prasad Narkhede Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prasad Narkhede - Cloud & DevOps Engineer',
    description: 'AWS Cloud Engineer specializing in infrastructure automation and DevOps best practices',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}